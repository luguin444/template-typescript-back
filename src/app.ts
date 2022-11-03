import 'express-async-errors';
import HttpStatus from 'http-status';
import cors from 'cors';
import express, { Express, Request, Response, NextFunction } from 'express';
import '@config/env';

export async function init(): Promise<Express> {
  const app = express();

  setGlobalMiddlewares(app);
  setRoutes(app);

  return app;
}

function setGlobalMiddlewares(app) {
  app.use(cors());
  app.use(express.json());
}

function setRoutes(app: Express) {
  app.use('/health', (_req, res) => {
    res.sendStatus(HttpStatus.OK);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
    if (process.env.NODE_ENV === 'development') console.error(error);

    res.sendStatus(500);
  });
}
