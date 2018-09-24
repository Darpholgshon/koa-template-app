import 'reflect-metadata'; // this shim is required
import {createKoaServer} from 'routing-controllers';

import {ServerConfiguration} from './util/server.configuration';

import {Info} from './middleware/info';
import {log} from './util/pino.logger';

// creates app, registers all controller routes and returns you Koa app instance
const server = createKoaServer({
  routePrefix: ServerConfiguration.getContextPath(),
  controllers: [__dirname + '/controller/*.*']
});

// Add middleware.......
server.use(Info);

// Startup application.
const app = server.listen(ServerConfiguration.getServerPort(), () => {
  log.info(`Application Initialised => [${ServerConfiguration.getServiceName()}], Port: [${app.address().port}]`);
  log.debug(`Controllers Registered From: [${__dirname}/controller]`);
});

export {app};
