"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("../../utilities/resize"));
const images = express_1.default.Router();
images.get('/', (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    // { filename, width, height } = req.query;
    if (width <= 0 || height <= 0 || !filename || !width || !height) {
        res
            .status(404)
            .send('Make sure URL parameters (filename, width, height) are given a value');
        return;
    }
    (0, resize_1.default)(filename, width, height)
        .then((image) => {
        res.sendFile(image);
    })
        .catch((err) => {
        res.status(404).send(err);
    });
});
exports.default = images;
