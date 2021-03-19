import Base from '/componets/Base.js'
import CSS from './report-comp.css.js'

export default class Report extends Base {
    css = CSS

    content = `
    <div class="container">
        <div class="report-comp">
            <table id="report-comp-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Report type</th>
                        <th>Reporter</th>
                        <th>Property</th>
                        <th>Reporting</th>
                        <th>Review</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody id="report-comp-table-body">
                </tbody>
            </table>
            </div>
        </div>
        <div class="pagination">
            <div class="previous">First</div> <div class="pagination-active">1</div> <div>2</div> <div class="current">3</div> <div>4</div> <div>5</div><div class="last">Last</div>
        </div>
    <div class="preview-advertisement"></div>
    `

    constructor() {
        super()
        this.mount()
    } //End of constructor

    // load rows
    async loadRow() {
        this.setLoader()
        try {
            const res = await axios.post(`${this.host}/feedback/report/all`, {
                ...this.authData()
            })

            res.data.forEach(item => {
                this._qs('#report-comp-table-body').innerHTML += `
                    <tr>
                        <td>${item._id}</td>
                        <td>${item.reason}</td>
                        <td><a href="#${item.user_id}">User</a></td>
                        <td><a href="#${item.property_id}">Property</a></td>
                        <td>${item.message}</td>
                        <td>
                            <button class='primary-button'>Review</button>
                        </td>
                        <td>${item.created}</td>
                    </tr>
                `
            })
        } catch (err) {
            console.log(err)
        }
        this.stopLoader()
    } //End loadRow()

    // //close the dock
    // close() {
    //     this._qs('#close-popup').addEventListener('click', () => {
    //         this.exitDock()
    //     })
    // }//End of the close()

    // // Exit the dock
    // exitDock() {
    //     this._qs('.backdrop').style.opacity = '0'
    //     this._qs('.backdrop').style.pointerEvents = 'none'
    // }// End of exitDock()

    // //Exit with Escape key
    // exitWithEscape() {
    //     addEventListener('keyup', ({key}) => (key === 'Escape') ? this.exitDock() : null )
    // }// End of exitWithEscape()

    connectedCallback() {
        // load rows
        this.loadRow()

        // // close the dock
        // this.close()
        // // Exit with escape key
        // this.exitWithEscape()
    } //End of connectedCallback
} //End of Class

window.customElements.define('report-comp', Report)
