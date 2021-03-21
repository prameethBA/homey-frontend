import Base from "/componets/Base.js";
import CSS from "./pagination.css.js";

export default class Pagination extends Base {
  css = CSS;

  content = `<span id='pagination'></span>`;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  setPagination() {
    let content = `
        <div class='pagination'>
            <div class='previous'>First</div>
                <div class="link">
                    ${+this.getParam("data-current")-2}
                </div>
                <div class="link">
                    ${+this.getParam("data-current")-1}
                </div>
                <div class="link active">
                    ${this.getParam("data-current")}
                </div> 
                <div class="link">
                    ${+this.getParam("data-current")+1}
                </div>
                <div class="link">
                    ${+this.getParam("data-current")+2}
                </div>
            <div class='last'>Last</div>
        </div>
    `;
    this._qs("#pagination").innerHTML = content;
  } //End of setPagination()

  //

  //connectedCallback
  connectedCallback() {
      //setPagination
      this.setPagination()
      
  } //End of connectedCallback()
} //End of Class

window.customElements.define("pagination-comp", Pagination);
