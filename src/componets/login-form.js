import Base from './Base.js'

const style = `
    .form {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);

        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5em 2em;
        padding-bottom: 3em;
    }

    h2 {
        text-align: center;
        margin-bottom: 0;
    }

    #backdrop {
        position: absolute;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        padding: 0px; 
        margin: 0px; 
        cursor: pointer;
    }

    input {
        outline: none;
    }

    label {
        display: block;
    }

    .hr-separator {
        width: 100%;
        height: 2px;
        background-color: #eeeeee;
        margin: 2em 0;
    }

    button {
        width: 100%;
    }

    .google {
        background-color: #eeeeee;
        color: blue;
    }

    .facebook {
        background-color: blue;
        color: #eeeeee;
    }

    a {
        cursor: pointer;
    }

`
const content = `
    <div id="backdrop" title="Click to close this form">
    </div>

    <div class="form">
    </div>

`

export default class LoginForm extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    loadLoginContent() {
        this.setPath('/login')
        this.shadowRoot.querySelector('.form').innerHTML = `
            <h2>Login</h2>
            <img src="" />

            <div class="container">
                <div class="row">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" title="Email : someone@somthing.com" />
                </div>
                <div class="row">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" title= "Password : pass@123" />
                </div>
                <div class="row">
                    <input type="checkbox" id="remember"> Remember me
                </div>
                <div class="row">
                    <button id="login"> Login </button>
                </div>
                <div class="row">
                    <a title="Reset Password" id="reset">Forgot Password ? </a>
                    |
                    <a title="Create Account" id="signup"> Sign Up </a>
                </div>

                <div class="hr-separator">
                </div>

                <div class="row">
                    <span>or</span>
                </div>
                
                <div class="row">
                    <button class="google">Continue with Google</button>
                </div>
                <div class="row">
                    <button class="facebook">Continue with Facebook</button>
                </div>

            </div>
        `
        const loadSignUpFrom = async () => {
            await import('./signup-form.js')
            this.shadowRoot.querySelector(
                '.form'
            ).innerHTML = `<signup-form></signup-form>`
        }

        this.shadowRoot
            .querySelector('#signup')
            .addEventListener('click', () => loadSignUpFrom())

        addEventListener('signup-form', () => loadSignUpFrom())

        addEventListener('load-login-content', () => {
            this.loadLoginContent()
            console.log('load')
        })

        const loadResetFrom = async () => {
            await import('./reset-password.js')
            this.shadowRoot.querySelector(
                '.form'
            ).innerHTML = `<reset-password></reset-password>`
        }

        this.shadowRoot
            .querySelector('#reset')
            .addEventListener('click', () => loadResetFrom())

        addEventListener('reset-password-form', () => loadResetFrom())
    }
    connectedCallback() {
        this.loadLoginContent()

        this.shadowRoot
            .querySelector('#backdrop')
            .addEventListener('click', () => {
                dispatchEvent(new Event('exit-login-form'))
                this.loadLoginContent()
                this.setPath('/')
            })
    }
}
window.customElements.define('login-form', LoginForm)
