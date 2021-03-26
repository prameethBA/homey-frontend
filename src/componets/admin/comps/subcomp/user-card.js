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
            <button class="${
              this.data.status == 2 /*deactivated*/ ||
              this.data.status == 4 /*blocked*/
                ? "danger"
                : "primary"
            }-button" id="deactivate" data-status="${
    this.data.status == 2 || this.data.status == 4 ? "deactive" : "active"
  }">
            ${
              this.data.status == 2 || this.data.status == 4
                ? "Activate"
                : "Deactivate"
            }
            </button>
            <button class="danger-button" id="ban">${
              this.data.status == 4 ? "Banned" : "Permenatly Ban"
            }</button>
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
      case "2":
        data += `🔴 Deactivated User`;
        break;
      case "3":
        data += `🔴 Blocked User`;
        break;
      case "4":
        data += `🔴 Banned User`;
        break;
      default:
        data += `🔴 Requested confirmation`;
        break;
    }
    this._qs(".status").innerHTML = data;
  }

  //getprofilePicture
  async getprofilePicture(userId) {
    try {
      const res = await axios.post(
        `${this.host}/images/get-profile-image/${userId}`,
        {
          // userId: this.getUserId(),
          // token: this.getToken(),
          ...this.authData(),
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
      this.wait(item);
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
      this.unwait(item);
    });
  } //End of viewUser()

  // Deactivate
  deactivate(userId) {
    this._qs("#deactivate").addEventListener("click", async () => {
      this.wait(".status");
      try {
        const button = this._qs("#deactivate");

        if (button.dataset.status == "active") {
          const res = await axios.post(
            `${this.host}/admin-users/deactivate/${userId}`,
            {
              ...this.authData(),
            }
          );
          if (res.data.status == 200) {
            button.innerHTML = "Activate";
            button.dataset.status = "deactive";
            button.classList.add("danger-button");
            button.classList.remove("primary-button");
            this.setStatus("2");
            this.popup(
              `${this.data.firstName + this.data.lastName}, ${
                res.data.message
              }`,
              "info"
            );
          } else throw res.data;
        } else if (button.dataset.status == "deactive") {
          const res = await axios.post(
            `${this.host}/admin-users/activate/${userId}`,
            {
              ...this.authData(),
            }
          );
          if (res.data.status == 200) {
            button.innerHTML = "Deactivate";
            button.dataset.status = "active";
            button.classList.add("primary-button");
            button.classList.remove("danger-button");
            this.setStatus("1");
            this.popup(
              `${this.data.firstName + this.data.lastName}, ${
                res.data.message
              }`,
              "success"
            );
          } else throw res.data;
        }
      } catch (err) {
        console.log(err);
        this.popup(err.message, "error");
      }
      this.unwait(".status");
    });
  } //End of deactivate()

  // //Temporaly Block
  // block(userId) {
  //   this._qs('#block').addEventListener('click', async () => {
  //    this.wait('.status')
  //    try {
  //      const button = this._qs('#block');
  //      const res = await axios.post(`${this.host}/admin-users/block/${userId}`, {
  //        ...this.authData(),
  //      });
  //      if (res.status == 200) {
  //        button.innerHTML = "Activate";
  //      } else throw res;
  //    } catch (err) {
  //      this.popup(err.message, "error")
  //    }
  //    this.unwait('.status')
  //   })

  //  } //End of block()

  //Permenatly Ban
  ban(userId) {
    this._qs("#ban").addEventListener("click", async () => {
      this.wait(".status");
      try {
        const button = this._qs("#ban");
        const res = await axios.post(`${this.host}/admin-users/ban/${userId}`, {
          ...this.authData(),
        });
        if (res.status == 200) {
          button.innerHTML = "Banned";
          button.disabled = true;
          this.popup(res.data.message, "info");
        } else throw res;
      } catch (err) {
        this.popup(err.message, "error");
      }
      this.unwait(".status");
    });
  } //End of ban()

  // //Confirm
  // confirm(userId) {
  //   this._qs('#confirm').addEventListener('click', async () => {
  //    this.wait('.status')
  //    try {
  //      const button = this._qs('#confirm');
  //      const res = await axios.post(`${this.host}/user/confirm/${userId}`, {
  //        ...this.authData(),
  //      });
  //      if (res.status == 200) {
  //        button.innerHTML = "Activate";
  //      } else throw res;
  //    } catch (err) {
  //      this.popup(err.message, "error")
  //    }
  //    this.unwait('.status')
  //   })

  //  } //End of confirm()

  connectedCallback() {
    //status
    this.setStatus(this.data.status);

    //getprofilePicture
    this.getprofilePicture(this.data.userId);

    //View user account summary
    this.viewUser(this.data.userId);

    // Deactivate
    this.deactivate(this.data.userId);

    //   //Temporaly Block
    // this.block(this.data.userId);

    //Permenatly Ban
    this.ban(this.data.userId);

    // //Confirm
    // this.confirm(this.data.userId);
  } //End of connectedCallback
} //End of Class

window.customElements.define("user-card", UserCard);
