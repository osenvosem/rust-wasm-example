import './style.css';

import("../wasm/pkg/rust_wasm_module");

const formElem: HTMLFormElement = document.querySelector('#form');
const resultElem: HTMLDivElement = document.querySelector('#result-content');

interface FormElements extends HTMLFormControlsCollection {
  textarea: HTMLTextAreaElement;
  button: HTMLButtonElement;
}

interface Target extends HTMLFormElement {
  elements: FormElements;
}

interface FormEvent extends Event {
  target: Target;
}

formElem.addEventListener('submit', (e: FormEvent) => {
  e.preventDefault();

  const valStr = e.target.elements.textarea.value.trim();

  if (valStr) {
    const valUint8Array = new TextEncoder().encode(valStr);

    const perfStart = window.performance.now();

    import("../wasm/pkg/rust_wasm_module")
      .then((mod) => {
        const perfEnd = window.performance.now();

        const hash = mod.gen_sha512(valUint8Array);

        resultElem.innerHTML = `
          <p>${hash}</p>
          <p><b>String size:</b> ${valUint8Array.byteLength} bytes</p>
          <p><b>Hash generate time:</b> ${perfEnd - perfStart} ms</p>
        `

      })
      .catch((err) => {
        console.error(err);
      })
  }
});


