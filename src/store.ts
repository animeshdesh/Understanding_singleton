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
  addMove(gameID: string, move: string) {
    console.log(`Adding Move ${move} to game ${gameID}`);
    const game = this.games.find((g) => g.id === gameID);
    game?.moves.push(move);
  }

  addGame(gameID: string) {
    const game = {
      id: gameID,
      whiteplayer: "taylor",
      blackplayer: "Marcus",
      moves: [],
    };
    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}
