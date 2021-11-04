import express from 'express';
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import CommonRoutes from './http/routes/common.routes';
import RatesRoutes from './http/routes/rates.routes';
import SalaryRoutes from './http/routes/salary.routes';
import TechnologiesRoutes from './http/routes/technologies.routes';
import mongoose from 'mongoose';
import RateSchema from './infrastructure/repositories/schemas/rate.schema';
import TechnologySchema from './infrastructure/repositories/schemas/technology.schema';

const app: express.Application = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://user:marquitos2701@marcoscluster.7gh8q.mongodb.net/calculator-dev?retryWrites=true&w=majority',
);
const db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err);
  db.close();
});

db.once('open', function () {
  console.log('Connection to DB successful');
});

const ratesModel = mongoose.model('rates', RateSchema, 'rates');
const technologiesModel = mongoose.model('technologies', TechnologySchema, 'technologies');
export { ratesModel, technologiesModel };

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
