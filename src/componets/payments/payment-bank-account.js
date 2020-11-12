import Base from '../Base.js'
import CSS from './payment-received.css.js'

export default class PaymentBankAccount extends Base {

  css =  CSS

  leftNav = `
      <div class="column left-nav">
        <div>Received Payments</div>
        <div>Paying History</div>
        <div>All payments</div>
        <div>Cash out</div>
        <div class="active">Bank Account Details</div>
      </div>
  `

  content = `
    <div class="container row">
      ${this.leftNav}
      <div class="column content">
        <div class="row">
          
        </div>
      </div>
    </div>
  `
    constructor() {
      super()
      this.mount()
     
    }//End of constructor

    connectedCallback() {

    }//End of connected callback
    
  }

  window.customElements.define('payment-bank-account', PaymentBankAccount)