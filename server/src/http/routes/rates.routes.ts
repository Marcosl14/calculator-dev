import { Application } from 'express';
// import listRateAction from '../actions/rates/list.rate.action';
// import createRateAction from '../actions/rates/create.rate.action';
import CommonRoutes from './common.routes';
// import updateRateAction from '../actions/rates/update.rate.action';
// import deleteRateAction from '../actions/rates/delete.rate.action';

class UserRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'User');
  }

  setUpRoutes(): Application {
    // this.app.get('/users', listRateAction.run);

    // this.app.post('/users', createRateAction.run);

    // this.app.put('/users/:id', updateRateAction.run);

    // this.app.delete('/users/:id', deleteRateAction.run);

    this.app.get('/rates', (request, response) => {
      let pepe = request.body;
      console.log(pepe);
      response.send('hola get');
    });

    this.app.post('/rates', (request, response) => {
      let pepe = request.body;
      console.log(pepe);
      response.send('hola post');
    });

    this.app.put('/rates/:id', (request, response) => {
      let pepe = request.body;
      console.log(pepe);
      response.send('hola put');
    });

    this.app.delete('/rates/:id/:lala', (request, response) => {
      let id = request.params.id;
      let lala = request.params.lala;
      console.log(id, lala);
      response.send('hola delete');
    });

    return this.app;
  }
}

export default UserRoutes;
