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
            <div class="row id-row">
                <span id="propertyId">#${this.getParam("id")}</span>
                <span id="user-count" title="Online users viewing this ad">0</span>
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
          (this.state.userCount = res.data.userCount),
          (this.state.subTotal = res.data.keyMoney);

        this._qs("#user-count").innerHTML = `${this.state.userCount}`;
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
    this._qs("#close-popup").addEventListener("click", async () => {
      this.exitDock();
      try {
        const res = await axios.post(`${this.host}/property-update/remove`, {
          ...this.authData(),
          propertyId: this.getParam("id"),
        });
        if (res.status == 200) console.log(res.data);
        else throw res;
      } catch (err) {
        console.log(err);
      }
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

  startPayment(payment, loadComp, popup) {
    // Called when user completed the payment. It can be a successful payment or failure
    payhere.onCompleted = function onCompleted(orderId) {
      popup("Property reserved. wait for the confirmation from the property owner", "success");

      loadComp(
        "/reserved-properties",
        "/property/reserved-properties",
        "reserved-properties"
      );

      //Note: validate the payment and show success or failure page to the customer
    };

    // Called when user closes the payment without completing
    payhere.onDismissed = function onDismissed() {
      popup("Reserving process dismissed.", "info");
    };

    // Called when error happens when initializing payment such as invalid parameters
    payhere.onError = function onError(error) {
      popup(error , "error");
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
        amount: +this.state.fee + +this.state.subTotal,
      });

      if (res.status == 200) {
        // Put the payment variables here
        const payment = {
          sandbox: true,
          merchant_id: res.data.merchant_id,
          return_url: res.data.return_url,
          cancel_url: res.data.cancel_url,
          notify_url: res.data.notify_url,
          order_id: res.data.order_id,
          items: res.data.items,
          amount: res.data.amount,
          currency: res.data.currency,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          email: res.data.email,
          phone: res.data.phone,
          address: res.data.address,
          city: res.data.city,
          country: res.data.country,
          delivery_address: res.data.delivery_address,
          delivery_city: res.data.delivery_city,
          delivery_country: res.data.delivery_country,
          custom_1: res.data.custom_1,
          custom_2: "reserve",
        };
        this.unwait(".reserve-button");
        this.startPayment(payment, this.loadComp, this.popup);
      } else throw res.data;
    } catch (err) {
      this.popup(err, "error");
      this.unwait(".reserve-button");
    }
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
    this._qs("#payhere-payment").addEventListener("click", () =>
      this.paymentRequest()
    );
  } //End of connectedCallback
} //End of Class

const elementName = "reserve-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Reserve)
  : null;
