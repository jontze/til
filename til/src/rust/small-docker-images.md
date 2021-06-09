# Create ridiculously small and fast docker images

With the help of the crate [cargo-chef](https://crates.io/crates/cargo-chef) you can create ridiculously **small and fast docker images with rust**.

When using the rust image to build your source files and run the binary you have a big docker image (**>1GB**) with cargo and all utils installed. But you actually don't need them to run a rust binary in production.

Cargo chef encapsulate the the building processes in multiple steps that are cached and therefor very fast to build. Furthermore the execution of the binary is seperatet from any build tools and can be runned in a small debian or ubuntu image.

With this method I could reduce my image size **from _~1.2Gb_ to _~90MB_**.

_Here an example..._

```Dockerfile

FROM lukemathwalker/cargo-chef as planner
WORKDIR /backend
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM lukemathwalker/cargo-chef as cacher
WORKDIR /backend
COPY --from=planner /backend/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json

FROM rust:1.52 as builder
WORKDIR /backend
COPY . .
COPY --from=cacher /backend/target target
COPY --from=cacher $CARGO_HOME $CARGO_HOME
RUN cargo build --release --bin house-backend

FROM debian:buster-slim AS runtime
WORKDIR /backend
# Install Project dependencies
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl libpq-dev \
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
COPY --from=builder /backend/target/release/house-backend backend
CMD [ "./backend" ]

```
