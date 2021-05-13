enum Foo {
  A = 100,
  B = 200,
}

console.log(Foo.A);
// [LOG]: 100

console.log(Foo[100]);
// [LOG]: "A"
