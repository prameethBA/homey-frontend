import Base from '../Base.js'
import CSS from './navigation-bar.css.js'

export default class Nav extends Base {

  css = CSS

  preContent = `
      <nav class='navbar'>
          <img src="./assets/img/homey_logo.png" class="logo" />
          <span class="separator"></span>
          <button id="login-button"> login </button>
      </nav>
  `

  content = `
      <header>
        ${this.preContent}
      </header>
  `
  constructor() {
    super()
    this.mount()

    addEventListener('scroll', () =>  {
      if(document.documentElement.scrollTop > 10) {
        this._qs('nav').classList.add('nav-scroll') 
        this._qs('header').classList.add('header-scroll') 
      } else {
        this._qs('nav').classList.remove('nav-scroll') 
        this._qs('header').classList.remove('header-scroll') 
      }
    })

    this._qs('.logo').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `home/main/main`, compName: 'main-comp' } })))
    
    this.preContentBehaviour = () => {
      // Event listener for load the login form
      this._qs('#login-button').addEventListener('click', () => dispatchEvent(new Event('load-login-form')))
    }

    this.state.loginContent = `
        <div class='navbar'>
          <img src="./assets/img/homey_logo.png" class="logo" />
          <span class="separator"></span>
          <span class="wrapper">
            <a class="nav-link" id="properties">Properties</a>
            <hr class='navlink-separator' />
            <a class="nav-link" id="own-properties">Own Properties</a>
            <hr class='navlink-separator' />
            <a class="nav-link">Payments</a>
            <hr class='navlink-separator' />
            <a class="nav-link">Favourites</a>
            <hr class='navlink-separator' />
            <a class="nav-link setting-menu">Settings & Account</a>
            <hr class='navlink-separator' />
            <span class="dropdown">
              <a class="menu-item">Profile Settings</a>
              <hr class='navlink-separator' />
              <a class="menu-item" id="add-new-property">Add New Property</a>
              <hr class='navlink-separator' />
              <a class="menu-item">Wallet</a>
              <hr class='navlink-separator' />
              <a class="menu-item" id="logout-button">Logout</a>
            </span>
          </span>
          <span id="hamburger-icon" class="hamburger-collapse"></span>
          </div>
          
          `
          this.setLoginNavBar = () => {
            if (localStorage.login == 'true' || sessionStorage.login == 'true') {
              this._qs('#login-button') != null ? this._qs('#login-button').style.display = 'none' : null
              this._qs('nav').innerHTML = this.state.loginContent

              if(this.getUserType() == 1) this._qs(".wrapper").innerHTML+= `
                        <button id="admin-dashboard" class="nav-link">Admin Dashboard</button>
                      `
              // Load the admin area
              this._qs('#admin-dashboard').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/admin`, comp: `admin/admin-dashboard`, compName: 'admin-dashboard' } })))

              this._qs('.logo').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `home/main/main`, compName: 'main-comp' } })))
              this._qs('#logout-button') != null ? this._qs('#logout-button').addEventListener('click', () => dispatchEvent(new Event('log-out'))) : null
              
              // THIS SHOULD BE RECONSIDER +TODO
              this.state.dropdownVisible = true
              this._qs('.setting-menu').addEventListener('click', async () => {
                this.state.dropdownVisible && (window.innerWidth >= 1200) ? this._qs('.dropdown').style.display = 'inline-grid' : this._qs('.dropdown').style.display = 'none'
                this.state.dropdownVisible = !this.state.dropdownVisible
              })
              // this._qs('.dropdown').addEventListener('mousedown', () => {
              //   this.state.dropdownVisible && (window.innerWidth >= 1200) ? this._qs('.dropdown').style.display = 'inline-grid' : this._qs('.dropdown').style.display = 'none'
              //   this.state.dropdownVisible = !this.state.dropdownVisible
              // })
              // this._qs('.dropdown').addEventListener('mouseover', async () => {
              //     await this.sleep(5000)
              //     this._qs('.dropdown').style.display = 'none'
              //     this.state.dropdownVisible = true
              // })
              //-TODO
              
              // Set an indicator for active class
              this._qsAll("a").forEach(item => item.addEventListener('click', () => {
                this._qsAll("a").forEach(item => item.classList.remove('active'))
                if(window.innerWidth >= 1200) {
                  if(item.classList[0] == 'nav-link') item.classList.add('active')
                } else item.classList.add('active')
              }))

              this._qsAll('.menu-item').forEach(item => item.addEventListener('click', () => {
                this._qs('.dropdown').style.display = 'none'
                if(item.id == 'add-new-property') dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/add-new-property`, comp: `property/add-new-property`, compName: 'add-new-property' } }))
              }))
              
              this.state.LoginNavBar = true
              
              // Event Litsner for hamburger icon
              const hamburger = this._qs("#hamburger-icon")
              const wrapper = this._qs(".wrapper")
              if(this.state.LoginNavBar) {
                this.state.display = wrapper.style.display == 'none' || wrapper.style.display == '' 
                hamburger.addEventListener('click', () => {
                 if(!this.state.display) {
                    wrapper.style.display = 'none'
                    hamburger.classList.add('hamburger-collapse')
                    hamburger.classList.remove('hamburger-expand')
                  } else {
                    wrapper.style.display = 'inline-grid'
                    hamburger.classList.add('hamburger-expand')
                    hamburger.classList.remove('hamburger-collapse')
                  }
                  this.state.display = !this.state.display
                })
                
                
                // Event listener for logout 
                this._qs("#logout-button").addEventListener('click', () => {

                  axios.delete(`${this.host}/login`, {
                    'userId': (sessionStorage.userId !== undefined || sessionStorage.userId !== '') ? sessionStorage.userId : sessionStorage.userId,
                    'token': (sessionStorage.token !== undefined || sessionStorage.token !== '') ? sessionStorage.token : sessionStorage.token
                      }
                  )
                  .then(res => {
                    this.logOut()

                    dispatchEvent(new Event('log-out'))
                    //Redirect to the home page
                    dispatchEvent(new CustomEvent("load-comp", { detail: {parh: '/', comp: 'home/main/main', compName: 'main-comp' } }))
                    
                    if(res.status == 204) dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'success', msg: res.message } }))
                    else throw res.data
                  })
                  .catch(err => {
                    this.logOut()
                    dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message === undefined ? err : err.message } }))
                  })
                })
              }//End of the Event Litsner for hamburger icon
            } else this.preContentBehaviour()

          }//End setLoginBar() method
          
          this.setLoginNavBar()

  }//End of the constructor

  connectedCallback() {

    addEventListener('login-success', () => {
      this.setLoginNavBar()
    })

    addEventListener('log-out', () => {
      this._qs('header').innerHTML = this.preContent
      this.preContentBehaviour()
      this._qs('#login-button').addEventListener('click', () => dispatchEvent(new Event('load-login-form')))
    })

  }// End of connected callback

}// End of Class

window.customElements.define('navigation-bar', Nav)
