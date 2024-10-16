"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startLooger)();
setInterval(() => {
    store_1.GameManager.getInstance().addGame(Date.now().toString());
}, 5000);
