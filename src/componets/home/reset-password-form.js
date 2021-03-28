import Base from "../Base.js";
import CSS from "./reset-password-form.css.js";

export default class ResetPassword extends Base {
  css = CSS;
  content = `
          <div id="backdrop" title="Click to close this form">
          </div>

          <div class="form">
            <div class='container'>
                <h2>Reset Password</h2>
                <div class="row">
                  <input type="text" id="email" name="email" title="Email : someone@somthing.com" required />
                  <label for="email"> Email </label>
                </div>
                <div class="row">
                    <button id="reset">Reset</button>
                </div>
            </div>
          </div>
  `;

  constructor() {
    super();
    this.mount();
  } //End of constructor

  connectedCallback() {
    this._qs("#backdrop").addEventListener("click", () => {
      dispatchEvent(new Event("exit-form"));
      this.setPath("/");
    });

    this._qs("#reset").addEventListener("click", async () => {
      this._qs("#email").value == ""
        ? this.popup("Provid an email.", "error")
        : this.popup(
            `Reset email should be sent for <br /><b><i> ${
              this._qs("#email").value
            }</i></b>`,
            "info"
          );
    });
  } //End of callback
} //End of the class

const elementName = "reset-password-form";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, ResetPassword)
  : null;
