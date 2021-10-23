import express from 'express';
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import CommonRoutes from './http/routes/common.routes';
import RatesRoutes from './http/routes/rates.routes';
import SalaryRoutes from './http/routes/salary.routes';
import TechnologiesRoutes from './http/routes/technologies.routes';

const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

routes.push(new RatesRoutes(app));
routes.push(new SalaryRoutes(app));
routes.push(new TechnologiesRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});
