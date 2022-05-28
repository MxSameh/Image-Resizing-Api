import express from 'express';
import api from './api/api';

const root = express.Router();

root.get('/', (req: express.Request, res: express.Response): void => {
  res.send('WELCOME TO MY PROJECT');
});

root.use('/api', api);

export default root;
