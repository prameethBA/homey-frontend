import Base from "/componets/Base.js";
import CSS from "./share.css.js";

export default class Share extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
            <div class="social-btns">
                <a class="btn facebook" href="#"><img src="/assets/icon/Share/fb_32px.png" class="fa fa-facebook"></i></a>
                <a class="btn twitter" href="#"><img src="/assets/icon/Share/twitter_32px.png" class="fa fa-twitter"></a>
                <a class="btn whatsapp" href="#"><img src="/assets/icon/Share/whatsapp_32px.png" class="fa fa-whatsapp"></a>
            </div>
        </div>
`;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  // Exit the dock
  exitDock() {
    this._qs(".backdrop").style.opacity = "0";
    this._qs(".backdrop").style.pointerEvents = "none";
  } // End of exitDock()

  //Exit with Escape key
  exitWithEscape() {
    addEventListener("keyup", ({ key }) =>
      key === "Escape" ? this.exitDock() : null
    );
  } // End of exitWithEscape()

  //connectedCallback
  connectedCallback() {
    // Exit with escape key
    this.exitWithEscape();
  } //End of connectedCallback()
} //End of Class

window.customElements.define("share-comp", Share);
