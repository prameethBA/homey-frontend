import Base from './../Base.js'

export default class AdvertisementSettings extends Base {

  css =  `

`


  content = `

`
    constructor() {
      super()
      this.mount()

    }

  }
  
  window.customElements.define('advertisement-settings', AdvertisementSettings)