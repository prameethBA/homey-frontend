import Base from './../Base.js'

export default class PaymentHistory extends Base {

  css =  `
  .block .container {
      position: relative;
      display: inline-block;
      width: 400px;
      height: 300px;
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
      margin: 2em;
      background-color: rgba(300,300,300,0.5);
  }
 
  .details {
      
      background-color: rgba(200, 200, 200, 1);
      padding-bottom: 50px;
  }

  span {
      margin: auto;
  }

  .description {
      margin: 0.5em;
      height: 5em;
      text-align: justify;
  }
  .heading{
    text-align: center;;
  }

  button {
      font-weight: bold;
      font-size: 1.1em;
      border:none;
      border-radius: 2px;
      padding: 0.3em;
      display: inline;
      margin:0.1em;
      color: #eeeeee;
      cursor: pointer;
  }
  .continue{
    position: absolute;
    font-size: 1.5em;
    background-color: rgba(12, 164, 44, 0.8);
  }
  .payment-history-heading {
    text-align: center;
    font-size: 2.5em;
  }
  .heading{
    font-size:1.5em;
  }

  `

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
 
  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('payment-history', PaymentHistory)