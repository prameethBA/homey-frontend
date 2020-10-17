import Base from './../Base.js'

export default class PropertyView extends Base {

    ccss = `
    .container {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 433px;
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
        border: none;
        padding: 0;
        z-index: 5;
        outline: none;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.7);
        background-color: rgba(0, 0, 0, 0.2);
        transition: 1s;
    }

    .slider:hover {
        color: rgba(255, 255, 255, 0.9);
        background-color: rgba(0, 0, 0, 0.5);
    }
    .slider:active {
        outline: solid rgba(255, 255, 255, 0.1) 5px;
    }
   
    .slider-previous {
        left: 0.1em;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }
           
    .slider-next {
        right: 0.1em;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }
   
    .img img {
        margin:0;
        height: 200px;
        width: 100%;
        z-index: 4;
        display: none;
    }

    .details {
        transform: translateY(179px);
        background-color: rgba(200, 200, 200, 0.8);
        padding-bottom: 30px;
    }

    .title {
        padding: 0.1em;
    }

    span {
        margin: auto;
    }

    .star {
        padding: 1em;
        font-size: 1.2em;
        color: #ffffff;
        cursor: pointer;
        transition: 1s;
    }

    .star:hover {
        color: yellow;
    }

    .share {
        font-weight: bold;
        position: relative;
        cursor: pointer;
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
        margin: 0.5em;
        height: 5em;
        text-align: justify;
    }

    button {
        font-weight: bold;
        font-size: 1.1em;
        border:none;
        border-radius: 2px;
        padding: 0.3em;
        display: inline;
        margin:0.1em;
        color: #eeeeee;
        cursor: pointer;
    }

    .comment {
        background-color: rgba(4, 47, 102, 0.8);
    }

    .reserve {
        background-color: rgba(223, 73, 40, 0.8);
    }

    .more {
        background-color: rgba(12, 164, 44, 0.8);
    }
    
    `
     
    css = `
    .container {
        display: block;
        width: 300px;
        height: 420px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
        margin: 2em;
        position: relative;
    }

    .slide, .slider {
        position: absolute;
    }

    .slider {
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.5;
        cursor: pointer;
        transition: 0.5s;
    }

    .slider:hover {
        opacity: 0.7;
        transition: 0.1s;

    }

    .slider:active {
        opacity: 0.9;
    }

    .slider-next {
        right: 0;
    }

    `
    content = `
        <div class="container">
           <div class="slide">
                <img class="slider slider-previous" src="./assets/icon/slide-previous.svg">
                <img class="slider slider-next" src="./assets/icon/slide-next.svg">
                <slot name="thumbnail" class="thumbnail"></slot>
           </div>
           <div class="details">
                <div>
                    <slot name="title" class="title"></slot>
                    <span class="star">&starf;</span>
                    <span class="share">&lt;</span>
                    <span class="price">Rs. 17, 000</button>
                </div>
                <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
                </div>
                <div>
                    <button class="comment">Comment</button>
                    <button class="reserve">Reserve</button>
                    <button class="more">More >></button>
                </div>
           </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
    }

    connectedCallback() {

        if( this.qsAll('img').length > 1) {
                this.state.img = 1;
                this.state.rootImg = 0
        
                const slideNext = ()=> {
                        this.qsAll('img')[this.state.img].style.display = 'none'
                        this.qsAll('img').length - 1 > this.state.img ? this.state.img++ : this.state.img = this.state.rootImg
                        this.qsAll('img')[this.state.img].style.display = 'block'
                }
        
                const slidePrevious = ()=> {
                    this.qsAll('img')[this.state.img].style.display = 'none'
                    this.state.rootImg < this.state.img ? this.state.img-- : this.state.img = this.qsAll('img').length - 1 
                    this.qsAll('img')[this.state.img].style.display = 'block'
                }
        
                this._qs('.slider-previous').addEventListener('click', () => {slidePrevious()})
                this._qs('.slider-next').addEventListener('click', () => {slideNext()})
                this._qs('.slider-previous').click();
                this.state.rootImg = 1
        
                let autoSlide = setInterval(() => slideNext(),5000)
        }
        
    }

}

window.customElements.define('property-view', PropertyView)
