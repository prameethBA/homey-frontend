import Base from '../Base.js'
import CSS from './available-property.css.js'

export default class AvalibaleProperty extends Base {

    css = CSS

    content = `
    <div id="container">
    </div>
    <div class="pagination">
        <a class="previous">First</a> | <a>1</a> | <a>2</a> | <a class="current">3</a> | <a>4</a> | <a>5</a> |<a class="last">Last</a>
    </div>
    <div id="questioner">
    </div>
    `

    constructor() {
        super()
        this.mount()

        // load Questioner
        this.loadQuestioner()

        //Load ad preview cards
        this.loadpropertyView()
        
    }//end of constructor
    
    // load questioner
    async loadQuestioner() {
        this.setLoader()
        await import('./subcomp/questioner-comp.js')
            .then(() => {
                this._qs('#questioner').innerHTML = `<questioner-comp></questioner-comp>`
                this.stopLoader()
            })
            .catch(err => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
                this.setLoader()
            })

    }//End of loadQuestioner

    // Load add comps 
    async loadpropertyView() {
        this.setLoader()
        await import('./subcomp/property-view.js')
            .then(() => {
                this.state.page = 1
                this.state.limit = 12
        
                for (let index = 0; index < this.state.limit; index++) {
                    this._qs('#container').innerHTML += `
                            <property-view id="id-${index}" key="${index}">
                                <img slot="thumbnail" class="thumbnail" src="./assets/img/alt/load-post.gif" style="display: block !important;"/>
                                <p slot="title" class=" title title-${index}">Boarding place at Colombo</p>
                                <p slot="price" class=" price price-${index}">Price</p>
                                <p slot="description" class=" description description-${index}">Description</p>
                                <input class="id id-${index}" type="hidden" slot="id" value=""/>
                            </property-view>
                        `
                }
                this.stopLoader()
            })
            .catch(err => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
                this.setLoader()
            })

    }//End of loadpropertyView()
    
   connectedCallback() {

    const fetchAdds = async (limit, page, find='find') => {
        this.setLoader()
        this.state.ids = []
        await axios.get(`${this.host}/property/all/${limit}/${page}`)
            .then(async res => {
                    res.data.forEach((item, index) =>{
                    this.stopLoader()
                    this.state.ids.push(item._id)
                    // this._qs(`#id-${index}`).id = item._id
                    this._qs(`.title-${index}`).innerHTML  = item.title
                    this._qs(`.price-${index}`).innerHTML  = 'Rs.' + item.price.replace(/\B(?=(\d{3})+(?!\d))/, ",")
                    this._qs(`.description-${index}`).innerHTML  = item.description                
                    this._qs(`.id-${index}`).value  = item._id                
                })

                for (let index = res.data.length; index < this.state.limit; index++) {
                    this._qs(`#id-${index}`).shadowRoot.innerHTML = ''
                }
                
                await axios.post(`${this.host}/images/property`,{'ids':this.state.ids})
                    .then(res => {
                        res.data.forEach((id, index) => {
                            id.images.forEach(image => {
                                this._qs(`#id-${index}`).innerHTML += `<img slot="thumbnail" class="thumbnail" src="${image.image}" />`
                            })
                        })
                        dispatchEvent(new Event('start-slider'))
                    })
                })
                .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
        }
        
        // fetchAdds(10, 0)
        
    }//End of connected callback

}//End of Class

window.customElements.define('available-property', AvalibaleProperty)
