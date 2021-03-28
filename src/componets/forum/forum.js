import Base from "../Base.js";
import CSS from "./forum.css.js";

export default class Forum extends Base {
  css = CSS;

  content = `
        <div class="heading">
                <h1>HOMEY.LK Forum</h1>
        </div>
        <div class="buttons">
            <div>   
                <button class="tab-button home">Forum Home</button>
                <button class="tab-button my-posts">My Posts</button>
            </div>
            <div>   
                <button class="tab-button" id="create-post">Create Post + </button>
                <div id="create-post-box"></div>
            </div>
        </div>
        <div class="container">
            <div class="forum-post">
            </div>
        </div>
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  //get posts
  async getPosts() {
    this.setLoader();

    try {
      await import("./forum-post.js");

      const res = await axios.get(`${this.host}/forum/all`);
      this._qs(".forum-post").innerHTML = "";
      if (res.status == 200) {
        res.data.forEach((item) => {
          this._qs(
            ".forum-post"
          ).innerHTML += `<forum-post data-data="${this.encode(
            item
          )}"></forum-post>`;
        });
      } else throw res.data;
    } catch (err) {
      this.popup(err.message, "error", 5);
    }
    this.stopLoader();
  }

  //get My posts
  async getMyPosts() {
    this.setLoader();

    try {
      await import("./forum-post.js");

      const res = await axios.get(`${this.host}/forum/all/${this.getUserId()}`);

      if (res.status == 200) {
        this._qs(".forum-post").innerHTML = "";
        res.data.forEach((item) => {
          this._qs(
            ".forum-post"
          ).innerHTML += `<forum-post data-data="${this.encode(
            item
          )}"></forum-post>`;
        });
      } else throw res.data;
    } catch (err) {
      this.popup(err.message, "error", 5);
    }
    this.stopLoader();
  }

  //create post
  createPost() {
    this._qs("#create-post").addEventListener("click", async () => {
      this.setLoader();
      if (!this.isLogin()) {
        dispatchEvent(new Event("load-login-form"));
        this.popup("Login to add a post", "info");
        return;
      }
      await import("./create-post.js")
        .then(() => {
          this._qs(".forum-post").innerHTML += `
                        <create-post>
                        </create-post>`;
          this.stopLoader();
        })
        .catch((err) => {
          this.stopLoader();

          this.popup(err.message, "error", 3);
        });
    });
  }

  //listen for new post
  listenNewPost() {
    addEventListener("new-post-added", (e) => {
      this._qs(
        ".forum-post"
      ).innerHTML += `<forum-post data-data="${this.encode(
        e.detail
      )}"></forum-post>`;
    });
  }

  //get My posts
  myPosts() {
    this._qs(".my-posts").addEventListener("click", () => {
      if (!this.isLogin()) {
        dispatchEvent(new Event("load-login-form"));
        this.popup("Login to see own posts", "info");
        return;
      }
      this.getMyPosts();
    });
  }

  //Forum Home
  homePosts() {
    this._qs(".home").addEventListener("click", () => this.getPosts());
  }

  connectedCallback() {
    this.createPost();

    //get posts
    this.getPosts();

    //Forum home
    this.homePosts();

    //listen for new post
    this.listenNewPost();

    //get My posts
    this.myPosts();
  } //End of connectedCallback()
} //End of class

const elementName = "forum-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Forum)
  : null;
