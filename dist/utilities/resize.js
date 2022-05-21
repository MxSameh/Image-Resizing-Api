"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const imagesPath = path_1.default.normalize(__dirname + '../../../assets');
// RESIZING FUNCTION
//
const resize = (filename, width, height) => {
    const originalImage = `${imagesPath}/full/${filename}.jpg`;
    const outputImage = `${imagesPath}/thumb/${filename}${width}x${height}_thumb.jpg`;
    return new Promise((res, rej) => {
        if (!fs_1.default.existsSync(originalImage)) {
            rej(`Wrong Image Name please make sure that the image name is correct and it's available in the assets/full directory`);
        }
        else if (fs_1.default.existsSync(outputImage)) {
            res(outputImage);
        }
        else {
            (0, sharp_1.default)(originalImage)
                .resize(width, height)
                .toFile(`${outputImage}`, () => {
                res(outputImage);
            });
        }
    });
};
//
// END OF RESIZING FUNCTION
exports.default = resize;
