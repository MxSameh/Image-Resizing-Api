import supertest from 'supertest';
import app from '../server';

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
});
