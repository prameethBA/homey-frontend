import Base from './../Base.js'

export default class Error404 extends Base {

    css = `
    .container {
        margin: auto;
        display: table;
    }

    .container div {
        font-size: 5rem;
        margin: 10rem auto;
    }

    .container span {
        display: inherit;
        margin: 10.2rem auto;
    }

    a {
        color: blue;
        cursor: pointer;
    }

    a:hover {
        color: orange;
    }

`
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