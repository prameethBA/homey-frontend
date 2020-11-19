import Base from '../Base.js'
import CSS from './own-properties.css.js'

export default class OwnProperties extends Base {
    css = CSS

    content = `
        <div id="container">
            <div class="row">
                <span class="search-container">
                    <input id="search" type="text" class="search" placeholder="Search here" />
                    <label for="search">🔍</label>
                    </span>
                    <div class="button-group">
                        <button class="blocked danger-button">Blocked Properties</button>
                        <button class="pending primary-button">Pending Approvals</button>
                        <button class="rejected danger-button">Rejected Properties</button>
                        <button class="private primary-button">Private</button>
                        <button class="public primary-button">Public</button>
                        <button class="boosted danger-button">Boosted Properties</button>
                    </div>
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
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
    } //End of the constructor

    // Load add comps
    async loadpropertyView() {
        this.setLoader()
        try {
            import('./subcomp/property-view.js')
            const res = await axios.post(`${this.host}/property/get/own`, {
                userId: this.getUserId(),
                token: this.getToken()
            })

            res.data.forEach(item => {
                this._qs('.content').innerHTML += `
                    <property-view 
                        id="${item.property_id}"
                        data-data="${this.encode(item)}"
                        overview='true'
                    >
                    </property-view>
                `
            })
        } catch (err) {
            console.log(err)
        }
        this.stopLoader()
    } //End of loadpropertyView()

    connectedCallback() {
        // Load add comps
        this.loadpropertyView()
    } //End of connectedCallback()
} //End of the class

window.customElements.define('own-properties', OwnProperties)
