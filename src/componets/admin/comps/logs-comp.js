import Base from "../../Base.js";
import CSS from "./logs-comp.css.js";

export default class Logs extends Base {
  css = CSS;

  content = `

    <div class="payment-history-heading">
      <h1>Logs</h1>
    </div>
    <div class="conatiner"> 
    </div>

`;
  constructor() {
    super();
    this.mount();
  } //End of the constructor

  async getSummary() {
    this.setLoader();
    await axios
      .post(`${this.host}/admin-summary/get-logs`, {
        ...this.authData(),
      })
      .then((res) => {
        res.data.forEach((item) => {
          this._qs(".conatiner").innerHTML += `
            <div>
              <div class="log-list">${item._id} | ${item.type} | ${item.message} | ${item.created} | ${item.description} </div><hr>
            </div>
          `
        });
        this.stopLoader();
      })
      .catch((err) => {
        this.stopLoader();
        this.popup(err.message, "error", 3);
      });
  } //End of getSummary()

  //connectedCallback
  connectedCallback() {
    // Api call for getting the data
    this.getSummary();
  } //End of connectedCallback()
} //End of Class

const elementName = "logs-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Logs)
  : null;
