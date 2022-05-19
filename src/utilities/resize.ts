import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const imagesPath = path.normalize(__dirname + '../../../assets');

// RESIZING FUNCTION
//
const resize = (filename: string, width: number, height: number) => {
  const originalImage = `${imagesPath}/full/${filename}.jpg`;
  const outputImage = `${imagesPath}/thumb/${filename}${width}x${height}_thumb.jpg`;

  return new Promise((res, rej) => {
    if (!fs.existsSync(originalImage)) {
      rej(
        `Wrong Image Name please make sure that the image name is correct and it's available in the assets/full directory`
      );
    } else if (fs.existsSync(outputImage)) {
      res(outputImage);
    } else {
      sharp(originalImage)
        .resize(width, height)
        .toFile(`${outputImage}`, () => {
          res(outputImage);
        });
    }
  });
};
//
// END OF RESIZING FUNCTION

export default resize;
