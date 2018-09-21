#!/bin/sh
set -e

if [ "$1" = 'koa-template-app-v1' ]; then
  exec pm2-docker start process.yml
fi

exec "$@"
