var qSet = require('q-set')

/**
 * Add a constant local variable as a middleware.
 *
 * @param {String} key
 * @param {*} value
 * @return {Function}
 * @api public
 */
module.exports = function (key, value) {
	return function set (ctx, next) {
		qSet(ctx.locals, key, value)
		return next();
	}
};
