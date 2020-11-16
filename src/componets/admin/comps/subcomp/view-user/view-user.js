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

            <div class="profile">
                <div class="sub-row">
                    <img class="display-picture" src="/assets/img/house.jpg" />
                </div>
                <div class="sub-row">
                    <span class="name">Prameeth Madhuwantha</span>
                    <span class="status">🟠 Unconfirmed</span>
                </div>
                <div class="sub-row">
                    <span class="email"><a href="mailto:prameethba@gmail.com">prameethba@gmail.com<a></span>
                    <span class="mobile"><a href="callto:0769802214">076 980 2214</a></span>
                </div>

                <div class="sub-row">
                    <div class="collapse collapse-1">
                        <div class="row">
                            <span> Own properties </span>
                            <span class="expand expand-1"> + </span>
                        </div>
                        <hr />
                    </div>
                    <div class="collapsible collapsible-1">
                        <div class="row collapsible-row">
                            <span class="column">property Id </span>
                            <span class="column">Title </span>
                            <span class="column">Approved Date </span>
                        </div>
                    </div>
                </div>

                <div class="sub-row">
                    <div class="collapse collapse-2">
                        <div class="row">
                            <span> Borrowed properties </span>
                            <span class="expand expand-2"> + </span>
                        </div>
                        <hr />
                    </div>
                    <div class="collapsible collapsible-2">
                        <div class="row collapsible-row">
                            <span class="column">property Id </span>
                            <span class="column">Title </span>
                            <span class="column">Borrowed Date </span>
                        </div>
                    </div>
                </div>

                <div class="sub-row button-group-user">
                    <button class="primary-button">Deactivate</button>
                    <button class="danger-button">Temporaly Block</button>
                    <button class="danger-button">Permenatly Ban</button>
                    <button class="danger-button">Make confirm contacts</button>
                </div>
            </div>

        </div>
    </div>
`
    constructor() {
        super()
        this.mount()
    } //End of constructor

    //Toggle collapse
    toggleCollapse(index) {
        let collapse = true
        this._qs(`.collapse-${index}`).addEventListener('click', () => {
            let state = this._qs(`.collapsible-${index}`)
            let expand = this._qs(`.expand-${index}`)
            if (collapse) {
                state.classList.add('collapsed')
                expand.classList.add('expanded')
            } else {
                state.classList.remove('collapsed')
                expand.classList.remove('expanded')
            }
            collapse = !collapse
        })
    } //End of toggleCollapse()

    //close the dock
    close() {
        this._qs('#close-popup').addEventListener('click', () => {
            this.exitDock()
        })
    } //End of the close()

    // Exit the dock
    exitDock() {
        this._qs('.backdrop').style.opacity = '0'
        this._qs('.backdrop').style.pointerEvents = 'none'
    } // End of exitDock()

    //Exit with Escape key
    exitWithEscape() {
        addEventListener('keyup', ({ key }) =>
            key === 'Escape' ? this.exitDock() : null
        )
    } // End of exitWithEscape()

    connectedCallback() {
        //Toggle collapse
        this.toggleCollapse(1)
        this.toggleCollapse(2)

        // close the dock
        this.close()
        // Exit with escape key
        this.exitWithEscape()
    } //End of connectedCallback
} //End of Class

window.customElements.define('view-user', ViewUser)
