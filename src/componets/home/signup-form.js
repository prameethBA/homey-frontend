import Base from './../Base.js'



export default class SignUpForm extends Base {

    css = `
    .form {
        z-index: 2;
        position: absolute;
        display: flex;
        flex-direction: column;
        text-align: center;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);
        width: 25%;
        margin: 1em auto;
        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5em 2em;
        padding-bottom: 3em;
        border-radius: 1px;        
    }

    .row {
        display: inherit;
    }

    h2 {
        margin: 1em;
    }

    #backdrop {
        position: absolute;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        padding: 0px; 
        margin: 0px; 
        padding-bottom: 80px;
        cursor: pointer;
    }

    .name {
        display: grid;
        grid-template-columns: auto auto;
    }

    input {
        outline: none;
        width: 80%;
        background-color: transparent;
        border: none;
        border-bottom: solid 1.25px #cccccc;
        margin-bottom: 2.5em;
        color: #ffffff;
    }
    
    input:focus,
    input:valid {
        border-color: #38ee17;
    }
    
    input[type=checkbox] {
        display: inline;
    }

    label {
        position: absolute;
        pointer-events: none;
        left: 4.5vw;
        transition: all 0.2s;
    }

    input:focus + label,
    input[type=text]:valid + label,
    input[type=password]:valid + label {
        transform: translateY(-1.5em);
        font-size: 0.8em;
    }

    .terms {
        display: inline-grid;
        grid-template-columns: auto auto;
    }

    .terms > input {
        margin-right: 2vw;
    }

    .terms > span {
        margin-left: 1vw;
    }

    .hr-separator {
        width: 100%;
        height: 2px;
        background-color: #eeeeee;
        margin: 1.3em 0;
    }

    .terms input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark {
        height: 20px;
        width: 20px;
        background-color:transparent;
        border-radius: 50%;
        border: solid 1px #ffffff;
        transition: all 1s;
    }

    .terms:hover input ~ .checkmark {
        background-color: #ccffcc;
    }

    .terms input:checked ~ .checkmark {
        background-color: #32be8f;
    }

    .checkmark:after {
        content: "";
        display: none;
        margin: 2px 0 0 6px;
    }

    .terms input:checked ~ .checkmark:after {
        display: block;
    }

    .terms .checkmark:after {
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    button {
        width: 90%;
        display: inline-block;
        height: 3em;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        margin: 1em 0;
        cursor: pointer;
        transition: all 1s;
    }
    
    .login-button {
        margin: 0;
        font-size: 0.6em;
        width: 25%;
        height: 20px;
    }

    .login a {
        font-size: 0.8em;
        display: contents;
    }

    button:hover{
        background-position: right;
        color: black;
    }

    .google {
        background-size: 200%;
        color: blue;
        background-image: url("../assets/img/google.svg");
    }
    

    .facebook {
        background-size: 200%;
        color: red;
        background-image: url("../assets/img/facebook.svg");
    }

    a {
        cursor: pointer;
        width: 100%;
        text-align: right;
        text-decoration: none;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
    }

    a:hover{
        color: #F4D03F;
    }

    .api-login {
        margin-top: -0.5em;
    }

    @media screen and (max-width: 1200px) {
        .form {
            width: 30%;
        }

        label {
            left: 6vw;
        }
      }

    @media screen and (max-width: 992px) {
        .form {
            width: 40%;
        }

        label {
            left: 15vw;
        }
      }

    @media screen and (max-width: 768px) {
        .form {
            width: 80%;
        }
      }

`
content = `

    <div id="backdrop" title="Click to close this form">
    </div>
    <div class="form">
        <h2>Sign up</h2>

        <div class="container">
            <div class="row">
                <input type="text" id="firstName" name="firstName" title="First Name : Joe" required />
                <label for="firstName">First Name</label>
                <input type="text" id="lastName" name="lastName" title="Last Name : Does" required />
                <label for="lastName">Last Name</label>
            </div>
            <div class="row">
                <input type="text" id="email" name="email" title="Email : someone@somthing.com" required />
                <label for="email">Email</label>
            </div>
            <div class="row">
                <input type="password" id="password" name="password" title= "Password : pass@123" required />
                <label for="password">Password</label>
            </div>
            <div class="row">
                <input type="password" id="confirmPassword" name="confirmPassword" title= "Confirm Password : pass@123" required />
                <label for="confirmPassword">Confirm Password</label>
            </div>
            <div class="row">
                <div class="terms">
                    <input type="checkbox" id="terms">
                    <span class="checkmark"></span>
                    <span><a>accept terms and conditions<a></span>
                </div>
            </div>
            <div class="row">
                <button id="signUp"> Sign Up </button>
            </div>
            <div class="row login">
                <a title="Login" class="load-login-form">Already have an account ? </a>
                <span>|</span>
                <button title="Log in" class="load-login-form login-button"> Login </button>
            </div>

            <div class="hr-separator">
            </div>

            <div class="row api-login">
                <span>or</span>
            </div>
            
            <div class="row api-login">
                <button class="google"><img class="img2" src="../assets/img/google.svg">SignUp with Google</button>
            </div>
            <div class="row api-login">
                <button class="facebook"><img class="img2" src="../assets/img/facebook.svg">SignUp with Facebook</button>
            </div>

        </div>
    </div>
    
`
  constructor() {
    super()
    this.mount()
  }

  connectedCallback() {

    this._qs('#backdrop').addEventListener('click', () => {
        dispatchEvent(new Event('exit-form'))
        this.setPath('/')
      })

    this.shadowRoot.querySelectorAll('.load-login-form').forEach((item) => {
      item.addEventListener('click', () => {
        dispatchEvent(new Event('login-form'))
      })
    })
  }

}

window.customElements.define('signup-form', SignUpForm)
