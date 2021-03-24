import Base from "../../Base.js";
import CSS from "./property-view.css.js";

export default class PropertyView extends Base {
  css = CSS;

  confirmPropertyDelete = `
  <div>
      <div class="title">Do you really want to remove property?</div>
      <div class="button-group">
          <button class="yes-remove danger-button">Yes</button>
          <button class="no-remove">No</button>
      </div>
  </div>
`;

  options = `
    <div class="online-payment toggle-menu">
        <span>Accept Online payments</span>
        <label class="switch">
            <input type="checkbox" id="onlinePayment"/>
            <span class="toggle round"></span>
        </label>
    </div>

    <div class="boost-property toggle-menu">
        <span>Boost</span>
        <label class="switch">
            <input type="checkbox" id="boost"/>
            <span class="toggle round"></span>
        </label>
    </div>

    <div class="visibility toggle-menu">
        <span>Private</span>
        <label class="switch">
            <input type="checkbox" id="private"/>
            <span class="toggle round"></span>
        </label>
        <span>Public</span>
    </div>
    `;

  removeButton = `
        <button class="remove">Remove</button>
    `;
  reserveButton = `
        <button class="reserve">Reserve</button>
    `;

  content = `
        <div class="container">
           <div class="row">
                <div class="">
                    <div class="slide">
                        <img class="slider slider-previous" src="/assets/icon/slide-previous.svg">
                        <img class="slider slider-next" src="/assets/icon/slide-next.svg">
                    </div>
                </div>
                <div name="thumbnail" class="thumbnail">
                    <img class="img" src="/assets/img/alt/load-post.gif" style="display: block !important;"/>
                </div>
           </div>
           <div class="details">
                <p class="title">Title</p>
                <span class="detail-bar">
                    <div class="quick-links">
                        ${
                          this.getParam("overview") == "true"
                            ? `<span></span>`
                            : `<div class="favourite" data-data="add" title="Add to favoutite"> <img src="/assets/icon/Favourite/Heart_NotFilled_24px.png"> </div>`
                        }
                        <div class="share" title="Share"><img src="/assets/icon/Share/share_24px.png" id="share-post"></div>
                        <div class="status">⚪</div>
                        ${
                          this.getParam("overview") == "true"
                            ? `<span></span>`
                            : `<div class="report" title="Report"><img src="/assets/icon/Report/Report_24px.png"></div>`
                        }
                    </div>
                    <p class="price">Rental</p>
                </span>

                ${
                  this.getParam("overview") == "true"
                    ? this.options
                    : `<span></span>`
                }

            </div>
            <p class="description">${"item.description"}</p>
            <div class='button-group'>
                <button class="comment">Comment</button>
                ${
                  this.getParam("overview") == "true"
                    ? this.removeButton
                    : this.reserveButton
                }
                <button class="more">More >></button>
            </div>
        </div>
        <div class="popup"></div>
        <div id="comment-box"></div>
        <slot name="id" ></slot>
        <div id="share-post-box"></div>
    `;

  constructor() {
    super();
    this.mount();

    this.state = this.decode(this.getAttribute("data-data"));

    //getFavourite
    if (this.getAttribute("overview") != "true") this.getFavourite();
    // this.qs('img').style.display = 'block'
  } //End of constructor

  //SetValues
  setValues() {
    this._qs(".title").innerHTML = this.state.title;
    this._qs(".price").innerHTML = "Rs. " + this.state.price;
    this._qs(".description").innerHTML = this.state.description;

    switch (this.state.property_status) {
      case "0":
        this._qs(".status").innerHTML =
          '<span title="Pending Approval">    <img src="/assets/icon/Available/Pending_24px.png">   </span>';
        break;
      case "1":
        this._qs(".status").innerHTML =
          '<span title="Available">   <img src="/assets/icon/Available/Available_24px.png">   </span>';
        break;
      case "2":
        this._qs(".status").innerHTML =
          '<span title="Rejected">    <img src="/assets/icon/Available/NotAvailable_24px.png">   </span>';
        break;
    }

    if (this.getAttribute("overview") == "true") {
      this.state.boost == "1"
        ? (this._qs("#boost").checked = true)
        : (this._qs("#boost").checked = false);

      this.state.accept_online_payment == "1"
        ? (this._qs("#onlinePayment").checked = true)
        : (this._qs("#onlinePayment").checked = false);

      this.state.privated == "0"
        ? (this._qs("#private").checked = true)
        : (this._qs("#private").checked = false);

      //checkBoxEventListener
      this.checkBoxEventListener("onlinePayment", "online-payment", {
        onlinePayment: this._qs(`#onlinePayment`).checked == false ? 1 : 0,
      });
      this.checkBoxEventListener("private", "visibility", {
        visibility: this._qs(`#private`).checked == true ? 1 : 0,
      });
    }

    //get images
    this.getImages();
  } //End of setValues()

