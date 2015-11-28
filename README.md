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
app.use(set("a", 1));

app.use(({ locals })=> {
	locals.a === 1; //-> true
});
```

---

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
