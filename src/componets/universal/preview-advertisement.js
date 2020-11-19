import Base from '/componets/Base.js'
import CSS from './preview-advertisement.css.js'

export default class PreviewAdvertisement extends Base {
    css = CSS

    content = `
    <div class="backdrop">
    </div>
    <div class="container">
        <span id="close-popup">+</span>
        <div class="advertisement">
            <div class="images">
                <slot name="image"></slot>
            </div>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="row">
                <slot name="price"></slot>
                <slot name="key-money"></slot>
                <slot name="minimum-period"></slot>
                <slot name="available-from"></slot>
            </div>
            <div class="description">
                <slot name="description"></slot>
            </div>
            <slot name="facilities"></slot>
            <slot name="location"></slot>
            <slot name="location-details"></slot>
            <slot name="user-details"></slot>
            <div class="row approval">
                <div class="button approve-button">Post the advertisement</div>
                <div class="button decline-button">edit</div>
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
        this._qs('#close-popup').addEventListener('click', () => {
            this._qs('.container').style.display = 'none'
            this._qs('.backdrop').style.backgroundColor = 'transparent'
        })

        this._qs('.approve-button').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('upload-advertisement', {
                    detail: { userId: this.getUserId() }
                })
            )
        )
        this._qs('.decline-button').addEventListener('click', () => {
            this._qs('.container').style.display = 'none'
            this._qs('.backdrop').style.backgroundColor = 'transparent'
        })
    } //End of connectedCallback()
} //End of Class

const elementName = 'preview-advertisement'
customElements.get(elementName) == undefined
    ? window.customElements.define(elementName, PreviewAdvertisement)
    : null
