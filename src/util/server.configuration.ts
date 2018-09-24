import * as konfig from 'konfig-yaml';

const config = konfig('app');

export class ServerConfiguration {

  static getServerPort(): number {
    return config.server.port;
  }

  static getContextPath(): string {
    return '/' + this.getServiceName()
  }

  static getServiceName(): string {
    return config.microservice.server.name;
  }

  static getLogLevel(): string {
    return config.log.level;
  }

  static isLogPretty(): boolean {
    return config.log.pretty;
  }
}
