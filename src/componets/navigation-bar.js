import Base from './Base.js'

const style = `
    header {
        position: absolute;
        top:0;
        left:0;
        right:0;
        background-color: #111111;
        color: #eeeeee;
    }
`
const content = `
    <header>
        <nav>
            <h3>Homey</h3>
        </nav
    </header>
`

export default class Nav extends Base {
    constructor() {
        super()
        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('navigation-bar', Nav)
