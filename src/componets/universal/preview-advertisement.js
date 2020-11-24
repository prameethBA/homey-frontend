import Base from '/componets/Base.js'
import CSS from './preview-advertisement.css.js'

import './../property/subcomp/facility.js'

export default class PreviewAdvertisement extends Base {
    css = CSS

    content = `
    <div class="backdrop">
    <div class="container">
        <span id="close-popup" title="close(Esc)">+</span>
        <div class="advertisement">
            <div class="images">
            </div>
            <div class="title">
            </div>
            <div class="row">
                <div class="price"></div>
                <div class="key-money"></div>
                <div class="minimum-period"></div>
                <div class="available-from"></div>
            </div>
            <div class="description">
                <div class="description"></div>
            </div>
            <div class="facilities"></div>
            <div class="location row"></div>
            <div class="location-details row"></div>
            <div class="user-details row"></div>
            <div class="row approval">
                <div class="button approve-button">Post the advertisement</div>
                <div class="button decline-button">edit</div>
            </div>
        </div>
    </div>
</div>
    
`
    constructor() {
        super()
        this.mount()

        this.state = this.getParams('data-data')
    } //End of the constructor

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

    //inject Data
    async inejectData() {
        this.state.images.forEach(item => {
            this._qs('.images').innerHTML += `
                <img src="${item}" class="image" alt="Preview uploaded image">
            `
        })

        this._qs('.title').innerHTML =
            this.state.propertyType + ' | ' + this.state.title
        this._qs('.price').innerHTML =
            'Rental : <a> Rs.' + this.state.price + '</a>'
        this._qs('.key-money').innerHTML =
            'Key Money: <a> Rs.' + this.state.keyMoney + '</a>'
        this._qs('.available-from').innerHTML =
            'Avalible from: <a>' + this.state.availableFrom + '</a>'

        this._qs('.description').innerHTML = this.state.description

        this.state.facilities.forEach(item => {
            this._qs('.facilities').innerHTML += `
                <facility-comp 
                    key="${item.featureId}" 
                    name="${item.feature}" 
                    ${
                        item.quantity != 'null'
                            ? 'measurable="1"'
                            : 'measurable="0"'
                    } 
                    checked="true" 
                    quantity="${item.quantity}"
                ></facility-comp>`
        })

        this._qs('.location').innerHTML = `
                <div>District : ${this.state.district}</div>
                <div>City : ${this.state.city}</div>
            `

        this._qs('.location-details').innerHTML = `
                <div>Address : ${
                    this.state.address == ''
                        ? this.state.city + ', ' + this.state.district
                        : this.state.address
                }</div>
                <div>Conatct number : ${this.state.mobile}</div>
            `

        const res = await axios.get(`${this.host}/rental-period`)

        res.data.forEach(element => {
            if (this.state.rentalPeriod == element._id)
                this._qs('.minimum-period').innerHTML =
                    'Minimum rental period: <a>' +
                    (this.state.minimumPeriod == ''
                        ? 'Not applicable'
                        : `${
                              this.state.minimumPeriod +
                              ' ' +
                              element.rental_period
                          }s`) +
                    '</a>'
        })
    } //End of injectData()

    //connectedCallback
    connectedCallback() {
        // close the dock
        this.close()
        // Exit with escape key
        this.exitWithEscape()

        //inject Data
        this.inejectData()

        this._qs('.approve-button').addEventListener('click', () =>
            dispatchEvent(new CustomEvent('post-advertisement'))
        )
        this._qs('.decline-button').addEventListener('click', () => {
            // Exit the dock
            this.exitDock()
        })
    } //End of connectedCallback()
} //End of Class

const elementName = 'preview-advertisement'
customElements.get(elementName) == undefined
    ? window.customElements.define(elementName, PreviewAdvertisement)
    : null
