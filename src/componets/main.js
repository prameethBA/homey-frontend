import Base from './Base.js'

const style = `
    h3 {
        color : coral;
    }
`
const content = `
    <div class='user-card'>
        <h3>
        <slot name='name'/>
        </h3>
        <slot name='test'/>
    </div>
`

export default class Comp extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('comp-c', Comp)
