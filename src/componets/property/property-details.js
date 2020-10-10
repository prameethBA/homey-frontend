import Base from './../Base.js'

export default class PropertyDetails extends Base {

  style =  `

  `

content = `

  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('property-details', PropertyDetails)