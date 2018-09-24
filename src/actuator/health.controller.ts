import {Controller, Get} from 'routing-controllers';

/*
  Need to add logic to allow monitors to register.
 */
@Controller('/health')
export class HealthController {
  @Get('/')
  getAll() {
    return {
      message: 'This action returns all health monitor statuses.',
      status: 'UP'
    };
  }
}
