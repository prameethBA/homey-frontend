import Base from './../Base.js'
import CSS from './login-form.css.js'

export default class LoginForm extends Base {

    css = CSS

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
        
    }//End of constructor

    connectedCallback() {
        try {

            // backdrop
            this._qs('#backdrop').addEventListener('click', () => {
                this._qs('.form').style.display = 'none'
                this._qs('#backdrop').style.display = 'none'
                // this.setPath('/')
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

            // Login 
            const login = () => {
                this.setLoader();
                // API call for login
                const userName = this._qs('#email').value
                const password = this._qs('#password').value
                axios.post(`${this.host}/login`, {
                        'userName': userName,
                        'password': password
                    }
                )
                    .then((res) => {
                        if (res.data.login === 'true' && res.status == 201) {

                            // set the login information to loacal or session storage of the browser
                            if (this._qs('#remember').checked == true) {
                                localStorage.login = 'true'; localStorage.userType = res.data.userId; localStorage.userId = res.data.userId;localStorage.token = res.data.token
                            } else {
                                sessionStorage.login = 'true'; sessionStorage.userType = res.data.userId; sessionStorage.userId = res.data.userId;sessionStorage.token = res.data.token
                            }

                            dispatchEvent(new Event('login-success'))
                            this.setPath('/')
                            dispatchEvent(new Event('exit-form'))
                        } else {
                            localStorage.login = 'false';localStorage.userId = '';localStorage.token = ''
                            sessionStorage.login = 'false';sessionStorage.userId = '';sessionStorage.token = ''
                            
                            dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: res.data.message, duration: 5 } }))
                        }
                        this.stopLoader();
                    })
                    .catch(err => {
                        localStorage.login = 'false';localStorage.userId = '';localStorage.token = ''
                        sessionStorage.login = 'false';sessionStorage.userId = '';sessionStorage.token = ''

                        dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message} }))
                        this.stopLoader();
                    })//End of Login API call
            }// End of login()
    
            //Exucute validation
            validation()
    
            this._qs('#login').addEventListener('click', () => login())
    
            // Login with Google
            this._qs('.google').addEventListener('click', async () => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: "Feature disabled at the moment. Use email instead." } }))
            })
    
            // Login with FaceBook
            this._qs('.facebook').addEventListener('click', async () => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'notice', msg: "Feature disabled at the moment. Use email instead." } }))
            })
        } catch(err) {
            console.log(err)
        }

    }//End of connectedCallback



}

window.customElements.define('login-form', LoginForm)
