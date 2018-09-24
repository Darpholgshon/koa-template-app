import {Controller, Get} from 'routing-controllers';
import * as fs from 'fs';
import * as process from 'process';

const packageInfo = JSON.parse(fs.readFileSync(process.cwd() + '/package.json', 'utf-8'));

@Controller('/info')
export class InfoController {
  @Get('/')
  getAll() {
    return {
      build: {
        description: packageInfo.description,
        version: process.env.VERSION || packageInfo.version,
        name: packageInfo.name
      }
    };
  }
}
