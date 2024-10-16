"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLooger = void 0;
const store_1 = require("./store");
function startLooger() {
    setInterval(() => {
        console.log(store_1.GameManager.getInstance().log());
    }, 5000);
}
exports.startLooger = startLooger;
