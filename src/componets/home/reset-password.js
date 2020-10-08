import Base from './../Base.js'

const style = `
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
const content = `
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
`

export default class ResetPassword extends Base {
  constructor() {
    super()

    this.render(style, content)
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))

    this.setPath('/reset-password')
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#reset').addEventListener('click', () => {
      dispatchEvent(new Event('load-password-reset'))
    })
  }
}
window.customElements.define('reset-password', ResetPassword)
