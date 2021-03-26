import Base from "/componets/Base.js";
import CSS from "./view-user.css.js";

export default class ViewUser extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">User Profile</span>
            </div>

            <div class="profile">
                <div class="sub-row">
                    <img class="display-picture" src="/assets/img/alt/load-post.gif" />
                </div>
                <div class="sub-row">
                    <span class="name">Full Name</span>
                    <span class="status">⚪ Status</span>
                </div>
                <div class="sub-row">
                    <span class="email">Email</span>
                    <span class="mobile">Mobile</span>
                </div>

                <div class="sub-row">
                    <div class="collapse collapse-1">
                        <div class="row">
                            <span> Own properties </span>
                            <span class="expand expand-1"> + </span>
                        </div>
                        <hr />
                    </div>
                    <div class="collapsible collapsible-1" id="own-properties">
                        <div class="row collapsible-row">
                                <span class="column">property Id </span>
                                <span class="column">Title </span>
                                <span class="column">Borrowed Date </span>
                        </div>
                    </div>
                </div>

                <div class="sub-row">
                    <div class="collapse collapse-2">
                        <div class="row">
                            <span> Borrowed properties </span>
                            <span class="expand expand-2"> + </span>
                        </div>
                        <hr />
                    </div>
                    <div class="collapsible collapsible-2">
                        <div class="row collapsible-row">
                            <span class="column">property Id </span>
                            <span class="column">Title </span>
                            <span class="column">Borrowed Date </span>
                        </div>
                    </div>
                </div>

                <div class="sub-row button-group-user">
                    <button class="primary-button">Deactivate</button>
                    <!-- <button class="danger-button">Temporaly Block</button>
                    <button class="danger-button">Permenatly Ban</button> -->
                    <button class="danger-button">Make confirm contacts</button>
                </div>
            </div>

        </div>
        <div class="loader"></div>
    </div>
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  //Toggle collapse
  toggleCollapse(index) {
    let collapse = true;
    this._qs(`.collapse-${index}`).addEventListener("click", () => {
      let state = this._qs(`.collapsible-${index}`);
      let expand = this._qs(`.expand-${index}`);
      if (collapse) {
        state.classList.add("collapsed");
        expand.classList.add("expanded");
      } else {
        state.classList.remove("collapsed");
        expand.classList.remove("expanded");
      }
      collapse = !collapse;
    });
  } //End of toggleCollapse()

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

  //getUserDetails
  async getUserDetails() {
    const res = await axios.post(`${this.host}/admin-users/get-user`, {
      ...this.authData(),
      profile: this.getParam("id"),
    });

    return res.data;
  } //getuserdetails

  //getprofilePicture
  async getprofilePicture(userID) {
    try {
      const res = await axios.get(
        `${this.host}/images/get-profile-image/${userID}`
      );
      this._qs(".display-picture").src =
        res.data.image != "" ? res.data.image : "/assets/img/alt/no-mage.png";
    } catch (err) {
      console.log(err);
    }
  } //End of getprofilePicture()

  //inject user details to dom
  async viewUserDetails() {
    this.wait(".loader");
    //getUserDetails
    const data = await this.getUserDetails();

    //getprofilePicture
    this.getprofilePicture(this.getParam("id"));

    this._qs(
      ".name"
    ).innerHTML = `${data.userData.firstName} ${data.userData.lastName}`;

    this._qs(
      ".email"
    ).innerHTML = `<a href="mailto:${data.userData.email}">${data.userData.email}<a>`;
    this._qs(
      ".mobile"
    ).innerHTML = `<a href="callto:${data.userData.mobile}">${data.userData.mobile}</a>`;

    switch (data.userData.status) {
      case "0":
        this._qs(".status").innerHTML = "🔴 Unconfirmed";
        break;
      case "1":
        this._qs(".status").innerHTML = "🟢 Confirmed";
        break;
      default:
        this._qs(".status").innerHTML = "⭕ invalid";
        break;
    }

    let index = 1;
    data.ownPropertyData.forEach((item) => {
      this._qs("#own-properties").innerHTML += `
                <div class="row collapsible-row">
                    <span class="column"><a id="${
                      item._id
                    }">${index++}</a></span>
                    <span class="column">${item.title}</span>
                    <span class="column">${item.created}</span>
                </div>
            `;
    });
    this.unwait(".loader");
  } //End of viewUserDetails()

  connectedCallback() {
    //Toggle collapse
    this.toggleCollapse(1);
    this.toggleCollapse(2);

    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();

    //inject user details to dom
    this.viewUserDetails();
  } //End of connectedCallback
} //End of Class

const elementName = "view-user";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, ViewUser)
  : null;
