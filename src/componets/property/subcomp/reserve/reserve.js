import Base from '/componets/Base.js'
import CSS from './reserve.css.js'

export default class Reserve extends Base {
    css = CSS

    content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">Reserve the property</span>
                </div>
            <div class="row">
                <span id="propertyId">#y7834trry9q2eygi</span>
            </div>
            <div class="row">
                <span class="title">Boarding house in colombo</span>
            </div>
            <div class="row">
                <span class="keymoney-title">Key Money: </span>
                <span class="keymoney">Rs.21, 000</span>
            </div>
            <div class="row payment-type">
                <span class="pay-keymoney">Pay Key Money</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                <span class="pay-advance">Pay an Advance</span>
            </div>
            <hr/>
            <div class="row">
                <div class="sub-row">
                    <span class="sub-total-title">Sub Total </span>
                    <span class="sub-total">Rs.21, 000</span>
                </div>
                <div class="sub-row">
                    <span class="service-fee-title">Service Fee </span>
                    <span class="service-fee">Rs.100</span>
                </div>
                <div class="sub-row total">
                    <span class="total-title">Total </span>
                    <span class="total-price">Rs.21, 100</span>
                </div>
            </div>
            <div class="row reserve">
                <button class="reserve-button">Reserve Now!</button>
            </div>
        </div>
    </div>
`
    constructor() {
        super()
        this.mount()
    } //End of constructor

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
        // close the dock
        this.close()
        // Exit with escape key
        this.exitWithEscape()
    } //End of connectedCallback
} //End of Class

window.customElements.define('reserve-comp', Reserve)
