import Base from './../Base.js'

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
        cursor: pointer;
    }

    nav, ul, li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    li {
        padding-right: 3em;
        cursor: pointer;
        color: #888888;
        transition: 1s;
    }

    li:hover {
        color:#eeeeee;
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
        this.state.loginContent = `
        <div class='login-content'>
            <ul>
                <li>Own Properties</li>
                <li>Payments</li>
                <li>Favourites</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
        
        `
        this.shadowRoot
            .querySelector('#login-button')
            .addEventListener('click', () => {
                dispatchEvent(new Event('login-form'))
            })

        if (localStorage.login !== true) {
            this.shadowRoot.querySelector('#login-button').style.display =
                'none'
            this.shadowRoot.querySelector(
                'nav'
            ).innerHTML += this.state.loginContent
        }

        this.shadowRoot.querySelector('.logo').addEventListener('click', () => {
            this.setPath('/')
            dispatchEvent(new Event('reload-home'))
        })
    }
}
window.customElements.define('navigation-bar', Nav)
