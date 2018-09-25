import {Action, InterceptorInterface} from 'routing-controllers';

import {log} from '../util/pino.logger';

export class LocationInterceptor implements InterceptorInterface {

  intercept(action: Action, content: any) {
    log.info('Transform Location before returning.');
    content.location = true;

    return content;
  }
}
