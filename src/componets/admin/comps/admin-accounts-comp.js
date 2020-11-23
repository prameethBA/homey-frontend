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

    //Load admin component
    loadAdmin(admin) {
        let data = `
            <div class="profile" id="${admin.id}">
                <div class="sub-row">
                    <img class="display-picture view-profile" src="/assets/img/alt/load-post.gif" id="img-${admin.id}"/>
                </div>
                <div class="sub-row">
                    <span class="name view-profile">${admin.firstName} ${admin.lastName}</span>
                    <span class="status">`

        switch (admin.status) {
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
                    <span class="email"><a href="mailto:${admin.email}">${
            admin.email
        }<a></span>
                    <span class="mobile"><a href="callto:${admin.mobile}">${
            admin.mobile != null ? admin.mobile : 'Mobile number not updated'
        }</a></span>
                </div>
                <div class="sub-row">
                    <button class="change-status">Deactivate</button>
                    <button class="remove">Remove Account</button>
                </div>
            </div>
        `
        this._qs('.admins').innerHTML += data

        //getprofilePicture
        this.getprofilePicture(admin.id)
    } //End of loadAdmin()

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
    } //End of reserve()

    //loadNewAdminForm
    loadNewAdminForm() {
        this._qs('.create-new').addEventListener('click', () => this.newAdmin())
    } //end of loadNewAdminForm()

    // getUsers from API
    async getAdmins() {
        await axios
            .post(`${this.host}/AdminUsers/all-admins`, {
                ...this.authData()
            })
            .then(res => {
                res.data.forEach(admin => {
                    //Load Admin component
                    this.loadAdmin(admin)
                })
            })
            .catch(err => console.log(err))
    } //end of getAdmins()

    //getprofilePicture
    async getprofilePicture(userID) {
        try {
            const res = await axios.post(
                `${this.host}/images/profile/get/${userID}`,
                {
                    ...this.authData()
                }
            )
            this._qs(`#img-${userID}`).src =
                res.data.image != ''
                    ? res.data.image
                    : '/assets/img/alt/no-mage.png'
        } catch (err) {
            console.log(err)
        }
    } //End of getprofilePicture()

    // connectedCallback
    connectedCallback() {
        // getUsers from API
        this.getAdmins()

        //loadNewAdminForm
        this.loadNewAdminForm()
    } //End of connectedCallback()
} //End of Class

window.customElements.define('admin-accounts-comp', AdminAccounts)
