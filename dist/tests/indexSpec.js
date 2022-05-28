"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const resize_1 = __importDefault(require("../utilities/resize"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const request = (0, supertest_1.default)(server_1.default);
describe('Server API', () => {
    // TESTING THE ROOT END POINT RESPONSE
    it('Test endpoint response', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.text).toBe('WELCOME TO MY PROJECT');
    }));
    // TESTING THE ROOT END POINT STATUS
    it('Test endpoint status', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
    // TESTING THE RESIZING FUNCTION
    it('Testing resizing function', () => __awaiter(void 0, void 0, void 0, function* () {
        // Image parameters
        const fileName = 'fjord';
        const width = 300;
        const height = 300;
        const outputImagePath = yield (0, resize_1.default)(fileName, width, height);
        const exists = fs_1.default.existsSync(outputImagePath);
        expect(exists).toEqual(true);
        // Delete created image
        fs_1.default.unlinkSync(outputImagePath);
    }));
    // TESTING SUCCESSFULL IMAGE API ENDPOINT
    it('Successfull call to the image api', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=fjord&width=300&height=300');
        expect(response.status).toBe(200);
        // Delete the created image
        const outputImagePath = path_1.default.normalize(__dirname + `../../../assets/thumb/fjord300x300_thumb.jpg`);
        fs_1.default.unlinkSync(outputImagePath);
    }));
    // TESTING FAILURE IMAGE API ENDPOINT (wrong image name)
    it('Failure call to the image api', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=name&width=200&height=200');
        expect(response.status).toBe(404);
    }));
    // TESTING FAILURE IMAGE API ENDPOINT (missing parameter)
    it('Failure call to the image api', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=ford&width=200');
        expect(response.status).toBe(404);
    }));
});
