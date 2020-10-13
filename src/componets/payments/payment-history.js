import Base from './../Base.js'

export default class PaymentHistory extends Base {

  css =  `

  `

  content = `
 
  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('payment-history', PaymentHistory)