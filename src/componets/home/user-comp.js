import Base from './../Base.js'

const style = `
div {
    display: inline;
}
.container {
    background-color: #000000;
    width: 30em;
    height: 20em;
    box-shadow: 1px 1px 5px 1px rgba(10,0,54,0.64);
    display: grid;
    grid-template-columns: auto auto;
}


::slotted(img) {
    width: 15em;
    height: 20em;
}

::slotted(h1) {
    display: inline-block;
    color: #eeeeee;
    font-size: 2em;
    text-align: right;
    padding: 1em;
}

`
const content = `
        <div class='container'>
            <div><slot name="image" ></slot></div>
            <div><slot name="title" ></slot></div>
        </div>
`

export default class UserComp extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
        this.state.mirror =
            this.getAttribute('mirror') === 'true' ? true : false
        if (this.state.mirror) {
            this.shadowRoot.querySelector('.container').innerHTML = `
            <div><slot name="title" ></slot></div>
            <div><slot name="image" ></slot></div>
            `
        }
    }
}
window.customElements.define('user-comp', UserComp)
