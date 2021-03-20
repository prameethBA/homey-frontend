import Base from './../Base.js'
import CSS from './property-details.css.js'

export default class PropertyDetails extends Base {
    css = CSS

    content = `
    <div class="container">
    </div>

    <div class="popup"></div>
  `
    constructor() {
        super()
        this.mount()
        this.wait('.container')
    } //end of the constructor

    //load property
    async loadProperty() {
        await axios
            .post(`${this.host}/property/get/property`, {
                ...this.authData(),
                propertyId: window.location.pathname.split('/')[2]
            })
            .then(res => {
                this.state.id = res.data._id
                let data = `
            <div class="images">
            <div class="main-image-container">
              <img class="img main-image" src="/assets/img/alt/load-post.gif" />
            </div>
            <div class="sub-images">
              <img class="img sub-image" src="/assets/img/alt/load-post.gif" />
              <img class="img sub-image" src="/assets/img/alt/load-post.gif" />
              <img class="img sub-image" src="/assets/img/alt/load-post.gif" />
              <img class="img sub-image" src="/assets/img/alt/load-post.gif" />
            </div>
          </div>
    
          <div class="details">
            <div class="preview-image-container">
              <img class="preview-image" />
            </div>
            <div class="row rwo-title">
              <div class="title">${res.data.title}</div>
              <div class="price">Rs.${res.data.price}/Month</div>
            </div>
            <div class="row row-status">
              <div class="status">`

                switch (res.data.property_status) {
                    case '0':
                        data += `<img src="/assets/icon/Available/NotAvailable_24px.png"> Pending Approval`
                        break
                    case '1':
                        data += `<img src="/assets/icon/Available/Available_24px.png"> Available`
                        break
                    case '2':
                        data += `<img src="/assets/icon/Available/rejected_24px.png">  Rejected`
                        break
                    default:
                        data += `<img src="/assets/icon/Available/reserved_24px.png"> Reserved`
                        break
                }

                data += `</div>
              <div class="favourite"><img src="/assets/icon/Favourite/Heart_NotFilled_24px.png"></div>
              <div class="share"><img src="/assets/icon/Share/share_24px.png"></div>
            </div>
            <div class="row">
              <div class="description">
                ${res.data.description}
              </div>
            </div>
            <div class="row">
              <div class="features">
              </div>
            </div>
            <div class="row">
              <div class="contact-info">
                <span class="show-contacts"> <a>Show contacts </a></span>
                <div class="contacts" id="contacts">
                    <span>Email: lakmal@gmail.com</span>
                    <span>Mobile: 077 527 7373</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="action">
                <button class="reserve"> Reserve Now! </button>
                <button class="feedback"> Feedback </button>
                <button class="map"> On map 📌</button>
              </div>
            </div>
          </div>
          `
                this._qs('.container').innerHTML = data

                // load feature List
                this.loadFeatureList(JSON.parse(res.data.facilities))

                //Load the reserve component
                this.loadReserve()

                //loadComment
                this.loadComment()

                //Load map view component
                this.loadMapView()
            })
    } //End of loadProperty()

    // load feature List
    async loadFeatureList(list) {
        await import('./subcomp/facility.js')
            .then(() => {
                // API call for get Facilities List
                list.forEach(
                    item =>
                        (this._qs('.features').innerHTML += `
          <facility-comp 
          key="${item.featureId}" 
          name="${item.feature}" 
          measurable="${item.quantity == 'null' ? 'false' : '1'}" 
          checked="true" 
          quantity="${item.quantity}"
          ></facility-comp>
          `)
                )
            })
            .catch(err =>
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: { pop: 'error', msg: err }
                    })
                )
            )
    } //End of loadFetureList()

    // load map view
    async mapView() {
        await import('../universal/popup-map.js')
            .then(res => {
                this._qs(
                    '.popup'
                ).innerHTML = `<map-view location="${encodeURIComponent(
                    JSON.stringify({ lat: 7.8, lng: 80.4 })
                )}"></map-view>`
            })
            .catch(err =>
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: { pop: 'error', msg: err }
                    })
                )
            )
    } //End of mapView()

    //Load map view
    loadMapView() {
        this._qs('.map').addEventListener('click', () => this.mapView())
    }

    //get images
    async getImages() {
        try {
            const res = await axios.post(
                `${this.host}/images/property/${this.state.id}`,
                {
                    ...this.authData(),
                    propertyId: this.state.id
                }
            )

            if (res.data.length == 0) {
                this._qs('.main-image').src = '/assets/img/alt/no-mage.png'
                this._qs('.sub-images').style.display = 'none'
            } else {
                let index = 0
                this._qs('.sub-images').innerHTML = ''
                await res.data.forEach(image => {
                    if (index == 0) this._qs('.main-image').src = image.image
                    else
                        this._qs(
                            '.sub-images'
                        ).innerHTML += `<img class="img sub-image" src="${image.image}" />`
                    index++
                })
            }
        } catch (err) {
            console.log(err)
        }
    } //End of getImages()

    //preview image
    previewImage() {
        this._qs('.main-image').addEventListener('mousemove', () => {
            this._qs('.preview-image-container').style.display = 'flex'
            this._qs('.preview-image').src = this._qs('.main-image').src
        })

        this._qs('.main-image').addEventListener('mouseout', () => {
            this._qs('.preview-image-container').style.display = 'none'
        })
    } //end of previewImage()

    //set as main image
    setMainImage() {
        this._qsAll('.sub-image').forEach(item => {
            item.addEventListener('click', () => {
                const previousMainImage = this._qs('.main-image').src
                this._qs('.main-image').src = item.src
                item.src = previousMainImage
            })
        })
    } //end of setMainImage

    //reserve component
    async reserve() {
        await import('./subcomp/reserve/reserve.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<reserve-comp></reserve-comp>`
            })
            .catch(err => {
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg: err.message,
                            duration:
                                err.duration == undefined ? 10 : err.duration
                        }
                    })
                )
            })
    } //End of reserve()

    //loadReserve
    loadReserve() {
        this._qs('.reserve').addEventListener('click', () => this.reserve())
    } //end of loadReserve()

    //comment component
    async comment() {
        await import('./../universal/comment/comment-comp.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<comment-comp
                    data-data="${this.encode(this._qs('.title').innerHTML)}" 
                    id="${this.state.id}"
                ></comment-comp>`
            })
            .catch(err => {
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg: err.message,
                            duration:
                                err.duration == undefined ? 10 : err.duration
                        }
                    })
                )
            })
    } //End of comment()

    //loadComment
    loadComment() {
        this._qs('.feedback').addEventListener('click', () => this.comment())
    } //End of loadComment()

    //showContacts
    showContacts() {
        this._qs('.show-contacts').addEventListener('click', () => {
            if (this._qs('.contacts').style.display == 'none') {
                this._qs('.contacts').style.display = 'flex'
                this._qs('.show-contacts').classList.add('collapse')
            } else {
                this._qs('.contacts').style.display = 'none'
                this._qs('.show-contacts').classList.remove('collapse')
            }
        })
    } //End of showContacts()

    async connectedCallback() {
        //load property
        await this.loadProperty()
        //showContacts
        this.showContacts()
        //get images
        await this.getImages()

        //preview Images
        this.previewImage()
        //Set sub image as main Image
        this.setMainImage()
    } //End of connectedCallback()
} //End of the class

window.customElements.define('property-details', PropertyDetails)
