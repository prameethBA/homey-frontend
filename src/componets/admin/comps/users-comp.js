import Base from "./../../Base.js";
import CSS from "./users-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class users extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="row">
            <span class="search-container">
                <input id="search" type="text" class="search" placeholder="Search here" />
                <label for="search"><img src="/assets/icon/Search/search_24px.png"></label>
                </span>
                <div class="button-group">
                    <button class="button-link reported danger-button" id="reported">Reported users</button>
                    <button class="button-link unconfiremed primary-button" id="unconfiremed">Unconfiremed Users</button>
                    <button class="button-link banned danger-button" id="banned">Banned Users</button>
                    <button class="button-link deactivated primary-button" id="deactivated">Deactivated Users</button>
                    <button class="button-link deleted danger-button" id="deleted">Deleted Users</button>
                </div>
        </div>
        <div class="row users">
        </div>
        
        <pagination-comp data-pages="10" data-current="5"></pagination-comp>
        
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
                    <button class="primary-button" id="deactivate">Deactivate</button>
                    <button class="danger-button" id="block">Temporaly Block</button>
                    <button class="danger-button" id="ban">Permenatly Ban</button>
                    <button class="danger-button" id="confirm">Make confirm contacts</button>
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
        dispatchEvent(
          new CustomEvent("pop-up", {
            detail: {
              pop: "error",
              msg: err.message,
              duration: err.duration == undefined ? 10 : err.duration,
            },
          })
        );
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
    try {
      const res = await axios.post(`${this.host}/admin-users/all-users`, {
        ...this.authData(),
      });
      res.data.forEach((user) => {
        //Load user component
        this.loadUser(user);

        //loadViewUser
        this.loadViewUser();
      });
    } catch (err) {
      console.log(err);
    }
    this.stopLoader();
  } //end of getUsers()

  //Deactivate
  // async deactivate(userId,e) {
  //   try {
  //     const button = e;
  //     this.wait(button);
  //     const res = await axios.post(`${this.host}/user/deacivate/${userId}`, {
  //       ...this.authData(),
  //     });
  //     if (res.status == 200) {
  //       this.unwait(button);
  //       button.innerHTML = "Activate";
  //     } else throw res;
  //   } catch (err) {
  //     console.log(err);
  //     this.unwait(button);
  //   }
  // } //End of deactivate()
  /*

  
  //filterProperty()
  filterProperty() {
    this._qsAll(".button-link").forEach((item) => {
      item.addEventListener("click", async () => {
          this.wait(item)
          try {
            const res = await axios.post(
                `${this.host}/property/filter/own/${item.id}`,
                {
                  ...this.authData(),
                }
              );

              if (res.data.length < 1) {
                this._qs(".content").innerHTML = this.notFound;
              } else {
                this._qs(".content").innerHTML = "";
                res.data.forEach((item) => {
                  this._qs(".content").innerHTML += `
                            <property-view 
                            id="${item.property_id}"
                            data-data="${this.encode(item)}"
                            overview='true'
                            >
                            </property-view>
                            `;
                });
              }
          } catch (err) {
              console.log(err);
          }
          this.unwait(item)
        
      });
    });
  } //Endof filterProperty()
*/

  // connectedCallback
  connectedCallback() {
    // getUsers from API
    this.getUsers();

    //filterProperty()
    //this.filterProperty();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("users-comp", users);
