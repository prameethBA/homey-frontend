import Base from '/componets/Base.js'
import CSS from './report.css.js'

export default class Report extends Base {
    css = CSS

    content = `
    <div class="backdrop">
        <div class="report-container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="container">
                <div class="row">
                    <h1>Report</h1>
                    <p style="text-align:center;color: #ffffff;">${this.getParam(
                        'data-title'
                    )}</p>
                </div>
                <div class="row">
                    <h4 style="text-align:center">We'll make you happy as soon as possible!</h4>
                </div>
                <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input id="reason" type="text" required />
                            <label>Reason for reporting</label>
                        </div>
                    </div>
                    <div class="">
                        <div class="styled-input wide">
                            <textarea id="message" required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12">
                <button class="btn-lrg submit-btn">Submit</button>
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

    //validate data
    validate() {
        try {
            const reason = this._qs('#reason')
            const message = this._qs('#message')

            if (/^ *$|^$/.test(reason.value))
                throw { message: 'Reason cannot be empty' }
            if (/^ *$|^$/.test(message.value))
                throw { message: 'Message cannot be empty' }
            return true
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: {
                        pop: 'error',
                        msg: err.message,
                        duration: err.duration == undefined ? 10 : err.duration
                    }
                })
            )
            return false
        }
    } //End of validate()

    //listenButton
    listenButton() {
        this._qs('.submit-btn').addEventListener('click', () => {
            if (this.validate()) console.log('done')
        })
    } //End of listenButton()

    connectedCallback() {
        // close the dock
        this.close()
        // Exit with escape key
        this.exitWithEscape()
        //listenButton
        this.listenButton()
    } //End of connectedCallback
} //End of Class

window.customElements.define('report-comp', Report)
