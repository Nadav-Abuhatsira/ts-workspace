import express, { Express, Request, Response } from 'express';

export function createApp(): Express {
  const app = express();
  app.use(express.json());

  app.get('/health', (_req: Request, res: Response) => {
    return res.json({ status: 'ok' });
  });

  app.post('/echo', (req: Request, res: Response) => {
    const message = req.body.message;
    if (!message || message === '') {
      return res.status(400).json({ error: 'message is required' });
    }
    return res.json({ message });
  });

  return app;
}
