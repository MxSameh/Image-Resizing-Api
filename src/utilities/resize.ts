import path from 'path'
import fs from 'fs'
import sharp from 'sharp';

const imagesPath = path.normalize(__dirname+'../../../assets')

// RESIZING FUNCTION 
//
const resize = (filename:string,width:number,height:number) => {
  let originalImage = `${imagesPath}/full/${filename}.jpg`
  let outputImage = `${imagesPath}/thumb/${filename}${width}x${height}_thumb.jpg`

  return new Promise((res,rej)=>{
    if(fs.existsSync(outputImage)){
      res(outputImage)
      }
    else{
      sharp(originalImage)
        .resize(width,height)
        .toFile(`${outputImage}`,(err,info)=>{
          res(outputImage)
        })
      }
    })
  }
//
// END OF RESIZING FUNCTION

export default resize