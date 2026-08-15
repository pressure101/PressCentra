import express, { Application } from 'express';
import healthRoutes from './routes/healthRoutes.js';

const app: Application = express();

app.use(express.json());
app.use('/health', healthRoutes);

export default app;