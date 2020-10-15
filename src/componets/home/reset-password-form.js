import Base from '../Base.js'

export default class ResetPassword extends Base {

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

    input{
        width: 100%;
        border: none;
        outline: none;
        background: #eeeeee;
        padding: 0.1rem 0.7rem;
        font-size: 1.2rem;
        color: #555;
        font-family: 'poppins', sans-serif;
    }

`
content = `

        <div id="backdrop" title="Click to close this form">
        </div>

        <div class="form">
          <div class='container'>
              <h2>Reset Password</h2>
              <div class="row>
                  <label for="email"> Email </label>
                  <input type="email" id="email" name="email" title="Email : someone@somthing.com" />
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
  }

  connectedCallback() {
    this._qs('#backdrop').addEventListener('click', () => {
      dispatchEvent(new Event('exit-form'))
      this.setPath('/')
    })
  }

}

window.customElements.define('reset-password-form', ResetPassword)
