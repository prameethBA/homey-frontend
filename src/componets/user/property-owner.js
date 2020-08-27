import Base from './../Base.js'

const style = `


`
const content = `
    
`

export default class PropertyOwner extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('user-property-owner', PropertyOwner)