  //get images
  async getImages() {
    try {
      const res = await axios.post(
        `${this.host}/images/get-property/${this.getAttribute("id")}`,
        {
          userId: this.getUserId(),
          token: this.getToken(),
          propertyId: this.state._id,
        }
      );

      if (res.data.length == 0)
        this._qs(
          ".thumbnail"
        ).innerHTML = `<img class="img" src="/assets/img/alt/no-mage.png" style="display: block !important;" />`;
      else {
        this._qs(".thumbnail").innerHTML = "";
        await res.data.forEach((image) => {
          this._qs(
            ".thumbnail"
          ).innerHTML += `<img class="img" src="${image.image}" />`;
        });
      }

      //image slider
      this.slider();
    } catch (err) {
      console.log(err);
    }
  } //End of getImages()

  //image slider
  slider() {
    if (this._qsAll(".img").length >= 1) {
      this.state.img = 0;

      const slideNext = () => {
        this._qsAll(".img")[this.state.img].style.display = "none";
        this._qsAll(".img").length - 1 > this.state.img
          ? this.state.img++
          : (this.state.img = 0);
        this._qsAll(".img")[this.state.img].style.display = "block";
      };

      const slidePrevious = () => {
        this._qsAll(".img")[this.state.img].style.display = "none";
        0 < this.state.img
          ? this.state.img--
          : (this.state.img = this._qsAll(".img").length - 1);
        this._qsAll(".img")[this.state.img].style.display = "block";
      };

      this._qs(".slider-previous").addEventListener("click", () => {
        slidePrevious();
      });
      this._qs(".slider-next").addEventListener("click", () => {
        slideNext();
      });

      this._qs(".slider-next").click();

      let autoSlide = setInterval(() => slideNext(), 5000);
    }
  } //End of slider()

  //report component
  async report() {
    this.setLoader();
    await import("./report/report.js")
      .then(() => {
        console.log(this.state);
        this._qs("#comment-box").innerHTML = `
                    <report-form 
                        data-title="${this.state.title}" 
                        id="${this.state._id}"
                    >
                    </report-form>`;
        this.stopLoader();
      })
      .catch((err) => {
        this.stopLoader();

        this.popup(err.message, "error", 3);
      });
  } //End of report()

  //loadReport
  loadReport() {
    this._qs(".report") != null
      ? this._qs(".report").addEventListener("click", () => this.report())
      : null;
  } //end of loadReport()

  //reserve component
  async reserve() {
    this.setLoader();
    await import("./reserve/reserve.js")
      .then(() => {
        this._qs("#comment-box").innerHTML = `
                    <reserve-comp 
                        id="${this.getParam("id")}"
                    ></reserve-comp>`;
        this.stopLoader();
      })
      .catch((err) => {
        this.stopLoader();

        this.popup(err.message, "error", 3);
      });
  } //End of reserve()

  //loadReserve
  loadReserve() {
    this._qs(".reserve") != null
      ? this._qs(".reserve").addEventListener("click", () => this.reserve())
      : null;
  } //end of loadReserve()

