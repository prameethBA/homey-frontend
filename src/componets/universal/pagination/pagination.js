import Base from '/componets/Base.js'
import CSS from './pagination.css.js'

export default class Pagination extends Base {
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
} //End of connectedCallback()
} //End of Class



window.customElements.define('pagination-comp', Pagination)

