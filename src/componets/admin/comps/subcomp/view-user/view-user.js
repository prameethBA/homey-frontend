import Base from '/componets/Base.js'
import CSS from './view-user.css.js'

export default class ViewUser extends Base {

    css = CSS

    content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">User Profile</span>
            </div>
            <div class="form">
                <div class="form-row">
                    <div class="form-column">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" value="" />
                    </div>
                    <div class="form-column">
                        <label for="LastName">First Name</label>
                        <input type="text" id="LastName" value="" />
                    </div>
                </div>
                <div class="form-column">
                    <label for="email">Email <span class="require" title="Required">*</span></label>
                    <input type="email" id="email" value="" />
                </div>
                <div class="form-column">
                    <label for="nic">NIC</label>
                    <input type="text" id="nic" value="" />
                </div>
                <div class="form-row">
                        <button id="create">Add New Admin</button>
                        <button id="cancel">Cancel</button>
                </div>
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

window.customElements.define('view-user', ViewUser)
