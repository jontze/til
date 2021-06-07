# Module Imports

Coming from other languages, I had a hard time understanding the way modules are imported into a rust application.

So here are two fundamental principles that I learned the hard way.

1. If you want to import **modules from a directory**, you need to add a `mod.rs` file inside the directory, that describes the modules that are allowed to be exported. This is due to all modules are **private by default** in rust.

   ```txt
   -main.rs
   -routes/
   ---foo.rs
   ---bar.rs
   ```

   Referring to the above file structure, you need to add the following content to the `mod.rs` to use the `foo` and `bar` module in other modules (e.g. the `main.rs`).

   ```rs
   // content of mod.rs
   pub mod foo;
   pub mod bar;
   ```

2. If you want to **import a module inside another module** outside the `main.rs` you need to register this module first in the `main.rs` to enable this. The main.rs is like the root directory `/` in the UNIX system, and you need to tell the compiler what is in the directory, so it is accessible.

   ```txt
   -main.rs
   -foo.rs
   -bar.rs
   ```

   So if you want to import the `foo` module inside the `bar` module (and the `bar` module is used in the `main.rs`). You have to register the `foo` module inside the main even if it is not used there directly.

   ```rs
   // Content of foo.rs

   pub fn hello() {
    println!("Hello");
   }

   ```

   ```rs
   // Content of bar.rs
   use crate::foo::{hello};

   pub fn hello_world() {
      hello();
      println!("World");
   }
   ```

   ```rs
   // Content of main.rs
   mod bar;
   mod foo; // This line is essential, without it the import in 'bar.rs' will fail

   fn main() {
      bar::hello_world();
   }

   ```
