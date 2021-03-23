import Base from "../../Base.js";
import CSS from "./comment-comp.css.js";

export default class Comment extends Base {
  css = CSS;

  loader = `<img src="/assets/img/alt/load-post.gif">`;

  content = `
    <div class="backdrop">
    <div class="comments-app">
        <div id="close">+</div>
        <h1>${this.getParams("data-data")}</h1>
        
        <!-- From -->
        <div class="comment-form">
          <!-- Comment Avatar -->
          <div class="comment-avatar" id="profile-picture">
            ${this.loader}
          </div>
      
          <div class="form" name="form">
            <div class="form-row">
              <textarea class="input" placeholder="Add comment..." required id="feedback"></textarea>
            </div>
            <div class="form-row">
              <!--<input class="input" placeholder="Email" type="email">-->
            </div>
            <div class="form-row text-right">
              <input id="comment-anonymous" type="checkbox">
              <label for="comment-anonymous">Anonymous</label>
            </div>
            <div class="form-row">
              <input type="submit" value="Add Comment" id="submit">
            </div>
          </div>
        </div>
      
        <!-- Comments List -->
        <div id="comments-new" class="comments">          
        </div>
        <div id="comments" class="comments">          
        </div>
      </div>
      </div>

    `;

  constructor() {
    super();
    this.mount();
  } //End of constructor

  //getprofilePicture
  async getprofilePicture() {
    try {
      if (
        localStorage.profilePiture == undefined ||
        localStorage.profilePiture == null
      ) {
        const res = await axios.post(
          `${this.host}/images/getProfileImage/${this.getUserId()}`
        );
        this._qs(
          "#profile-picture"
        ).innerHTML = `<img id="profile-picture-image"
                src="${
                  res.data.image != ""
                    ? res.data.image
                    : "/assets/img/alt/no-mage.png"
                }" 
                alt="Profile picture"
                />`;
      } else
        this._qs(
          "#profile-picture"
        ).innerHTML = `<img id="profile-picture-image"
      src="${localStorage.profilePiture}" 
      alt="Profile picture"
      />`;
    } catch (err) {
      console.log(err);
    }
  } //End of getprofilePicture()

  //add new comment
  addNewComment() {
    this._qs("#submit").addEventListener("click", async () => {
      try {
        if (this.isLogin() == false) throw "load-login";
        const feedback = this._qs("#feedback").value;
        const anonymous = this._qs("#comment-anonymous").checked ? 1 : 0;
        if (feedback == "") throw "Empty comment";
        const res = await axios.post(`${this.host}/feedback/add-comment`, {
          ...this.authData(),
          propertyId: this.getParam("id"),
          feedback: feedback,
          anonymous: anonymous,
        });

        if (res.status == 201) {
          this.popup(res.data.message, "success", 5);

          await import("./subcomp/comment-box.js");
          const values = this._qs("#comments-new").innerHTML;
          this._qs("#comments-new").innerHTML =
            `<comment-box data-data="${this.encode({
              feedback: feedback,
              propertyId: this.getParam("id"),
              image: this._qs("#profile-picture-image").src,
            })}"></comment-box>` + values;

          this._qs("#feedback").value = "";
        } else throw res.data;
      } catch (err) {
        if (err == "load-login") {
          dispatchEvent(new Event("load-login-form"));
          this.popup("Login in to add a comment", "info");
        }
        this.popup(err.message, "error");
      }
    });
  } //End of addNewComment()

  //get comments
  async getComments() {
    try {
      const res = await axios.get(
        `${this.host}/feedback/get-all-comments/${this.getParam("id")}`
      );

      await import("./subcomp/comment-box.js");
      res.data.forEach((item) => {
        this._qs(
          "#comments"
        ).innerHTML += `<comment-box id=${item.id} view="true"></comment-box>`;
      });
    } catch (err) {
      console.log(err);
    }
  } //End of getComments()

   //Exit with Escape key
   exitWithEscape() {
    addEventListener("keyup", ({ key }) =>
      key === "Escape" ? this._qs(".backdrop").style.display = "none" : null
    );
  } // End of exitWithEscape()

  connectedCallback() {
    this._qs("#close").addEventListener(
      "click",
      () => (this._qs(".backdrop").style.display = "none")
    );

    //get comments
    this.getComments();

    //getprofilePicture
    this.getprofilePicture();

    //add new comment
    this.addNewComment();
    // Exit with escape key
    this.exitWithEscape();
  } //End of connectedCallback
} //End of class

window.customElements.define("comment-comp", Comment);
