# TypeScript Singleton Pattern: Game Manager Example

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A practical demonstration of the Singleton design pattern implemented in TypeScript using a Game Manager example. This implementation showcases how to manage game states and moves in a centralized, thread-safe manner.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Pattern Explanation](#pattern-explanation)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/typescript-singleton-pattern.git

# Navigate to the project directory
cd typescript-singleton-pattern

# Install dependencies
npm install

# Run the example
npm run start
```

## Usage

```typescript
// Import the GameManager
import { GameManager } from "./GameManager";

// Get the singleton instance
const gameManager = GameManager.getInstance();

// Create a new game
gameManager.addGame("game123");

// Add moves to the game
gameManager.addMove("game123", "e4");
gameManager.addMove("game123", "e5");

// Log game state
gameManager.log();
```

## Pattern Explanation

The Singleton pattern ensures a class has only one instance while providing global access to that instance. Our GameManager implementation demonstrates this through:

```typescript
interface Game {
  id: string;
  whiteplayer: string;
  blackplayer: string;
  moves: string[];
}

export class GameManager {
  private games: Game[] = [];
  private static instance: GameManager;

  static getInstance() {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }
  // ... rest of the implementation
}
```

### Key Features

- Single instance guaranteed through private constructor
- Lazy initialization
- Thread-safe implementation
- Centralized game state management
- Consistent access point across the application

### When to Use

- Managing shared resources
- Coordinating game states
- Ensuring data consistency
- Controlling access to shared resources

### When to Avoid

- When testing isolation is required
- If multiple instances might be needed in the future
- When component-specific state is sufficient
- If dependency injection is preferred

## Project Structure

```
├── src/
│   ├── GameManager.ts    # Singleton implementation
│   ├── interfaces/       # Type definitions
│   │   └── Game.ts
│   └── index.ts         # Entry point
├── tests/               # Test files
├── package.json
└── README.md
```

## Best Practices

1. **Thread Safety**

   ```typescript
   static getInstance() {
     if (!GameManager.instance) {
       GameManager.instance = new GameManager();
     }
     return GameManager.instance;
   }
   ```

2. **Private Constructor**

   ```typescript
   private constructor() {
     this.games = [];
   }
   ```

3. **State Management**
   ```typescript
   private games: Game[] = [];
   ```

## Benefits

- Guaranteed single instance
- Global state management
- Lazy initialization
- Memory efficient
- Consistent behavior

## Modern Considerations

- Consider using dependency injection for better testing
- Evaluate state management libraries for complex applications
- Be aware of thread safety in concurrent environments
- Document usage patterns clearly

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Built with ❤️ using TypeScript
