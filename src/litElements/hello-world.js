import { LitElement, html, customElement } from 'lit-element';

// @customElement('hello-world')
class HelloWorld extends LitElement {
  render() {
    return html`
      <div>Hello World from LitElement!</div>
    `;
  }
}

// export default HelloWorld;
customElements.define('hello-world', HelloWorld);