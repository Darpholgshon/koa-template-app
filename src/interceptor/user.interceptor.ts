import {Action, InterceptorInterface} from 'routing-controllers';

import {log} from '../util/pino.logger';

export class UserInterceptor implements InterceptorInterface {

  intercept(action: Action, content: any) {
    log.info('Transform User before returning.');
    content.user = true;

    return content;
  }
}
