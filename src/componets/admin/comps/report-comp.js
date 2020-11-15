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
                        <th>Reporting</th>
                        <th>Review</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody id="report-comp-table-body">
                </tbody>
            </table>
            </div>
            <div class="pagination">
                <a class="previous">First</a> | <a>1</a> | <a>2</a> | <a class="current">3</a> | <a>4</a> | <a>5</a> |<a class="last">Last</a>
            </div>
        </div>
    <div class="preview-advertisement"></div>
    `

    row = `
        <tr>
            <td>1</td>
            <td>User Report</td>
            <td>#userId</td>
            <td>#userId</td>
            <td>2020 Nov 10, 10:44:16</td>
            <td><button class="primary-button">Review</button></td>
        </tr>
    `

    constructor() {
        super()
        this.mount()
    } //End of constructor

    // load rows
    loadRow() {
        this._qs('tbody').innerHTML += this.row
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
        this.loadRow()
        this.loadRow()
        this.loadRow()

        // // close the dock
        // this.close()
        // // Exit with escape key
        // this.exitWithEscape()
    } //End of connectedCallback
} //End of Class

window.customElements.define('report-comp', Report)
