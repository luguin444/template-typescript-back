import request, { SuperTest, Test } from 'supertest';
import { init } from 'app';

let server: SuperTest<Test> = null;

beforeAll(() => {
  const initializedApp = init();
  server = request(initializedApp);
});

describe('GET /health', () => {
  it('should respond with 200', async () => {
    const response = await server.get('/health');

    expect(response.status).toBe(200);
  });
});
