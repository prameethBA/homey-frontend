import Base from './componets/Base.js'
import { _ } from './assets/js/main-library.js'
import Router from './assets/js/Router.js'

import './componets/home/navigation-bar.js'
import './componets/home/footer.js'
import './componets/home/user-comp.js'

const router = new Router()

router.get('/', async () => {
    console.log('home')
})

const style = `
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .container > user-comp {
        padding: 1em;
    }

    #login-form {
        display: none;
    }

    user-comp {
        cursor: pointer;
    }

`
const content = `
<navigation-bar></navigation-bar>
    <div class="container" id="mainContainer">
        <user-comp mirror="true" route="/">
            <img slot="image" defer src="https://www.zricks.com/img/UpdatesBlog/44b94c9d-ab13-401d-9e5b-86a00f9da6496%20Must%20Follow%20Tips%20to%20Market%20a%20Luxury%20Home.jpg" alt="Image"></img>
            <h1 slot="title">Rent or Lease your own property</h1>
        </user-comp>
        <user-comp mirror="true" route="/">
            <img slot="image" defer src="https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg" alt="Image"></img>
            <h1 slot="title">Looking for a place</h1>
        </user-comp>
    </div>
    <login-form id="login-form"></login-form>
<footer-c></footer-c>
`

class UI extends Base {
    constructor() {
        super()

        this.render(style, content)
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))

        const exitForm = () => {
            addEventListener('exit-login-form', () => {
                this.shadowRoot.querySelector('#login-form').style.display =
                    'none'
            })
        }

        addEventListener('login-form', async () => {
            this.setPath('/login')
            await import('./componets/home/login-form.js')
            this.shadowRoot.querySelector('#login-form').style.display = 'flex'

            exitForm()
        })

        router.get('/signup', async () => {
            await import('./componets/home/login-form.js')
            this.shadowRoot.querySelector('#login-form').style.display = 'flex'
            dispatchEvent(new Event('signup-form'))

            exitForm()
        })

        router.get('/reset-password', async () => {
            await import('./componets/home/login-form.js')
            this.shadowRoot.querySelector('#login-form').style.display = 'flex'
            dispatchEvent(new Event('reset-password-form'))

            exitForm()
        })
    }

    connectedCallback() {
        addEventListener('reload-home', () => {
            this.render(style, content)
            this.shadowRoot.innerHTML = ''
            this.shadowRoot.append(this.template.content)

            this.shadowRoot.querySelectorAll('user-comp').forEach(item =>
                item.addEventListener('click', async () => {
                    this.setPath(item.getAttribute('route'))
                    //if (localStorage.login === true) {
                    await import('./componets/user/primary-user.js')
                    this.shadowRoot.querySelector(
                        '#mainContainer'
                    ).innerHTML = `<primary-user></primary-user>`
                    //} else dispatchEvent(new Event("login-form"));
                })
            )
        })

        this.shadowRoot.querySelectorAll('user-comp').forEach(item =>
            item.addEventListener('click', async () => {
                this.setPath(item.getAttribute('route'))
                //if (localStorage.login === true) {
                await import('./componets/user/primary-user.js')
                this.shadowRoot.querySelector(
                    '#mainContainer'
                ).innerHTML = `<primary-user></primary-user>`
                //} else dispatchEvent(new Event("login-form"));
            })
        )
    }
}
window.customElements.define('ui-c', UI)

_('#root').innerHTML = '<ui-c></ui-c>'

router.get('/login', () => {
    dispatchEvent(new Event('login-form'))
})

router.init() // this method will process the logics

// // Register ServiceWorker
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker
//             .register('./sw.js')
//             .then(registration => {
//                 console.log('Service Worker is registered', registration.scope)
//             })
//             .catch(err => {
//                 console.error('Registration failed:', err)
//             })
//     })
// }
