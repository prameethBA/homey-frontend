import Base from './../../Base.js'
import CSS from './pending-comp.css.js'

export default class Pendings extends Base {

    css = CSS

    content = `
    <div class="container">
        <div class="pending-approval">
            <table id="pending-approval-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Advertisement</th>
                        <th>User</th>
                        <th>Posted on</th>
                        <th>Approve</th>
                        <th>Decline</th>
                    </tr>
                </thead>
                <tbody id="pending-approval-table-body">
                    
                </tbody>
            </table>
            </div>
            <div class="pagination">
                <a class="previous">First</a> | <a>1</a> | <a>2</a> | <a class="current">3</a> | <a>4</a> | <a>5</a> |<a class="last">Last</a>
            </div>
    </div>
`
    constructor() {
        super()
        this.mount()

    }//End of the constructor

    // Preview advertisement
    adPreview() {
        this._qsAll('.ad-link').forEach(item => {
            item.addEventListener('click', async () => {
                this.setLoader()
                await axios.post(`${this.host}/admin-property-preview/pending-approval`, {
                    userId: this.getUserId(),
                    token: this.getToken()
                })
                .then(res => {
                    console.log(res.data)
                    this.stopLoader()
                })
                .catch(err => {
                    this.stopLoader()
                    dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
                })
            })
        })
    }//End of adPreview()

    async getSummary() {
        this.setLoader()
        await axios.post(`${this.host}/admin-property-summary/pending-approval`, {
            userId: this.getUserId(),
            token: this.getToken()
        })
            .then(res => {
                let index = 1
                res.data.forEach(item => {
                    this._qs('#pending-approval-table-body').innerHTML += `
                        <tr>
                            <td>${index++}</td>
                            <td><a class="ad-link" data-id="${item._id}">${item.title}</a></td>
                            <td><a class="user-link" data-id="${item._id}">View user</a></td>
                            <td>${item.created}</td>
                            <td><button class="approve-button" data-id="${item._id}">Approve</button></td>
                            <td><button class="decline-button" data-id="${item._id}">Decline</button></td>
                        </tr>
                    `
                })
                this.adPreview()
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }

    

    //connectedCallback
    connectedCallback() {
        // Api call for getting the data 
        this.getSummary()

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('pending-comp', Pendings)
