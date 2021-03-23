import Base from "../Base.js";
import CSS from "./reserved-properties.css.js";
import "/componets/universal/pagination/pagination.js";

export default class ReservedProperties extends Base {
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
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
        </div>
        
        <div id="pagination"></div>
        
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
      await import("./subcomp/property-view.js");
      const res = await axios.post(`${this.host}/property/get-reserved`, {
        ...this.authData(),
      });

      if (res.data.status == 500) throw res.data;

      if (res.data.length < 1) {
        this._qs(".content").innerHTML = this.notFound;
      } else {
        this._qs(
          ".pagination"
        ).innerHTML = `<pagination-comp data-pages="10" data-current="5"></pagination-comp>`;
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
      this.popup(err.message, "error");
      this.unwait(".content");
    }
  } //End of loadpropertyView()

  connectedCallback() {
    // Load add comps
    this.loadpropertyView();
  } //End of connectedCallback()
} //End of the class

const elementName = "reserved-properties";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, ReservedProperties)
  : null;
