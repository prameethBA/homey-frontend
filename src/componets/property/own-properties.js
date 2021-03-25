import Base from "../Base.js";
import CSS from "./own-properties.css.js";
import "/componets/universal/pagination/pagination.js";

export default class OwnProperties extends Base {
  css = CSS;

  notFound = `
        <div class="notFound">
            <h1> No Properties Found!</h1>
        </div>
    `;

  content = `
        <div id="container">
            <div class="row">
                <span class="search-container">
                    <input id="search" type="text" class="search" placeholder="Search here" />
                    <label for="search"><img src="/assets/icon/Search/search_24px.png"></label>
                    </span>
                    <div class="button-group">
                        <button class="button-link all danger-button" id="all">All</button>
                        <button class="button-link boosted primary-button" id="boosted">Boosted Properties</button>
                        <button class="button-link pending primary-button" id="pending">Pending Approvals</button>
                        <button class="button-link private primary-button" id="private">Private</button>
                        <button class="button-link public primary-button" id="public">Public</button>
                        <button class="button-link rejected primary-button" id="rejected">Rejected Properties</button>
                        <button class="button-link blocked primary-button" id="blocked">Blocked Properties</button>
                    </div>
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
        </div>
        
        <pagination-comp data-pages="10" data-current="5"></pagination-comp>
        
        <div id="questioner">
        </div>
    `;
  constructor() {
    super();
    this.mount();
  } //End of the constructor

  // Load add comps
  async loadpropertyView() {
    this.wait(".content");
    try {
      import("./subcomp/property-view.js");
      const res = await axios.post(`${this.host}/property/get-own`, {
        ...this.authData(),
      });

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
      this.unwait(".content");
    }
  } //End of loadpropertyView()

  //listenForButtons
  listenForButtons() {
    this._qsAll(".button-link").forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.remove("primary-button");
        this._qsAll(".button-link").forEach((btn) => {
          btn.classList.remove("danger-button");
        });
        item.classList.add("danger-button");
      });
    });
  } //End of listenForButtons()

  //filterProperty()
  filterProperty() {
    this._qsAll(".button-link").forEach((item) => {
      item.addEventListener("click", async () => {
          this.wait(item)
          try {
            const res = await axios.post(
                `${this.host}/property/filter-own/${item.id}`,
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

  connectedCallback() {
    // Load add comps
    this.loadpropertyView();

    //listenForButtons
    this.listenForButtons();

    //filterProperty()
    this.filterProperty();
  } //End of connectedCallback()
} //End of the class

window.customElements.define("own-properties", OwnProperties);
