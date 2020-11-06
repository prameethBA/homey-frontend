import Base from '../../Base.js'
import CSS from './questioner-comp.css.js'

export default class Questioner extends Base {

    css = CSS
    content = `
        <div class="container">
            <div class="form">
                <span id="close-popup">+</span>
                <div class="inner-form">
                    <span class="number"> 01 of 05 </span>
                    <span class="title">What is you looking for?</span>
                    <input type='text' class="answer"/>
                    <button class="button">Next »</button>
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
