"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    addMove(gameID, move) {
        console.log(`Adding Move ${move} to game ${gameID}`);
        const game = this.games.find((g) => g.id === gameID);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameID) {
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
exports.GameManager = GameManager;
