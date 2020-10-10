import Base from './../Base.js'

export default class LoginForm extends Base {

  css = `
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
        margin-bottom: 25px; 
    }

    #text{
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: #eeeeee;
        padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        color: #555;
        font-family: 'poppins', sans-serif;
    }

    label {
        display: block;
        margin-bottom: 5px;

    }

    .hr-separator {
        width: 100%;
        height: 2px;
        background-color: #eeeeee;
        margin: 2em 0;
    }

    button {
        width: 100%;
        margin-bottom: 25px;

        display: block;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        background-size: 200%;
        font-size: 0.8rem;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        margin: 1rem 0;
        cursor: pointer;
        transition: 1s;
    }
        
    button:hover{
        background-position: right;
        color: black;
    }

    .google {
        color: blue;
        background-image: url("../assets/images/google.svg");
    }
    

    .facebook {
        color: red;
        background-image: url("../assets/images/facebook.svg");
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

    .img{
        margin-left:115px;
        width:100px;
        height:100px
    }

`
content = `
    <div id="backdrop" title="Click to close this form">
    </div>

    <div class="form">
    </div>

`
  constructor() {
    super()
    this.mount()
  }

  // loadLoginContent() {
  //   this.setPath('/login')
  //   this.shadowRoot.querySelector('.form').innerHTML = `
  //   <img class="img" src="../assets/images/avatar.svg">        
  //   <h2>Login</h2>
            

  //           <div class="container">
  //               <div class="row">
  //                   <label for="email">Email</label>
  //                   <input id="text" type="email" id="email" name="email" title="Email : someone@somthing.com" />
  //               </div>
  //               <div class="row">
  //                   <label for="password">Password</label>
  //                   <input id="text" type="password" id="password" name="password" title= "Password : pass@123" />
  //               </div>
  //               <div class="row">
  //                   <input type="checkbox" id="remember"> Remember me
  //               </div>
  //               <div class="row">
  //                   <button id="login"> Login </button>
  //               </div>
  //               <div class="row">
  //                   <a title="Reset Password" id="reset">Forgot Password ? </a>
  //                   |
  //                   <a title="Create new Account" id="signup"> Sign Up </a>
  //               </div>

  //               <div class="hr-separator">
  //               </div>

  //               <div class="row">
  //                   <span>or</span>
  //               </div>
                
  //               <div class="row">
  //                   <button class="google"><img class="img2" src="../assets/images/google.svg">Continue with Google</button>
  //               </div>
  //               <div class="row">
  //                   <button class="facebook"><img class="img2" src="../assets/images/facebook.svg">Continue with Facebook</button>
  //               </div>

  //           </div>
  //       `
  //   const loadSignUpFrom = async () => {
  //     await import('./signup-form.js')
  //     this.shadowRoot.querySelector(
  //       '.form'
  //     ).innerHTML = `<signup-form></signup-form>`
  //   }

  //   this.shadowRoot
  //     .querySelector('#signup')
  //     .addEventListener('click', () => loadSignUpFrom())

  //   addEventListener('signup-form', () => loadSignUpFrom())

  //   addEventListener('load-login-content', () => {
  //     this.loadLoginContent()
  //     console.log('load')
  //   })

  //   const loadResetFrom = async () => {
  //     await import('./reset-password.js')
  //     this.shadowRoot.querySelector(
  //       '.form'
  //     ).innerHTML = `<reset-password></reset-password>`
  //   }

  //   this.shadowRoot
  //     .querySelector('#reset')
  //     .addEventListener('click', () => loadResetFrom())

  //   addEventListener('reset-password-form', () => loadResetFrom())
  // }
  // connectedCallback() {
  //   this.loadLoginContent()

  //   this.shadowRoot.querySelector('#backdrop').addEventListener('click', () => {
  //     dispatchEvent(new Event('exit-login-form'))
  //     this.loadLoginContent()
  //     this.setPath('/')
  //   })

  //   this.shadowRoot.querySelector('#login').addEventListener('click', () => {
  //     // API call for login
  //     fetch('http://homey-api.atwebpages.com/login/0112224448/password', {
  //       method: 'POST',
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.table(JSON.parse(res))
  //         if (res.status == 200) {
  //           if (res.data.login === true) {
  //             localStorage.login = true
  //             localStorage.token = res.data.token
  //           } else {
  //             console.log('login failed function')
  //           }
  //         } else {
  //           console.log(res.data.message)
  //         }
  //       })
  //   })
  // }

}

window.customElements.define('login-form', LoginForm)
