import Base from './Base.js'

const style = `


`
const content = `
        <div class='container'>
            <h3>Reset Password</h3>
            <div class="row>
                <label for="email"> Email </label>
                <input type="email" id="email" name="email" title="Email : someone@somthing.com" />
            </div>
            <div class="row">
                <button id="reset">Reset</button>
            </div>
        </div>
`

export default class ResetPassword extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot
            .querySelectorAll('#reset')
            .addEventListener('click', () => {
                dispatchEvent(new Event('load-password-reset'))
            })
    }
}
window.customElements.define('reset-password', ResetPassword)
