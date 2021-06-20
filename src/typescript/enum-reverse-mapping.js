"use strict";
var Foo;
(function (Foo) {
  Foo[(Foo["A"] = 100)] = "A";
  Foo[(Foo["B"] = 200)] = "B";
})(Foo || (Foo = {}));
