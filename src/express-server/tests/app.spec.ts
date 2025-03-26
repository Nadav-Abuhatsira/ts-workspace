import { describe, it } from 'mocha';
import assert from 'assert';
import request from 'supertest';
import { createApp } from '../app';

describe('Express Server', () => {
  const app = createApp();

  describe('GET /health', () => {
    it('should return status ok', async () => {
      const response = await request(app).get('/health');
      assert.strictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, { status: 'ok' });
    });
  });

  describe('POST /echo', () => {
    it('should echo back the message', async () => {
      const message = 'Hello, World!';
      const response = await request(app).post('/echo').send({ message });

      assert.strictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, { message });
    });

    it('should return 400 when message is missing', async () => {
      const response = await request(app).post('/echo').send({});

      assert.strictEqual(response.status, 400);
      assert.deepStrictEqual(response.body, { error: 'message is required' });
    });

    it('should return 400 when message is null', async () => {
      const response = await request(app).post('/echo').send({ message: null });

      assert.strictEqual(response.status, 400);
      assert.deepStrictEqual(response.body, { error: 'message is required' });
    });

    it('should return 400 when message is empty string', async () => {
      const response = await request(app).post('/echo').send({ message: '' });

      assert.strictEqual(response.status, 400);
      assert.deepStrictEqual(response.body, { error: 'message is required' });
    });
  });
});
