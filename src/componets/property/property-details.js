import Base from './../Base.js'

export default class PropertyDetails extends Base {

  css =  `

  `

  content = `

  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('property-details', PropertyDetails)