import Base from './../../Base.js'
import CSS from './facility.css.js'

export default class Facility extends Base {

    css = CSS

    content = `
    <div class="container">
        <input type="checkbox" id="${this.getAttribute('key')}" class="checkbox ${this.getAttribute('checked') == 'true' ? 'disabled' : null}" ${this.getAttribute('checked') == 'true' ? 'checked' : null} ${this.getAttribute('checked') == 'true' ? 'disabled' : null}>
        <label for="${this.getAttribute('key')}" class="checkmark"></label>
        <label for="${this.getAttribute('key')}" class="name">${this.getAttribute('name')}</label>
    </div>
`
    constructor() {
        super()
        this.mount()
        if (this.getAttribute('measurable') == 1) this._qs('.container').innerHTML += `<span> x</span><input class ="quantity ${this.getAttribute('checked') == 'true' ? 'disabled' : 'abled'}" type="text" value="${this.getAttribute('quantity') == null ? 0 : this.getAttribute('quantity')}"/>`
    }

    connectedCallback() {

    }//End of connectedCallback

}//End of Class

window.customElements.define('facility-comp', Facility)
