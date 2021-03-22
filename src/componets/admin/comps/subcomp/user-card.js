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
  }" class="display-picture view-profile details" src="/assets/img/alt/load-post.gif" />
    </div>
    <div class="sub-row">
        <span class="name view-profile details" data-id="${this.data.userId}">${
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
    <div class="popup"></div>

    `;

  constructor() {
    super();
    this.mount();
  } //End of constructor

  //Set status
  setStatus(status) {
    let data = "";
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
      this.popup(err.message, "error");
    }
  } //End of getprofilePicture()

  //View user account summary
  viewUser(userId) {
    this._qsAll(".details").forEach((item) => {
      this.wait(item)
      item.addEventListener("click", async () => {
        try {
          await import("./view-user/view-user.js");
          this._qs(
            ".popup"
          ).innerHTML = `<view-user id="${userId}"></view-user>`;
        } catch (err) {
          this.popup(err.message, "error");
        }
      });
      this.unwait(item)
    });
    

  } //End of viewUser()

  //  Deactivate
  deactivate(userId) {
   this._qs('#deactivate').addEventListener('click', async () => {
    this.wait('.status')
    try {
      const button = this._qs('#deactivate');
      const res = await axios.post(`${this.host}/user/deacivate/${userId}`, {
        ...this.authData(),
      });
      if (res.status == 200) {
        button.innerHTML = "Activate";
      } else throw res;
    } catch (err) {
      this.popup(err.message, "error")
    }
    this.unwait('.status')
   })
    
  } //End of deactivate()

  connectedCallback() {
    //status
    this.setStatus(this.data.status);

    //getprofilePicture
    this.getprofilePicture(this.data.userId);

    //View user account summary
    this.viewUser(this.data.userId);

    //  Deactivate
  this.deactivate(this.data.userId)
  } //End of connectedCallback
} //End of Class

window.customElements.define("user-card", UserCard);