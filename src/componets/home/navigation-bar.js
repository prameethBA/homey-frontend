import Base from '../Base.js'
import CSS from './navigation-bar.css.js'

export default class Nav extends Base {

  css = CSS

  preContent = `
  <nav class="topnav">
    <div class="row">
      <span class="logo">
        <img src="/assets/img/homey_logo.png" />
      </span>
    </div>
    <div class="row separator"></div>
    <div class="row nav-items">
      <button id="login-button"> login </button>
    </div>
  </nav>
  `

  content = `
      <header>
        <nav class="topnav">
          <div class="row">
            <span class="logo">
              <img src="/assets/img/homey_logo.png" />
            </span>
          </div>
          <div class="row separator"></div>
          <div class="row nav-items">
            <a>🔔</a>
            <a id="properties">Properties</a>
            <a>Favourites</a>

            <div class="dropdown">
              <button class="dropbtn">Own Properties
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a id="add-new-property">Add New Property</a>
                <a id="own-properties">View Own Properties</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn">Payments
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a>Received Payments</a>
                <a>Paying History</a>
                <a>Cash out</a>
                <a>Bank Account Details</a>
              </div>
            </div>

            <a> Forum </a>

            <div class="dropdown">
              <button class="dropbtn">Account & Settings
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a id="profile">Profile</a>
                <a>Wallet</a>
                <a id="log-out">Logout</a>
              </div>
            </div>
            <a class="hamburger">&#9776;</a>
          </div>
        </nav>
      </header>
  `
  constructor() {
    super()
    this.mount()

    //pre Content Behaviour
    this.setNavBar()

  }//End of the constructor

  //Set Nav Bar
  setNavBar() {
    if(!this.isLogin()) this._qs('header').innerHTML = this.preContent
    else {
      // Navigation 
      this.navigation()
      //Toggle Nav bar
      this.toggleNavBar()
      //Set admin dashboard button
      if(this.getUserType() == 1) {
        this._qs('.nav-items').innerHTML += `<a><button id="admin-dashboard">Admin Dashboard</button></a>`
        //load Admin bashboard
        this.loadAdminDashboard()
      }//End of setting admin dashboard button 
    }//End of setting nvigation

  }// End of setNavBar()

  // Navigation 
  navigation() {
    //Home
    this._qs('.logo').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `home/main/main`, compName: 'main-comp' } })))
    // properties
    this._qs('#properties').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `property/available-property`, compName: 'available-property' } })))
    //Add New property
    this._qs('#add-new-property').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `property/add-new-property`, compName: 'add-new-property' } })))
    //Own property
    this._qs('#own-properties').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `property/own-properties`, compName: 'own-properties' } })))
    //Profile
    this._qs('#profile').addEventListener('click', () => dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `account/profile`, compName: 'profile-comp' } })))
    //Log out
    this._qs('#log-out').addEventListener('click', () => this.logOut())
  }//end of navigation()

  //load Admin bashboard
  loadAdminDashboard() {
    this._qs('#admin-dashboard').addEventListener('click', () => {
      dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `admin/admin-dashboard`, compName: 'admin-dashboard' } }))
    })
  }// End of loadAdminDashboard()
  
  //Toggle Nav bar
  toggleNavBar() {
    let visible = true
    this._qs('.hamburger').addEventListener('click', () => {
        if(visible) {
          this._qs('.dropbtn').classList.add('responsive-dropbtn')
          this._qs('.nav-items').classList.add('responsive-nav-items')
          this._qs('.dropdown').classList.add('responsive-dropdown')
          this._qs('.dropdown-content').classList.add('responsive-dropdown-content')
          this._qs('.topnav').classList.add('responsive-topnav')
        }
        else {
          this._qs('.dropbtn').classList.remove('responsive-dropbtn')
          this._qs('.nav-items').classList.remove('responsive-nav-items')
          this._qs('.dropdown').classList.remove('responsive-dropdown')
          this._qs('.dropdown-content').classList.remove('responsive-dropdown-content')
          this._qs('.topnav').classList.remove('responsive-topnav')
        }

        visible = !visible
    })
  }// toggleNavBar()

  //Log out
  logOut() {
    this.logOut()
    this.setNavBar()
  }//logOut()

  connectedCallback() {

  }// End of connected callback

}// End of Class

window.customElements.define('navigation-bar', Nav)
