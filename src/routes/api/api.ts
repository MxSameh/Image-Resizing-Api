import express, { application } from 'express';
import images from './images';

const api = express.Router();

api.get('/',(req,res)=>{
  res.send('Hello from api');
})

api.use('/images',images)

export default api