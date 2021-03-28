import Base from "/componets/Base.js";
import CSS from "./create-post.css.js";

export default class CreatePost extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
        <div class="report-container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="container">
                <div class="row">
                    <h1>Create Forum Post</h1>
                </div>
                <div class="row">
                    <h4 style="text-align:center">We'll make you happy as soon as possible!</h4>
                </div>
                <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input id="title" type="text" required />
                            <label>Forum title</label>
                        </div>
                    </div>
                    <div class="">
                        <div class="styled-input wide">
                            <textarea id="content" required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12">
                <button class="btn-lrg submit-btn">Submit</button>
            </div>
        </div>
    </div>
    
`;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

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

  //listenButton
  listenButton() {
    this._qs(".submit-btn").addEventListener("click", () => {
      if (this.validate()) this.submitPost(); //submitPost
    });
  } //End of listenButton()

  //validate data
  validate() {
    try {
      const reason = this._qs("#title");
      const message = this._qs("#content");

      if (/^ *$|^$/.test(reason.value))
        throw { message: "Title cannot be empty" };
      if (/^ *$|^$/.test(message.value))
        throw { message: "Content cannot be empty" };
      return true;
    } catch (err) {
      this.popup(err.message, "error", 10);
      return false;
    }
  } //End of validate()

  //SubmitPost
  async submitPost() {
    this.wait(".submit-btn");
    try {
      const res = await axios.post(`${this.host}/forum/create`, {
        ...this.authData(),
        title: this._qs("#title").value,
        content: this._qs("#content").value,
      });

      if (res.data.action == "true") {
        this.exitDock()
        dispatchEvent(
          new CustomEvent("new-post-added", {
            detail: {
              title: this._qs("#title").value,
              content: this._qs("#content").value,
              user_id: this.getUserId(),
              _id: 0,
              created: "just now",
            },
          })
        );
        this.popup(res.data.message, "success");
      } else {
        this.popup(res.data.message, "error");
      }
    } catch (err) {
      console.log(err);
    }
    this.exitDock();
    this.unwait(".submit-btn");
  } //End of submitPost

  //connectedCallback
  connectedCallback() {
    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();
    //listenButton
    this.listenButton();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("create-post", CreatePost);
