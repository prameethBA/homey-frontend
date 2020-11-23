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
        <div class="pagination">
            <div class="previous">First</div> <div class="pagination-active">1</div> <div>2</div> <div class="current">3</div> <div>4</div> <div>5</div><div class="last">Last</div>
        </div>
    </div>

    <div class="popup"></div>
    `

    constructor() {
        super()
        this.mount()
    } //End of the constructor

    //Load user component
    loadUser(user) {
        let data = `
            <div class="profile">
                <div class="sub-row">
                    <img class="display-picture view-profile" src="/assets/img/alt/no-mage.png" />
                </div>
                <div class="sub-row">
                    <span class="name view-profile">${user.firstName} ${user.lastName}</span>
                    <span class="status">`

        switch (user.status) {
            case '0':
                data += `🟠 Unconfirmed`
                break
            case '1':
                data += `🟢 Confirmed`
                break
            default:
                data += `🔴 Invalid User`
                break
        }

        data += `</span>
                </div>
                <div class="sub-row">
                    <span class="email"><a href="mailto:${user.email}">${
            user.email
        }<a></span>
                    <span class="mobile"><a href="callto:${user.mobile}">${
            user.mobile != null ? user.mobile : 'Mobile number not updated'
        }</a></span>
                </div>
                <div class="sub-row button-group-user">
                    <button class="primary-button">Deactivate</button>
                    <button class="danger-button">Temporaly Block</button>
                    <button class="danger-button">Permenatly Ban</button>
                    <button class="danger-button">Make confirm contacts</button>
                </div>
            </div>
        `
        this._qs('.users').innerHTML += data
    } //End of loadUser()

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
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg: err.message,
                            duration:
                                err.duration == undefined ? 10 : err.duration
                        }
                    })
                )
            })
    } //End of viewUser()

    //load view user component
    loadViewUser() {
        this._qsAll('.view-profile').forEach(item => {
            item.addEventListener('click', () => this.viewUser())
        })
    } //end of loadViewUser()

    // getUsers from API
    async getUsers() {
        await axios
            .post(`${this.host}/AdminUsers/all-users`, {
                userId: this.getUserId(),
                token: this.getToken()
            })
            .then(res => {
                res.data.forEach(user => {
                    //Load user component
                    this.loadUser(user)

                    //loadViewUser
                    this.loadViewUser()
                })
            })
            .catch(err => console.log(err))
    } //end of getUsers()

    // connectedCallback
    connectedCallback() {
        // getUsers from API
        this.getUsers()
    } //End of connectedCallback()
} //End of Class

window.customElements.define('users-comp', users)
