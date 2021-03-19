import Base from '../Base.js'
import CSS from './favourite.css.js'
import '/componets/universal/pagination/pagination.js'

export default class Favourite extends Base {
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
                    <span class="title">Favourite Properties</span>
                    <input id="search" type="text" class="search" placeholder="Search here" />
                    <label for="search">🔍</label>
                    </span>
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
        </div>
        <div class="pagination">
            <pagination-comp></pagination-comp>
        </div>
        <div id="questioner">
        </div>
    `

    pagination = `
        <pagination-comp></pagination-comp>
        `
    constructor() {
        super()
        this.mount()
    } //End of the constructor

    // Load add comps
    async loadpropertyView() {
        this.setLoader()
        this.wait('.content')
        try {
            import('./subcomp/property-view.js')
            const res = await axios.post(
                `${this.host}/property/favourite/getAll`,
                {
                    ...this.authData()
                }
            )

            if (res.data.length < 1) {
                this._qs('#container').innerHTML = this.notFound
            } else {
                this._qs('.content').innerHTML = ''
                res.data.forEach(item => {
                    this._qs('.content').innerHTML += `
                    <property-view 
                    id="${item.property_id}"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `
                })
            }
        } catch (err) {
            console.log(err)
            this.unwait('.content')
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

window.customElements.define('favourite-comp', Favourite)
