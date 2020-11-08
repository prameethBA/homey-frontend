import Base from '/componets/Base.js'
import CSS from './report-comp.css.js'

export default class Report extends Base {

    css = CSS

    content = `
    <div class="container">
        <div class="options">
            <button class="btn-approve">Reviewed Reports</button>
            <button class="btn-reject">Pending Reports</button>
        </div>
        <div class="report-comp">
            <table id="report-comp-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Discrption</th>
                        <th>Reported User ID</th>
                        <th>Property Owner ID</th>
                        <th>Reviewed</th>
                        <th>Pending</th>
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

    constructor() {
        super()
        this.mount()
        
    }//End of constructor

    //close the dock
    close() {
        this._qs('#close-popup').addEventListener('click', () => {
            this.exitDock()
        })
    }//End of the close()

    // Exit the dock
    exitDock() {
        this._qs('.backdrop').style.opacity = '0'
        this._qs('.backdrop').style.pointerEvents = 'none'
    }// End of exitDock()

    //Exit with Escape key
    exitWithEscape() {
        addEventListener('keyup', ({key}) => (key === 'Escape') ? this.exitDock() : null )
    }// End of exitWithEscape()

    connectedCallback() {

        // close the dock
        this.close()
        // Exit with escape key
        this.exitWithEscape()

    }//End of connectedCallback

}//End of Class

window.customElements.define('report-comp', Report)