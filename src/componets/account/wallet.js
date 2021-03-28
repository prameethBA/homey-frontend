import Base from "../Base.js";
import CSS from "./wallet.css.js";

export default class Wallet extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="cards">

            <div class="card">
            <div class="card__side card__side--front card__side--front-1">
                <div class="card__description">Properties</div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__description_2">
                    <button id="own-properties">Own Properties</button>
                    <button id="favourite">Favourite Properties</button>
                </div>
            </div>
            </div>


            <div class="card">
            <div class="card__side card__side--front card__side--front-2">
                <div class="card__description">Payments</div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
                <div class="card__description_2">
                <button id="received">Revieved Amount</button>
                <button id="paid">Paid Amount</button>
                <button id="all">Cash Outs</button>
                <button id="cashout">Current Balance</button>
                </div>
            </div>
            </div>


            <div class="card">
            <div class="card__side card__side--front card__side--front-3">
                <div class="card__description">Account</div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
                <div class="card__description_2">
                <button id="bank-account">Account Details</button>
                <button id="cash-out-account">Cash out Accounts</button>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card__side card__side--front card__side--front-4">
                <div class="card__description">Payment Options</div>
            </div>
            <div class="card__side card__side--back card__side--back-4">
                <div class="card__description_2">
                <button>Payment options</button>
                </div>
            </div>
            </div>

        </div>
    </div>
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  //Own property
  ownProperty() {
    this._qs("#own-properties").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/own-properties`,
            comp: `property/own-properties`,
            compName: "own-properties",
          },
        })
      )
    );
  }

  // favourite
  favourite() {
    this._qs("#favourite").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/favourite`,
            comp: `property/favourite`,
            compName: "favourite-comp",
          },
        })
      )
    );
  }

  // Payments
  payments() {
    this._qs("#received").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/received`,
            comp: `payments/payment-received`,
            compName: "payment-received",
          },
        })
      )
    );
  }
  //Paid
  paid() {
    this._qs("#paid").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/paid`,
            comp: `payments/payment-paid`,
            compName: "payment-paid",
          },
        })
      )
    );
  }

  //All
  all() {
    this._qs("#all").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/all`,
            comp: `payments/payment-all`,
            compName: "payment-all",
          },
        })
      )
    );
  }

  //Cashout
  cashout() {
    this._qs("#cashout").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/cashout`,
            comp: `payments/payment-cashout`,
            compName: "payment-cashout",
          },
        })
      )
    );
  }

  //Bank Account
  account() {
    this._qs("#bank-account").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/bank-account`,
            comp: `payments/payment-bank-account`,
            compName: "payment-bank-account",
          },
        })
      )
    );
  }

  connectedCallback() {
    this.ownProperty();
    this.favourite();
    this.payments();
    this.paid();
    this.all();
    this.cashout();
    this.account();
  } // End of connected callback
} // End of Class

const elementName = "wallet-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Wallet)
  : null;
