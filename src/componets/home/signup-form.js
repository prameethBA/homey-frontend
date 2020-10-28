import Base from './../Base.js'



export default class SignUpForm extends Base {

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
        margin: 1rem auto;
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

    .terms {
        display: table;
        margin: 1rem auto;
        transform: translateX(1rem);
    }
    
    .terms > label {
        font-size: 0.8rem;
        cursor: pointer;
    }

    .terms input {
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
        position: relative;
        width: 100%;
        height: 2.5rem;
        display: block;
        border-radius: 3rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        margin: 1rem auto;
        cursor: pointer;
        transition: all 1s;
    }
   
    button:hover{
        background-position: right;
        color: black;
    }

    button:disabled {
        background-image: linear-gradient(to right, gray, gray);
        background-color: gray;
    } 
    
    .row a {
        display: inline-block;
        color: #9999ee;
        text-decoration: underline;
    }

    .hr-separator {
        width: 80%;
        border: solid 1px;
        margin: 2rem auto;
    }

    .or-separator {
        margin: auto;
        display: table;
    }

    .google {
        color: blue;
        background-size: 200%;
        background-image: url("../assets/img/google.svg");
    }
    

    .facebook {
        color: red;
        background-size: 200%;
        background-image: url("../assets/img/facebook.svg");
    }

    a:hover{
        color: #F4D03F;
        cursor: pointer;
    }

    button > img {
        position: absolute;
        transform: translate(-2rem, -0.3rem);
    }

    .validation {
        display: table;
        color: red;
        font-size: 0.8rem;
        font-weight: bold;
        margin: 0.3rem auto;
    }

    .login {
        display: grid;
        grid-template-columns: 56% 7% 78%;
        transform: translateX(1.5rem);
    }
    
    .login-button {
        margin: 0;
        font-size: 0.6em;
        width: 25%;
        height: 1.3rem;
    }

    .login a {
        font-size: 0.8em;
        display: contents;
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

        .google , .facebook{
            font-size: 0.6rem;
            padding-bottom: 0.2rem;
        }

        .login {
            grid-template-columns: 49% 10% 93%;
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
                <input class="textField" type="text" id="firstName" name="firstName" class="nameField" title="First Name : Joe" required />
                <label class="textField-label" for="firstName">First Name</label>
                <input class="textField" type="text" id="lastName" name="lastName" class="nameField" title="Last Name : Does" required />
                <label class="textField-label" for="lastName">Last Name</label>
            </div>
            <div class="row">
                <input class="textField" type="text" id="email" name="email" title="Email : someone@somthing.com" required />
                <label class="textField-label" for="email">Email</label>
            </div>
            <div class="row">
                <input class="textField" type="password" id="password" name="password" title= "Password : pass@123" required />
                <label class="textField-label" for="password">Password</label>
            </div>
            <div class="row">
                <input class="textField" type="password" id="confirm-password" name="confirmPassword" title= "Confirm Password : pass@123" required />
                <label class="textField-label" for="confirmPassword">Confirm Password</label>
            </div>
            <div class="row">
                <div class="terms">
                    <input type="checkbox" id="terms" />
                    <label for="terms" class="checkmark"></label>
                    <span><label for="terms">accept</label> <a>terms</a> and <a>conditions</a></span>
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
            <div class="login">
                <a title="Login" class="load-login-form">Already have an account ? </a>
                <span>|</span>
                <button title="Log in" class="load-login-form login-button"> Login </button>
            </div>

            <div class="hr-separator">
            </div>

            <div class="or-separator">
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
                dispatchEvent(new Event('load-login-form'))
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

            
        }//End of validation
        
        //Exucute validation
        validation()
        
        // Signup with Google
        this._qs('.google').addEventListener('click', async () => {
            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: "Feature disabled at the moment. Use email instead." } }))
        })

        // Signup with FaceBook
        this._qs('.facebook').addEventListener('click', async () => {
            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: "Feature disabled at the moment. Use email instead." } }))
        })

        // Method for signup
        this._qs('#signUp').addEventListener('click', async () => {

            // Check whether user accepted terms and conditions
            if (this._qs("#terms").checked == true) {
                this.setLoader();

                // Signup with email
                // API call for signup
                const firstName = this._qs('#firstName').value
                const lastName = this._qs('#lastName').value
                const email = this._qs('#email').value
                const password = this._qs('#password').value
                // API call fro signup
                await axios.post('http://homey-api.atwebpages.com/signup/user', {
                    'firstName': firstName,
                    'lastName': lastName,
                    'email': email,
                    'password': password
                })
                    .then((res) => {
                        if (res.data.signup === 'true') {
                            dispatchEvent(new Event('load-login-form'))
                            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'success', msg: res.data.message + ' log into continue.' } }))
                        } else {
                            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: res.data.message } }))
                        }
                        this.stopLoader();
                    })
                    .catch(err => {
                        dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message } }))
                        this.stopLoader();
                    })
            } else {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: 'You should accept terms and conditions to continue.' } }))
            }
        })//End of the Method for signup

    }//End of connected callback

}//End of Class

window.customElements.define('signup-form', SignUpForm)
