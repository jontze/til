# Public Class Propertys Syntax Sugar

If you write a typescript class and define a variable in the constructor with the prefix 'public' it is the same as you would define a public property to the class.

**So the following typescript code...**

```ts
{{#include syntax-sugar-class-property.ts}}
```

**Gets compiled to this javascript code...**

```js
{{#include syntax-sugar-class-property.js}}
```
