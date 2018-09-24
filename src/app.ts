import './controller';
import './actuator';

import {createKoaServer} from 'routing-controllers';
import {ServerConfiguration} from './util/server.configuration';

import {log} from './util/pino.logger';

// creates app, registers all controller routes and returns you Koa app instance
const server = createKoaServer({
  routePrefix: ServerConfiguration.getContextPath()
});

// Startup application.
const app = server.listen(ServerConfiguration.getServerPort(), () => {
  log.info(`Application Initialised => {"name": "${ServerConfiguration.getServiceName()}", "port": "${app.address().port}"}`);
});

export {app};
