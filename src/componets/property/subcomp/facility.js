import Base from './../../Base.js'

export default class Facility extends Base {

    css = `

    .container {
        display: grid;
        grid-template-columns: 5% auto 5% 10%;
    }

    input[type='checkbox'] {
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }

    input:checked + label {
        color: #ff4000;
      }

    :checked {
        margin-left: 2px;
    }
      
    input[type='checkbox']:checked {
        box-shadow: 0 0 0 2px #ff4000;
    }

    input[type='text'] {
        width: 15px;
    }

`

    content = `
    <div class="container">
        <input type="checkbox" id="${this.getAttribute('key')}">
        <label for="${this.getAttribute('key')}">${this.getAttribute('name')}</label>
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
