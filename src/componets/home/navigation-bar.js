import Base from './../Base.js'

export default class Nav extends Base {

  css = `
  
  *{
    margin: 0;
    padding: 0;
    font-family: Century Gothic;
  }
  
  nav {
    display: flex;
  }

  .logo {
    padding: 1em;
    display: flex;
  }

  ul{
    top: 1em;
    right: 1em;
    position: absolute;
    list-style-type:none;
  }
  ul a{
    display: inline-block;
    cursor: pointer;
  }
  ul a{
    text-decoration:none;
    color:#001f3f;
    padding:10px 0px;
    border:5px solid transparent;
    transition:1s ease;
  }
  
  a:hover {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
    animation: line 2s;
  }

  .active {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
    animation: line 2s;
  }
  
  a:hover a {
    color: #d94f5c;
  }
  
  a:not(:last-child) {
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

  `
  content = `
      <header>
          <nav>
              <h3 class="logo">Homey</h3>
              <button id="login-button"> login </button>
          </nav
      </header>
  `
  constructor() {
    super()
    this.mount()
  }

  connectedCallback() {
    this.state.loginContent = `
        <div class='login-content'>
            <h3 class="logo">Homey</h3>
            <ul>
                <a id="properties">Properties</a>
                <a>Own Properties</a>
                <a>Payments</a>
                <a>Favourites</a>
                <a>Profile</a>
                <a>Settings</a>
                <a id='logout-button'>Logout</a>
            </ul>
        </div>
    
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
  }

}

window.customElements.define('navigation-bar', Nav)
