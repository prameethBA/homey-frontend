import Base from './componets/Base.js'
// import { _ } from './assets/js/main-library.js'
import Router from './assets/js/Router.js'

import './componets/home/navigation-bar.js'
import './componets/home/footer.js'
import './componets/home/user-comp.js'

// localStorage.login = false;

const router = new Router()

router.get('/', async () => {
  console.log('home')
})

class UI extends Base {
  
  css = `
      #wrap, #mainContainer {
          display: flex;
      }
      
      #mainContainer {
        z-index: 0;
      }
  
      .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex: 1 0 auto;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
      }
  
      .container > user-comp {
          padding-left: 1em;
          cursor: pointer;
      }

      footer-c {
        position: fixed;
        bottom: 0;
        z-index: -1;
      }
  
  `
  content = `
  <div id="wrap">
    <navigation-bar></navigation-bar>
         <div id="mainContainer">
            <div class="container">
                <user-comp mirror="true" route="/own-properties" id="add-property">
                    <img slot="image" defer src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg=" alt="Image"></img>
                    <h1 slot="title">Rent or Lease your own property</h1>
                </user-comp>
                <user-comp mirror="true" id="properties-component">
                    <img slot="image" defer src="https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg" alt="Image"></img>
                    <h1 slot="title">Looking for a place</h1>
                </user-comp>
            </div>
        </div>
        <div id="login-form"></div>
        <footer-c></footer-c>
  </div>
  `
  
  constructor() {
    super()
    this.mount()
    
    const loadForm = async (form) => {
      this.setPath('/' + form)
      await import('./componets/home/' + form +'-form.js')
        .then(() =>{
          this._qs('#login-form') != null ? this._qs('#login-form').innerHTML = `<` + form + `-form></` + form + `-form>` : null

          // Listen for exit-login-form Event for unset the visilility of Login Form
          addEventListener('exit-form', () => {
            this._qs('#login-form') != null ? this._qs('#login-form').innerHTML = '' : null
          })
        })
        .catch(err=>console.log(err))
    }

    // Listen for login-form Event to set visible Login Form
    addEventListener('login-form', ()=>loadForm('login'))
    addEventListener('signup-form', ()=>loadForm('signup'))
    addEventListener('reset-password-form', ()=>loadForm('reset-password'))

    // Listen for /login route to set visible Login Form
    router.get('/login', () => loadForm('login'))

    // Listen for /signup route to set visible SignUp Form
    router.get('/signup', () => loadForm('signup'))

    // Listen for /reset-password route to set visible Reser Password Form
    router.get('/reset-password', () => loadForm('reset-password'))

    // Add Event Listern for user-comp then load properties-component
    this._qs('#properties-component').addEventListener('click', () => {
      dispatchEvent(new CustomEvent('changePath', {detail: {path: "/properties", comp: '/user/avalibale-properties.js',compName:'avalibale-properties'}}))
    })

    // Add Event Listern for user-comp then load properties-component
    this._qs('#add-property').addEventListener('click', () => {
      dispatchEvent(new CustomEvent('changePath', {detail: {path: "/add-property", comp: '/property/add-property.js',compName:'add-property'}}))
    })
    
  }// End of constructor

  connectedCallback(){

    addEventListener('login-success', () => {
      console.log("successfully logged into the system")
      dispatchEvent(new CustomEvent('changePath', {detail: {path: "/properties", comp: '/user/avalibale-properties.js',compName:'avalibale-properties'}}))
    })
    addEventListener('login-failed',() => console.log("failed log into the system"))

    //This is used for developing purpose only | For prameeth
    router.get('/property-details', async () => {
      await import('./componets/property/property-details.js')
      this._qs(
        '#mainContainer'
      ).innerHTML = `<property-details></property-details>`
    })

    //This is used for developing purpose only  | For Ozki
    router.get('/payment-history', async () => {
      await import('./componets/payments/payment-history.js')
      this._qs(
        '#mainContainer'
      ).innerHTML = `<payment-history></payment-history>`
    })

    router.get('/property-history', async () => {
      await import('./componets/property/property-history.js')
      this._qs(
        '#mainContainer'
      ).innerHTML = `<property-history></property-history>`
    })

    router.get('/properties', async () => {
      await import('./componets/user/avalibale-properties.js')
      this._qs(
        '#mainContainer'
      ).innerHTML = `<avalibale-properties></avalibale-properties>`
    })

    addEventListener('reload-home', () => {
      this._qs('#wrap').remove()
      this.render()
      this.shadowRoot.append(this.template.content)

       // Add Event Listern for user-comp then load properties-component
      this._qs('#properties-component').addEventListener('click', () => {
        dispatchEvent(new CustomEvent('changePath', {detail: {path: "/properties", comp: '/user/avalibale-properties.js',compName:'avalibale-properties'}}))
      })

      // Add Event Listern for user-comp then load properties-component
      this._qs('#add-property').addEventListener('click', () => {
        dispatchEvent(new CustomEvent('changePath', {detail: {path: "/add-property", comp: '/property/add-property.js',compName:'add-property'}}))
      })
    })

    

    addEventListener('changePath', async (e) => {
        await import('./componets' + e.detail.comp)
        .then(()=>this._qs('#mainContainer').innerHTML = `<` + e.detail.compName + `></` + e.detail.compName + `>`)
        .catch(err =>console.log(err))
        this.setPath(e.detail.path)
    })

  }
  
}

window.customElements.define('ui-c', UI)

document.getElementById('root').innerHTML = '<ui-c></ui-c>'

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
