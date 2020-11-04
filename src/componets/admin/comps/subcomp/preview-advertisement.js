import Base from '../../../Base.js'
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
                <img src="/assets/img/house.jpg" />
                <img src="/assets/img/house.jpg" />
                <img src="/assets/img/house.jpg" />
                <img src="/assets/img/house.jpg" />
                <img src="/assets/img/house.jpg" />
            </div>
            <div class="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim odio, semper at ultrices vel, imperdiet quis tortor. Nam ut mauris ac leo iaculis s
                <button class="load-more">Load more >></button>
            </div>
            <div class="row">
                <span class="price">Rs. 17,000/Month</span>
                <span class="key-money">Key Money : Rs. 34,000</span>
                <span class="minimum-period">Minimum Period: 2 Months</span>
                <span class="available-from">Available From: 2020 May 21</span>
            </div>
            <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim odio, semper at ultrices vel, imperdiet quis tortor. Nam ut mauris ac leo iaculis s
                <button class="load-more">Load more >></button>
            </div>
            <div class="facilities">
            </div>
            <div class="location">
            </div>
            <div class="row location-details">
                <span class="district">Anuradhapura</span>
                <span class="city">Eppawala</span>
                <span class="address">Address : 141, Mediyawa, Eppawala.</span>
            </div>
            <div class="row user-details">
                <span class="user"><a>View user</a></span>
                <span class="created">2020-11-03 17:46:40</span>
            </div>
            <div class="row approval">
                <div class="button approve-button">Approve</div>
                <div class="button decline-button">Decline</div>
            </div>
        </div>
    </div>
    
`
    constructor() {
        super()
        this.mount()

    }//End of the constructor

    //connectedCallback
    connectedCallback() {
        
        import('/componets/property/subcomp/facility.js')
            .then(() => {
                this._qs('.facilities').innerHTML += `
                    <facility-comp key="id" name="beds" measurable="1" checked="true"></facility-comp>
                    <facility-comp key="id" name="beds" measurable="1" checked="true"></facility-comp>
                    <facility-comp key="id" name="beds" measurable="1" checked="true"></facility-comp>
                    <facility-comp key="id" name="beds" measurable="1" checked="true"></facility-comp>
                `
            })

        this._qs('#close-popup').addEventListener('click', () => {
            this._qs('.container').style.display = 'none'
            this._qs('.backdrop').style.backgroundColor = 'transparent'
        })

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('preview-advertisement', PreviewAdvertisement)
