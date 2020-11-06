import Base from '../../Base.js'
import CSS from './questioner-comp.css.js'

export default class Questioner extends Base {

    css = CSS
    content = `
        <div class="container">
            <div class="form">
                <span id="close-popup" title="close">+</span>
                <div class="inner-form">
                    <span class="number"> <span class="current-quiz"> 1 </span> of <span class="total-quiz"> 5 </span> </span>
                    <span class="title">What are you looking for?</span>
                    <div class="input">
                        <input type='text' class="answer"/>
                    </div>
                    <button class="button">Next »</button>
                </div> 
            </div>
        </div>
    `

    quiz = [
        {
            number: 1,
            title: 'What are you Looking for?',
            input: `<select class="propertyType"></select>`
        },

        {
            number: 2,
            title: 'Budget per Month? (Rs/Month)',
            input: `<input class="answer" placeholder="Rs. XX,XXX"/>`
        },
        
        {
            number: 3,
            title: 'Which area you preffer?',
            input: `<input class="answer" placeholder="Colombo"/>`
        },

        {
            number: 4,
            title: 'From when do you want it?',
            input: `<input class="answer" type="date"/>`
        },

        {
            number: 5,
            title: 'How many individuals <br/> going to use the property?',
            input: `<input class="answer" type="number" placeholder="XX"/>`
        }
    ]

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

    //Load quiz
    loadQuiz(data) {
        this._qs('.current-quiz').innerHTML = data.number
        this._qs('.title').innerHTML = data.title
        this._qs('.input').innerHTML = data.input
    }//End of the loadQuiz()

    //next quiz
    nextQuiz(index) {
        if(this.state.quizCount >= index) {
            this.loadQuiz(this.quiz[index - 1])
        }
        if(index >= 5) {
            this._qs('.button').removeEventListener('click', () => {})
            this._qs('.button').innerHTML = 'Submit & Search'
        }
    }// End of nextQuiz()

    connectedCallback() {
        
        //load first quiz
        this.state.quizCount = this.quiz.length 
        this.state.quiz = 1
        this.nextQuiz(this.state.quiz++)

        //Add event listner for next button 
        this._qs('.button').addEventListener('click', () => {
            this.nextQuiz(this.state.quiz++)
        })

        // close the dock
        this.close()

    }//end of connected callback

}//End of class

window.customElements.define('questioner-comp', Questioner)
