import * as pino from 'pino';
import * as konfig from 'konfig-yaml';

const config = konfig('app');
const log = pino({
  level: config.log.level,
  name: config.microservice.server.name,
  prettyPrint: config.log.pretty
});

log.info(`Logging Initialised => log: [${JSON.stringify(config.log)}]`);

export {log};
