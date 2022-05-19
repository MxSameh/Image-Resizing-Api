# Image-Resizing-Api
Devloped by : Mohamed Sameh
---
## How API this API works
>localhost:3000/api/images?filename=**image name**&width=**your width**&height=**your height**
<br>Ex: http://localhost:3000/api/images?filename=fjord&width=200&height=200
<br>This will return fjord image with size of 200x200
<br>NOTE: You can only use images from the assets/full directory otherwise ther will be an error
<br> you can use your own photos be adding them to the assets/full folder

This API can be used in two different ways :
1. A simple placeholder API, which allows you to place images into your frontend with the size set via URL Pararmeters for rapid portotyping.
1. A library that serves properly scaled versions of your images to the front end to reduce page load size.
---
## Installion
- Make sure that node is installed properly on your machine 
  ``` bash
   node -v
   ```
  This should return the version of node if installed else you need to install it
- Install all dependencies need for this porject
  ``` bash
   npm install
   ```
- Thern run the sever
  ```bash
  npm run start
  ```
  
  This will start your server on locahost:3000
---
## Scripts
1. start : Starts the server on localhost:3000
1. prettier : Fix the code styles to the default priettier styles
1. eslint-check : Check if there is any errors in the code before compiling 
1. eslint-fix : Fix any errors found if there is any
- To run scripts :
  >npm run "script name"
---

