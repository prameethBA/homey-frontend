import Base from './../Base.js'

export default class PropertyView extends Base {

    style = `


    `
    content = `
        <div>
           <div>
            <button>Prev</button>
            <img src="">
            <button>Next</button>
           </div>
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
                <button>More>></button>
            </div>
           </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
    }

}

window.customElements.define('property-view', PropertyView)
