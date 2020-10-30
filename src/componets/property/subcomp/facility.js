import Base from './../../Base.js'

export default class Facility extends Base {

    css = `

        .container {
            display: grid;
            grid-template-columns: auto 15% 10%;
            margin: 0.5rem;
        }

      .container > label {
          cursor: pointer;
      }
    
      .container .checkbox {
          display: none;
          cursor: pointer;
      }
    
      .checkmark {
          position: absolute;
          height: 20px;
          width: 20px;
          background-color: transparent;
          border-radius: 50%;
          border: solid 1px #ffffff;
          transition: all 1s;
          transform: translateX(-2rem);
      }
    
      .container .checkbox:checked ~ .checkmark {
          background-color: #32be8f;
      }
    
      .checkmark:after {
          content: "";
          display: none;
          margin: 2px 0 0 6px;
      }
    
      .container .checkbox:checked ~ .checkmark:after {
          display: block;
      }
    
      .container .checkmark:after {
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
      }

`

    content = `
    <div class="container">
        <input type="checkbox" id="${this.getAttribute('key')}" class="checkbox">
        <label for="${this.getAttribute('key')}" class="checkmark"></label>
        <label for="${this.getAttribute('key')}" class="name">${this.getAttribute('name')}</label>
    </div>
`
    constructor() {
        super()
        this.mount()

        if (this.getAttribute('measurable') == 1) this._qs('.container').innerHTML += `<span> x</span><input class ="quantity" type="text" value="0"/>`
    }

    async connectedCallback() {

    }//End of connectedCallback

}//End of Class

window.customElements.define('facility-comp', Facility)
