import Base from "/componets/Base.js";
import CSS from "./review-comp.css.js";

export default class Review extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div id="full-content">
                
            </div>
            <div class="buttons">
            <!-- <button id=ban>Ban</button> -->
            <button id="delete">Delete</button>
            <button id="ignore">Ignore</button>
            </div>


        <div class="loader"></div>
    </div>
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  //get report
  async getReport() {
    this.wait(".loader");
    try {
      const res = await axios.post(`${this.host}/feedback/get-report`, {
        ...this.authData(),
        id: this.getParam("id"),
      });

      if (res.status == 200) {
        this._qs("#full-content").innerHTML = `
                <div class="row">
                            <span class="menu-title">
                                <a href="https://homey.lk/property/${res.data.property_id}">
                                    Review Report - #${res.data.property_id}
                                </a>
                            </span>
                    </div>
                    <div class="row">
                            <span class="test-content"></span>
                    </div>
                    <div class="report-app">
                    <div class="report-details">
                        <div class="report-coloumn report-prop-id">Prperty Id : ${res.data.property_id}</div>
                        <div class="report-coloumn report-reason">Reason for report : ${res.data.reason}</div>
                        <div class="report-coloumn report-reason">Report : ${res.data.message}</div>
                        <div class="report-coloumn report-other">Reported on : ${res.data.created}</div>

                    </div>
                </div>`;
      } else throw res.data;
    } catch (err) {
      console.log(err.message);
    }
    this.unwait(".loader");
  }

  deleteReview() {
    this._qs("#delete").addEventListener("click", async () => {
      this.wait("#delete");
      const res = await axios.post(
        `${this.host}/feedback/delete-report/${this.getParam("id")}`,
        { ...this.authData() }
      );

      if (res.status == 201) {
        this.popup("Report deleted", "info");
        this.exitDock();
        this.setPath("/admin/report");
        this.unwait("#delete");
      } else {
        this.popup("Failed to delete", "error");
        this.unwait("#delete");
      }
    });
  }

  ignoreReview() {
    this._qs("#ignore").addEventListener("click", async () => {
      this.wait("#ignore");
      const res = await axios.post(
        `${this.host}/feedback/ignore-report/${this.getParam("id")}`,
        { ...this.authData() }
      );

      if (res.status == 201) {
        this.popup("Report ignored", "info");
        this.exitDock();
        this.setPath("/admin/report");
        this.unwait("#ignore");
      } else {
        this.popup("Failed to ignore", "error");
        this.unwait("#ignore");
      }
    });
  }

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

  connectedCallback() {
    this.deleteReview();
    this.ignoreReview();
    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();

    //get report
    this.getReport();
  } //End of connectedCallback
} //End of Class

const elementName = "review-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Review)
  : null;
