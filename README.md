# Rill Set
Simple utility to set a local variable using a middleware.

# Installation

#### Npm
```console
npm install @rill/set
```

## Example

```js
// Set a local variable for each request.
// Uses the same setter as the query string parser
app.use(set("a", 1));
app.use(set("b[]", 1));
app.use(set("c[d]", 1));


app.use(({ locals })=> {
	locals; //-> {
		a: 1,
		b: [1],
		c: { d: 1 }
	}
});
```

---

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
