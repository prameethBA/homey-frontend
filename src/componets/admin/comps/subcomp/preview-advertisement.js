import Base from '../../../Base.js'
import CSS from './preview-advertisement.css.js'

export default class PreviewAdvertisement extends Base {

    css = CSS

    content = `
    <div class="container">
        
    </div>
`
    constructor() {
        super()
        this.mount()

    }//End of the constructor

    //connectedCallback
    connectedCallback() {

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('preview-advertisement', PreviewAdvertisement)
