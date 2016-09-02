<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/set
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/set">
    <img src="https://img.shields.io/npm/v/@rill/set.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/set">
    <img src="https://img.shields.io/npm/dm/@rill/set.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

Simple utility to set a local variable using a middleware.

# Installation

```console
npm install @rill/set
```

## Example

```js
const app = require('rill')()

// Set a local variable for each request.
// Uses the same setter as the query string parser
app.use(set("a", 1))
app.use(set("b[]", 1))
app.use(set("c[d]", 1))


app.use(({ locals })=> {
	locals //-> {
		a: 1,
		b: [1],
		c: { d: 1 }
	}
})
```

---

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
