import * as pino from 'pino';

import {ServerConfiguration} from '../util/server.configuration';

const options = {
  level: ServerConfiguration.getLogLevel(),
  name: ServerConfiguration.getServiceName(),
  prettyPrint: ServerConfiguration.isLogPretty()
};
const log = pino(options);

log.info(`Logging Initialised => [${options}]`);

export {log};
