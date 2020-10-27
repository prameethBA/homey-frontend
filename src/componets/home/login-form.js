import Base from './../Base.js'

export default class LoginForm extends Base {

    css = `

    #backdrop {
        position: fixed;
        z-index: 99;
        background-color: rgba(0,0,0,0.7);
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        cursor: url(./assets/icon/remove-icon.png), auto;
    }

    .form {
        position: relative;
        z-index: 100;
        width: 30%;
        margin: auto;
        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5rem 3rem;
        padding-bottom: 3rem;
        border-radius: 1px;
        transition: all 0.5s ease;        
    }

    h2 {
        margin: 1rem;
        text-align: center;
    }

    .textField {
        outline: none;
        width: 80%;
        background-color: transparent;
        border: none;
        border-bottom: solid 1.25px #cccccc;
        color: #ffffff;
        display: block;
        margin: 2rem auto;
    }
    
    .textField:focus,
    .textField:valid {
        border-color: #38ee17;
    }
    
    .textField[type=checkbox] {
        display: inline;
    }

    .textField-label {
        position: absolute;
        display: block;
        pointer-events: none;
        transform: translate(3vw, -3.5rem);
        transition: all 0.2s;
    }

    .textField:focus + .textField-label,
    .textField:valid + .textField-label {
        transform: translate(2rem, -4.5rem);
        font-size: 0.8em;
    }

    
    .remember {
        text-align: center;
    }
    
    .remember > label {
        cursor: pointer;
    }

    .remember input {
        display: none;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border-radius: 50%;
        border: solid 1px #ffffff;
        transition: all 1s;
        transform: translateX(-2rem);
    }

    .remember input:checked ~ .checkmark {
        background-color: #32be8f;
    }

    .checkmark:after {
        content: "";
        display: none;
        margin: 2px 0 0 6px;
    }

    .remember input:checked ~ .checkmark:after {
        display: block;
    }

    .remember .checkmark:after {
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    @media screen and (max-width: 1200px) {
        .textField-label {
            transform: translate(4vw, -3.5rem);
        }
    }

    @media screen and (max-width: 992px) {
        .form {
            width: 40%;
        }
    }

    @media screen and (max-width: 768px) {
        .form {
            width: 50%;
        }
    }

    @media screen and (max-width: 512px) {
        .form {
            width: 60%;
        }
    }

`
    content = `
    <div id="backdrop" title=">>Click to close this form">
    </div>

    <div class="form">
        <h2>Login</h2>
        <div class="container">
            <input class="textField" type="text" id="email" name="email" title="Email : someone@somthing.com" required />
            <label class="textField-label" for="email" id="email-label">Email</label>
        
            <input class="textField" type="password" id="password" name="password" title= "Password : pass@123" required />
            <label class="textField-label" for="password" id="password-label">Password</label>
        
            <div class="remember">
                <input type="checkbox" id="remember" />
                <label for="remember" class="checkmark"></label>
                <label for="remember">Remember me</label>
            </div>
        
            <span class="validation" id="validation-email"></span>
            <span class="validation" id="validation-password"></span>
            <div>
                <button id="login" disabled> Login </button>
            </div>
            <div>
                <a title="Reset Password" id="reset-password">Forgot Password ? </a>
                |
                <a title="Create new Account" id="signup"> Sign Up </a>
            </div>

            <div class="hr-separator">
            </div>

            <div>
                <span>or</span>
            </div>
            
            <div>
                <button class="google"><img class="img2" src="../assets/img/google.svg">Continue with Google</button>
            </div>
            <div>
                <button class="facebook"><img class="img2" src="../assets/img/facebook.svg">Continue with Facebook</button>
            </div>

        </div>
    </div>

`
    constructor() {
        super()
        this.mount()
        
    }//End of constructor

    connectedCallback() {


    }//End of connectedCallback



}

window.customElements.define('login-form', LoginForm)
