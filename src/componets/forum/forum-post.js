import Base from "/componets/Base.js";
import CSS from "./forum-post.css.js";

export default class Forum extends Base {
  css = CSS;

  data = this.getParams("data-data");

  content = `
    <div class="posts" id="${this.data._id}">
        <div class="post-container">
            <div class="post-row">
                <h4 class="post-username" id="${
                  this.data.user_id
                }">Anonymous user</h4>
                <h5 class="post-creadted">${this.data.created}</h5>
            </div>
            <div class="post-row">
                <h3 class="post-heading">${this.data.title}</h3>
                <p class="justify-text">${this.data.content}</p>
            </div>
            <div class="post-row">
                <textarea class="textarea" rows="1" cols="60" id="comment" name="comment" placeholder="Write comment"></textarea>
            </div>
            <div class="form-row">
              <button id="submit">Add Comment</button>
            </div>
            <hr>
            <div>${
              this.data._id == this.getUserId() || this.getUserType() == 1
                ? `<button id="delete-post" title="Delete the comment">🗑️</button>`
                : ""
            }
            </div>
            <div class="comment-container"></div>
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

  //getall coments
  async getAllComments() {
    try {
      const res = await axios.get(
        `${this.host}/forum/get-comments/${this.data._id}`
      );

      if (res.status == 200) {
        res.data.forEach(item => {
          this._qs('.comment-container').innerHTML += JSON.stringify(item) + "<br>"
        })
      }
      else throw res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  //delete the post
  deletePost() {
    this._qs("#delete-post").addEventListener("click", async () => {
      this.wait(".posts");

      try {
        const res = await axios.post(
          `${this.host}/forum/remove/${this.data._id}`,
          {
            ...this.authData(),
          }
        );
        if (res.status == 200) {
          this.popup(res.data.message, "notice");
          this._qs(".posts").innerHTML = "";
        } else throw res.data;
      } catch (err) {
        this.popup(err.message, "error");
        this.unwait(".posts");
      }
    });
  } //end of delete post

  //add new comment
  addComment() {
    this._qs("#submit").addEventListener("click", async () => {
      try {
        this.wait("#submit");
        const comment = this._qs("#comment");
        const res = await axios.post(`${this.host}/forum/add-new-comment`, {
          ...this.authData(),
          forumId: this.data._id,
          comment: comment.value,
        });
        if (res.status == 201) {
          this.popup(res.data.message, "success");
          comment.value = "";
        } else throw res.data;
        this.unwait("#submit");
      } catch (err) {
        this.popup(err.message, "error");
        this.unwait("#submit");
      }
    });
  } //end of add comment

  //connectedCallback
  connectedCallback() {
    //get username
    this.getUserName();

    //getall coments
    this.getAllComments();

    //add new comment
    this.addComment();

    //delete the post
    this.data._id == this.getUserId() || this.getUserType() == 1
      ? this.deletePost()
      : false;
  } //End of connectedCallback()
} //End of Class

window.customElements.define("forum-post", Forum);
