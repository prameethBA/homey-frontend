import Base from './../Base.js'



export default class SignUpForm extends Base {

    css = `
    .form {
        z-index: 100;
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
        left: 0;
        z-index: 99;
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

    button:disabled {
        background-image: linear-gradient(to right, gray, gray);
        background-color: gray;
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

    .validation {
        display: block;
        color: red;
        font-size: 0.8em;
        font-weight: bold;
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
                <input type="text" id="firstName" name="firstName" class="nameField" title="First Name : Joe" required />
                <label for="firstName">First Name</label>
                <input type="text" id="lastName" name="lastName" class="nameField" title="Last Name : Does" required />
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
                <input type="password" id="confirm-password" name="confirmPassword" title= "Confirm Password : pass@123" required />
                <label for="confirmPassword">Confirm Password</label>
            </div>
            <div class="row">
                <div class="terms">
                    <input type="checkbox" id="terms">
                    <span class="checkmark"></span>
                    <span><a>accept terms and conditions</a></span>
                </div>
            </div>
            <div class="row">
                <span class="validation" id="validation-name"></span>
                <span class="validation" id="validation-email"></span>
                <span class="validation" id="validation-password"></span>
                <span class="validation" id="validation-password-confirm"></span>
            </div>
            <div class="row">
                <button id="signUp" disabled> Sign Up </button>
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

        // Client side form validation
        const validation = () => {
            this.state.validation = false
            const events = ['focus', 'keyup']

            // validate fName
            events.forEach(element => {
                this._qsAll(".nameField").forEach(item => item.addEventListener(element, () => {
                    if (!(/([a-zA-Z]{3,30}\s*)+/.test(this._qs("#firstName").value) && /[a-zA-Z]{3,30}/.test(this._qs("#lastName").value))) {
                        this._qs('#validation-name').innerHTML = "❌ Incorrrect type of name"
                        this.state.validation = false
                    } else {
                        this._qs('#validation-name').innerHTML = ""
                        this.state.validation = true
                    }

                }))
            })

            // validate email or Mobile
            events.forEach(element => {
                this._qs("#email").addEventListener(element, () => {
                    if (this._qs("#email").value == '') {
                        this._qs('#validation-email').innerHTML = "❌ Enter the email or Mobile"
                        this.state.validation = false
                    } else if (!(/^\w{2,}@\w{2,}\.\w{2,4}$/.test(this._qs("#email").value) || /^(?:7|0|(?:\+94))[0-9]{9,10}$/.test(this._qs("#email").value))) {
                        this._qs('#validation-email').innerHTML = "❌ Enter a valid email or Mobile"
                        this.state.validation = false
                    } else {
                        this._qs('#validation-email').innerHTML = ""
                        this.state.validation = true
                    }

                })
            })

            // validate Strong password
            events.forEach(element => {
                this._qs("#password").addEventListener(element, () => {
                    if (this._qs("#password").value == '') {
                        this._qs('#validation-password').innerHTML = "❌ Enter the password"
                        this.state.validation = false
                    } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(this._qs("#password").value))) {
                        this._qs('#validation-password').innerHTML = "❌ Enter a Strong password(Minimum 8 characters including minmum 2 Upper cases, 3 lower cases, 1 Special Character (!@#$&*) and 2 numerals (0-9))"
                        this.state.validation = false
                    } else {
                        this._qs('#validation-password').innerHTML = ""
                        this.state.validation = true
                    }

                    this.state.validation == true ? this._qs('#signUp').disabled = false : this._qs('#signUp').disabled = true
                    // Confirm password
                    if ((this._qs("#password").value != this._qs("#confirm-password").value) || (this._qs("#confirm-password").value == '')) {
                        this._qs('#validation-password-confirm').innerHTML = "❌ Passwords did not match!"
                        this.state.validation = false
                    } else {
                        this._qs('#validation-password-confirm').innerHTML = ""
                        this.state.validation = true
                    }

                })
            })

            // validate password confirmation
            events.forEach(element => {
                this._qs("#confirm-password").addEventListener(element, () => {
                    if ((this._qs("#password").value != this._qs("#confirm-password").value) || (this._qs("#confirm-password").value == '')) {
                        this._qs('#validation-password-confirm').innerHTML = "❌ Passwords did not match!"
                        this.state.validation = false
                    } else {
                        this._qs('#validation-password-confirm').innerHTML = ""
                        this.state.validation = true
                    }

                    this.state.validation == true ? this._qs('#signUp').disabled = false : this._qs('#signUp').disabled = true
                })
            })

            // Signup with Google
            this._qs('.google').addEventListener('click', async () => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: "Feature disabled at the moment. Use email instead." } }))
            })

            // Signup with FaceBook
            this._qs('.facebook').addEventListener('click', async () => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: "Feature disabled at the moment. Use email instead." } }))
            })

        }//End of validation

        //Exucute validation
        validation()

        // Signup with email
        this._qs('#signUp').addEventListener('click', () => {
            // API call for signup
            const firstName = this._qs('#firstName').value
            const lastName = this._qs('#lastName').value
            const email = this._qs('#email').value
            const password = this._qs('#password').value
            fetch('http://homey-api.atwebpages.com/signup', {
                method: 'POST',
                headers: {
                    'Firstname': firstName,
                    'Lastname': lastName,
                    'Email': email,
                    'Password': password
                }
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.data.login === 'true') {
                        if (this._qs('#remember').checked == true) {
                            localStorage.login = 'true'
                            localStorage.token = res.data.token
                        } else {
                            sessionStorage.login = 'true'
                            sessionStorage.token = res.data.token
                        }
                        dispatchEvent(new Event('login-success'))
                        dispatchEvent(new Event('exit-form'))
                    } else {
                        localStorage.login = 'false'
                        localStorage.token = ''
                        sessionStorage.login = 'false'
                        sessionStorage.token = ''
                        dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: res.data.message } }))
                    }
                })
                .catch(err => {
                    dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message } }))
                })

        }//End of connected callback

}//End of Class

    window.customElements.define('signup-form', SignUpForm)
