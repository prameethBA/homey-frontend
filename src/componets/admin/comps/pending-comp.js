import Base from "./../../Base.js";
import CSS from "./pending-comp.css.js";
import "/componets/universal/pagination/pagination.js";

export default class Pendings extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="pending-approval">
            <table id="pending-approval-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Advertisement Title</th>
                        <th>User</th>
                        <th>Posted on</th>
                        <th>Approve</th>
                        <th>Decline</th>
                    </tr>
                </thead>
                <tbody id="pending-approval-table-body">
                    
                </tbody>
            </table>
        </div>
        
        <pagination-comp></pagination-comp>
        
    </div>
    <div class="preview-advertisement"></div>
    <div class="popup"></div>
    <div class="loader"></div>
`;
  constructor() {
    super();
    this.mount();
  } //End of the constructor

  // Preview advertisement
  adPreview() {
    this._qsAll(".ad-link").forEach((item) => {
      item.addEventListener("click", async () => {
        this.wait(item);
        const res = await axios.post(
          `${this.host}/admin-property/pending-approval`,
          {
            ...this.authData(),
            id: item.dataset.id,
          }
        );
        await import("./../../universal/preview-advertisement.js");
        this._qs(
          ".preview-advertisement"
        ).innerHTML = `<preview-advertisement overview="true" data-data="${this.encode(
          { ...res.data, _id: item.dataset.id }
        )}"></preview-advertisement>`;
        this.unwait(item);
      });
    });
  } //End of adPreview()

  // get summary about pendin approvals
  async getSummary() {
    this.wait(".loader");
    await axios
      .post(`${this.host}/admin-property/pending-approval/summary`, {
        ...this.authData(),
      })
      .then((res) => {
        // console.log(res.data)
        // if (res.data.length < 1 || res.data.length == undefined)
        //     throw res
        let index = 1;
        this._qs("#pending-approval-table-body").innerHTML = "";
        res.data.forEach((item) => {
          this._qs("#pending-approval-table-body").innerHTML += `
                        <tr>
                            <td>${index++}</td>
                            <td><a class="ad-link" data-id="${item._id}">${
            item.title
          }</a></td>
                            <td><a class="user-link" data-id="${
                              item.user_id
                            }">View user</a></td>
                            <td>${item.created}</td>
                            <td><button class="approve-button" data-id="${
                              item._id
                            }">Approve</button></td>
                            <td><button class="decline-button" data-id="${
                              item._id
                            }">Decline</button></td>
                        </tr>
                    `;
        });
        this.adPreview();
        this.unwait(".loader");
      })
      .catch((err) => {
        this.unwait(".loader");
        console.log(err);
      });
    //load view user component
    this.loadViewUser();
    //make Approve
    this.makeApprove();
    //make Reject
    this.makeReject();
  } //End of getSummary()

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

  //load view user component
  loadViewUser() {
    this._qsAll(".user-link").forEach((item) => {
      item.addEventListener("click", () => this.viewUser(item.dataset.id));
    });
  } //end of loadViewUser()

  //Approve
  async approve(id) {
    try {
      const res = await axios.post(`${this.host}/admin-property/approve`, {
        ...this.authData(),
        propertyId: id,
      });

      if (res.data.status == "204") {
        // get summary about pendin approvals
        this.getSummary();

        this.popup(res.data.message, "success", 5);
      } else throw res.data;
    } catch (err) {
      console.log(err);
    }
  } //End of approv()

  //make Approve
  makeApprove() {
    this._qsAll(".approve-button").forEach((item) => {
      item.addEventListener("click", async () => {
        this.wait(item);
        await this.approve(item.dataset.id);
        this.unwait(item);
      });
    });
  } //end of makeApprove()

  //reject
  async reject(id) {
    try {
      const res = await axios.post(
        `${this.host}/admin-property/reject-approval`,
        {
          ...this.authData(),
          propertyId: id,
        }
      );

      if (res.data.status == "204") {
        // get summary about pendin approvals
        this.getSummary();

        this.popup(res.data.message, "info", 5);
      } else throw res.data;
    } catch (err) {
      console.log(err);
    }
  } //End of reject()

  //make Reject
  makeReject() {
    this._qsAll(".decline-button").forEach((item) => {
      item.addEventListener("click", async () => {
        this.wait(item);
        await this.reject(item.dataset.id);
        this.unwait(item);
      });
    });
  } //end of makeReject()

  //connectedCallback
  connectedCallback() {
    // Api call for getting the data
    this.getSummary();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("pending-comp", Pendings);
