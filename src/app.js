import Base from './componets/Base.js'
import CSS from './app.css.js'
import Router from './assets/js/Router.js'

import './componets/home/navigation-bar.js'
import './componets/home/footer.js'

const router = new Router()

export default class App extends Base {

    css = CSS
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
        router.get('/', async () => { await import('./componets/home/main/main.js').then(this._qs('.container').innerHTML = `<main-comp></main-comp>`) })

        // Method to load dynamic froms
        const loadForm = async (form) => {
            // this.setPath('/' + form)
            this.setLoader()
            
            await import('./componets/home/' + form + '-form.js')
            .then(() => {
            this._qs('#login-form').innerHTML = `<` + form + `-form></` + form + `-form>` 
    
                // Listen for exit-login-form Event for unset the visilility of Login Form
                addEventListener('exit-form', () => {
                this._qs('#login-form').innerHTML = ''
                    dispatchEvent(new CustomEvent("load-comp", { detail: {parh: '/', comp: 'home/main/main', compName: 'main-comp' } }))
                })
            this.stopLoader()
            })
            .catch(err => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
                this.stopLoader()
            }) 
        }// End of Method to load dynamic froms

        // Listen for login-form Event to set visible Login Form
        addEventListener('load-login-form', () => !(sessionStorage.login == 'true' || localStorage.login == 'true') ? loadForm('login') : this.setPath('/'))
        addEventListener('load-signup-form', () => !(sessionStorage.login == 'true' || localStorage.login == 'true') ? loadForm('signup') : this.setPath('/'))
        addEventListener('reset-password-form', () => !(sessionStorage.login == 'true' || localStorage.login == 'true') ? loadForm('reset-password') : this.setPath('/'))
        addEventListener('confirm-form', () => !(sessionStorage.login == 'true' || localStorage.login == 'true') ? loadForm('confirm') : this.setPath('/'))
        
        // Load login form component
        router.get('/login', () => dispatchEvent(new Event('load-login-form')))

        // Load signup form component
        router.get('/signup', () => dispatchEvent(new Event('load-signup-form')))

        // Load reset-password form component
        router.get('/reset-password', () => dispatchEvent(new Event('reset-password-form')))

        // Load confirm form component
        router.get('/confirm', () => dispatchEvent(new Event('confirm-form')))

        // Load add new property component
        router.get('/add-new-property', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/add-new-property`, comp: `property/add-new-property`, compName: 'add-new-property' } })))

        // Load add new property component
        router.get('/available-property', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/available-property`, comp: `property/available-property`, compName: 'available-property' } })))

        // Load add new property component
        router.get('/admin', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/admin`, comp: `admin/admin-dashboard`, compName: 'admin-dashboard' } })))
        
    }//End of constructor
    

    connectedCallback() {

    // Event Listner for pop-up
    addEventListener('pop-up', async (res) => {
        await import(`./componets/popup/popup.js`)
          .then(() => this._qs('#pop-up').innerHTML = `<pop-up type=${res.detail.pop} duration=${res.detail.duration == undefined ? 10 : res.detail.duration}><div slot="message">${res.detail.msg}</div></pop-up>`)
    })

    //Event listner for Load a component
    addEventListener('load-comp', async (e) => {
        this.setLoader()
        this.setPath(e.detail.path)
        await import('./componets/' + e.detail.comp + '.js')
        .then(() => {
            this._qs('#container').innerHTML = `<` + e.detail.compName + `></` + e.detail.compName + `>`
                this.stopLoader()
            })
            .catch(err => {
                console.log(err)
                this.stopLoader()
                this.setPath('/')
            })
        })//End of the Event listner for Load a component
        
        // Add event listener for an error Page
        addEventListener('customError', async (e) => await import(`./componets/errors/Error${e.detail.err}.js`).then(this._qs('#container').innerHTML = `<err-404></err-404>`))

        router.init()
    }//End of connectedCallback
    
}//End of Class


window.customElements.define('app-comp', App)

document.getElementById('root').innerHTML = '<app-comp></app-comp>'