import Base from '../Base.js'

export default class Nav extends Base {

  css = `
    header {
      position: fixed;
      width: 100%;
      z-index: 1;
      transition: all 0.5s ease;
    }

    .nav-scroll {
      transform: scale(0.98);
      margin: 0.2rem 0rem 0.2rem 0.1rem !important;
    }

    .header-scroll {
      background-color: #ffffff;
    }

    .navbar {
      display: flex;
      margin: 0.5rem 0 -0.1rem 1rem;
      transition: all 0.5s ease;
    }

    .separator {
      flex: 1;
    }

    .logo {
      cursor: pointer;
      width: 50px;
      height: 50px;
    }

    #login-button {
      height: 2.5rem;
      width: 10rem;
      margin: auto 2rem;
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
    
    .name {
      margin-top: 2rem;
    }

    .wrapper {
      margin: 0.5rem;
      position: absolute;
      right: 1rem;
      display: inline-block;
    }

    #hamburger-icon {
      display: none;
    }

    .nav-link {
      text-decoration:none;
      color:#001f3f;
      padding:10px 0px;
      border:5px solid transparent;
      cursor: pointer;
      transition:1s ease;
    }

    .nav-link:hover {
      background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
      animation: line 2s;
    }
  
    .active {
      background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
      animation: line 2s;
    }

    .dropdown {
      display: none;
      text-align: right;
      position: absolute;
      right: -1rem;
      top: 2rem;
      background-color: #aceaff;
      background-image: linear-gradient( to top, #10dbc6, #61e4f4, #aceaff, #e3f1ff, #ffffff );
      background-size: cover;
      background-attachment: fixed;
      transition: all 1s;
      box-shadow: 0px 0px 5px 1px rgba(23,12,120,0.58);
      border-radius: 2px;
    }

    .menu-item {
      padding: 1rem;
      cursor: pointer;
      text-decoration:none;
      color:#001f3f;
      border:5px solid transparent;
      transition:1s ease;
    }

    .menu-item:hover {
      background-image: linear-gradient(to right top, #ff8c43, #ff8a38, #ff892c, #ff881c, #ff8700);
      transition: all 0.5s;
      color: #ffffff;
    }

    .navlink-separator {
      display: none;
    }

    .dropdown  .navlink-separator {
        display: block;
        margin: 0 auto;
        border: solid 1px #777777;
        width: 90%;
    }

    @keyframes line {
      0% {
        background-position-x: 390px;
      }
    }

    @media screen and (max-width: 1200px) {

      #hamburger-icon {
        display: inline-block;
        cursor: pointer;
        margin: 1rem;
        width: 2rem;
        height: 1.5rem;
        transition: 1s ease;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        right: 1rem;
      }
      
      .hamburger-collapse {
        background : url('./assets/icon/hamburger-icon.png');
      }
      .hamburger-expand {
        background : url('./assets/icon/close-icon.png');
      }


      .wrapper {
        display: none;
        position: absolute;
        justify-content: stretch;
        top: 4rem;
        left: -0.5rem;
        width: 100%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.9);
        transition: all 1s ease;
      }

      .nav-link, .menu-item {
        transition:1s ease;
        cursor: pointer;
        text-align: center;
        color: #ffffff;
      }

      .menu-item:hover, .nav-link:hover {
        background-image: linear-gradient(to right top, #ff8c43, #ff8a38, #ff892c, #ff881c, #ff8700);
      }
    
      .active {
        background-image: linear-gradient(to right top, #ff8c43, #ff8a38, #ff892c, #ff881c, #ff8700);
      }

      .navlink-separator {
        display: block;
        margin: 0 auto;
        border: solid 1px #777777;
        width: 25%;
      }
      
      .dropdown {
        display: grid;
        text-align: center;
        position: initial;
        box-shadow: none;
        background-color: transparent;
        background-image: none;
      }
      
    }

    @media screen and (max-width: 992px) {

    }

    @media screen and (max-width: 768px) {
      #login-button {
        height: 3rem;
        width: 10rem;
        margin: 0.2rem 1rem;
        font-size: 1.2rem;
      }
    }

  `

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

    this._qs('.logo').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `../main`, compName: 'main-comp' } })))
    
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
              this._qs('.logo').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `../main`, compName: 'main-comp' } })))
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

                  axios.delete('http://homey-api.atwebpages.com/login', {
                    'userId': (sessionStorage.userId !== undefined || sessionStorage.userId !== '') ? sessionStorage.userId : sessionStorage.userId,
                    'token': (sessionStorage.token !== undefined || sessionStorage.token !== '') ? sessionStorage.token : sessionStorage.token
                      }
                  )
                  .then(res => {
                    this.logOut()

                    dispatchEvent(new Event('log-out'))
                    //Redirect to the home page
                    dispatchEvent(new CustomEvent("load-comp", { detail: {parh: '/', comp: '../main', compName: 'main-comp' } }))
                    
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
