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
                <button class="tab-button">Forum Home</button>
                <button class="tab-button">My Posts</button>
            </div>
            <div>   
                <button class="tab-button" id="create-post">Create Post + </button>
                <div id="create-post-box"></div>
            </div>
        </div>
        <div class="container">
            <div class="tags">
                <h2 class="tags-txt">Populer <br/>Topics</h2>
                <ul>
                    <li><a href="#">Annexes</a></li>
                    <li><a href="#">Houses</a></li>
                    <li><a href="#">Bordings</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Site rules</a></li>
                    <li><a href="#">Reporting</a></li>
                </ul>
            </div>
            
            <span class="new-forum-post">
            </span>
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
    try {
      await import("./forum-post.js");

      const res = await axios.get(`${this.host}/forum/all`);

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
  }

  //create post
  createPost() {
    this._qs("#create-post").addEventListener("click", async () => {
      this.setLoader();
      await import("./create-post.js")
        .then(() => {
          this._qs("#create-post-box").innerHTML = `
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
      const temp = this._qs(".new-forum-post").innerHTML;
      this._qs(
        ".new-forum-post"
      ).innerHTML = `<forum-post data-data="${this.encode(
        e.detail
      )}"></forum-post>`;
      this._qs(".new-forum-post").innerHTML += temp;
    });
  }

  connectedCallback() {
    this.createPost();

    //get posts
    this.getPosts();

    //listen for new post
    this.listenNewPost();
  } //End of connectedCallback()
} //End of class

window.customElements.define("forum-comp", Forum);
