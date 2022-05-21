import express from 'express';
import root from './routes';
const app = express();
const port = 3200;

app.use('/', root);

app.listen(port, (): void => {
  console.log(`server started on port ${port}`);
});
