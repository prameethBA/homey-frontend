import Base from './../Base.js'

export default class Nav extends Base {

  css = `
    header {
      position: fixed;
      width: 100%;
      z-index: 1;
    }

    nav, .navbar {
      width: 100%;
      display: flex;
      transition: all 2s;
      height: 4.5em;
    }
    
    .scrollNavbar {
      background-color: #eeeeee;
      background-image: linear-gradient(to left top, #ededed, #f1f1f1, #f6f6f6, #fafafa, #ffffff);
      box-shadow: inset 0px -1px 2px 0px rgba(80,57,89, 0.3);
    }

    h3, button, a, ul {
      display: inline-block;
    }

    h3 {
      padding-left: 1em;
    }

    .separator {
      flex: 1;
    }

    ul {
      padding-right: 1em;
    }

    ul .nav-link {
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
    
    .nav-link:hover .nav-link {
      color: #d94f5c;
    }
    
    .nav-link:not(:last-child) {
      margin-right: 30px;
    }

    @keyframes line {
      0% {
        background-position-x: 390px;
      }
    }

    #login-button {
      height: 2.5em;
      width: 10em;
      margin: auto 2em;
      margin-left: auto;
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

    #setting-menu {
      position: absolute;
      display: flex;
      flex-direction: column;
      z-index: 2;
      right: 2em;
      top: 3em;
      background-color: rgba(0, 0, 63, 0.9);
      padding: 0;
      text-align: center;
      display:none;
    }

    #setting-menu a {
      color: #ffffff;
      border-bottom: solid 1px #ffffff;
      padding: 0 0.5em 0.5em 0;
      margin-bottom: 0.2em;
      width: 100%;
    }

    #setting-menu a:hover {

    }

  `

  content = `
      <header>
          <nav>
              <h3 class="logo">Homey</h3>
              <span class="separator"></span>
              <button id="login-button"> login </button>
          </nav>
      </header>
  `
  constructor() {
    super()
    this.mount()
  }

  connectedCallback() {
    this.state.loginContent = `
        <div class='navbar'>
            <h3 class="logo">Homey</h3>
            <span class="separator"></span>
            <ul>
              <a class="nav-link" id="properties">Properties</a>
              <a class="nav-link">Own Properties</a>
              <a class="nav-link">Payments</a>
              <a class="nav-link">Favourites</a>
              <a class="nav-link">Profile</a>
              <a class="nav-link">Settings</a>
            </ul>
        </div>
        <ul id="setting-menu">
          <a id='logout-button'>Logout</a>
          <a id='logout-button-2'>Logout-2</a>
        </ul>
    
      `
    this._qs('#login-button')
      .addEventListener('click', () => {
        dispatchEvent(new Event('login-form'))
      })

    const setLoginNavBar = () => {
      if (localStorage.login == 'true') {
        this._qs('#login-button') != null ? this._qs('#login-button').style.display = 'none' : null
        this._qs('nav').innerHTML = this.state.loginContent
        this._qs('#logout-button') != null ? this._qs('#logout-button').addEventListener('click', () => dispatchEvent(new Event('log-out'))) : null
      }
    }

    setLoginNavBar()

    this._qs('.logo').addEventListener('click', () => {
      this.setPath('/')
      dispatchEvent(new Event('reload-home'))
    })

    addEventListener('login-success', () => setLoginNavBar())

    addEventListener('log-out', ()=> {
      localStorage.login = false;
      localStorage.token = ''
      this.setPath('/')
      dispatchEvent(new Event('reload-home'))
    })
    
    if(!(this._qs('#properties') == '' || this._qs('#properties') == null))
      this._qs('#properties').addEventListener('click', () => dispatchEvent(new CustomEvent('changePath', {detail: {path: "/properties", comp: '/user/avalibale-properties.js',compName:'avalibale-properties'}})))
    
    addEventListener('pathChanged', e => {
      if(e.detail.path == '' || e.detail.path == null) this._qs("#" + e.detail.path).classList.add('active')
    })
    
    const scrollFunction = () => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
          this._qs('nav').classList.add('scrollNavbar')
        } else {
          this._qs('nav').classList.remove('scrollNavbar')
        }
      }

    addEventListener('scroll', () => scrollFunction())
    // End of connected callback
  }
// End of Class
}

window.customElements.define('navigation-bar', Nav)
