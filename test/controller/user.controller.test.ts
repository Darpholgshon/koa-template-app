import {app} from '../../src/app';

import * as request from 'supertest';

/*
 * After each test close the server.
 */
afterEach(() => {
  app.close();
});

describe('Test the user controller paths', () => {
  /*
   * Test the user controller list endpoint.
   */
  test('Call API with /user and expect a list of users', async () => {
    const response = await request(app).get('/user').set('Accept', 'application/json');

    expect(response.body.message).toEqual('This action returns all users');
    expect(response.status).toEqual(200);
  });

  /*
   * Test the user controller detail endpoint.
   */
  test('Call API with /user/:id and expect a user', async () => {
    const response = await request(app).get('/user/1').set('Accept', 'application/json');

    expect(response.body.message).toEqual('This action returns user #1');
    expect(response.status).toEqual(200);
  });
});
