# Example of using WebAssembly module on the web

The purpose of the project is to demonstrate how to use WASM written in Rust in the browser, particularly how to invoke a Rust function from the Javascript side and the other way around.

On the Javascript side we execute a Rust function passing a string converted to `Uint8Array` to it. The function generates a hash, invokes Javascript's `console.log` passing the hash into it and returns the hash. After that the hash renders on the page with additional information.

# Run the project

```sh
npm install
npm start
```

# Screenshot

![Project screenshot](https://user-images.githubusercontent.com/6762673/79657660-de7fb400-81bb-11ea-9592-2a3ef22abfb2.jpg)
