import express from 'express';
import root from './routes';
const app = express();
const port = 3000;

app.use('/',root);

// app.use(express.static('assets/full'))

app.listen(port,()=>{
  console.log('server started on port 3000');
})