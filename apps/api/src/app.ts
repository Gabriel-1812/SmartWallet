import express from 'express';
import type { Application } from 'express';
import { errorHandler } from './shared/errors/errorHandler'
import { userRoutes } from './modules/user/user.routes';
import { authRoutes } from './modules/auth/auth.routes';

const app: Application = express();

app.use(express.json());

app.use('/users', userRoutes)
app.use(authRoutes);

app.get('/test-error', () => {
  throw new Error('Teste de middleware');
});

app.use(errorHandler);

export { app };

