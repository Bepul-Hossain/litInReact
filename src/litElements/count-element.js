import { LitElement, html, customElement,css } from 'lit-element';

@customElement('count-element')
class CountElement extends LitElement {
    static get styles() {
        return css`
          :host {
            display: block;
            border: solid 1px gray;
            padding: 16px;
            max-width: 800px;
          }
        `;
      }
    
      static get properties() {
        return {
          /**
           * The name to say "Hello" to.
           */
          name: {type: String},
    
          /**
           * The number of times the button has been clicked.
           */
          count: {type: Number},
        };
      }
    
      constructor() {
        super();
        this.name = 'World';
        this.count = 0;
      }
    
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
  _onClick() {
    this.count++;
  }
}

export default CountElement;

