extern crate hex;
extern crate sha3;
extern crate wasm_bindgen;

use sha3::{Digest, Sha3_512};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: String);
}

#[wasm_bindgen]
pub fn gen_sha512(input: &[u8]) -> String {
    let mut hasher = Sha3_512::new();

    hasher.input(input);

    let hash = hasher.result();

    let result = hex::encode(hash);

    log(result.clone());

    return result;
}
