import Base from '../Base.js'
import CSS from './payment-bank-account.css.js'

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

  bankAccount = `
    <div class="column account-card">
      <div class="name">EAPD LAKMAL</div>
      <div>Nations trust bank</div>
      <div>Head Office, 001</div>
      <div class="row account-number">
        <span>21XXXXXX12</span>
        <span><button class="show-button">👁 show</button></span>
      </div>
      <div class="row">
        <button class="danger">update</button>
        <button class="danger">Remove</button>
      </div>
    </div>
  `

  content = `
    <div class="container row">
      ${this.leftNav}
      <div class="column content">
        <div class="row">
          <button class="add-new success">Add Bank account ➕ </button>
        </div>
        <div class="row">
          ${this.bankAccount}
        </div>
      </div>
    </div>
    <div class="popup"></div>
  `
    constructor() {
      super()
      this.mount()
     
    }//End of constructor

    //Add new account component 
    async newAccount() {
        this.setLoader()
        await import('./subcomp/new-account/new-account.js')
            .then(() => {
                this._qs('.popup').innerHTML = `<new-account></new-account>`
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
            })
    }//End of newAccount()

    //loadNewAccount
    loadNewAccount() {
        this._qs('.add-new').addEventListener('click', () => this.newAccount())
    }//end of loadNewAccount()

    connectedCallback() {
      //loadNewAccount
      this.loadNewAccount()

    }//End of connected callback
    
  }

  window.customElements.define('payment-bank-account', PaymentBankAccount)