  //load the full details about the property
  fullDetails() {
    this._qs(".more").addEventListener("click", () => {
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/property/${this.getParam("id")}`,
            comp: `property/property-details`,
            compName: "property-details",
          },
        })
      );
    });
  } //end of fullDetails()

  //toggle checkbox
  toggleCheckBox(id) {
    this._qs(`#${id}`).checked
      ? (this._qs(`#${id}`).checked = false)
      : (this._qs(`#${id}`).checked = true);
  } //End of toggleCheckBox()

  //checkBoxEventListener
  checkBoxEventListener(id, method, data) {
    this._qs(`#${id}`).addEventListener("change", async () => {
      try {
        this.toggleCheckBox(id);
        const res = await axios.patch(`${this.host}/property/${method}`, {
          userId: this.getUserId(),
          token: this.getToken(),
          propertyId: this.state._id,
          ...data,
        });
        if (res.status == 200 && res.data.status == "204") {
          this.toggleCheckBox(id);
        } else throw res.data;
      } catch (err) {
        console.log(err);
      }
    });
  } //End of checkBoxEventListener()

  //Remove property
  async removeProperty() {
    this._qs(".yes-remove").addEventListener("click", async () => {
      try {
        const res = await axios.post(`${this.host}/property/remove`, {
          ...this.authData(),
          propertyId: this.getParam("id"),
        });
        if (res.data.status == "204") {
          this.parentNode.removeChild(this);
          this.popup(res.data.message, "info");
        } else throw res.data;
      } catch (err) {
        console.log(err);
      }
    });
    this._qs(".no-remove").addEventListener("click", () => {
      this._qs(".popup").style.display = "none";
      this.unwait(".remove");
      //listen for remove
      this.listenRemove();
    });
  } //End of removeProperty()

  //listen for remove
  listenRemove() {
    this._qs(".remove").addEventListener("click", () => {
      this.wait(".remove");
      this._qs(".popup").innerHTML = this.confirmPropertyDelete;
      this.removeProperty();
    });
  } //End of listenRemove()

  //addFavourite
  async addFavourite(action) {
    try {
      const res = await axios.post(
        `${this.host}/property/toggle-favourite/${action}`,
        {
          ...this.authData(),
          propertyId: this.getParam("id"),
        }
      );
      if (res.data.status == "204") {
        if (action == "add") this.popup(res.data.message, "success");
        else this.popup(res.data.message, "info");
        return true;
      } else throw res.data;
    } catch (err) {
      this.popup(err.message, "error");
      return false;
    }
  } //End of addFavourite()

  //listen for addFavourite
  listenAddFavourite() {
    this._qs(".favourite").addEventListener("click", async () => {
      this.wait(".favourite");
      if (this._qs(".favourite").dataset.data == "add") {
        const res = await this.addFavourite("add");
        if (res) {
          this._qs(".favourite").innerHTML =
            '<img src="/assets/icon/Favourite/Heart_Filled_24px.png"></img>';
          this._qs(".favourite").title = "Remove from favourite";
          this._qs(".favourite").dataset.data = "remove";
        } else this.unwait(".favourite");
      } else {
        const res = await this.addFavourite("remove");
        if (res) {
          this._qs(".favourite").innerHTML =
            '<img src="/assets/icon/Favourite/Heart_NotFilled_24px.png"></img>';
          this._qs(".favourite").title = "Add to favourite";
          this._qs(".favourite").dataset.data = "add";
        } else this.unwait(".favourite");
      }
    });
  } //End of listenaddFavourite()

  //getFavourite
  async getFavourite() {
    try {
      if (!this.isLogin()) {
        this._qs(".favourite").innerHTML = "";
      }
      const res = await axios.post(
        `${this.host}/property/get-favourite-status`,
        {
          ...this.authData(),
          propertyId: this.getParam("id"),
        }
      );
      if (res.data.action == "1") {
        this._qs(".favourite").innerHTML =
          '<img src="/assets/icon/Favourite/Heart_Filled_24px.png"></img>';
        this._qs(".favourite").title = "Remove from favourite";
        this._qs(".favourite").dataset.data = "remove";
      } else {
        this._qs(".favourite").title = "Add to favourite";
        this._qs(".favourite").dataset.data = "add";
      }
    } catch (err) {
      this.popup(err.message, "error");
    }
  } //End of getFavourite()

  //sharePost
  sharePost() {
    this._qs("#share-post").addEventListener("click", async () => {
      this.setLoader();
      await import("/componets/universal/share/share.js");
      try {
        this._qs("#share-post-box").innerHTML = `
                        <share-comp>
                        </share-comp>`;
        this.stopLoader();
      } catch (err) {
        this.stopLoader();

        this.popup(err.message, "error", 3);
      }
    });
  } // End of sharePost

  //checkReserve
  checkReserve() {
    if (this.state.reserved == 1) {
      this._qs(".reserve").innerHTML = "Reserved";
      this._qs(".reserve").disabled = true;
      this._qs(".reserve").classList.add("reserved");
      this._qs(".reserve").classList.remove("reserve");
    } else console.log(this.state.reserved);
  } //end of checkReserve

  connectedCallback() {
    //SetValues
    this.setValues();

    // console.log(this.state.title)
    // console.log(this.state._id)

    this._qs(".comment").addEventListener("click", async () => {
      import("/componets/universal/comment/comment-comp.js").then(
        (this._qs("#comment-box").innerHTML = `<comment-comp 
                data-data="${this.encode(this.state.title)}" 
                id="${this.state._id}"
            >
            </comment-comp>`)
      );
    });

    //load report component
    this.loadReport();

    //Load the reserve component
    this.loadReserve();

    //load the full details about the property
    this.fullDetails();

    if (this.getParam("overview") == "true") {
      //listen for remove
      this.listenRemove();
    } else {
      //listen for addFavourite
      this.listenAddFavourite();
    }
    //Shate post
    this.sharePost();

    //checkReserve
    this.checkReserve();
  } //end of connected callback
} //End of class

const elementName = "property-view";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PropertyView)
  : null;
