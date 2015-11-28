var assert = require("assert");
var agent  = require("supertest");
var Rill   = require("rill");
var set    = require("../");

describe("Rill/Set", function () {
	it("should set a local.", function (done) {
		var request = agent(
			Rill()
				.use(set("a", 1))
				.use(function (ctx) {
					assert.equal(ctx.locals.a, 1);
					ctx.res.status = 200;
				})
				.listen()
		);

		request
			.get("/")
			.expect(200)
			.end(done)
	});
});

function respond (status, test) {
	return function (ctx) {
		ctx.res.status = status;
		if (typeof test === "function") test(ctx);
	};
}

function sleep (ms) {
	return new Promise(function (accept) {
		setTimeout(accept, ms);
	});
}