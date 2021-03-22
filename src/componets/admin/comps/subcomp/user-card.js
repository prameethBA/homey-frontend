import Base from "/componets/Base.js";
import CSS from "./user-card.css.js";

export default class UserCard extends Base {
  css = CSS;

  data = this.decode(this.getParam("data-user"));

  content = `
    <div class="profile">
    <div class="sub-row">
        <img data-id="${this.data.userId}" id="img-${
    this.data.userId
  }" class="display-picture view-profile" src="/assets/img/alt/load-post.gif" />
    </div>
    <div class="sub-row">
        <span class="name view-profile" data-id="${this.data.userId}">${
    this.data.firstName
  } ${this.data.lastName}</span>
        <span class="status">

        </span>
    </div>
    <div class="sub-row">
        <span class="email"><a href="mailto:${this.data.email}">${
    this.data.email
  }<a></span>
            <span class="mobile"><a href="callto:${this.data.mobile}">${
    this.data.mobile != null ? this.data.mobile : "Mobile number not updated"
  }</a></span>
        </div>
        <div class="sub-row button-group-user">
            <button class="primary-button" id="deactivate">Deactivate</button>
            <button class="danger-button" id="block">Temporaly Block</button>
            <button class="danger-button" id="ban">Permenatly Ban</button>
            <button class="danger-button" id="confirm">Make confirm contacts</button>
        </div>
    </div>

    `;

  constructor() {
    super();
    this.mount();
  } //End of constructor

  //Set status
  setStatus(status) {
    let data = '';
    switch (status) {
      case "0":
        data += `🟠 Unconfirmed`;
        break;
      case "1":
        data += `🟢 Confirmed`;
        break;
      default:
        data += `🔴 Invalid User`;
        break;
    }
    this._qs(".status").innerHTML = data;
  }

  //getprofilePicture
  async getprofilePicture(userId) {
    try {
      const res = await axios.post(
        `${this.host}/images/profile/get/${userId}`,
        {
          userId: this.getUserId(),
          token: this.getToken(),
        }
      );
      this._qs(`#img-${userId}`).src =
        res.data.image != "" ? res.data.image : "/assets/img/alt/no-mage.png";
    } catch (err) {
      this.popup(err.message, 'error')
    }
  } //End of getprofilePicture()

  connectedCallback() {
    //status
    this.setStatus(this.data.status);

    //getprofilePicture
    this.getprofilePicture(this.data.userId);
  } //End of connectedCallback
} //End of Class

window.customElements.define("user-card", UserCard);
