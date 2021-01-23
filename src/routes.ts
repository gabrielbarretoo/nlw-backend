import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionCotrollers = new ConnectionController();


routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionCotrollers.create);
routes.get('/connections', connectionCotrollers.index);

export default routes;