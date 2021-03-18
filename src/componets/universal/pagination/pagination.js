import Base from '/componets/Base.js'
import CSS from './pagination.css.js'

export default class pagination extends Base {
    css = CSS

    content = `
        <div class='pagination'>
            <div class='previous'>First</div>
            <div class='pagination-active'>1</div> <div>2</div>
            <div class='current'>3</div> <div>4</div> <div>5</div>
            <div class='last'>Last</div>
        </div>
    
`

constructor() {
    super()
    this.mount()
} //End of the constructor



//connectedCallback
connectedCallback() {
    try {
        if (google != undefined) {
            this.initMap()
        } else throw Error()
    } catch (err) {
        this.initMap()
    }

    // close the dock
    this.close()
    // Exit with escape key
    this.exitWithEscape()
} //End of connectedCallback()
} //End of Class



window.customElements.define('plagination-comp', plagination)

