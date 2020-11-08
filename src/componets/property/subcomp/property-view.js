import Base from '../../Base.js'
import CSS from './property-view.css.js'

export default class PropertyView extends Base {

    css = CSS
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
                        <div class="report">❗</div>
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
        <div id="comment-box"></div>
        <slot name="id" ></slot>
    `

    constructor() {
        super()
        this.mount()
        
    }//End of constructor


    //report component 
    async report() {
        this.setLoader()
        await import('./report/report.js')
            .then(() => {
                this._qs('#comment-box').innerHTML = `<report-comp></report-comp>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of report()

    //loadReport
    loadReport() {
        this._qs('.report').addEventListener('click', () => this.report())
    }//end of loadReport()

    //reserve component 
    async reserve() {
        this.setLoader()
        await import('./reserve/reserve.js')
            .then(() => {
                this._qs('#comment-box').innerHTML = `<reserve-comp></reserve-comp>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of reserve()

    //loadReserve
    loadReserve() {
        this._qs('.reserve').addEventListener('click', () => this.reserve())
    }//end of loadReserve()

    //load the full details about the property
    fullDetails() {
        this._qs('.more').addEventListener('click', () => {
            dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/property/propertyId`, comp: `property/property-details`, compName: 'property-details' } }))
        })
    }

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
            }
        }

        slider();

        addEventListener('start-slider', () => {
            slider()
            if(this.qsAll('img').length <= 1) this.qs('img').src = "./assets/img/alt/no-mage.png"
        })

        this._qs('.comment').addEventListener('click', async ()=> {
            import('/componets/universal/comment/comment-comp.js').then(
                this._qs('#comment-box').innerHTML = `<comment-comp></comment-comp>`
            )
        })

        
        //load report component
        this.loadReport()

        //Load the reserve component
        this.loadReserve()

        //load the full details about the property
        this.fullDetails()
        
    }//end of connected callback

}//End of class

window.customElements.define('property-view', PropertyView)
