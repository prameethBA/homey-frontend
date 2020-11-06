import Base from '../../Base.js'
import CSS from './questioner-comp.css.js'

export default class Questioner extends Base {

    css = CSS
    content = `
        <div class="container">
            <div class="form">
                <span id="close-popup" title="close">+</span>
                <div class="inner-form">
                    <span class="number"> <span class="current-quiz"> 01 </span> of <span class="total-quiz"> 05 </span> </span>
                    <span class="title">What are you looking for?</span>
                    <div class="input">
                        <input type='text' class="answer"/>
                    </div>
                    <button class="button">Next »</button>
                </div> 
            </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
        
    }//End of constructor

    //close the dock
    close() {
        this._qs('#close-popup').addEventListener('click', () => {
            this._qs('.container').style.opacity = '0'
            this._qs('.container').style.pointerEvents = 'none'
        })
    }//End of the close()

    loadQuiz(number) {
        this._qs('.current-quiz')
    }

    connectedCallback() {

        // close the dock
        this.close()

    }//end of connected callback

}//End of class

window.customElements.define('questioner-comp', Questioner)
