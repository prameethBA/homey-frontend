import Base from '../Base.js'
import CSS from './reset-password-form.css.js'

export default class ResetPassword extends Base {

  css = CSS
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
  `

  constructor() {
    super()
    this.mount()
    
  }//End of constructor

  connectedCallback() {

    this._qs('#backdrop').addEventListener('click', () => {
      dispatchEvent(new Event('exit-form'))
      this.setPath('/')
    })

    this._qs('#reset').addEventListener('click', async () => {
      this._qs('#email').value == '' 
      ? dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: "Provid an email." } })) 
      : dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'info', msg: `Reset email should be sent for <br /><b><i> ${this._qs('#email').value}</i></b>` } }))
    })

  }//End of callback

}//End of the class

window.customElements.define('reset-password-form', ResetPassword)
