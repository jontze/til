# Equality: `undefined` vs `null`

I was long time unsure when to use `==` or `===` especially when it comes to `null` or `undefined`. Because in my beginnings of Javascript I learned that I shouldn't use `==` to compare variables to prevent situations like the following where statements may be unintended true.

```ts
console.log("" == 0);
// [LOG] true

console.log("5" == 5);
// [LOG] true
```

However, when it comes to `null` and `undefined` it is important to know the differences:

- `undefined`: Something hasn't been initialized
- `null`: Something is currently unavailable

So they are both types that describe the absence of something and there are both bottom values.

Although the values actually have slightly different meanings, they should usually be treated as the same.

So if you want to check a variable for `null` or `undefined`, `==` should be used.

```ts
const foo = null;
const bar = undefined;

console.log(foo == null);
// [LOG] true

console.log(bar == null);
// [LOG] true

console.log(null == undefined);
// [LOG] true

console.log(null === undefined);
// [LOG] false
```

### Good to know:

There is disagreement in the TypeScript / Javascript community about which of the two values should be used preferentially. For example, the [Typescript team does not use](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines#null-and-undefined) `null`, but the NodeJS team does.
