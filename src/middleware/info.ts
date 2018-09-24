import * as fs from 'fs';
import * as process from 'process';

import {ServerConfiguration} from '../util/server.configuration';

const packageInfo = JSON.parse(fs.readFileSync(process.cwd() + '/package.json', 'utf-8'));

const buildInfo = (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    build: {
      description: packageInfo.description,
      version: process.env.VERSION || packageInfo.version,
      name: packageInfo.name
    }
  };
};

const Info = (ctx, next) => {
  return ctx.url === `${ServerConfiguration.getContextPath()}/info` ? buildInfo(ctx) : next();
};

export {Info};
