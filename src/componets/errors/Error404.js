import Base from './../Base.js'

export default class Error404 extends Base {

    css = `
    .container {
    }

`
    content = `
    <div class="container">
        <div>
            404 | Page  not found.
        </div>
    </div>
`
    constructor() {
        super()
        this.mount()
    }

}//End of Class

window.customElements.define('err-404', Error404)