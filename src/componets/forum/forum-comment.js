import Base from "../Base.js";
import CSS from "./forum.css.js";

export default class ForumComment extends Base {
    css = CSS;

    data = this.getParams('data-data');

    content = `
    <div>
        <div class="post-row">
            <h3 class="post-username" id="">${this.data.firstName} ${this.data.lastName} </h4>
            <h5 class="post-creadted">${this.data.created}</h5>
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


    connectedCallback() {

        } //End of connectedCallback()
} //End of class

window.customElements.define("forum-comment", ForumComment);