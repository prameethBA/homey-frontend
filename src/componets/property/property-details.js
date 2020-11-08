import Base from './../Base.js'
import CSS from './property-details.css.js'

export default class PropertyDetails extends Base {

  css =  CSS

  content = `
    <div class="container">

      <div class="images">
        <div class="main-image-container">
          <img class="img main-image" src="/assets/img/house.jpg" />
        </div>
        <div class="sub-images">
          <img class="img sub-image" src="/assets/img/background.jpg" />
          <img class="img sub-image" src="/assets/img/mountain.jpg" />
          <img class="img sub-image" src="/assets/img/1.png" />
          <img class="img sub-image" src="/assets/img/house.jpg" />
        </div>
      </div>

      <div class="details">
        <div class="preview-image-container">
          <img class="preview-image" />
        </div>
        <div class="row rwo-title">
          <div class="title">Boarding place in Nugegoda</div>
          <div class="price">Rs.17,000/Month</div>
        </div>
        <div class="row row-status">
          <div class="status">Avalible 🟢</div>
          <div class="favourite">⭐</div>
          <div class="share">📩</div>
        </div>
        <div class="row">
          <div class="description">
            \/ matches the character / literally (case sensitive)\w* matches any word character (equal to [a-zA-Z0-9_])* Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed
          </div>
        </div>
        <div class="row">
          <div class="features">
          </div>
        </div>
        <div class="row">
          <div class="contact-info">
            <span> <a>Show contacts </a></span>
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
      
    </div>

    <div class="popup"></div>
  `
    constructor() {
      super()
      this.mount()

    }//end of the constructor

    // load feature List
    async loadFeatureList() {
      await import("./subcomp/facility.js")
      .then(
        // API call for get Facilities List
        await axios.get(`${this.host}/facility`)
          .then(res => {
            if (res.status == '200') {
              res.data.data.forEach(item => this._qs('.features').innerHTML += `
                <facility-comp 
                key="${item.feature_id}" 
                name="${item.feature}" 
                measurable="1" 
                checked="true" 
                quantity="${item.quantity}"
                ></facility-comp>
                `
              )}
            else throw "Server Error."
          })
          .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
      )
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    }//End of loadFetureList()

    // load map view
    async mapView() {
      await import("../universal/popup-map.js")
        .then( res => {
          this._qs('.popup').innerHTML= `<map-view location="${encodeURIComponent(JSON.stringify({lat: 7.8, lng:80.4}))}"></map-view>`
        })
        .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    }//End of mapView()

    //Load map view
    loadMapView() {
      this._qs('.map').addEventListener('click', () => this.mapView())
    }

    //preview image
    previewImage() {
      this._qs('.main-image').addEventListener('mousemove', () => {
        this._qs('.preview-image-container').style.display = 'flex'
        this._qs('.preview-image').src = this._qs('.main-image').src
        })

        this._qs('.main-image').addEventListener('mouseout', () => {
          this._qs('.preview-image-container').style.display = 'none'
        })
    }//end of previewImage()

    //set as main image
    setMainImage() {
      this._qsAll('.sub-image').forEach( item => {
        item.addEventListener('click', () => {
          const previousMainImage = this._qs('.main-image').src
          this._qs('.main-image').src = item.src
          item.src = previousMainImage
        })
      })
    }//end of setMainImage

     //reserve component 
     async reserve() {
      this.setLoader()
        await import('./subcomp/reserve/reserve.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<reserve-comp></reserve-comp>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of reserve()

    //loadReserve
    loadReserve() {
        this._qs('.reserve').addEventListener('click', () => this.reserve())
    }//end of loadReserve()

    //comment component 
    async comment() {
      this.setLoader()
        await import('./../universal/comment/comment-comp.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<comment-comp></comment-comp>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of comment()

    //loadComment
    loadComment() {
        this._qs('.feedback').addEventListener('click', () => this.comment())
    }//End of loadComment()

    connectedCallback() {

       // load feature List
      this.loadFeatureList()

      //preview Images
      this.previewImage()
      //Set sub image as main Image
      this.setMainImage()

      //Load the reserve component
      this.loadReserve()

       //loadComment
      this.loadComment()
        
      //Load map view component
      this.loadMapView()

    }//End of connectedCallback()
    
  }//End of the class

  window.customElements.define('property-details', PropertyDetails)