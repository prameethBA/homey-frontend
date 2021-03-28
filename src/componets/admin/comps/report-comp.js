import Base from "/componets/Base.js";
import CSS from "./report-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class Report extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="report-comp">
            <table id="report-comp-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Report type</th>
                        <th>Reporter</th>
                        <th>Property</th>
                        <th>Reporting</th>
                        <th>Review</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody id="report-comp-table-body">
                </tbody>
            </table>
            </div>
        </div>
        
        <div class="popup"></div>
        
    <div class="preview-advertisement"></div>
    `;

  constructor() {
    super();
    this.mount();
  } //End of constructor

  // load rows
  async loadRow() {
    this.setLoader();
    try {
      const res = await axios.post(`${this.host}/feedback/get-all-report`, {
        ...this.authData(),
      });

      res.data.forEach((item) => {
        this._qs("#report-comp-table-body").innerHTML += `
                    <tr>
                        <td>${item._id}</td>
                        <td>${item.reason}</td>
                        <td><div class="user-link" id="${item.user_id}">User</div></td>
                        <td><div class="ad-link" id="${item.property_id}">Property</div></td>
                        <td>${item.message}</td>
                        <td>
                            <button class='primary-button review-button' data-id="${item._id}">Review</button>
                        </td>
                        <td>${item.created}</td>
                    </tr>
                `;
      });
      //load view user component
      this.loadViewUser();
      //addPreview
      this.adPreview();

      //loadReview
      this.loadReview();
    } catch (err) {
      console.log(err);
    }
    this.stopLoader();
  } //End loadRow()

  //load view user component
  loadViewUser() {
    this._qsAll(".user-link").forEach((item) => {
      item.addEventListener("click", () => this.viewUser(item.id));
    });
  } //end of loadViewUser()

  //review ad
  async reviewAd(id) {
    this.wait(".review-button");
    try {
      await import("./subcomp/review-comp/review-comp.js");

      this._qs(".popup").innerHTML = `
                <review-comp
                    id="${id}"
                ></review-comp>`;
    } catch (err) {
      console.log(err.message);
    }
    this.unwait(".review-button");
  }

  //loadReview
  loadReview() {
    this._qsAll(".review-button").forEach((item) => {
      item.addEventListener("click", () => {
        this.reviewAd(item.dataset.id);
      });
    });
  }

  //View user account summary
  async viewUser(id) {
    this.setLoader();
    await import("./subcomp/view-user/view-user.js")
      .then(() => {
        this._qs(".popup").innerHTML = `
                <view-user
                    id="${id}"
                ></view-user>`;
        this.stopLoader();
      })
      .catch((err) => {
        this.stopLoader();
        this.popup(err.message, "error", 10);
      });
  } //End of viewUser()

  // Preview advertisement
  adPreview() {
    this._qsAll(".ad-link").forEach((item) => {
      item.addEventListener("click", async () => {
        this.wait(item);
        const res = await axios.post(`${this.host}/admin-property/reported`, {
          ...this.authData(),
          id: item.id,
        });
        await import("./../../universal/preview-advertisement.js");
        this._qs(
          ".preview-advertisement"
        ).innerHTML = `<preview-advertisement overview="true" data-data="${this.encode(
          { ...res.data, _id: item.id }
        )}"></preview-advertisement>`;
        this.unwait(item);
      });
    });
  } //End of adPreview()

  // //close the dock
  // close() {
  //     this._qs('#close-popup').addEventListener('click', () => {
  //         this.exitDock()
  //     })
  // }//End of the close()

  // // Exit the dock
  // exitDock() {
  //     this._qs('.backdrop').style.opacity = '0'
  //     this._qs('.backdrop').style.pointerEvents = 'none'
  // }// End of exitDock()

  // //Exit with Escape key
  // exitWithEscape() {
  //     addEventListener('keyup', ({key}) => (key === 'Escape') ? this.exitDock() : null )
  // }// End of exitWithEscape()

  connectedCallback() {
    // load rows
    this.loadRow();

    // // close the dock
    // this.close()
    // // Exit with escape key
    // this.exitWithEscape()
  } //End of connectedCallback
} //End of Class

window.customElements.define("report-comp", Report);
