import Base from '../Base.js'

export default class Nav extends Base {

  css = `
    header {
      position: sticky;
      width: 100%;
      z-index: 1;
    }

    .navbar {
      display: flex;
      margin: 1rem 1rem 0 1rem;
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
      margin: 1rem;
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
      display: inline-grid;
      text-align: right;
      position: absolute;
      right: 2rem;
      top: 4rem;
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
        top: 2.25rem;
        left: -1rem;
        width: 100%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.7);
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

  content = `
      <header>
          <nav class='navbar'>
              <img src="./assets/img/homey_logo.png" class="logo" />
              <span class="separator"></span>
              <button id="login-button"> login </button>
          </nav>
      </header>
  `
  constructor() {
    super()
    this.mount()

    // Event listener for load the login form
    this._qs('#login-button').addEventListener('click', () => dispatchEvent(new Event('load-login-form')))

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
            <a class="nav-link" class="setting-menu">Account</a>
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
          const setLoginNavBar = () => {
            if (localStorage.login == 'true' || sessionStorage.login == 'true') {
              this._qs('#login-button') != null ? this._qs('#login-button').style.display = 'none' : null
              this._qs('nav').innerHTML = this.state.loginContent
              this._qs('#logout-button') != null ? this._qs('#logout-button').addEventListener('click', () => dispatchEvent(new Event('log-out'))) : null
        
              // Set an indicator for active class
              this._qsAll("a").forEach(item => item.addEventListener('click', () => {
                this._qsAll("a").forEach(item => item.classList.remove('active'))
                if(window.innerWidth > 1200) {
                  if(item.classList[0] == 'nav-link') item.classList.add('active')
                } else item.classList.add('active')
              }))
              
              this.state.LoginNavBar = true
            }
          }//End setLoginBar() method
          setLoginNavBar()
  }//End of the constructor

  connectedCallback() {

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
    }//End of the Event Litsner for hamburger icon
    
  }// End of connected callback

}// End of Class

window.customElements.define('navigation-bar', Nav)
