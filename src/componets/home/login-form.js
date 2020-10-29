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

    button {
        position: relative;
        width: 80%;
        display: block;
        height: 3em;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        margin: 2rem auto;
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
    
    .row {
        margin: 0 auto;
        display: table;
    }

    .row a {
        display: inline-block;
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
        margin: 1rem auto -1rem auto;
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
            
            <button id="login" disabled> Login </button>

            <div class="row">
                <a title="Reset Password" id="reset-password">Forgot Password ? </a>
                |
                <a title="Create new Account" id="signup"> Sign Up </a>
            </div>

            <div class="hr-separator">
            </div>

            <div class="or-separator"> or </div>
            
            <div>
                <button class="google"><img src="../assets/img/google.svg">Continue with Google</button>
            </div>
            <div>
                <button class="facebook"><img src="../assets/img/facebook.svg">Continue with Facebook</button>
            </div>

        </div>
    </div>

`
    constructor() {
        super()
        this.mount()
        
        if (!(this.state.exit == null || this.state.exit)) {
            dispatchEvent(new Event('exit-form'))
            this.state.exit = true
        }
    }//End of constructor

    connectedCallback() {

        // backdrop
        this._qs('#backdrop').addEventListener('click', () => {
            dispatchEvent(new Event('exit-form'))
            this.setPath('/')
        })

        this._qs('#signup').addEventListener('click', () => dispatchEvent(new Event('load-signup-form')))

        this._qs('#reset-password').addEventListener('click', () => dispatchEvent(new Event('reset-password-form')))

        // Client side form validation
        const validation = () => {
            this.state.validation = false
            const events = ['focus', 'keyup']
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

                    this.state.validation == true ? this._qs('#login').disabled = false : this._qs('#login').disabled = true
                })
            })

            events.forEach(element => {
                this._qs("#password").addEventListener(element, () => {
                    if (this._qs("#password").value == '') {
                        this._qs('#validation-password').innerHTML = "❌ Enter the password"
                        this.state.validation = false
                    } else {
                        this._qs('#validation-password').innerHTML = ""
                        this.state.validation = true
                    }

                    this.state.validation == true ? this._qs('#login').disabled = false : this._qs('#login').disabled = true
                })
            })

        }//End of validation

        //Exucute validation
        validation()

        this._qs('#login').addEventListener('click', () => {
            this.setLoader();
            // API call for login
            const userName = this._qs('#email').value
            const password = this._qs('#password').value
            axios.post('http://homey-api.atwebpages.com/login', {
                    'userName': userName,
                    'password': password
                }
            )
                .then((res) => {
                    console.log(res.data)
                    if (res.data.login === 'true' && res.status == 201) {
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
                    this.stopLoader();
                })
                .catch(err => {
                    localStorage.login = 'false'
                    localStorage.token = ''
                    sessionStorage.login = 'false'
                    sessionStorage.token = ''
                    dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message } }))
                    this.stopLoader();
                })

        })//End of Login API call

        // Login with Google
        this._qs('.google').addEventListener('click', async () => {
            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: "Feature disabled at the moment. Use email instead." } }))
        })

        // Login with FaceBook
        this._qs('.facebook').addEventListener('click', async () => {
            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: "Feature disabled at the moment. Use email instead." } }))
        })

    }//End of connectedCallback



}

window.customElements.define('login-form', LoginForm)
