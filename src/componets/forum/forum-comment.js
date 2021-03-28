import Base from "../Base.js";
import CSS from "./forum.css.js";

export default class ForumComment extends Base {
  css = CSS;

    data = this.getParams("data-data");

    content = `
    <div class="conatiner">
        <div class="post-row">
            <h3 class="post-username" id="">${this.data.firstName} ${
              this.data.lastName
              }   
            </h3>
            <h5 class="post-creadted">${this.data.created}</h5>
            <div class="delete-btn">${
              this.data.id == this.getUserId() || this.getUserType() == 1
                ? `<button id="delete-comment" title="Delete the comment">🗑️</button>`
                : ""
            }
            </div>
        </div>
        <div class="post-row">
                <p class="justify-text">${this.data.comment}</p>
        </div>
        <hr/>
       
    </div>

  `;
  constructor() {
    super();
    this.mount();
  } //End of constructor

    //delete the comment
    deleteComment() {
            this._qs(".delete-btn").addEventListener("click", async() => {
                this.wait(".conatiner");

                try {
                    const res = await axios.post(
                        `${this.host}/forum/remove-comment/${this.data.id}`, {
                            ...this.authData(),
                        }
                    );
                    if (res.status == 200) {
                        this.popup(res.data.message, "notice");
                        this._qs(".conatiner").innerHTML = "";
                    } else throw res.data;
                } catch (err) {
                    this.popup(err.message, "error");
                    this.unwait(".conatiner");
                }
            });
        } //end of delete comment

    connectedCallback() {
            //delete the comment
            this.data.id == this.getUserId() || this.getUserType() == 1 ?
                this.deleteComment() :
                false;
        } //End of connectedCallback()
} //End of class

const elementName = "forum-comment";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, ForumComment)
  : null;
