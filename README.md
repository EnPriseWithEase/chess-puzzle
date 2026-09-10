# Chess Puzzle

An interactive chess template for Anki with a refactored, modular architecture.

## Project Structure

```
chess-puzzle/
├── front.html          # Front side card template
├── back.html           # Back side card template
├── css/
│   └── style.css       # Styling
├── js/
│   ├── front.js        # Front entry point
│   ├── back.js         # Back entry point
│   ├── common/         # Shared utilities
│   │   ├── config.js
│   │   ├── state.js
│   │   ├── audio.js
│   │   ├── board.js
│   │   ├── pgn.js
│   │   ├── arrows.js
│   │   └── promotion.js
│   ├── puzzle/         # Puzzle mode
│   │   └── puzzle.js
│   └── viewer/         # Viewer mode
│       └── viewer.js
├── assets/
│   └── nags.json       # Chess notation annotations
├── build.js            # Build configuration
└── package.json
```

## Installation

```bash
npm install
```

## Building

```bash
# Production build
npm run build

# Development (watch mode)
npm run dev
```

## Features

- Modular architecture
- Puzzle and viewer modes
- PGN support
- Interactive board with Chessground
- Audio effects
- Configurable via URL parameters

## License

GPL-3.0
