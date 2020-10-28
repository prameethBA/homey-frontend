import Base from './componets/Base.js'
import Router from './assets/js/Router.js'

import './componets/home/navigation-bar.js'
import './componets/home/footer.js'

const router = new Router()

export default class App extends Base {

    css = `
    .container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

`
    content = `
    <navigation-bar id="navigationBar"></navigation-bar>
        <div id="login-form"></div>
            <div id="container" class="container"></div>
        <div id="pop-up"></div>
    <footer-c></footer-c>
`
    constructor() {
        super()
        this.mount()

        this.state.routeFound = false
        addEventListener('route-found', () => this.state.routeFound = true)
        
        // Load home component
        router.get('/', async () => { await import('./main.js').then(this._qs('.container').innerHTML = `<main-comp></main-comp>`) })

        // Method to load dynamic froms
        const loadForm = async (form) => {
            this.setPath('/' + form)
            this.setLoader()
            
            await import('./componets/home/' + form + '-form.js')
            .then(() => {
            this._qs('#login-form').innerHTML = `<` + form + `-form></` + form + `-form>` 
    
                // Listen for exit-login-form Event for unset the visilility of Login Form
                addEventListener('exit-form', () => {
                this._qs('#login-form').innerHTML = ''
                dispatchEvent(new CustomEvent("load-comp", { detail: { comp: '../main', compName: 'main-comp' } }))
                })
            this.stopLoader()
            })
            .catch(err => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
                this.stopLoader()
            }) 
        }// End of Method to load dynamic froms

        // Listen for login-form Event to set visible Login Form
        addEventListener('load-login-form', () => loadForm('login'))
        addEventListener('load-signup-form', () => loadForm('signup'))
        addEventListener('reset-password-form', () => loadForm('reset-password'))
        
        // Load login form component
        router.get('/login', async () => dispatchEvent(new Event('load-login-form')))

        // Load signup form component
        router.get('/signup', async () => dispatchEvent(new Event('load-signup-form')))

        // Load login form component
        router.get('/reset-password', async () => dispatchEvent(new Event('reset-password-form')))
        
    }//End of constructor
    

    connectedCallback() {

    // Event Listner for pop-up
    addEventListener('pop-up', async (res) => {
        await import(`./componets/popup/popup.js`)
          .then(() => this._qs('#pop-up').innerHTML = `<pop-up type=${res.detail.pop}><div slot="message">${res.detail.msg}</div></pop-up>`)
    })

    // Add event listner for clear the pop-up 
    addEventListener('exit-popup', ()=> this._qs('#pop-up').innerHTML = '')
    
    //Event listner for Load a component
    addEventListener('load-comp', async (e) => {
        this.setLoader()
        await import('./componets/' + e.detail.comp + '.js')
        .then(() => {
            this._qs('#container').innerHTML = `<` + e.detail.compName + `></` + e.detail.compName + `>`
                this.stopLoader()
            })
            .catch(err => {
                console.log(err)
                this.stopLoader()
            })
            this.setPath(e.detail.path)
        })//End of the Event listner for Load a component
        
        // Add event listener for an error Page
        // addEventListener('error', async (e) => !this.state.routeFound ? await import(`./componets/errors/Error${e.detail.err}.js`).then(this._qs('#container').innerHTML = `<err-404></err-404>`) : null)
        addEventListener('error', () => console.log("this.state.routeFound"))

    }//End of connectedCallback
    
}//End of Class

// router.init()

window.customElements.define('app-comp', App)

document.getElementById('root').innerHTML = '<app-comp></app-comp>'