import Base from "/componets/Base.js";
import CSS from "./forum-post.css.js";

export default class Forum extends Base {
  css = CSS;

  data = this.getParams("data-data");

  content = `
    <div class="posts" id="${this.data._id}">
        <div class="post-container">
            <div class="post-row">
                <h4 class="post-username" id="${this.data.user_id}">Anonymous user</h4>
                <h5 class="post-creadted">${this.data.created}</h5>
            </div>
            <div class="post-row">
                <h3 class="post-heading">${this.data.title}</h3>
                <p class="justify-text">${this.data.content}</p>
            </div>
            <div class="post-row">
                <textarea class="textarea" rows="1" cols="60" id="comment" name="comment" placeholder="Write comment"></textarea>
            </div>
            <hr>
        </div>
    </div>
    
`;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  //get username
  async getUserName() {
    try {
      const res = await axios.get(
        `${this.host}/user/get-name/${this.data.user_id}`
      );

      if (res.status == 200)
        this._qs(
          ".post-username"
        ).innerHTML = `${res.data.firstName} ${res.data.lastName}`;
      else throw res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  //connectedCallback
  connectedCallback() {
    //get username
    this.getUserName();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("forum-post", Forum);
