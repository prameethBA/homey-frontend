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
                        <button class="button-link all danger-button">All</button>
                        <button class="button-link boosted primary-button">Boosted Properties</button>
                        <button class="button-link pending primary-button">Pending Approvals</button>
                        <button class="button-link private primary-button">Private</button>
                        <button class="button-link public primary-button">Public</button>
                        <button class="button-link rejected primary-button">Rejected Properties</button>
                        <button class="button-link blocked primary-button">Blocked Properties</button>
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
            import('./subcomp/property-view.js')
            const res = await axios.post(`${this.host}/property/get/own`, {
                ...this.authData()
            })

            console.log(res)
            this._qs('.content').innerHTML = ''
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

    //listenForButtons
    listenForButtons() {
        this._qsAll('.button-link').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.remove('primary-button')
                this._qsAll('.button-link').forEach(btn => {
                    btn.classList.remove('danger-button')
                })
                item.classList.add('danger-button')
            })
        })
    } //End of listenForButtons()

    connectedCallback() {
        // Load add comps
        this.loadpropertyView()

        //listenForButtons
        this.listenForButtons()
    } //End of connectedCallback()
} //End of the class

window.customElements.define('own-properties', OwnProperties)
