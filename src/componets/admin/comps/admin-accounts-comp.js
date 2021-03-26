import Base from "./../../Base.js";
import CSS from "./users-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class AdminAccount extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="row">
            <span class="search-container">
              <form class="search-form">
                  <input id="search" type="text" class="search" placeholder="Search here" />
                  <label for="search"><img src="/assets/icon/Search/search_24px.png" class="search-icon"></label>
              </form>
            </span>
        </div>
        <div class="row users content">
        </div>
        
        <div class="loader"></div class="loader">
        
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
                    <button class="primary-button" id="deactivate-${
                      user.userId
                    }">Deactivate</button>
                    <button class="danger-button">Delete Account</button>
                    <button class="danger-button">Transfer Account</button>
                    <button class="danger-button">Give up admin</button>
                </div>
            </div>
        `;
    // Deactivate
    this._qs(".users").innerHTML += data;
    console.log(this.deactivate(user.userId));

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
        `${this.host}/images/get-profile-image/${userId}`,
        {
          ...this.authData(),
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
      .post(`${this.host}/admin-users/all-admins`, {
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

  //search
  search() {
    const filter = async () => {
      try {
        this.wait(".loader");
        const query = this._qs("#search").value;
        await import("./../../home/user-comp.js");
        // const page = 1
        // const limit = 12

        const res = await axios.post(
          `${this.host}/admin-users/search-users/admin/${query}`,
          { ...this.authData() }
        );

        if (res.data.length < 1) {
          this._qs(".content").innerHTML = this.notFound;
        } else {
          this._qs(".content").innerHTML = "";
          res.data.forEach((item) => {
            this.loadUser(item);
          });
        }
        this.unwait(".loader");
      } catch (err) {
        console.log(err);
        this.unwait(".loader");
      }
    };

    this._qs(".search-form").addEventListener("submit", (e) => {
      e.preventDefault();
      filter();
    });
    this._qs(".search-icon").addEventListener("click", () => filter);
  } //end of search

  // Deactivate
  deactivate(userId) {
    this._qs(`#deactivate-${userId}`).addEventListener("click", async () => {
      this.wait(".status");
      try {
        const button = this._qs(`#deactivate-${userId}`);

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

  // connectedCallback
  connectedCallback() {
    // getUsers from API
    this.getUsers();

    //search
    this.search();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("admin-accounts-comp", AdminAccount);
