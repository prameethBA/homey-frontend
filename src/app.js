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
          padding:0;
          margin:0;
          width:100%;
          height:100%;
      }
  
      .container {
          display: flex;
          width:100%;
          height:100%;
          flex-direction: row;
          justify-content: center;
          position: absolute;
          top: 80%;
          left: 50%;
          z-index: 1;
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
  content = `
  <div id="wrap">
    <navigation-bar></navigation-bar>
        <div id="mainContainer">
            <div class="container">
                <user-comp mirror="true" route="/">
                    <img slot="image" defer src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg=" alt="Image"></img>
                    <h1 slot="title">Rent or Lease your own property</h1>
                </user-comp>
                <user-comp mirror="true" route="/">
                    <img slot="image" defer src="https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg" alt="Image"></img>
                    <h1 slot="title">Looking for a place</h1>
                </user-comp>
            </div>
        <div>
        <login-form id="login-form"></login-form>
    <footer-c></footer-c>
  </div>
  `
  
  constructor() {
    super()
    this.mount()

    const loadForm = async (form) => {
      this.setLoader()
      await import('./componets/home/login-form.js')
        .then(() =>{
          // this.setPath('/' + form)
          this._qs('#login-form').style.display = 'flex'

          dispatchEvent(new Event(form + '-form'))

          // Listen for exit-login-form Event for unset the visilility of Login Form
          addEventListener('exit-login-form', () => {
            this._qs('#login-form').style.display = 'none'
          })
        })
        .catch(err=>console.log(err))
      this.stopLoader()
    }

    const loadHome = async () => {
        this._qsAll('user-comp').forEach((item) =>
        item.addEventListener('click', async () => {
          this.setPath(item.getAttribute('route'))
          if (localStorage.login == 'true') {
            await import('./componets/user/primary-user.js')
              .then(()=>this._qs('#mainContainer').innerHTML = `<primary-user></primary-user>`)
              .catch(err =>console.log(err))
          } else dispatchEvent(new Event("login-form"));
        })
      )
    }

    // Listen for login-form Event to set visible Login Form
    addEventListener('login-form', ()=>loadForm('login'))

    // Listen for /login route to set visible Login Form
    router.get('/login', () => loadForm('login'))

    // Listen for /signup route to set visible SignUp Form
    router.get('/signup', () => loadForm('signup'))

    // Listen for /reset-password route to set visible Reser Password Form
    router.get('/reset-password', () => loadForm('reset-password'))

    // Add Event Listern for user-comp then load PrimaryUser component
    loadHome()
  }

  connectedCallback(){

    addEventListener('login-success',async () => {
      console.log("successfully logged into the system")
      this.setPath('/user')
      if (localStorage.login == 'true') {
        await import('./componets/user/primary-user.js')
          .then(()=>this._qs('#mainContainer').innerHTML = `<primary-user></primary-user>`)
          .catch(err =>console.log(err))
      } else dispatchEvent(new Event("login-form"));
    })
    addEventListener('login-failed',() => console.log("failed log into the system"))

    //This is used for developing purpose only
    router.get('/add-property', async () => {
      await import('./componets/property/add-property.js')
      this._qs(
        '#mainContainer'
      ).innerHTML = `<add-property></add-property>`
    })

    addEventListener('reload-home', () => {
      this._qs('#wrap').remove()
      this.render()
      this.shadowRoot.append(this.template.content)

      this._qsAll('user-comp').forEach((item) =>
        item.addEventListener('click', async () => {
          this.setPath(item.getAttribute('route'))
          if (localStorage.login == 'true') {
            await import('./componets/user/primary-user.js')
              .then(()=>this._qs('#mainContainer').innerHTML = `<primary-user></primary-user>`)
              .catch(err =>console.log(err))
          } else dispatchEvent(new Event("login-form"));
        })
      )

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
