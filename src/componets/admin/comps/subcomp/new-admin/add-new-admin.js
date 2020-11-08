import Base from '/componets/Base.js'
import CSS from './add-new-admin.css.js'

export default class AddNewAdmin extends Base {

    css = CSS

    content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">Add new admin to the system</span>
            </div>
        </div>
    </div>
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

window.customElements.define('add-new-admin', AddNewAdmin)
