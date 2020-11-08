import Base from './../../Base.js'
import CSS from './users-comp.css.js'

export default class users extends Base {

    css = CSS

    content = `
    <div class="container">
        <div class="row">
            <span class="search-container">
                <input id="search" type="text" class="search" placeholder="Search here" />
                <label for="search">🔍</label>
                </span>
                <div class="button-group">
                    <button class="reported danger-button">Reported users</button>
                    <button class="unconfiremed primary-button">Unconfiremed Users</button>
                    <button class="banned danger-button">Banned Users</button>
                    <button class="deactivated primary-button">Deactivated Users</button>
                    <button class="deleted danger-button">Deleted Users</button>
                </div>
        </div>
        <div class="row users">
        </div>
    </div>

    <div class="popup"></div>
    `

    profile = `
    <div class="profile">
        <div class="sub-row">
            <img class="display-picture" src="/assets/img/house.jpg" />
        </div>
        <div class="sub-row">
            <span class="name">Prameeth Madhuwantha</span>
            <span class="status">🟠 Unconfirmed</span>
        </div>
        <div class="sub-row">
            <span class="email"><a href="mailto:prameethba@gmail.com">prameethba@gmail.com<a></span>
            <span class="mobile"><a href="callto:0769802214">076 980 2214</a></span>
        </div>
        <div class="sub-row button-group-user">
            <button class="primary-button">Deactivate</button>
            <button class="danger-button">Temporaly Block</button>
            <button class="danger-button">Permenatly Ban</button>
            <button class="danger-button">Make confirm contacts</button>
        </div>
    </div>
 `
    constructor() {
            super()
            this.mount()

        } //End of the constructor

    //Load user component
    loadUser() {
        this._qs('.users').innerHTML += this.profile
    }//End of loadUser()

    //View user account summary 
    async viewUser() {
        this.setLoader()
        await import('./subcomp/view-user/view-user.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<view-user></view-user>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of viewUser()

    //load view user component
    loadViewUser() {
        this._qsAll('.profile').forEach(item => {
            item.addEventListener('click', () => this.viewUser())
        })
    }//end of loadViewUser()

    // connectedCallback
    connectedCallback() {

        //Load user component
        this.loadUser()
        this.loadUser()
        this.loadUser()
        this.loadUser()

        //loadViewUser
        this.loadViewUser()

    } //End of connectedCallback()

} //End of Class

window.customElements.define('users-comp', users)