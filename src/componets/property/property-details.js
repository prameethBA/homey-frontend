import Base from './../Base.js'
import CSS from './property-details.css.js'

export default class PropertyDetails extends Base {

  css =  CSS

  content = `
    <div class="container">

      <div class="images">
        <div class="main-image-container">
          <img class="main-image" src="/assets/img/house.jpg" />
        </div>
        <div class="sub-images">
          <img class="sub-image" src="/assets/img/background.jpg" />
          <img class="sub-image" src="/assets/img/mountain.jpg" />
          <img class="sub-image" src="/assets/img/1.png" />
          <img class="sub-image" src="/assets/img/house.jpg" />
        </div>
      </div>

      <div class="details">
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
            <span>feature 1</span>
            <span>feature 1</span>
            <span>feature 1</span>
            <span>feature 1</span>
            <span>feature 1</span>
            <span>feature 1</span>
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

    </div/
  `
    constructor() {
      super()
      this.mount()

    }//end of the constructor
    
  }//End of the class

  window.customElements.define('property-details', PropertyDetails)