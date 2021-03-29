import Base from "../Base.js";
import CSS from "./available-property.css.js";
import "/componets/universal/pagination/pagination.js";

export default class AvalibaleProperty extends Base {
  css = CSS;

  notFound = `
        <div class="notFound">
            <h1> No Properties Found!</h1>
        </div>
    `;

  filter = `
    <form class="filter-form">
    <div class="left_nav row">
		<div class="nav_container column">
            <h3>Browse</h3>
            <dir></dir>
            <div class="column filter-items browse-items">
            </div>
		</div>
		
		<div class="nav_container column">
            <h3>Availability</h3>
            <dir></dir>
            <div class="column filter-items">
                <div class="row filter-item">
                    <input class="availability" id="now" type="checkbox" />
                    <label for="now">Available now</label>
                </div>
                <div class="row filter-item">
                    <input class="availability" id="later" type="checkbox" />
                    <label for="later">Available later</label>
                </div>
                <div class="row filter-item">
                    <input class="availability" id="sharing" type="checkbox" />
                    <label for="sharing">Available sharing</label>
                </div>
            </div>	
		</div>
		
		<div class="nav_container column">
            <h3>Rental Period</h3>
            <dir></dir>
            <div class="column filter-items rental-items">
            </div>
		</div>
		
		<div class="nav_container column">
				<h3>Price</h3>
				<dir></dir>
                <div class="column filter-items">
                    <div class="row price">
                        <input class="price-input" type="text" id="min-price" placeholder="100"> 
                        <span> to </span>  
                        <input class="price-input" type="text" id="max-price" placeholder="1000">
                    </div>
				</div>	
		</div>
		
		<div class="nav_container column">
				<h3>Key Money</h3>
				<dir></dir>
				<div class="column filter-items">
                    <div class="row price">
                        <input class="key-money" type="text" id="keymoney-min" placeholder="100"> 
                        <span> to </span>  
                        <input class="key-money" type="text" id="keymoney-max" placeholder="1000">
                    </div>
				</div>		
		</div>
		
		<div class="nav_container column">
				<button type="submit" class="filter-button">Filter</button>
		</div>

    </div>
    </form>
    `;

  search = `
        <div class="search">
            <form class="input-form">
              <input type="search" class="search-box" placeholder="Search here..." />
            </form>
            <select class="district">
                <option selected disabled value="0">Select a district</option>
                <option >All</option>
            </select>
            <select class="city">
                <option selected disabled value="0">Select a city</option>
                <option >All</option>
            </select>
            <select class="property-type">
                <option selected disabled value="0">Select a Property type</option>
                <option >All</option>
            </select>
            <button class="search-button"> Search now!</button>
            <span class="toggle-filter"><img src="/assets/icon/Filter/filter_24px.png"></span>
        </div>
    `;

  content = `
        ${this.search}
        ${this.filter}
        <div id="container">
        </div>
        <div id="pagination">
            
        </div>
        <div id="questioner">
        </div>
    `;

  pagination = `
        <pagination-comp></pagination-comp>
    `;

  constructor() {
    super();
    this.mount();

    // load Questioner
    if (sessionStorage.questioner != 1) {
      this.loadQuestioner();
      sessionStorage.questioner = 1;
    }

    //Load ad preview cards
    this.loadpropertyView();
  } //end of constructor

  // load questioner
  async loadQuestioner() {
    this.setLoader();
    await import("./subcomp/questioner-comp.js")
      .then(() => {
        this._qs(
          "#questioner"
        ).innerHTML = `<questioner-comp></questioner-comp>`;
        this.stopLoader();
      })
      .catch((err) => {
        this.popup(err, "error");
        this.setLoader();
      });
  } //End of loadQuestioner

  // Load add comps
  async loadpropertyView() {
    this.setLoader();
    this.wait("#container");
    try {
      import("./subcomp/property-view.js");
      const page = 1;
      const limit = 12;

      const res = await axios.get(`${this.host}/property/all/${limit}/${page}`);

      if (res.data.length < 1) {
        this._qs("#container").innerHTML = this.notFound;
      } else {
        this._qs("#container").innerHTML = "";
        res.data.forEach((item) => {
          this._qs("#container").innerHTML += `
                    <property-view 
                    id="${item._id}"
                    data-type="${
                      this.state.propertyType != undefined
                        ? this.state.propertyType[item.property_type_id]
                        : undefined
                    }"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `;
        });
        this._qs("#pagination").innerHTML = this.pagination;
      }
    } catch (err) {
      console.log(err);
      this.unwait("#container");
    }
    this.stopLoader();
  } //End of loadpropertyView()

  // Toggle filter
  toggleFilter() {
    let visible = true;

    this._qs(".toggle-filter").addEventListener("click", () => {
      if (visible) this._qs(".left_nav").style.display = "flex";
      else this._qs(".left_nav").style.display = "none";
      visible = !visible;
    });
  } //End of toggleFilter()

  // API call for get Districts
  async getDistricts() {
    try {
      const res = await axios.get(`${this.host}/district/all`);
      res.data.forEach(
        (element) =>
          (this._qs(
            ".district"
          ).innerHTML += `<option value="${element._id}">${element.district}</option>`)
      );
    } catch (err) {
      console.log(err);
    }
  } //End of getDistricts()

