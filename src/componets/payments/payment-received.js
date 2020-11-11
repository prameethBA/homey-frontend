import Base from '../Base.js'
import CSS from './payment-received.css.js'

export default class PaymentReceived extends Base {

  css =  CSS

  content = `
    <div class="container">
  </div>
 
  `
    constructor() {
      super()
      this.mount()
     
    }//End of constructor

    connectedCallback() {
      
    }//End of connected callback
    
  }

  window.customElements.define('payment-received', PaymentReceived)