import Base from './../Base.js'
import CSS from './Error404.css.js'

export default class Error404 extends Base {

    css = CSS
    
    content = `
    <div class="container">
        <div>
            404 | Page  not found.
        </div>
        <span>Go back to <a>home 🔙</a></span>
    </div>
`
    constructor() {
        super()
        this.mount()
    }//End of the constructor

    connectedCallback() {
        this._qs('a').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `../main`, compName: 'main-comp' } })))
    }

}//End of Class

window.customElements.define('err-404', Error404)