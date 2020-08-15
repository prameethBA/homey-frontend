import Base from './Base.js'

const style = `
    h1 {
        color : red;
    }
`
const content = `
    <h1>Lakmal</h1>
`

export default class Nav extends Base {
    constructor() {
        super()
        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('nav-c', Nav)
