import express from 'express';
import images from './images';

const api = express.Router();

api.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello from api');
});

api.use('/images', images);

export default api;
