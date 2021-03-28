import Base from "./../Base.js";
import CSS from "./popup.css.js";

export default class error extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div class="title"> Error </div>
        <span id="close-popup">
            <img src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png"/>
        </span>
        
        <span class="msg">
            <slot name="message"></slot>
        </span>
        <hr class="loading" /> 
    </div>
`;
  constructor() {
    super();
    this.mount();
    switch (this.getAttribute("type")) {
      case "success":
        this._qs(".title").innerHTML = "Success";
        this._qs(".container").classList.add("onsuccess");
        break;
      case "notice":
        this._qs(".title").innerHTML = "Notice";
        this._qs(".container").classList.add("onnotice");
        break;
      case "info":
        this._qs(".title").innerHTML = "Info";
        this._qs(".container").classList.add("oninfo");
        break;
      default:
      // Default is the error
    }

    if (
      this.getAttribute("duration") != "" &&
      this.getAttribute("duration") != undefined &&
      this.getAttribute("duration") != null
    )
      this.state.duration = this.getAttribute("duration") * 1000;
    else this.state.duration = 10000; //10seconds
  } //End of constructor

  connectedCallback() {
    setTimeout(() => {
      this._qs(".container").style.right = "1rem";
    }, 10);

    this._qs("#close-popup").addEventListener("click", () => {
      this._qs(".container").style.right = "-100%";
    });

    let widthvalue = 0;
    const loader = setInterval(() => {
      this._qs(".loading").style.width = widthvalue + "%";
      widthvalue++;
      if (widthvalue > 100) {
        clearInterval(loader);
        this._qs(".container").style.right = "-100%";
      }
    }, this.state.duration / 100);
  } //End of the connectedCallback()
} // End of Class

const elementName = "pop-up";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, error)
  : null;
