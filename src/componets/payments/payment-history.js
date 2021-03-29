import Base from "./../Base.js";
import CSS from "./payment-history.css.js";

export default class PaymentHistory extends Base {
  css = CSS;

  content = `
  <div class="payment-history-heading">
    <h1>Payment History</h1>
  </div>
  <div class="block">

    <div class="container">
      <div class="heading">
        <h1>Recived</h1>
        <h3>LKR 5,356,543.00</h3>
      </div>
      <div class="details">
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
        </div>
        <div>
          <button class="continue">Continue>></button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="heading">
        <h1>Pendings</h1>
        <h3>LKR 5,356,543.00</h3>
      </div>
      <div class="details">
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
        </div>
        <div>
          <button class="continue">Continue>></button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="heading">
        <h1>Falied</h1>
        <h3>LKR 5,356,543.00</h3>
      </div>
      <div class="details">
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
        </div>
        <div>
          <button class="continue">Continue>></button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="heading">
        <h1>Cashouts</h1>
        <h3>LKR 5,356,543.00</h3>
      </div>
      <div class="details">
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
        </div>
        <div>
          <button class="continue">Continue>></button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="heading">
        <h1>Expences/Fees</h1>
        <h3>LKR 5,356,543.00</h3>
      </div>
      <div class="details">
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed urna eu lacus facilisis mollis. Sed consequat odio lorem, ac vulputate nisi imperdiet efficitur. Quisque non nunc eu sapien.
        </div>
        <div>
          <button class="continue">Continue>></button>
        </div>
      </div>
    </div>
 
  </div>
 
  `;
  constructor() {
    super();
    this.mount();
  }
}

const elementName = "payment-history";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PaymentHistory)
  : null;
