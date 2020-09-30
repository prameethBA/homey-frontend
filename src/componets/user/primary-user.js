import Base from './../Base.js'

import './property-view.js'

const style = `


`
const content = `
    <property-view></property-view>
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
