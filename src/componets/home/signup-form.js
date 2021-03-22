import Base from "./../Base.js";
import CSS from "./signup-form.css.js";

export default class SignUpForm extends Base {
  css = CSS;

  content = `

    <div id="backdrop" title="Click to close this form"></div>

    <div id="back" title="Click to close this form">
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
    </div>
    
`;
  constructor() {
    super();
    this.mount();
  } //End of constructor

  connectedCallback() {
    // backdrop
    this._qs("#backdrop").addEventListener("click", () => {
      this._qs(".form").style.display = "none";
      this._qs("#backdrop").style.display = "none";
      // this.setPath('/')
    });

    this._qsAll(".load-login-form").forEach((item) => {
      item.addEventListener("click", () => {
        dispatchEvent(new Event("load-login-form"));
      });
    });

    // Client side form validation
    const validation = () => {
      this.state.validation = false;
      const events = ["focus", "keyup"];

      // validate fName
      events.forEach((element) => {
        this._qsAll(".nameField").forEach((item) =>
          item.addEventListener(element, () => {
            if (
              !(
                /([a-zA-Z]{3,30}\s*)+/.test(this._qs("#firstName").value) &&
                /[a-zA-Z]{3,30}/.test(this._qs("#lastName").value)
              )
            ) {
              this._qs("#validation-name").innerHTML =
                "❌ Incorrrect type of name";
              this.state.validation = false;
            } else {
              this._qs("#validation-name").innerHTML = "";
              this.state.validation = true;
            }
          })
        );
      });

      // validate email or Mobile
      events.forEach((element) => {
        this._qs("#email").addEventListener(element, () => {
          if (this._qs("#email").value == "") {
            this._qs("#validation-email").innerHTML =
              "❌ Enter the email or Mobile";
            this.state.validation = false;
          } else if (
            !(
              /^\w{2,}@\w{2,}\.\w{2,4}$/.test(this._qs("#email").value) ||
              /^(?:7|0|(?:\+94))[0-9]{9,10}$/.test(this._qs("#email").value)
            )
          ) {
            this._qs("#validation-email").innerHTML =
              "❌ Enter a valid email or Mobile";
            this.state.validation = false;
          } else {
            this._qs("#validation-email").innerHTML = "";
            this.state.validation = true;
          }
        });
      });

      // validate Strong password
      events.forEach((element) => {
        this._qs("#password").addEventListener(element, () => {
          if (this._qs("#password").value == "") {
            this._qs("#validation-password").innerHTML =
              "❌ Enter the password";
            this.state.validation = false;
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(
              this._qs("#password").value
            )
          ) {
            this._qs("#validation-password").innerHTML =
              "❌ Enter a Strong password(Minimum 8 characters including minmum 2 Upper cases, 3 lower cases, 1 Special Character (!@#$&*) and 2 numerals (0-9))";
            this.state.validation = false;
          } else {
            this._qs("#validation-password").innerHTML = "";
            this.state.validation = true;
          }

          this.state.validation == true
            ? (this._qs("#signUp").disabled = false)
            : (this._qs("#signUp").disabled = true);
          // Confirm password
          if (
            this._qs("#password").value !=
              this._qs("#confirm-password").value ||
            this._qs("#confirm-password").value == ""
          ) {
            this._qs("#validation-password-confirm").innerHTML =
              "❌ Passwords did not match!";
            this.state.validation = false;
          } else {
            this._qs("#validation-password-confirm").innerHTML = "";
            this.state.validation = true;
          }
        });
      });

      // validate password confirmation
      events.forEach((element) => {
        this._qs("#confirm-password").addEventListener(element, () => {
          if (
            this._qs("#password").value !=
              this._qs("#confirm-password").value ||
            this._qs("#confirm-password").value == ""
          ) {
            this._qs("#validation-password-confirm").innerHTML =
              "❌ Passwords did not match!";
            this.state.validation = false;
          } else {
            this._qs("#validation-password-confirm").innerHTML = "";
            this.state.validation = true;
          }

          this.state.validation == true
            ? (this._qs("#signUp").disabled = false)
            : (this._qs("#signUp").disabled = true);
        });
      });
    }; //End of validation

    const signUp = async () => {
      // Check whether user accepted terms and conditions
      if (this._qs("#terms").checked == true) {
        this.setLoader();

        try {
          // Signup with email
          // API call for signup
          const firstName = this._qs("#firstName").value;
          const lastName = this._qs("#lastName").value;
          const email = this._qs("#email").value;
          const password = this._qs("#password").value;

          // API call fro signup
          const res = await axios.post(`${this.host}/signup/user`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          });

          if (res.data.signup === "true" && res.status == 201) {
            dispatchEvent(new Event("load-login-form"));
            dispatchEvent(
              new CustomEvent("pop-up", {
                detail: {
                  pop: "success",
                  msg:
                    res.data.message +
                    " Confirm the email and log into continue.",
                },
              })
            );
          } else throw res;
        } catch (err) {
          this.popup(err.message, "error");
        }
      } else
        this.popup(
          "You should accept terms and conditions to continue.",
          "notice"
        );
    }; //End of signup

    //Exucute validation
    validation();

    // Method for signup
    this._qs("#signUp").addEventListener("click", () => {
      signUp();
    }); //End of the Method for signup

    // Signup with Google
    this._qs(".google").addEventListener("click", async () => {
      dispatchEvent(
        new CustomEvent("pop-up", {
          detail: {
            pop: "notice",
            msg: "Feature disabled at the moment. Use email instead.",
          },
        })
      );
      this.popup("Feature disabled at the moment. Use email instead.", "notice")
    });

    // Signup with FaceBook
    this._qs(".facebook").addEventListener("click", async () => {
      dispatchEvent(
        new CustomEvent("pop-up", {
          detail: {
            pop: "notice",
            msg: "Feature disabled at the moment. Use email instead.",
          },
        })
      );
    });
  } //End of connected callback
} //End of Class

window.customElements.define("signup-form", SignUpForm);
