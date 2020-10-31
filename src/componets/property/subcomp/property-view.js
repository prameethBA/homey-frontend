import Base from '../../Base.js'

export default class PropertyView extends Base {

    css = `
    .container {
        border: solid 1px;
        position: relative;
        min-width: 300px;
        width: 30%;
        margin: 2rem;
        min-height: 450px;
        height: 26rem;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 2px rgba(36,31,135,0.7);
    }

    .slider {
        position: absolute;
        opacity: 0.5;
        cursor: pointer;
        transition: 0.5s;
        transform: translateY(100%);
    }

    .slider:hover {
        opacity: 0.7;
        transition: 0.1s;

    }

    .slider:active {
        opacity: 0.9;
    }

    .slider-next {
        right: 1%;
    }
    
    .slider-previous {
        left: 1%;
    }

    ::slotted(img) {
        display: none;
        width: 100%;
        max-height: 210px;
        min-height: 210px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    ::slotted(.title) {
        font-weight: bold;
        padding: 0 0.4rem 0 0.4rem;
        height: 3.5rem;
        text-align: justify;
        overflow: hidden;
        word-break: break-word;
        margin: 0;
    }

    .details > div:first-child > span {
        position: absolute;
        right: 0;
        left: 0;
        display: grid;
        grid-template-columns: 15% 20% auto;
    }

    .star {
        background: url(./assets/icon/start-yellow.png);
        width: 35px;
        height: 35px;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin: 0.5rem auto 0 0.5rem;
    }

    .share {
        background: url(./assets/icon/share.png);
        width: 35px;
        height: 35px;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin: 0.5rem auto 0 0.5rem;
    }

    ::slotted(.price) {
        position: absolute;
        right: 1rem;
        font-weight: bold;
    }

    ::slotted(.description) {
        padding: 0.5rem;
        margin-top: 2.5rem;
        height: 4.5rem;
        overflow: hidden;
        word-break: break-word;
    }

    button {
        width: 30%;
        display: inline-block;
        height: 2em;
        border-radius: 25px;
        outline: none;
        border: none;
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: -1rem;
        transition: all 1s;
    }
   
    button:hover{
        color: #000000;
    }

    .comment {
        background-image: linear-gradient(to right top, #627e05, #6e8116, #7a8423, #84872f, #8e8a3a);
    }

    .reserve {
        background-image: linear-gradient(to right top, #ff8700, #ff8100, #ff7a00, #ff7400, #ff6d00);
    }

    .more {
        background-image: linear-gradient(to right top, #0fb5af, #0dc7c0, #0ad9d2, #06ece4, #00fff6);
        color: #777777;
    }

    .buttons {
        display: inline;
        padding-left: 0.75rem;
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
                    <span>
                        <div class="star"></div>
                        <div class="share"></div>
                        <slot name="price"></slot>
                    </span>
                </div>
                <slot name="description" class="description"></slot>
                <div class='buttons'>
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
        
    }//End of constructor

    connectedCallback() {

        const slider = () => {
            if( this.qsAll('img').length > 1) {
                this.state.img = 0;
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
            } else if(this.qsAll('img').length <= 1) this.qs('img').src = "./assets/img/alt/no-mage.png"
        }

        slider();

        addEventListener('start-slider', () => slider())

    }//end of connected callback

}//End of class

window.customElements.define('property-view', PropertyView)
