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
                        <th>Advertisement Title</th>
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
            <div class="previous">First</div> <div class="pagination-active">1</div> <div>2</div> <div class="current">3</div> <div>4</div> <div>5</div><div class="last">Last</div>
        </div>
    </div>
    <div class="preview-advertisement"></div>
    <div class="popup"></div>
`
    constructor() {
        super()
        this.mount()
    } //End of the constructor

    // Preview advertisement
    adPreview() {
        this._qsAll('.ad-link').forEach(item => {
            item.addEventListener('click', async () => {
                this.wait(item)
                await axios
                    .post(
                        `${this.host}/admin-property-preview/pending-approval`,
                        {
                            ...this.authData(),
                            id: item.dataset.id
                        }
                    )
                    .then(async res => {
                        await import('./subcomp/preview-advertisement.js').then(
                            () => {
                                import(
                                    '/componets/property/subcomp/facility.js'
                                ).catch(err =>
                                    dispatchEvent(
                                        new CustomEvent('pop-up', {
                                            detail: {
                                                pop: 'error',
                                                msg: err.message,
                                                duration:
                                                    err.duration == undefined
                                                        ? 10
                                                        : err.duration
                                            }
                                        })
                                    )
                                )
                                import(
                                    '/componets/admin/comps/subcomp/map-view.js'
                                ).catch(err =>
                                    dispatchEvent(
                                        new CustomEvent('pop-up', {
                                            detail: {
                                                pop: 'error',
                                                msg: err.message,
                                                duration:
                                                    err.duration == undefined
                                                        ? 10
                                                        : err.duration
                                            }
                                        })
                                    )
                                )
                                let data = `
                                <preview-advertisement>
                                    <img slot='image' src="/assets/img/house.jpg" />
                                    <img slot='image' src="/assets/img/house.jpg" />
                                    <img slot='image' src="/assets/img/house.jpg" />
                                    <img slot='image' src="/assets/img/house.jpg" />
                                    <img slot='image' src="/assets/img/house.jpg" />
                                    <p slot='title'>
                                        ${res.data.title}
                                        <button class="load-more">Load more >></button>
                                    </p>
                                    <span slot="price" class="row-1 price">Rental : Rs. ${res.data.price}/Month</span>
                                    <span slot="key-money" class="row-1 key-money">Key Money : Rs. ${res.data.key_money}</span>
                                    <span slot="minimum-period" class="row-1 minimum-period">Minimum Period: ${res.data.minimum_period} Months</span>
                                    <span slot="available-from" class="row-1 available-from">Available From: ${res.data.available_from}</span>
                                    <p slot='description'>
                                        ${res.data.description}
                                        <button class="load-more">Load more >></button>
                                    </p>
                                    <div slot="facilities" class="facilities">`

                                // console.log(res.data.facilities)

                                // res.data.facilities.forEach(item => {
                                //         data += `<facility-comp key="${item.featureId}" name="${item.feature}" measurable="1" checked="true" quantity="${item.quantity}"></facility-comp>`
                                // })

                                data += `</div>
                                                <map-view slot="location" class="location" location="${encodeURIComponent(
                                                    res.data.location
                                                )}"></map-view>
                                                <div slot="location-details" class="row location-details">
                                                    <!--<span class="location-details-span district">${
                                                        res.data.district_id
                                                    }</span>-->
                                                    <span class="location-details-span city">${
                                                        res.data.city_id
                                                    }</span>
                                                    <span class="location-details-span address">Address : 141, Mediyawa, Eppawala.</span>
                                                </div>
                                                <div slot="user-details" class="row user-details">
                                                    <span class="user"><a>${
                                                        res.data.user_id
                                                    }</a></span>
                                                    <span class="created">${
                                                        res.data.created
                                                    }</span>
                                                </div>
                                            </preview-advertisement>
                                
                                        `
                                this._qs(
                                    '.preview-advertisement'
                                ).innerHTML = data
                            }
                        )
                    })
                    .catch(err => {
                        this.stopLoader()
                        dispatchEvent(
                            new CustomEvent('pop-up', {
                                detail: {
                                    pop: 'error',
                                    msg: err.message,
                                    duration:
                                        err.duration == undefined
                                            ? 10
                                            : err.duration
                                }
                            })
                        )
                    })
                this.unwit(item)
            })
        })
    } //End of adPreview()

    // get summary about pendin approvals
    async getSummary() {
        this.setLoader()
        await axios
            .post(`${this.host}/admin-property-summary/pending-approval`, {
                userId: this.getUserId(),
                token: this.getToken()
            })
            .then(res => {
                // console.log(res.data)
                // if (res.data.length < 1 || res.data.length == undefined)
                //     throw res
                let index = 1
                this._qs('#pending-approval-table-body').innerHTML = ''
                res.data.forEach(item => {
                    this._qs('#pending-approval-table-body').innerHTML += `
                        <tr>
                            <td>${index++}</td>
                            <td><a class="ad-link" data-id="${item._id}">${
                        item.title
                    }</a></td>
                            <td><a class="user-link" data-id="${
                                item.user_id
                            }">View user</a></td>
                            <td>${item.created}</td>
                            <td><button class="approve-button" data-id="${
                                item._id
                            }">Approve</button></td>
                            <td><button class="decline-button" data-id="${
                                item._id
                            }">Decline</button></td>
                        </tr>
                    `
                })
                this.adPreview()
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                console.log(err)
            })
        //load view user component
        this.loadViewUser()
        //make Approve
        this.makeApprove()
        //make Reject
        this.makeReject()
    } //End of getSummary()

    //View user account summary
    async viewUser(id) {
        this.setLoader()
        await import('./subcomp/view-user/view-user.js')
            .then(() => {
                this._qs('.popup').innerHTML = `
                <view-user
                    id="${id}"
                ></view-user>`
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
        this._qsAll('.user-link').forEach(item => {
            item.addEventListener('click', () => this.viewUser(item.dataset.id))
        })
    } //end of loadViewUser()

    //Approve
    async approve(id) {
        this.setLoader()
        try {
            const res = await axios.post(
                `${this.host}/admin-property-summary/approve`,
                {
                    ...this.authData(),
                    propertyId: id
                }
            )

            if (res.data.status == '204') {
                // get summary about pendin approvals
                this.getSummary()
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'success',
                            msg: res.data.message,
                            duration: 5
                        }
                    })
                )
            } else throw res.data
        } catch (err) {
            console.log(err)
        }
        this.stopLoader()
    } //End of approv()

    //make Approve
    makeApprove() {
        this._qsAll('.approve-button').forEach(item => {
            item.addEventListener('click', async () => {
                this.wait(item)
                await this.approve(item.dataset.id)
                this.unwait(item)
            })
        })
    } //end of makeApprove()

    //reject
    async reject(id) {
        this.setLoader()
        try {
            const res = await axios.post(
                `${this.host}/admin-property-summary/reject`,
                {
                    ...this.authData(),
                    propertyId: id
                }
            )

            if (res.data.status == '204') {
                // get summary about pendin approvals
                this.getSummary()
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'info',
                            msg: res.data.message,
                            duration: 5
                        }
                    })
                )
            } else throw res.data
        } catch (err) {
            console.log(err)
        }
        this.stopLoader()
    } //End of reject()

    //make Reject
    makeReject() {
        this._qsAll('.decline-button').forEach(item => {
            item.addEventListener('click', () => this.reject(item.dataset.id))
        })
    } //end of makeReject()

    //connectedCallback
    connectedCallback() {
        // Api call for getting the data
        this.getSummary()
    } //End of connectedCallback()
} //End of Class

window.customElements.define('pending-comp', Pendings)