  // Add eventlistner to load citeis
  loadCities() {
    try {
      this._qs(".district").addEventListener("change", async () => {
        // Prevent laggin when do rapid changing
        addEventListener("change", async () => {
          await this.sleep(100);
          this._qs(".district").removeEventListener("change");
        });
        await this.sleep(101);
        // API call for get Districts
        const res = await axios.get(
          `${this.host}/cities/get-district/${this._qs(".district").value}`
        );
        this._qs(".city").innerHTML =
          '<option selected disabled value="0">Select a city</option>';
        if (res.status == "200")
          res.data.forEach(
            (element) =>
              (this._qs(
                ".city"
              ).innerHTML += `<option value="${element._id}"/>${element.city}</option>`)
          );
        else throw "Server Error.";
      });
    } catch (err) {
      console.log(err);
    }
  } //End of loadCities()

  // API call for get property types
  async getPropertytypes() {
    try {
      const res = await axios.get(`${this.host}/property-type/all`);
      this.state.propertyType = {};
      res.data.forEach((element) => {
        this.state.propertyType[element.property_type_id] =
          element.property_type_name;
        this._qs(
          ".property-type"
        ).innerHTML += `<option value="${element.property_type_id}">${element.property_type_name}</option>`;
        this._qs(".browse-items").innerHTML += `
            <div class="row filter-item">
                <input class="browse" id="browse-${element.property_type_id}" type="checkbox">
                <label for="browse-${element.property_type_id}">${element.property_type_name}</label>
            </div>`;
      });
    } catch (err) {
      this.popup(err, "error");
    }
  } //End of getPropertytypes()

  // API call for get Rental periods
  async getRentalPeriods() {
    try {
      const res = await axios.get(`${this.host}/rental-period/all`);
      res.data.forEach((element) => {
        this._qs(".rental-items").innerHTML += `
            <div class="row filter-item">
                <input class="rental" id="rental-${element._id}" type="checkbox" />
                <label for="rental-${element._id}">${element.rental_period_name}</label>
            </div>
            `;
      });
    } catch (err) {
      this.popup(err, "error");
    }
  } //End of getRentalPeriods()

  // search add comps
  async searchProperty() {
    // this.setLoader()
    try {
      this.wait(".search-button");
      import("./subcomp/property-view.js");
      // const page = 1;
      // const limit = 12;

      let search = this._qs(".search-box");
      const district = this._qs(".district").value;
      const city = this._qs(".city").value;
      const propertyType = this._qs(".property-type").value;
      const res = await axios.post(
        `${this.host}/property/search/${search.value}`,
        {
          district: district,
          city: city,
          propertyType: propertyType,
        }
      );

      search.value = "";
      this._qs("#container").innerHTML = "";

      if (res.data.length < 1) {
        this._qs("#container").innerHTML = this.notFound;
      } else {
        res.data.forEach((item) => {
          this._qs("#container").innerHTML += `
                    <property-view 
                    id="${item._id}"
                    data-type="${
                      this.state.propertyType[item.property_type_id]
                    }"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `;
        });
        this._qs("#pagination").innerHTML = this.pagination;
      }
    } catch (err) {
      console.log(err);
    }
    // this.stopLoader()
    this.unwait(".search-button");
  } //End of searchProperty

  // filter add comps
  async filterProperty() {
    // this.setLoader()
    try {
      this.wait(".filter-button");
      import("./subcomp/property-view.js");
      // const page = 1;
      // const limit = 12;

      let search = this._qs(".search-box");
      const district = this._qs(".district").value;
      const city = this._qs(".city").value;

      // let search = this._qs(".search-box");
      let browse = {},
        rental = {},
        availability = {},
        keymoney = {},
        price = {};
      this._qsAll(".browse").forEach((item) => {
        browse[item.id.substr(7)] = item.checked ? 1 : 0;
      });

      this._qsAll(".rental").forEach((item) => {
        rental[item.id.substr(7)] = item.checked ? 1 : 0;
      });

      this._qsAll(".availability").forEach((item) => {
        availability[item.id] = item.checked ? 1 : 0;
      });

      this._qsAll(".price-input").forEach((item) => {
        price[item.id] = item.value == "" ? 0 : item.value;
      });

      this._qsAll(".key-money").forEach((item) => {
        keymoney[item.id] = item.value == "" ? 0 : item.value;
      });

      const res = await axios.post(
        `${this.host}/property/filter/${search.value}`,
        {
          browse: browse,
          rental: rental,
          availability: availability,
          keymoney: keymoney,
          price: price,
          district: district,
          city: city,
        }
      );

      this._qs("#container").innerHTML = "";

      if (res.data.length < 1) {
        this._qs("#container").innerHTML = this.notFound;
      } else {
        res.data.forEach((item) => {
          this._qs("#container").innerHTML += `
                    <property-view 
                    id="${item._id}"
                    data-type="${
                      this.state.propertyType[item.property_type_id]
                    }"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `;
        });
        this._qs("#pagination").innerHTML = this.pagination;
      }
    } catch (err) {
      console.log(err);
    }
    // this.stopLoader()
    this.unwait(".filter-button");
  } //End of filterProperty

  //loadSearch
  loadSearch() {
    this._qs(".search-button").addEventListener("click", () => {
      this.searchProperty();
    });
    this._qs(".input-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.searchProperty();
    });
  } //End of loadSearch()

  //load filter
  loadFilter() {
    this._qs(".filter-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.filterProperty();
    });
  }

  connectedCallback() {
    // Load add comps
    // this.loadpropertyView()

    // API call for get Districts
    this.getDistricts();
    // Add eventlistner to load citeis
    this.loadCities();

    // API call for get property types
    this.getPropertytypes();

    // API call for get Rental periods
    this.getRentalPeriods();

    //loadSearch
    this.loadSearch();

    //load filter
    this.loadFilter();

    // Toggle filter
    this.toggleFilter();
  } //End of connected callback
} //End of Class

const elementName = "available-property";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, AvalibaleProperty)
  : null;
