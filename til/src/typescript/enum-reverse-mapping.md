# Enum Reverse Mapping

In typescript it is actually possible to reverse map from values to names in numeric enums.

**Here an example...**

```ts
{{#include enum-reverse-mapping.ts}}
```

**This is due to typescript compiles the enum down to the following javascript code...**

```ts
{{#include enum-reverse-mapping.js}}
```
