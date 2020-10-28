import Base from '../Base.js'

export default class ResetPassword extends Base {

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

  input {
    outline: none;
    width: 80%;
    background-color: transparent;
    border: none;
    border-bottom: solid 1.25px #cccccc;
    color: #ffffff;
    display: block;
    margin: 2rem auto;
  }

  input:focus,
  input:valid {
        border-color: #38ee17;
    }
    
  label {
      position: absolute;
      display: block;
      pointer-events: none;
      transform: translate(3vw, -3.5rem);
      transition: all 0.2s;
  }

  input:focus + label,
  input:valid + label {
      transform: translate(2rem, -4.5rem);
      font-size: 0.8em;
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

  @media screen and (max-width: 1200px) {
    label {
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
        <div id="backdrop" title="Click to close this form">
        </div>

        <div class="form">
          <div class='container'>
              <h2>Reset Password</h2>
              <div class="row">
                <input type="text" id="email" name="email" title="Email : someone@somthing.com" required />
                <label for="email"> Email </label>
              </div>
              <div class="row">
                  <button id="reset">Reset</button>
              </div>
          </div>
        </div>
`
  constructor() {
    super()
    this.mount()
    
  }//End of constructor

  connectedCallback() {

    this._qs('#backdrop').addEventListener('click', () => {
      dispatchEvent(new Event('exit-form'))
      this.setPath('/')
    })

  }//End of callback

}//End of the class

window.customElements.define('reset-password-form', ResetPassword)
