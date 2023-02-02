import { LitElement, html } from 'lit-element';

class HelloWorld extends LitElement {
  render() {
    return html`
      <div>Hello World from LitElement!</div>
    `;
  }
}
customElements.define('hello-world', HelloWorld);