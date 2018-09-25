import 'reflect-metadata';
import {app} from '../../src/app';

import * as request from 'supertest';

import {ServerConfiguration} from '../../src/util/server.configuration';

/*
 * After each test close the server.
 */
afterEach(() => {
  app.close();
});

describe('Test the location controller paths', () => {

  /*
   * Test the location controller list endpoint.
   */
  test('Call API with /location and expect a list of locations', async () => {
    const response = await request(app).get(`${ServerConfiguration.getContextPath()}/location`).set('Accept', 'application/json');

    expect(response.body.message).toEqual('This action returns all locations');
    expect(response.status).toEqual(200);
  });

  /*
   * Test the location controller detail endpoint.
   */
  test('Call API with /location/:id and expect a location', async () => {
    const response = await request(app).get(`${ServerConfiguration.getContextPath()}/location/1`).set('Accept', 'application/json');

    expect(response.body.message).toEqual('This action returns location #1');
    expect(response.status).toEqual(200);
  });
});
