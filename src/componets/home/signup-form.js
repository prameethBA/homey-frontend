import Base from './../Base.js'



export default class SignUpForm extends Base {

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
            height: 90%;
            padding: 0px; 
            margin: 0px; 
            cursor: pointer;
        }

        input {
            outline: none;
            margin-bottom: 2.5px;
        }

        #firstName,#lastName, #email,#password, #confirmPassword {
            width: 100%;
            border: none;
            outline: none;
            background: #eeeeee;
            padding: 0.1rem 0.7rem;
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
            height: 5px;
            background-color: #eeeeee;
            margin: 1em 0;
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
            margin-left:80px;
            width:100px;
            height:100px
        }

`
content = `
    
    <h2>SignUp</h2>

    <div class="container">
        <div class="row">
            <div class="name">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" title="First Name : Joe" />
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" title="Last Name : Does" />
            </div>
        </div>
        <div class="row">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" title="Email : someone@somthing.com" />
        </div>
        <div class="row">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" title= "Password : pass@123" />
        </div>
        <div class="row">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" title= "Confirm Password : pass@123" />
        </div>
        <div class="row">
            <input type="checkbox" id="remember"><a> accept terms and conditions</a>
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
            <button class="google"><img class="img2" src="../assets/images/google.svg">SignUp with Google</button>
        </div>
        <div class="row">
            <button class="facebook"><img class="img2" src="../assets/images/facebook.svg">SignUp with Facebook</button>
        </div>

    </div>
    
`
  constructor() {
    super()
    this.mount()

    this.setPath('/signup')
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll('.load-login-content').forEach((item) => {
      item.addEventListener('click', () => {
        dispatchEvent(new Event('load-login-content'))
      })
    })
  }

}

window.customElements.define('signup-form', SignUpForm)
