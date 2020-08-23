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
   
    <h2>SignUp</h2>
    <img src="" />

    <div class="container">
        <div class="row">
            <div class="name">
                <label for="firstName">First Name</label>
                <input id="firstName" name="firstName" title="First Name : Joe" />
                <label for="lastName">Last Name</label>
                <input id="lastName" name="lastName" title="Last Name : Does" />
            </div>
        </div>
        <div class="row">
            <label for="email">Email</label>
            <input id="email" name="email" title="Email : someone@somthing.com" />
        </div>
        <div class="row">
            <label for="password">Password</label>
            <input id="password" name="password" title= "Password : pass@123" />
        </div>
        <div class="row">
            <label for="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" title= "Confirm Password : pass@123" />
        </div>
        <div class="row">
            <input type="checkbox" id="remember"> accept <a>terms</a> and <a>conditions</a>
        </div>
        <div class="row">
            <button id="signUp"> Sign Up </button>
        </div>
        <div class="row">
            <a title="Login" class="load-login-content">Already have an account ? </a>
            |
            <button title="Log in" class="load-login-content"> Login </button>
        </div>

        <div class="hr-separator">
        </div>

        <div class="row">
            <span>or</span>
        </div>
        
        <div class="row">
            <button class="google">SignUp with Google</button>
        </div>
        <div class="row">
            <button class="facebook">SignUp with Facebook</button>
        </div>

    </div>
    
`

export default class SignUpForm extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot
            .querySelectorAll('.load-login-content')
            .forEach(item => {
                item.addEventListener('click', () => {
                    dispatchEvent(new Event('load-login-content'))
                })
            })
    }
}
window.customElements.define('signup-form', SignUpForm)
