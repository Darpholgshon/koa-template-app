import 'reflect-metadata'; // this shim is required
import {createKoaServer} from 'routing-controllers';

import * as konfig from 'konfig-yaml';
const config = konfig('app');

const SERVICE = config.microservice.server.name;

import {log} from './util/pino.logger';

// creates app, registers all controller routes and returns you Koa app instance
const server = createKoaServer({
  controllers: [__dirname + '/controller/*.ts']
});

// Add middleware.......

// Startup application.
const app = server.listen(config.server.port, () => {
  log.info(`Application Initialised => [${SERVICE}], Port: [${app.address().port}]`);
});

export {app};
