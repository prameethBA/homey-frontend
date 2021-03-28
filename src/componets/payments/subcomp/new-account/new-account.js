import Base from "/componets/Base.js";
import CSS from "./new-account.css.js";

export default class NewAccount extends Base {
  css = CSS;

  content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">Add bank account</span>
            </div>
            <div class="form">
                <div class="form-column">
                    <label for="fullName">Full Name(In Bank account)<span class="require" title="Required">*</span></label>
                    <input type="text" id="fullName" value="" />
                </div>
                <div class="form-column">
                    <label for="bank">Bank <span class="require" title="Required">*</span></label>
                    <input type="bank" id="bank" value="" />
                </div>
                <div class="form-column">
                    <label for="branch">Branch</label>
                    <input type="text" id="branch" value="" />
                </div>
                <div class="form-column">
                    <label for="account-number">Account Number<span class="require" title="Required">*</span></label>
                    <input type="text" id="account-number" value="" />
                </div>
                <div class="form-row">
                        <button id="create">Add bank account</button>
                        <button id="cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

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

  connectedCallback() {
    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();
  } //End of connectedCallback
} //End of Class

const elementName = "new-account";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, NewAccount)
  : null;
