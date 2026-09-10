const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');
const { globSync } = require('glob');

const srcDir = __dirname;
const distDir = path.join(__dirname, 'dist');
const isDev = process.argv.includes('--dev');

function postBuildTasks() {
    console.log(`${isDev ? new Date().toLocaleTimeString() + ':' : ''} Build finished successfully.`);
}

if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

(async () => {
    const buildOptions = {
        entryPoints: [
            path.join(srcDir, 'js/front.js'),
            path.join(srcDir, 'js/back.js')
        ],
        bundle: true,
        outdir: path.join(distDir),
        assetNames: '[name]',
        loader: {
            '.css': 'css',
            '.woff2': 'file',
            '.svg': 'file',
            '.json': 'file'
        },
        external: ['stockfish'],
    };

    try {
        if (isDev) {
            const context = await esbuild.context({
                ...buildOptions,
                plugins: [{
                    name: 'post-build-plugin',
                    setup(build) {
                        build.onEnd(result => {
                            if (result.errors.length > 0) {
                                console.log(`Build failed with ${result.errors.length} errors.`);
                            } else {
                                postBuildTasks();
                            }
                        });
                    }
                }]
            });
            await context.watch();
            console.log('Watching for changes...');
        } else {
            await esbuild.build(buildOptions);
            postBuildTasks();
        }
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
