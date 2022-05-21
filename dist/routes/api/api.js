"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./images"));
const api = express_1.default.Router();
api.get('/', (req, res) => {
    res.send('Hello from api');
});
api.use('/images', images_1.default);
exports.default = api;
