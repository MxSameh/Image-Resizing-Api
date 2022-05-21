import express from 'express';
import resize from '../../utilities/resize';
const images = express.Router();

images.get('/', (req: express.Request, res: express.Response): void => {
  const filename: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string) as number;
  const height: number = parseInt(req.query.height as string) as number;
  // { filename, width, height } = req.query;

  if (width <= 0 || height <= 0 || !filename || !width || !height) {
    res.send(
      'Make sure URL parameters (filename, width, height) are given a value'
    );
    return;
  }

  resize(filename as string, width, height)
    .then((image) => {
      res.sendFile(image as string);
    })
    .catch((err) => {
      res.send(err);
    });
});

export default images;
