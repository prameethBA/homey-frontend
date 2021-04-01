import Base from "/componets/Base.js";
import CSS from "./forum-post.css.js";
import "./forum-comment.js";

export default class Forum extends Base {
    css = CSS;

    data = this.getParams("data-data");

    content = `
    <div class="posts" id="${this.data._id}">
        <div class="post-container">
            <div class="post-row">
                <h3 class="post-username" id="${
                  this.data.user_id
                }">Anonymous user</h3>
                <h5 class="post-creadted">${this.data.created}</h5>
            </div>
            <div class="post-row">
                <h2 class="post-heading">${this.data.title}</h2>
                <p class="justify-text">${this.data.content}</p>
            </div>
            <div class="post-row">
                <textarea class="textarea" rows="4" cols="60" id="comment" name="comment" placeholder="Write comment"></textarea>
            </div>

            <div class="post-row">
                <textarea class="textarea" rows="4" cols="60" id="url" name="comment" placeholder="Enter Url"></textarea>
            </div>

            <div class="form-row">
              <button id="submit">Add Comment</button>
              <div class="delete-btn">${
                this.data._id == this.getUserId() || this.getUserType() == 1
                  ? `<button id="delete-post" title="Delete the Post">🗑️</button>`
                  : ""
              }
              </div>
            </div>
            <hr> 
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
        res.data.forEach((item) => {
          this._qs(
            ".comment-container"
          ).innerHTML += `<forum-comment data-data=${this.encode(
            item
          )}></forum-comment>`;
        });
      } else throw res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  //delete the post
  deletePost() {
    this._qs(".delete-btn").addEventListener("click", async () => {
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
        if (!this.isLogin()) {
          this.popup("Login to add a comment", "info");
          return;
        }
        this.wait("#submit");
        const comment = this._qs("#comment");
        const url = this._qs("#url");//new
        const res = await axios.post(`${this.host}/forum/add-new-comment`, {
          ...this.authData(),
          forumId: this.data._id,
          comment: comment.value,
          url: url.value,//new
        });
        if (res.status == 201) {
          this.popup(res.data.message, "success");
          this._qs(
            ".comment-container"
          ).innerHTML += `<forum-comment data-data=${this.encode({
            comment: comment.value,
            created: "just now",
            firstName: "Me",
            lastName: "",
            user_id: "",
          })}></forum-comment>`;
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

    //delete the post
    this.data._id == this.getUserId() || this.getUserType() == 1
      ? this.deletePost()
      : false;

    //add new comment
    this.addComment();
  } //End of connectedCallback()
} //End of Class

const elementName = "forum-post";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Forum)
  : null;