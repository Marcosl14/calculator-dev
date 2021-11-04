import { Application } from 'express';
import createTechnologyAction from '../actions/technologies/create.technology.action';
import deleteTechnologyAction from '../actions/technologies/delete.technology.action';
import listTechnologyAction from '../actions/technologies/list.technology.action';

import CommonRoutes from './common.routes';

class TechnologiesRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Technology');
  }

  setUpRoutes(): Application {
    this.app.get('/technologies', listTechnologyAction.run);

    this.app.post('/technologies', createTechnologyAction.run);

    this.app.delete('/technologies/:id', deleteTechnologyAction.run);

    return this.app;
  }
}

export default TechnologiesRoutes;
