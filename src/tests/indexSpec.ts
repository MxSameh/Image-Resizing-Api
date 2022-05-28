import supertest from 'supertest';
import app from '../server';
import resize from '../utilities/resize';
import fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Server API', (): void => {
  // TESTING THE ROOT END POINT RESPONSE
  it('Test endpoint response', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.text).toBe('WELCOME TO MY PROJECT');
  });

  // TESTING THE ROOT END POINT STATUS
  it('Test endpoint status', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  // TESTING THE RESIZING FUNCTION
  it('Testing resizing function', async () => {
    // Image parameters
    const fileName = 'fjord';
    const width = 300;
    const height = 300;

    const outputImagePath = await resize(fileName, width, height);
    const exists = fs.existsSync(outputImagePath);
    expect(exists).toEqual(true);
    // Delete created image
    fs.unlinkSync(outputImagePath);
  });

  // TESTING SUCCESSFULL IMAGE API ENDPOINT
  it('Successfull call to the image api', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=fjord&width=300&height=300'
    );
    expect(response.status).toBe(200);

    // Delete the created image
    const outputImagePath = path.normalize(
      __dirname + `../../../assets/thumb/fjord300x300_thumb.jpg`
    );
    fs.unlinkSync(outputImagePath);
  });

  // TESTING FAILURE IMAGE API ENDPOINT (wrong image name)
  it('Failure call to the image api', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=name&width=200&height=200'
    );
    expect(response.status).toBe(404);
  });

  // TESTING FAILURE IMAGE API ENDPOINT (missing parameter)
  it('Failure call to the image api', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=ford&width=200');
    expect(response.status).toBe(404);
  });
});
