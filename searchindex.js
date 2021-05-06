Object.assign(window.search, {"doc_urls":["intro.html#today-i-learned","typescript/typescript.html#typescript","typescript/syntax-sugar-class-property.html#public-class-propertys-syntax-sugar","angular/angular.html#angular","angular/trackBy.html#ngfor-loops-and-trackby","rust/rust.html#rust"],"index":{"documentStore":{"docInfo":{"0":{"body":36,"breadcrumbs":3,"title":2},"1":{"body":5,"breadcrumbs":2,"title":1},"2":{"body":47,"breadcrumbs":10,"title":5},"3":{"body":5,"breadcrumbs":2,"title":1},"4":{"body":88,"breadcrumbs":6,"title":3},"5":{"body":6,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"This mdBook is a personal collection of more or less useful little things that I have learned from day to day. It is not a blog. The contributions should all be relatively short and reduced to the essentials. It is also a tool to consolidate new knowledge and a quick reference point at the same time. The project is inspired by jbranchaud/til . Thanks a lot for the amazing work! ( How I Built a Learning Machine )","breadcrumbs":"Introduction » Today I Learned","id":"0","title":"Today I Learned"},"1":{"body":"This section is a collection of all typescript related things.","breadcrumbs":"Typescript » Typescript","id":"1","title":"Typescript"},"2":{"body":"If you write a typescript class and define a variable in the constructor with the prefix 'public' it is the same as you would define a public property to the class. So the following typescript code... class Foo { constructor(public bar: boolean = true) {}\n} class Bar { public foo: boolean; constructor(foo = true) { this.foo = foo; }\n} Gets compiled to this javascript code... class Foo { constructor(bar = true) { this.bar = bar; }\n} class Bar { constructor(foo = true) { this.foo = foo; }\n}","breadcrumbs":"Typescript » Class Property Syntax Sugar » Public Class Propertys Syntax Sugar","id":"2","title":"Public Class Propertys Syntax Sugar"},"3":{"body":"This section is a collection of all Angular related things.","breadcrumbs":"Angular » Angular","id":"3","title":"Angular"},"4":{"body":"If you handle large arrays with ngFor and want to edit, remove or add new entries it can impact the performance badly due to expensive DOM manipulations. To prevent that angular has the possibility to add a trackBy function to the ngFor directive. This function has the index and the current item as arguments and should return a unique identifier to track the old item to the new item. This identifier could for example be an unique id, name or even the position (index) in the array. This will have a positive effect on the performance, since Angular now only has to re-render the changed or added elements and not the whole array. Here is an example <table class=\"table\"> <thead> <tr> <th>Name</th> <th>Permission</th> </tr> </thead> <tbody> <tr *ngFor=\"let user of allUsers; trackBy: identifyByName\"> <td>user.name</td> <td>user.permission</td> </tr> </tbody>\n</table> identifyByName(index: number, item: User): string { return item.name\n}","breadcrumbs":"Angular » NgFor And TrackBy » # NgFor Loops and TrackBy","id":"4","title":"# NgFor Loops and TrackBy"},"5":{"body":"This section is a collection of all rust-lang related things.","breadcrumbs":"Rust » Rust","id":"5","title":"Rust"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"d":{"d":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"b":{"a":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"=":{"\"":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":2.6457513110645907}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"(":{"b":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"y":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{".":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":2.0}}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"u":{"d":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"=":{"\"":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":2.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":1.0}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":1,"docs":{"0":{"tf":1.0}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{">":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"<":{"/":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"/":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"h":{">":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"<":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"s":{".":{"b":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"c":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.0}},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"a":{"d":{"d":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":2.0},"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"b":{"a":{"d":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":2.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"=":{"\"":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":3.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"(":{"b":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}},"u":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"y":{"b":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"(":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{".":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":2.0}}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"u":{"d":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.0}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"m":{"a":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"=":{"\"":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.23606797749979}}}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"s":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":2.0}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":2.23606797749979}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":1.0}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"df":1,"docs":{"0":{"tf":1.0}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"4":{"tf":1.0}}}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":2.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{">":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{".":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"<":{"/":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"/":{"df":0,"docs":{},"t":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"h":{">":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"<":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"<":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}},"s":{".":{"b":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"c":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":2.23606797749979}}}},"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":2.0}},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"s":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"o":{"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"a":{"c":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});