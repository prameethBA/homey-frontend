import Base from "./../../Base.js";
import CSS from "./users-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class users extends Base {
  css = CSS;

  notFound = `
        <div class="notFound">
            <h1> No Users Found!</h1>
        </div>
    `;

  content = `
    <div class="container">
        <div class="row">
            <span class="search-container">
                <form class="search-form">
                    <input id="search" type="text" class="search" placeholder="Search here" />
                    <label for="search"><img src="/assets/icon/Search/search_24px.png" class="search-icon"></label>
                </form>
                </span>
                <div class="button-group">
                    <button class="button-link reported danger-button" id="reported">Reported users</button>
                    <button class="button-link unconfiremed primary-button" id="unconfiremed">Unconfiremed Users</button>
                    <button class="button-link banned danger-button" id="banned">Banned Users</button>
                    <button class="button-link deactivated primary-button" id="deactivated">Deactivated Users</button>
                    <button class="button-link deleted danger-button" id="deleted">Deleted Users</button>
                </div>
        </div>
        <div class="row users content">
        </div>
        
        <pagination-comp data-pages="10" data-current="5"></pagination-comp>
        <div class="loader"></div>
    </div>
    `;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  // getUsers from API
  async getUsers() {
    this.setLoader();
    try {
      const res = await axios.post(`${this.host}/admin-users/all-users`, {
        ...this.authData(),
      });

      if (res.status == 200) {
        await import("./subcomp/user-card.js");
        res.data.forEach((item) => {
          this._qs(".users").innerHTML += `<user-card id="${
            item.userId
          }" data-user="${this.encode(item)}"></user-card>`;
        });
      } else throw res;
    } catch (err) {
      this.popup(err.message, "error");
    }
    this.stopLoader();
  } //end of getUsers()

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
          `${this.host}/admin-users/search-users/${query}`,
          { ...this.authData() }
        );

        if (res.data.length < 1) {
          this._qs(".content").innerHTML = this.notFound;
        } else {
          this._qs(".content").innerHTML = "";
          res.data.forEach((item) => {
            this._qs(".content").innerHTML += `<user-card id="${
              item.userId
            }" data-user="${this.encode(item)}"></user-card>`;
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

  // connectedCallback
  connectedCallback() {
    // getUsers from API
    this.getUsers();

    //search
    this.search();

    //filterProperty()
    //this.filterProperty();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("users-comp", users);
