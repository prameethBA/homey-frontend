import Base from "../Base.js";
import CSS from "./payment-received.css.js";

export default class PaymentReceived extends Base {
  css = CSS;

  leftNav = `
      <div class="column left-nav-container">
        <div class="column left-nav">
          <div class="active"><a href="/payment/received">Received Payments</a></div>
          <div><a href="/payment/paid">Paying History</a></div>
          <div><a href="/payment/all">All payments</a></div>
          <!-- <div><a href="/payment/cashout">Cash out</a></div> -->
          <div><a href="/payment/bank-account">Bank Account Details</a></div>
        </div>
      </div>
  `;

  content = `
    <div class="container row">
      ${this.leftNav}
      <div class="column content">
          <div class="received">
            <table id="received-table">
                <thead>
                    <tr>
                        <th>Reference No.</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="received-table-body">
                </tbody>
            </table>
        </div>
      </div>
    </div>
  `;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  async getAll() {
    const res = await axios.post(`${this.host}/payment/all-received`, {
      ...this.authData(),
    });

    if (res.status == 200) {
      res.data.forEach((item) => {
        console.log(item);
        this._qs("#received-table-body").innerHTML += `
        <tr>
            <td>${item.payment_id}</td>
            <td>${item.payment_type} <a>#${item.property_id}</a></td>
            <td>${item.payhere_currency} ${item.payhere_amount}</td>
            <td>${item.updated}</td>
            <td>${
              item.status_code == 2
                ? "🟢 Successfull"
                : item.status_code == -1
                ? "🔴 Rejected"
                : item.status_code == 0
                ? "🟠 Pending"
                : "🔴 Canceled by user"
            }</td>
        </tr>
      `;
      });
    }
  }

  connectedCallback() {
    this.getAll();
  } //End of connected callback
}

const elementName = "payment-received";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PaymentReceived)
  : null;
