import Base from '../../../Base.js'
import CSS from './preview-advertisement.css.js'

export default class PreviewAdvertisement extends Base {

    css = CSS

    content = `
    <div class="backdrop">
    </div>
    <div class="container">
        <span id="close-popup">+</span>
        saojsasjiasjajsasjas?sakskasjksj
    </div>
    
`
    constructor() {
        super()
        this.mount()

    }//End of the constructor

    //connectedCallback
    connectedCallback() {

        this._qs('#close-popup').addEventListener('click', () => {
            this._qs('.container').style.top = '-100%'
            this._qs('.backdrop').style.backgroundColor = 'transparent'
        })

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('preview-advertisement', PreviewAdvertisement)
