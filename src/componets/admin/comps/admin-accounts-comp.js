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
                <button class="create-new" title="Create New Account">Create New Admin</button>
            </span>
        </div>
        <div class="row admins">
        </div>
    </div>

    <div class="popup"></div>
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

    //Add new admin component 
    async newAdmin() {
        this.setLoader()
        await import('./subcomp/new-admin/add-new-admin.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<add-new-admin></add-new-admin>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of reserve()

    //loadNewAdminForm
    loadNewAdminForm() {
        this._qs('.create-new').addEventListener('click', () => this.newAdmin())
    }//end of loadNewAdminForm()

    // connectedCallback
    connectedCallback() {

        //Load admin component
        this.loadAdmin()
        this.loadAdmin()
        this.loadAdmin()
        this.loadAdmin()

        //loadNewAdminForm
        this.loadNewAdminForm()

    } //End of connectedCallback()

} //End of Class

window.customElements.define('admin-accounts-comp', AdminAccounts)