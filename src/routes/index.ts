import express from 'express';
import api from './api/api';

const root = express.Router();

root.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello from the /');
});

root.use('/api', api);

export default root;
