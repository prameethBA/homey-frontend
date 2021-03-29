import Base from "./../Base.js";
import CSS from "./payment-gateway.css.js";

export default class PaymentGateway extends Base {
  css = CSS;

  content = `
    <div class="container">
  </div>
 
  `;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  async connectedCallback() {
    axios
      .post("https://sandbox.payhere.lk/pay/checkout", {
        headers: {
          // 'merchant_id': '1213639'
        },
      })
      .then((res) => {
        this._qs(".container").innerHTML = res.data;
        console.log(res);
      });
  }
}

const elementName = "payment-gateway";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PaymentGateway)
  : null;
