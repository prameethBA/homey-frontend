import Base from './../Base.js'

export default class PropertyView extends Base {

    css = `
    .container {
        display: block;
        width: 300px;
        height: 420px;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
        margin: 2em;
        position: relative;
    }

    .slide {
        position: absolute;
    }
    
    .slider {
        position: absolute;
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

    .slider-previous {
        left: 0;
    }

    .slider-next {
        right: 0;
    }

    .details {
        position: absolute;
        top: 50%;
        margin: -0.5em 1em 0 1em;
    }

    ::slotted(h4) {
        height: 30px;
        padding-bottom: 0.8em;
    }

    .star img {
        width: 20px;
        opacity: 0.5;
        cursor: pointer;
    }

    .star img:hover {
        opacity: 0.9;
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
                    <span class="star"><img src="./assets/icon/start-yellow.png" /></span>
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
