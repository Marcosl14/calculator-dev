import { Application } from 'express';
import filterSalaryAction from '../actions/salaries/filter.salary.action';

import CommonRoutes from './common.routes';

class SalaryRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Salary');
  }

  setUpRoutes(): Application {
    this.app.post('/salaries', filterSalaryAction.run);

    return this.app;
  }
}

export default SalaryRoutes;
