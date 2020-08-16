import Base from './Base.js'

const style = `
footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.5em 0;
    text-align: center;
    color: #eeeeee;
    background-color: #000000;
}


`
const content = `
    <footer>
        <div>
            Copyright | ${new Date().getFullYear()} | homey.lk
        </div>
    </footer>
`

export default class Footer extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('footer-c', Footer)
