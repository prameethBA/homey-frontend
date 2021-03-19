import Base from '../Base.js'
import CSS from './notification-bar.css.js'

export default class Notification extends Base {
    css = CSS

    content = `
    <div class="notifications">
        <div class="notification">
                Notification 1
                    <div class="date">
                        Date and Time
                    </div>
        </div>
        <div class="notification">
                Notification 2
                    <div class="date">
                        Date and Time
                    </div>
        </div>
        <div class="notification">
                 Notification 3
                    <div class="date">
                        Date and Time
                    </div>
        </div>
</div>
    `

    constructor() {
        super()
        this.mount()
    } //End of the constructor
    
    
    
    //connectedCallback
    connectedCallback() {
    } //End of connectedCallback()
    } //End of Class
    
    
    
    window.customElements.define('notification-comp', Notification)