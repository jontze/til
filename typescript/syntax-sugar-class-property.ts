class Foo {
  constructor(public bar: boolean = true) {}
}

class Bar {
  public foo: boolean;
  constructor(foo = true) {
    this.foo = foo;
  }
}
