"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("../../utilities/resize"));
const images = express_1.default.Router();
images.get('/', (req, res) => {
    const { filename, width, height } = req.query;
    (0, resize_1.default)(filename, parseInt(width), parseInt(height))
        .then((image) => {
        res.sendFile(image);
    })
        .catch((err) => {
        res.send(err);
    });
});
exports.default = images;
