import Base from "./../../Base.js";
import CSS from "./users-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class AdminAccount extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="row">
            <span class="search-container">
                <input id="search" type="text" class="search" placeholder="Search here" />
                <label for="search"><img src="/assets/icon/Search/search_24px.png"></label>
                </span>
        </div>
        <div class="row users">
        </div>
        
        <pagination-comp></pagination-comp>
        
    </div>

    <div class="popup"></div>
    `;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  //Load user component
  loadUser(user) {
    let data = `
            <div class="profile">
                <div class="sub-row">
                    <img data-id="${user.userId}" id="img-${user.userId}" class="display-picture view-profile" src="/assets/img/alt/load-post.gif" />
                </div>
                <div class="sub-row">
                    <span class="name view-profile" data-id="${user.userId}">${user.firstName} ${user.lastName}</span>
                    <span class="status">`;

    switch (user.status) {
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

    data += `</span>
                </div>
                <div class="sub-row">
                    <span class="email"><a href="mailto:${user.email}">${
      user.email
    }<a></span>
                    <span class="mobile"><a href="callto:${user.mobile}">${
      user.mobile != null ? user.mobile : "Mobile number not updated"
    }</a></span>
                </div>
                <div class="sub-row button-group-user">
                    <button class="primary-button">Deactivate</button>
                    <button class="danger-button">Delete Account</button>
                    <button class="danger-button">Transfer Account</button>
                    <button class="danger-button">Give up admin</button>
                </div>
            </div>
        `;
    this._qs(".users").innerHTML += data;

    //getprofilePicture
    this.getprofilePicture(user.userId);
  } //End of loadUser()

  //View user account summary
  async viewUser(id) {
    this.setLoader();
    await import("./subcomp/view-user/view-user.js")
      .then(() => {
        this._qs(".popup").innerHTML = `<view-user id="${id}"></view-user>`;
        this.stopLoader();
      })
      .catch((err) => {
        this.stopLoader();

        this.popup(err.message, "error", 10);
      });
  } //End of viewUser()

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
      console.log(err);
    }
  } //End of getprofilePicture()

  //load view user component
  loadViewUser() {
    this._qsAll(".view-profile").forEach((item) => {
      item.addEventListener("click", () => this.viewUser(item.dataset.id));
    });
  } //end of loadViewUser()

  // getUsers from API
  async getUsers() {
    this.setLoader();
    await axios
      .post(`${this.host}/AdminUsers/all-admins`, {
        ...this.authData(),
      })
      .then((res) => {
        res.data.forEach((user) => {
          //Load user component
          this.loadUser(user);

          //loadViewUser
          this.loadViewUser();
        });
      })
      .catch((err) => console.log(err));
    this.stopLoader();
  } //end of getUsers()

  // connectedCallback
  connectedCallback() {
    // getUsers from API
    this.getUsers();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("admin-accounts-comp", AdminAccount);
