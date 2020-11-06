import Base from './../../Base.js'
import CSS from './properties-comp.css.js'

export default class properties extends Base {

    css = CSS

    content = `
    <div class="container">
        <div class="options">
            <button class="btn-approve">Approved Properties</button>
            <button class="btn-reject">Rejected Properties</button>
        </div>
        <div class="properties-comp">
            <table id="properties-comp-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Advertisement Title</th>
                        <th>User</th>
                        <th>Posted on</th>
                        <th>Approve</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody id="properties-comp-table-body">
                    
                </tbody>
            </table>
            </div>
            <div class="pagination">
                <a class="previous">First</a> | <a>1</a> | <a>2</a> | <a class="current">3</a> | <a>4</a> | <a>5</a> |<a class="last">Last</a>
            </div>
        </div>
    <div class="preview-advertisement"></div>
`
    constructor() {
            super()
            this.mount()

        } //End of the constructor

    // Preview advertisement
    adPreview() {
            this._qsAll('.ad-link').forEach(item => {
                item.addEventListener('click', async() => {
                    this.setLoader()
                    await axios.post(`${this.host}/admin-property-preview/pending-approval`, {
                            userId: this.getUserId(),
                            token: this.getToken(),
                            id: item.dataset.id
                        })
                        .then(async res => {
                            await
                            import ('./subcomp/preview-advertisement.js')
                            .then(() => {
                                this._qs('.preview-advertisement').innerHTML = `
                                <preview-advertisement>
                                    <img slot='image' src="/assets/img/house.jpg" />
                                    <p slot='title'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim odio, semper at ultrices vel, imperdiet quis tortor. Nam ut mauris ac leo iaculis s
                                        <button class="load-more">Load more >></button>
                                    </p>
                                    <span slot="price" class="price">Rs. 17,000/Month</span>
                                    <span slot="key-money" class="key-money">Key Money : Rs. 34,000</span>
                                    <span slot="minimum-period" class="minimum-period">Minimum Period: 2 Months</span>
                                    <span slot="available-from" class="available-from">Available From: 2020 May 21</span>
                                </preview-advertisement>
                            `
                                console.log(res.data)
                            })
                            this.stopLoader()
                        })
                        .catch(err => {
                            this.stopLoader()
                            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
                        })
                })
            })
        } //End of adPreview()

    // get summary about pendin approvals
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
        } //End of getSummary()



    //connectedCallback
    /*
    connectedCallback() {
            // Api call for getting the data 
            this.getSummary()

        } //End of connectedCallback()
    */
} //End of Class

window.customElements.define('properties-comp', properties)