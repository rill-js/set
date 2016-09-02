'use strict'

var assert = require('assert')
var agent = require('supertest')
var Rill = require('rill')
var set = require('../')

describe('Rill/Set', function () {
  it('should set a local.', function (done) {
    var request = agent(
      Rill()
        .use(set('a', 1))
        .use(set('b[]', 1))
        .use(set('c[d]', 1))
        .use(function (ctx) {
          assert.deepEqual(ctx.locals, {
            a: 1,
            b: [1],
            c: { d: 1 }
          })
          ctx.res.status = 200
        })
        .listen()
    )

    request
      .get('/')
      .expect(200)
      .end(done)
  })
})
