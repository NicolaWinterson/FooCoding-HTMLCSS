'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    response.setHeader('Content-type', 'application/json')
    response.statusCode = 200;

    if (request.url === "/state") {
      state
      response.write(JSON.stringify({ state }))
    } else if (request.url === "/add") {
      state++
      response.write(JSON.stringify({ state }))
    } else if (request.url === "/subtract") {
      state--
      response.write(JSON.stringify({ state }))
    } else if (request.url === "/reset") {
      state = 10;
      response.write(JSON.stringify({ state }))
    } else {
      response.statusCode = 404;
      response.write(JSON.stringify({ error: 'Not found' }))
    }

    response.end();
  });

  return server;
}

module.exports = {
  createServer
};
