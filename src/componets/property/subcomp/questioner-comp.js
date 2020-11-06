import Base from '../../Base.js'
import CSS from './questioner-comp.css.js'

export default class Questioner extends Base {

    css = CSS
    content = `
        <div class="container">
            <div class="form">
                <span id="close-popup">+</span>
                <div class="inner-form">
                    <span class="title">Title</span>
                </div> 
            </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
        
    }//End of constructor

    connectedCallback() {

    }//end of connected callback

}//End of class

window.customElements.define('questioner-comp', Questioner)
