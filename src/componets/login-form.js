import Base from './Base.js'

const style = `
    div {
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);

        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5em 2em;
    }

    #backdrop {
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        padding: 0px; 
        margin: 0px; 
    }

`
const content = `
    <div id="backdrop">
        <div>
            <h2>Login</h2>
            <img src=" />

        </div>
    </div>
`

export default class LoginForm extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('#backdrop')
            .addEventListener('click', () => {
                dispatchEvent(new Event('exit-login-form'))
            })
    }
}
window.customElements.define('login-form', LoginForm)
