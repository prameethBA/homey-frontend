import Base from "../../Base.js";
import CSS from "./advertisement-settings.css.js";

export default class AdvertisementSettings extends Base {
  css = CSS;

  schedule = `
      <div class="schedule-container">
        <div class="schedule-title">Post on</div>
        <div class="schedule-date">
          <input type="date" id="schedule-date" value="${new Date()
            .toISOString()
            .slice(0, 10)}"/>
          <input type="time" id="schedule-time" value="${new Date()
            .toISOString()
            .slice(11, 19)}"/>
        </div>
        <div>
          <button id="save-schedule"> Save </button>
          <button id="cancel-schedule"> cancel </button>
        </div>
      </div>
  `;

  content = `
  <div id="backdrop" title=">>Click to close this form">
  </div>

  <div class="container">

  <h1 class="feature_header">Turn on/off Features</h1>
  <section class="feature_container">
      <div>
          <div class="toggle_opt">
              <label for="boost">Boost Advertisement(Paid)</label>
              <label class="switch">
                  <input type="checkbox" id="boost" />
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="private">Save Private</label>
              <label class="switch">
                  <input type="checkbox" id="private" >
                  <span class="slider round"></span>
              </label>
          </div>
          <div class="toggle_opt">
              <label for="schedule" id="schedule-label">Schedule to post</label>
              <label class="switch">
                  <input type="checkbox" id="schedule" >
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="share">Tenants can share the property</label>
              <label class="switch">
                  <input type="checkbox" id="share" >
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="sendCopy">Send me a copy as email</label>
              <label class="switch">
                  <input type="checkbox" id="sendCopy" >
                  <span class="slider round"></span>
                </label>
          </div>
          
          <button class="btn btn-primary btn-lg" id="apply">APPLY</button>
          
          

      </div>
      
  </section>

    <div class="popup"></div>
</div>
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  //schedule post
  schedulePost() {
    this._qs("#schedule").addEventListener("click", () => {
      if (this._qs("#schedule").checked) {
        this._qs(".popup").style.display = "flex";
        this._qs(".popup").innerHTML = this.schedule;

        //save schedule
        this.saveSchedule();
      } else this._qs("#schedule-label").innerHTML = "Schedule to post";
    });
  } //End of schedulePost()

  //save schedule
  saveSchedule() {
    this._qs("#save-schedule").addEventListener("click", () => {
      this._qs(".popup").style.display = "none";
      this._qs("#schedule-label").innerHTML =
        "Schedule to (" +
        this._qs("#schedule-date").value +
        " " +
        this._qs("#schedule-time").value +
        ")";
    });
    this._qs("#cancel-schedule").addEventListener("click", () => {
      this._qs(".popup").style.display = "none";
      this._qs("#schedule").checked = false;
      this._qs("#schedule-label").innerHTML = "Schedule to post";
    });
  } //End of saveSchedule()

  //Apply ad settings
  async applySettings() {
    try {
      const boost = this._qs("#boost").checked;
      const privated = this._qs("#private").checked;
      const schedule = this._qs("#schedule").checked;
      const share = this._qs("#share").checked;
      const sendCopy = this._qs("#sendCopy").checked;

      const data = {
        boost: boost,
        privated: privated,
        schedule: schedule,
        scheduleDate: this._qs("#schedule-date").value,
        scheduleTime: this._qs("#schedule-time").value,
        sharing: share,
        sendCopy: sendCopy,
      };

      const res = await axios.patch(`${this.host}/property/settings`, {
        ...data,
        userId: this.getUserId(),
        token: this.getToken(),
        propertyId: this.getAttribute("data-key"),
      });

      if (res.status == 201) {
        this.popup(res.data.message, "success", 5);
        //redirect to own properties property
        dispatchEvent(
          new CustomEvent("load-comp", {
            detail: {
              path: `/`,
              comp: `property/own-properties`,
              compName: "own-properties",
            },
          })
        );
      } else throw res.data;
    } catch (err) {
      this.popup(err.message, "error", 10);
    }
  } //End of applySettings()

  connectedCallback() {
    // backdrop
    this._qs("#backdrop").addEventListener("click", () => {
      this._qs(".container").style.display = "none";
      this._qs("#backdrop").style.display = "none";
    });

    this._qs("#apply").addEventListener("click", () => {
      //Apply ad settings
      this.applySettings();
    });

    //schedule post
    this.schedulePost();
  } //End of connected callBack()
} //End of class

window.customElements.define("advertisement-settings", AdvertisementSettings);
