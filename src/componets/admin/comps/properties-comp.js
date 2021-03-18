import Base from './../../Base.js'
import CSS from './properties-comp.css.js'

export default class properties extends Base {
    css = CSS

    notFound = `
        <div class="notFound">
            <h1> No Properties Found!</h1>
        </div>
    `

    content = `
        <div id="container">
            <div class="row">
                <span class="search-container">
                    <input id="search" type="text" class="search" placeholder="Search here" />
                    <label for="search">🔍</label>
                    </span>
                    <div class="button-group">
                        <button class="reported danger-button">Reported Properties</button>
                        <button class="pending primary-button">Pending Approvals</button>
                        <button class="rejected danger-button">Rejected Properties</button>
                    </div>
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
        </div>
        <div class="pagination">
            <div class="previous">First</div> <div class="pagination-active">1</div> <div>2</div> <div class="current">3</div> <div>4</div> <div>5</div><div class="last">Last</div>
        </div>
        <div id="questioner">
        </div>
    `

    constructor() {
        super()
        this.mount()
    } //End of the constructor

    // Load add comps
    async loadpropertyView() {
        this.setLoader()
        try {
            import('./../../property/subcomp/property-view.js')
            const page = 1
            const limit = 12

            const res = await axios.get(
                `${this.host}/property/all/${limit}/${page}`
            )

            if (res.data.length < 1) {
                this._qs('.content').innerHTML = this.notFound
            } else {
                res.data.forEach(item => {
                    this._qs('.content').innerHTML += `
                    <property-view 
                    id="${item._id}"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `
                })
                this._qs('#pagination').innerHTML = this.pagination
            }
        } catch (err) {
            console.log(err)
        }
        this.stopLoader()
    } //End of loadpropertyView()

    //connectedCallback
    connectedCallback() {
        // Load add comps
        this.loadpropertyView()
    } //End of connectedCallback()
} //End of Class

window.customElements.define('properties-comp', properties)
