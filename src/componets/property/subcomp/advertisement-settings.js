import Base from "../../Base.js";
import CSS from "./advertisement-settings.css.js";

export default class AdvertisementSettings extends Base {
  css = CSS;

  schedule = `
      <div class="schedule-container">
        <div class="schedule-title">Post on</div>
        <div class="schedule-date">
          <input type="date" id="schedule-date" value="${new Date(
            this.getParam("data-available")
          )
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
          <div id="boost-message"></div>
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
                  <input type="checkbox" id="schedule">
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
          <div class="toggle_opt" id="share-pop">
              <label for="share-pop-input">Number of individuals can obtain : </label>
              <input type="number" id="share-pop-input" min='1' value="1" onfocus="this.select()" />
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
    this._qs(".popup").innerHTML = this.schedule;
  } //End of constructor

  //boost post
  boostPost() {
    this._qs("#boost").addEventListener("click", () => {
      if (this._qs("#boost").checked) {
        this._qs("#boost-message").style.display = "flex";
        this._qs("#boost-message").innerHTML =
          "You will able to boost the advertisement once admin approved the addvertiement.You will notify via email";
        this.popup(
          "You will able to boost the advertisement once admin approved the addvertiement",
          "info",
          10
        );
      } else this._qs("#boost-message").style.display = "none";
    });
  } //End of boostPost()

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

  //share post
  share() {
    this._qs("#share").addEventListener("click", () => {
      if (this._qs("#share").checked) {
        this._qs("#share-pop").style.display = "flex";
        this._qs("#share-pop-input").focus();
      } else this._qs("#share-pop").style.display = "none";
    });
  } //End of share()

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
      const boost = this._qs("#boost").checked,
      privated = this._qs("#private").checked,
      schedule = this._qs("#schedule").checked,
      share = this._qs("#share").checked,
      sendCopy = this._qs("#sendCopy").checked, 
      individuals = this._qs("#share-pop-input").value

      //validate individuals box
      if (share)
        if (!/^[1-9]\d*$/.test(individuals)) {
          this.popup("Invalid number of individuals", "error", 7);
          return;
        }

      const data = {
        boost: boost,
        privated: privated,
        schedule: schedule,
        scheduleDate: this._qs("#schedule-date").value,
        scheduleTime: this._qs("#schedule-time").value,
        sharing: share,
        individuals: share ? individuals : 0,
        sendCopy: sendCopy,
      };

      const res = await axios.patch(`${this.host}/property/save-settings`, {
        ...data,
        ...this.authData(),
        propertyId: this.getAttribute("data-key"),
      });

      if (res.status == 201) {
        this.popup(res.data.message, "success", 5);
      } else throw res.data;
    } catch (err) {
      this.popup(err.message, "error", 10);
    }
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

    //boost post
    this.boostPost();

    //share post
    this.share();
  } //End of connected callBack()
} //End of class

const elementName = "advertisement-settings";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, AdvertisementSettings)
  : null;
