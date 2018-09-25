import {log} from '../util/pino.logger';
import {KoaMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({type: 'before'})
export class RequestLogger implements KoaMiddlewareInterface {

  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    log.info(`Called Endpoint ${context.url}`);
    return next();
  }
}
