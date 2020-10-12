import Base from './../Base.js'

export default class PropertyView extends Base {

    css = `
        .container {
            border: solid 1px black;
            display: inline-block;
            width: 20%;
            padding: 1em;
            margin: 1em;
        }

        .slide {
            padding: 0;
            box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
        }

        .slider {
            position: absolute;
            margin: 0.5em;
            top: 25%;
            font-size: 5em;
        }

        .slider-previous {

        }
        
        .slider-next {
            right: 1.5em;
        }

        img {
            margin:0;
            width: 100%;
        }
    
    `
    content = `
        <div class="container">
           <div class="slide">
            <button class="slider slider-previous"><</button>
            <button class="slider slider-next">></button>
            <img src="./assets/images/desk.png">
           </div>
           <div>
            <div>
                <h3>Title</h3>
                <span>Star</span>
                <span>Share</span>
                <button>Pricegdsai</button>
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
