import Base from './../Base.js'

export default class PropertyView extends Base {

    css = `
    .container {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 350px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
        margin: 2em;
    }
   
    .slide {
        position: absolute;
        padding: 0;
    }

    .slider {
        position: absolute;
        margin: 0em;
        top: 25%;
        font-size: 5em;
        background-color: transparent;
        border: none;
        z-index: 5;
        outline: none;
        cursor: pointer;
    }
   
    .slider-previous {
        left: 0.1em;
    }
           
    .slider-next {
        right: 0.1em;
    }
   
    img {
        margin:0;
        height: 200px;
        width: 100%;
        z-index: 4;
    }

    .details {
        transform: translateY(179px);
        background-color: rgba(200, 200, 200, 0.8);
        padding-bottom: 30px;
    }

    .title {
        padding: 0.1em;
    }

    .star {
        padding: 1em;
        font-size: 1.2em;
    }

    .share {
        font-weight: bold;
        position: relative;
    }
    .share:before {
        content: ".";
        font-size: 2.2em;
        position: absolute;
        bottom: -1px;
        left: -4px;
    }
    .share:after {
        content: ":";
        font-size: 2em;
        position: absolute;
        bottom: -4px;
        right: -7px;
    }

    .price {
        padding-left: 1em;
        font-weight: bold;
    }

    .description {
        margin: 0.5em 0;
        height: 5em;
        text-align: justify;
    }
    
    `
    content = `
        <div class="container">
           <div class="slide">
           <button class="slider slider-previous"><</button>
           <button class="slider slider-next">></button>
           <img src="./assets/images/desk.png">
            </img>
           </div>
           <div class="details">
                <div>
                    <slot name="title" class="title"></slot>
                    <span class="star">&starf;</span>
                    <span class="share">&lt;</span>
                    <span class="price">Rs. 17, 000</button>
                </div>
                <div class="description">
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
