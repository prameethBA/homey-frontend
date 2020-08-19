import Base from './Base.js'

const style = `
    header {
        position: absolute;
        top:0;
        left:0;
        right:0;
        background-color: #111111;
        color: #eeeeee;
        z-index:1;
    }
    
    .logo {
        margin-left: 2em;
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #login-button {
        height: 2.5em;
        width: 10em;
        margin: auto 2em;
        text-transform: uppercase;
        color: #eeeeee;
        background-color: #239710;
        border: none;
        box-shadow: 1px 1px 5px 1px rgba(23,97,10,0.64);
        outline: none;
        cursor: pointer;
        transition: 0.4s;
    }
    
    #login-button:hover {
        background-color: #34a832;
    }

`
const content = `
    <header>
        <nav>
            <h3 class="logo">Homey</h3>
            <button id="login-button"> login </button>
        </nav
    </header>
`

export default class Nav extends Base {
    constructor() {
        super()
        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('#login-button')
            .addEventListener('click', () => {
                dispatchEvent(new Event('login-form'))
            })
    }
}
window.customElements.define('navigation-bar', Nav)
