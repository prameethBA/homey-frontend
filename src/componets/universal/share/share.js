import Base from "/componets/Base.js";
import CSS from "./share.css.js";

export default class Share extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="social-btns">
                <span class="btn facebook"><img src="/assets/icon/Share/fb_32px.png" class="fa fa-facebook"></span>
                <span class="btn twitter"><img src="/assets/icon/Share/twitter_32px.png" class="fa fa-twitter"></span>
                <span class="btn whatsapp"><img src="/assets/icon/Share/whatsapp_32px.png" class="fa fa-whatsapp"></span>
            </div>
        </div>
`;

  constructor() {
    super();
    this.mount();
  } //End of the constructor

  //Share on Facebook
  shareFacebook() {
    this._qs(".facebook").addEventListener("click", () => {
      window.open(
        `http://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
      );
    });
  }
  //Share on Twitter
  shareTwitter() {
    this._qs(".twitter").addEventListener("click", () => {
      window.open(
        `https://twitter.com/intent/tweet?url=${window.location.href}&text={title}&via={user_id}&hashtags={hash_tags}`
      );
    });
  }
  //Share on Whatsapp
  shareWhatsapp() {
    this._qs(".whatsapp").addEventListener("click", () => {
      window.open(
        `https://web.whatsapp.com://send?text=${window.location.href}`
      );
    });
  }

  //close the dock
  close() {
    this._qs("#close-popup").addEventListener("click", () => {
      this.exitDock();
    });
  } //End of the close()

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
    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();
    //Share facebook
    this.shareFacebook();
    //Share Twitter
    this.shareTwitter();
    //Share Whatsapp
    this.shareWhatsapp();
  } //End of connectedCallback()
} //End of Class

const elementName = "share-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Share)
  : null;
