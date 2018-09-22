FROM pa-registry.transform.pacpservices.net/alpine-node-pm2:v1.2.10-node8

MAINTAINER Press Association <datasquad@pressassociation.com>

ARG NPM_TOKEN
ARG VERSION

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

COPY . /app
COPY .npmrc.template /app/.npmrc
WORKDIR /app

# The following is ugly but prevents an overlay layer with
# .npmrc from being left in the container/build history.
RUN echo ${NPM_TOKEN} \
  && echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /app/.npmrc \
  && npm install \
  && npm build \
  && npm prune --production \
  && rm -f .npmrc

ENV VERSION ${VERSION}

EXPOSE 8380

CMD ["koa-template-app-v1"]
