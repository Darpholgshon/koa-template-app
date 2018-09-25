import {createKoaServer} from 'routing-controllers';
import {ServerConfiguration} from './util/server.configuration';

// Import controllers, middleware and actuators (extra controllers).
import './controller';
import './middleware';
import './actuator';

import {log} from './util/pino.logger';

// creates app, magically register all controller routes and middleware and returns you Koa app instance
const server = createKoaServer({
  routePrefix: ServerConfiguration.getContextPath()
});

// Startup application.
const app = server.listen(ServerConfiguration.getServerPort(), () => {
  log.info(`Application Initialised => {"name": "${ServerConfiguration.getServiceName()}", "port": "${app.address().port}"}`);
});

// Example simple error handler.
app.on('error', (err) => {
  // TODO - Investigate: https://github.com/typestack/routing-controllers#error-handlers
  log.error('server error', err);
});

export {app};
