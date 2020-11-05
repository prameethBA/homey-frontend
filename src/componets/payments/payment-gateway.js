import Base from './../Base.js'

export default class PaymentGateway extends Base {

  css =  `

  `

  content = `
    <div class="container">
  </div>
 
  `
    constructor() {
      super()
      this.mount()
     
    }//End of constructor

    async connectedCallback() {
        axios.post('https://sandbox.payhere.lk/pay/checkout', {
            headers: {
                // 'merchant_id': '1213639'
              }
        })
        .then(res => {
            this._qs('.container').innerHTML = res.data
            console.log(res)
        })
    }
    
  }

  window.customElements.define('payment-gateway', PaymentGateway)