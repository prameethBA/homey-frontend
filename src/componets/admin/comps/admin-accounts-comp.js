import Base from '../../Base.js'
import CSS from './admin-accounts-comp.css.js'

export default class AdminAccounts extends Base {

    css = CSS

    content = `
    <div class="container">
        <div class="row">
            <span class="search-container">
                <input id="search" type="text" class="search" placeholder="Search here" />
                <label for="search">🔍</label>
                <span class="create-new" title="Create New Account">➕</span>
            </span>
        </div>
        <div class="row admins">
            
        </div>
    </div>
`

profile = `
    <div class="profile">
        <div class="sub-row">
            <img class="display-picture" src="/assets/img/1.png" />
        </div>
        <div class="sub-row">
            <span class="name">Dimuthu Lakmal</span>
            <span class="status">🟢 Active</span>
        </div>
        <div class="sub-row">
            <span class="email"><a href="mailto:lakmalepp@gmail.com">lakmalepp@gmail.com<a></span>
            <span class="mobile"><a href="callto:0775277373">077 527 7373</a></span>
        </div>
        <div class="sub-row">
            <button class="change-status">Deactivate</button>
            <button class="remove">Remove Account</button>
        </div>
    </div>
`

    constructor() {
            super()
            this.mount()

        } //End of the constructor

        //Load admin component
        loadAdmin() {
            this._qs('.admins').innerHTML += this.profile
        }//End of loadAdmin()

    // connectedCallback
    connectedCallback() {

        //Load admin component
        this.loadAdmin()
        this.loadAdmin()
        this.loadAdmin()
        this.loadAdmin()

    } //End of connectedCallback()

} //End of Class

window.customElements.define('admin-accounts-comp', AdminAccounts)