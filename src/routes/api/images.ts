import express from 'express';
import resize from '../../utilities/resize';
const images = express.Router();

images.get('/', (req, res) => {
  const { filename, width, height } = req.query;
  resize(
    filename as string,
    parseInt(width as string),
    parseInt(height as string)
  )
    .then((image) => {
      res.sendFile(image as string);
    })
    .catch((err) => {
      res.send(err);
    });
});

export default images;
