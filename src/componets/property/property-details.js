import Base from './../Base.js'
import CSS from './property-details.css.js'

export default class PropertyDetails extends Base {

  css =  CSS

  content = `
    <div class="container">
    </div/
  `
    constructor() {
      super()
      this.mount()

    }//end of the constructor
    
  }//End of the class

  window.customElements.define('property-details', PropertyDetails)