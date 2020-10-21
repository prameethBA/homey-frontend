import Base from '../Base.js'

export default class ResetPassword extends Base {

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
        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 4em;
        border-radius: 1px;        
    }

     .row {
        display: inherit;
    }

    h2 {
        margin: 2em 1em;
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
        
    button:hover{
        background-position: right;
        color: black;
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
        left: 6.5vw;
        transition: all 0.2s;
    }

    input:focus + label,
    input:valid + label {
        transform: translateY(-1.5em);
        font-size: 0.8em;
    }

    @media screen and (max-width: 1200px) {
      .form {
        width: 30%;
    }

      label {
          left: 8vw;
      }
    }

  @media screen and (max-width: 992px) {
    .form {
      width: 40%;
    }

      label {
          left: 10.2vw;
      }
    }

  @media screen and (max-width: 768px) {
    .form {
      width: 60%;
  }

    label {
      left: 21vw;
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
  }

  connectedCallback() {
    this._qs('#backdrop').addEventListener('click', () => {
      dispatchEvent(new Event('exit-form'))
      this.setPath('/')
    })
  }

}

window.customElements.define('reset-password-form', ResetPassword)
