import Base from './../Base.js'

const style = `


`
const content = `
    <main>
        <div>
            Copyright | ${new Date().getFullYear()} | homey.lk
        </div>
    </main>
`

export default class PrimaryUser extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('primary-user', PrimaryUser)
