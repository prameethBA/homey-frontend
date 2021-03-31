import Base from "../Base.js";
import CSS from "./notification-bar.css.js";

export default class Notification extends Base {
  css = CSS;

  content = `
    <div class="notifications">
    </div>
    `;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  //get notifications
  async getNotification() {
    try {
      const res = await axios.post(`${this.host}/notification/all-new`, {
        ...this.authData(),
      });
      if (res.status == 200) {
        res.data.forEach((item) => {
          this._qs(".notifications").innerHTML += `
            <div class="notification">
              ${item.message}
                <div class="date">
                    ${item.created}
                </div>
            </div>`;
        });
      } else throw res;
    } catch (err) {
      this._qs(".notifications").innerHTML = `
            <div class="notification">
              No notofications
                <div class="date">
                </div>
            </div>`;
    }
  }

  //connectedCallback
  connectedCallback() {
    //get notifications
  this.getNotification() 
  } //End of connectedCallback()
} //End of Class

const elementName = "notification-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Notification)
  : null;
