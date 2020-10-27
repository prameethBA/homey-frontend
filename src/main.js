import Base from './componets/Base.js'

export default class Main extends Base {

    css = `
    .container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

`
    content = `
    <div class="container">
    </div

`
    constructor() {
        super()
        this.mount()
    }

}//End of Class

window.customElements.define('main-comp', Main)