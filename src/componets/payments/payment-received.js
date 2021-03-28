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
          <div><a href="/payment/cashout">Cash out</a></div>
          <div><a href="/payment/bank-account">Bank Account Details</a></div>
        </div>
      </div>
  `;

  tr = `
      <tr>
          <td>91908091830</td>
          <td>Boarding fee for <a>#293b24o82g9vh4o</a> Luxury Two Houses for Rent Short Term or Long Term</td>
          <td>Rs. 17, 000</td>
          <td>2020-10-12 12:45:23</td>
          <td>⬇ received</td>
      </tr>
    `;
  tr1 = `
      <tr>
          <td>91908091830</td>
          <td>Boarding fee for <a>#293b24o82g9vh4o</a> Annexe For Rent -ethul Kotte</td>
          <td>Rs. 17, 000</td>
          <td>2020-10-12 12:45:23</td>
          <td>⬇ received</td>
      </tr>
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
                    ${this.tr}
                    ${this.tr1}
                    ${this.tr}
                    ${this.tr1}
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

  connectedCallback() {} //End of connected callback
}

const elementName = "payment-received";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PaymentReceived)
  : null;
