import Base from "/componets/Base.js";
import CSS from "./reserve.css.js";

export default class Reserve extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">Reserve the property</span>
                </div>
            <div class="row">
                <span id="propertyId">#${this.getParam("id")}</span>
            </div>
            <div class="row">
                <span class="title">Title</span>
            </div>
            <div class="row">
                <span class="keymoney-title">Key Money: </span>
                <span class="keymoney">Rs.00, 000</span>
            </div>
            <div class="row payment-type">
                <span class="pay-keymoney">Pay Key Money</span>
                    <label class="switch">
                        <input type="checkbox" id="payment-toggler"/>
                        <span class="slider round"></span>
                    </label>
                <span class="pay-advance">Pay an Advance</span>
            </div>
            <hr/>
            <div class="row">
                <div class="sub-row">
                    <span class="sub-total-title">Sub Total </span>
                    <span class="sub-total">Rs.00, 000</span>
                </div>
                <div class="sub-row">
                    <span class="service-fee-title">Service Fee </span>
                    <span class="service-fee">Rs.000</span>
                </div>
                <div class="sub-row total">
                    <span class="total-title">Total </span>
                    <span class="total-price">Rs.00, 000</span>
                </div>
            </div>
            <div class="row reserve">
                <button class="reserve-button" id="payhere-payment">Reserve Now!</button>
            </div>
        </div>
    </div>
`;
  constructor() {
    super();
    this.mount();

    this.setRealTimeReservingEntry();
  } //End of constructor

  //add to real time reserving menu
  async setRealTimeReservingEntry() {
    this.wait(".reserve-button");

    try {
      const res = await axios.post(`${this.host}/property-update/add`, {
        ...this.authData(),
        propertyId: this.getParam("id"),
      });

      if (res.status == 200) {
        this.state.title = res.data.title;
        (this.state.fee = res.data.fee),
          (this.state.subTotal = res.data.keyMoney);

        this._qs(".title").innerHTML = `${this.state.title}`;
        this._qs(".keymoney").innerHTML = `Rs. ${this.state.subTotal}`;
        this._qs(".service-fee").innerHTML = `Rs. ${this.state.fee}`;
        this._qs(".sub-total").innerHTML = `Rs. ${this.state.subTotal}`;
        this._qs(".total-price").innerHTML = `Rs. ${
          +this.state.subTotal + +this.state.fee
        }`;
      }
    } catch (err) {
      console.log(err);
    }

    this.unwait(".reserve-button");
  }

  //close the dock
  close() {
    this._qs("#close-popup").addEventListener("click", () => {
      this.exitDock();
    });
  } //End of the close()

  // Exit the dock
  exitDock() {
    this._qs(".backdrop").style.opacity = "0";
    this._qs(".backdrop").style.pointerEvents = "none";
  } // End of exitDock()

  //Exit with Escape key
  exitWithEscape() {
    addEventListener("keyup", ({ key }) =>
      key === "Escape" ? this.exitDock() : null
    );
  } // End of exitWithEscape()

  startPayment() {
    // Called when user completed the payment. It can be a successful payment or failure
    payhere.onCompleted = function onCompleted(orderId) {
      console.log("Payment completed. OrderID:" + orderId);
      //Note: validate the payment and show success or failure page to the customer
    };

    // Called when user closes the payment without completing
    payhere.onDismissed = function onDismissed() {
      //Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
    };

    // Called when error happens when initializing payment such as invalid parameters
    payhere.onError = function onError(error) {
      // Note: show an error page
      console.log("Error:" + error);
    };

    // Put the payment variables here
    const payment = {
      sandbox: true,
      merchant_id: "1213639", // Replace your Merchant ID
      return_url: "https:://homey.lk/payment/done", // Important
      cancel_url: "https://homey.lk/payment/cancel", // Important
      notify_url: "https://homey.lk/payment/notify",
      order_id: "ItemNo12345",
      items: "Door bell wireles",
      amount: "1000.00",
      currency: "LKR",
      first_name: "Saman",
      last_name: "Perera",
      email: "samanp@gmail.com",
      phone: "0771234567",
      address: "No.1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
      delivery_address: "No. 46, Galle road, Kalutara South",
      delivery_city: "Kalutara",
      delivery_country: "Sri Lanka",
      custom_1: "",
      custom_2: "",
    };

    payhere.startPayment(payment);
  } //End of startPayment

  //Request payment infomations
  async paymentRequest() {
    this.wait(".reserve-button");

    try {
      const res = await axios.post(`${this.host}/payment/request`, {
        ...this.authData(),
        propertyId: this.getParam("id"),
        amount: this.state.fee + this.state.subTotal,
      });

      if (res.status == 200) {
        console.log(res);
      } else throw res.data;
    } catch (err) {
      console.log(err);
    }

    this.unwait(".reserve-button");
  }

  //toggle payment
  togglePayment() {
    this._qs("#payment-toggler").addEventListener("click", () => {
      if (this._qs("#payment-toggler").checked) {
        this.state.subTotal = 0;
        this.setInput();
      } else {
        this._qs(".keymoney-title").innerHTML = "Key Money : ";
        this.setRealTimeReservingEntry();
      }
    });
  } //End of toggle payment

  setInput() {
    this._qs(".keymoney-title").innerHTML = `Adcanced payment amount : `;
    this._qs(
      ".keymoney"
    ).innerHTML = `Rs. <input type="number" class="advanced-payment" value="${this.state.subTotal}">`;
    this._qs(".sub-total").innerHTML = `Rs. ${this.state.subTotal}`;
    this._qs(".total-price").innerHTML = `Rs. ${
      +this.state.subTotal + +this.state.fee
    }`;

    const input = this._qs(".advanced-payment");

    input.focus();
    input.select();

    input.addEventListener("keyup", () => {
      this.state.subTotal = +this._qs(".advanced-payment").value;
      this._qs(".sub-total").innerHTML = `Rs. ${this.state.subTotal}`;
      this._qs(".total-price").innerHTML = `Rs. ${
        +this.state.subTotal + +this.state.fee
      }`;
    });
  }

  connectedCallback() {
    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();

    //toggle paymennts
    this.togglePayment();

    // Show the payhere.js popup, when "PayHere Pay" is clicked
    this._qs("#payhere-payment").addEventListener("click", this.paymentRequest);
  } //End of connectedCallback
} //End of Class

window.customElements.define("reserve-comp", Reserve);
