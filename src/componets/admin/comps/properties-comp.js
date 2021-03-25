import Base from "./../../Base.js";
import CSS from "./properties-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class properties extends Base {
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
                    <form class="search-form">
                        <input id="search" type="text" class="search" placeholder="Search here" />
                        <label for="search"><img src="/assets/icon/Search/search_24px.png" class="search-icon"></label>
                    </form>
                    </span>
                    <div class="button-group">
                        <button class="reported danger-button">Reported Properties</button>
                        <button class="pending primary-button">Pending Approvals</button>
                        <button class="rejected danger-button">Rejected Properties</button>
                    </div>
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
        </div>
        <div class="loader"></div>
        
        <div id="questioner">
        </div>
    `;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  //search
  search() {
    const filter = async () => {
      try {
        this.wait(".loader");
        const query = this._qs("#search").value;
        await import("./../../property/subcomp/property-view.js");
        // const page = 1
        // const limit = 12

        const res = await axios.get(
          `${this.host}/admin-property/search/${query}`
        );

        if (res.data.length < 1) {
          this._qs(".content").innerHTML = this.notFound;
        } else {
          this._qs(".content").innerHTML = "";
          res.data.forEach((item) => {
            this._qs(".content").innerHTML += `
                        <property-view 
                        admin="true"
                        id="${item._id}"
                        data-data="${this.encode(item)}"
                        >
                        </property-view>
                        `;
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
  }//end of search

  // Load add comps
  async loadpropertyView() {
    this.setLoader();
    try {
      import("./../../property/subcomp/property-view.js");
      const page = 1;
      const limit = 12;

      const res = await axios.get(`${this.host}/property/all/${limit}/${page}`);

      if (res.data.length < 1) {
        this._qs(".content").innerHTML = this.notFound;
      } else {
        res.data.forEach((item) => {
          this._qs(".content").innerHTML += `
                    <property-view 
                    admin="true"
                    id="${item._id}"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `;
        });
      }
    } catch (err) {
      console.log(err);
    }
    this.stopLoader();
  } //End of loadpropertyView()

  //reported properties
  viewReports() {
    this._qs(".reported").addEventListener("click", async () => {
      // load comp
      const comp = "report-comp";
      await import(`./${comp}.js`)
        .then(() => {
          this.setPath(`/admin/${comp.substr(0, comp.length - 5)}`); //remove '-comp' string piece to set path
          this._qs("#container").innerHTML = `<${comp}></${comp}>`;

          //Set breadcrumbs
          this.setBreadCrumbs(window.location.pathname.split("/"));
        })
        .catch((err) => this.popup(err.message, "error", 10));
    });
  }

  //connectedCallback
  connectedCallback() {
    // Load add comps
    this.loadpropertyView();

    //search
    this.search();

    //reported properties
    this.viewReports();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("properties-comp", properties);
