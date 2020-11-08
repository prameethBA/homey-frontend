import Base from '../../Base.js'
import CSS from './questioner-comp.css.js'

export default class Questioner extends Base {

    css = CSS
    content = `
        <div class="container">
            <div class="form">
                <span id="close-popup" title="close(Esc)">+</span>
                <div class="inner-form">
                    <span class="number"> <span class="current-quiz"> 1 </span> of <span class="total-quiz"> 5 </span> </span>
                    <span class="title">What are you looking for?</span>
                    <div class="input">
                        <input type='text' class="answer"/>
                    </div>
                    <button class="button button-previous">« Previous</button>
                    <button class="button button-next">Next »</button>
                </div> 
            </div>
        </div>
    `

    quiz = [
        {
            number: 1,
            title: 'What are you Looking for?',
            input: `<select class="propertyType answer"></select>`
        },

        {
            number: 2,
            title: 'Budget per Month? (Rs/Month)',
            input: `<input class="answer" placeholder="Rs. XX,XXX"/>`
        },
        
        {
            number: 3,
            title: 'Which area you preffer?',
            input: `<input list="city-list" class="area answer" placeholder="Colombo"/>`
        },

        {
            number: 4,
            title: 'From when do you want it?',
            input: `<input class="answer" type="date" value="${new Date().toISOString().slice(0, 10)}"/>`
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
            this.exitDock()
        })
    }//End of the close()

    // Exit the dock
    exitDock() {
        this._qs('.container').style.opacity = '0'
        this._qs('.container').style.pointerEvents = 'none'
    }// End of exitDock()

    //fetch property types
    async fetchPropertyTypes() {
        // API call for get property types
        await axios.get(`${this.host}/property-type`)
            .then(res => {
                let data = ''
                res.data.data.forEach(element => {
                   data += `
                        <option value="${element.property_type_id}">${element.property_type_name}</option>
                        `
                })
                this._qs('.propertyType') != null ? this._qs('.propertyType').innerHTML = data : null
                this.quiz[0].input = `<select class="propertyType"> ${data} </select>`

            })
            .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    }// End of fetchPropertyTypes()

    //fetch cities
    async fetchCities() {
        // API call for get cities
        await axios.get(`${this.host}/cities`)
            .then(res => {
                let data = ''
                res.data.forEach(city => {
                   data += `
                        <option value="${city.name}">${city._id}</option>
                        `
                })
                this._qs('.area') != null 
                    ? 
                    this._qs('.area').innerHTML += `<data-list id="city-list"> ${data} </data-list>` 
                    : null

                    this.quiz[2].input += `<datalist id="city-list"> ${data} </datalist>`

            })
            .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    }// End of fetchCities()

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
            this.state.quiz = 5
            this._qs('.button-next').addEventListener('click', () => {
                this._qs('#close-popup').click()
            })
            this._qs('.button-next').innerHTML = 'Submit & Search'
        }
    }// End of nextQuiz()

     //previous quiz
     previousQuiz(index) {
         console.log(index)
        if(index > 1) {
            this.loadQuiz(this.quiz[index - 2])
            this._qs('.button-next').innerHTML = 'Next »'
        } else this.state.quiz = 3
    }// End of previousQuiz()

    //Exit with Escape key
    exitWithEscape() {
        addEventListener('keyup', ({key}) => (key === 'Escape') ? this.exitDock() : null )
    }// End of exitWithEscape()

    connectedCallback() {

        //fetch property types
        this.fetchPropertyTypes()

        //fetch cities
        this.fetchCities()
        
        //load first quiz
        this.state.quizCount = this.quiz.length 
        this.state.quiz = 1
        this.nextQuiz(this.state.quiz++)

        //Add event listner for next button 
        this._qs('.button-next').addEventListener('click', () => {
            this.nextQuiz(this.state.quiz++)
        })

        //Add event listner for previous button 
        this._qs('.button-previous').addEventListener('click', () => {
            this.previousQuiz(this.state.quiz--)
        })

        // close the dock
        this.close()
        // Exit with escape key
        this.exitWithEscape()

    }//end of connected callback

}//End of class

window.customElements.define('questioner-comp', Questioner)
