import 'express-async-errors';
import './config/env';
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import { ResponseErrorFormatter } from 'utils/response-error-formatter';
import HttpError from 'errors/http-error';

export function init(): Express {
  const app = express();

  setGlobalMiddlewares(app);
  setRoutes(app);

  return app;
}

function setGlobalMiddlewares(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}

function setRoutes(app: Express) {
  app.use('/health', (_req, res) => {
    res.sendStatus(httpStatus.OK);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use(
    (error: HttpError, req: Request, res: Response, _next: NextFunction) => {
      const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;

      if (process.env.NODE_ENV !== 'production') console.error(error);

      res.status(status).json(ResponseErrorFormatter.format(error));
    }
  );
}
