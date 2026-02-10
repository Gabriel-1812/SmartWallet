import express from 'express';
import type { Application } from 'express';
import { errorHandler } from './shared/errors/errorHandler'

const app: Application = express();

app.use(express.json());

app.get('/test-error', () => {
  throw new Error('Teste de middleware');
});

app.use(errorHandler);

export { app };

