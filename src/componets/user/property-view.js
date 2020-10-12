import Base from './../Base.js'

const style = `


`
const content = `
    <div>
 
        <div>
            <h3>Title</h3>
            <span>Star</span>
            <span>Share</span>
            <button>Price</button>
        </div>
        <div>
            Description
        </div>
        <div>
            <button>Comment</button>
            <button>Reserve</button>
            <button>More>>>><<<<>></button>
        </div>
       </div>
    </div>
`

export default class PropertyView extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
}
window.customElements.define('property-view', PropertyView)
