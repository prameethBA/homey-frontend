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

    loginContent = `
        <nav class="topnav">
          <div class="row">
            <span class="logo">
              <img src="/assets/img/homey_logo.png" />
            </span>
          </div>
          <div class="row separator"></div>
          <div class="row nav-items">
            <a data-path="">🔔</a>
            <a data-path="property" id="property" class="nav-link">Properties</a>
            <a data-path="favourite" id="favourite" class="nav-link">Favourites</a>

            <div class="dropdown">
              <button class="dropbtn" class="nav-link" id="own-property">Own Properties
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a data-path="own-properties" id="add-new-property">Add New Property</a>
                <a data-path="own-properties" id="own-properties">View Own Properties</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn" class="nav-link" id="payments">Payments
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a data-path="payments" id="received">Received Payments</a>
                <a data-path="payments" id="paid">Paying History</a>
                <a data-path="payments" id="all">Transaction History</a>
                <a data-path="payments" id="cashout">Cash out</a>
                <a data-path="payments" id="bank-account">Bank Account Details</a>
              </div>
            </div>

            <a data-path=""> Forum </a>

            <div class="dropdown">
              <button class="dropbtn" class="nav-link" id="account">Account & Settings
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a data-path="account" id="wallet">Wallet</a>
                </div>
              </div>
            <a data-path="account" id="log-out">Logout</a>
            <a class="profile" id="profile">
                <img id="profile-picture" src="/assets/img/alt/load-post.gif" alt="Profile">
                <span id="profile-name">Dimuthu Lakmal</span>
            </a>
            <a data-path="" class="hamburger">&#9776;</a>
          </div>
        </nav>
        `

    content = `<header></header>`

    constructor() {
        super()
        this.mount()

        //pre Content Behaviour
        this.setNavBar()
        //Set Navigation
        if (this.isLogin()) this.setNavigation()

        addEventListener('profile-picture-loaded', () => {
            this._qs('#profile-picture').src = localStorage.profilePicture
        })
    } //End of the constructor

    //Set Nav Bar
    setNavBar() {
        if (!this.isLogin()) {
            this._qs('header').innerHTML = this.preContent
            //load login form
            this.loadLoginForm()
        } else {
            this._qs('header').innerHTML = this.loginContent
            //set as Active
            this.setAsActive()
            //Toggle Nav bar
            this.toggleNavBar()
            //Set admin dashboard button
            if (this.getUserType() == 1) {
                this._qs(
                    '.nav-items'
                ).innerHTML += `<a data-path=""><button id="admin-dashboard">Admin Dashboard</button></a>`
                //load Admin bashboard
                this.loadAdminDashboard()
            } //End of setting admin dashboard button

            sessionStorage.profilePicture == undefined ||
            sessionStorage.profilePicture == null ||
            sessionStorage.profilePicture == ''
                ? (this._qs('#profile-picture').src =
                      localStorage.profilePicture)
                : (this._qs('#profile-picture').src =
                      '/assets/img/alt/no-mage.png')
        } //End of setting navigation

        // load Home
        this.loadHome()
    } // End of setNavBar()

    // Navigation
    setNavigation() {
        // properties
        this._qs('#property').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/property`,
                        comp: `property/available-property`,
                        compName: 'available-property'
                    }
                })
            )
        )
        // favourite
        this._qs('#favourite').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/favourite`,
                        comp: `property/favourite`,
                        compName: 'favourite-comp'
                    }
                })
            )
        )
        //Add New property
        this._qs('#add-new-property').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/add-new-property`,
                        comp: `property/add-new-property`,
                        compName: 'add-new-property'
                    }
                })
            )
        )
        //Own property
        this._qs('#own-properties').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/own-properties`,
                        comp: `property/own-properties`,
                        compName: 'own-properties'
                    }
                })
            )
        )
        // Payments
        this._qs('#received').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/payment/received`,
                        comp: `payments/payment-received`,
                        compName: 'payment-received'
                    }
                })
            )
        )
        this._qs('#paid').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/payment/paid`,
                        comp: `payments/payment-paid`,
                        compName: 'payment-paid'
                    }
                })
            )
        )
        this._qs('#all').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/payment/all`,
                        comp: `payments/payment-all`,
                        compName: 'payment-all'
                    }
                })
            )
        )
        this._qs('#cashout').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/payment/cashout`,
                        comp: `payments/payment-cashout`,
                        compName: 'payment-cashout'
                    }
                })
            )
        )
        this._qs('#bank-account').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/payment/bank-account`,
                        comp: `payments/payment-bank-account`,
                        compName: 'payment-bank-account'
                    }
                })
            )
        )
        //Profile
        this._qs('#profile').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/profile`,
                        comp: `account/profile`,
                        compName: 'profile-comp'
                    }
                })
            )
        )
        //wallet
        this._qs('#wallet').addEventListener('click', () =>
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/wallet`,
                        comp: `account/wallet`,
                        compName: 'wallet-comp'
                    }
                })
            )
        )
        //Log out
        this._qs('#log-out').addEventListener('click', () =>
            this.logOutMethod()
        )
    } //end of setNavigation()

    //load Admin bashboard
    loadAdminDashboard() {
        this._qs('#admin-dashboard').addEventListener('click', () => {
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/admin`,
                        comp: `admin/admin-dashboard`,
                        compName: 'admin-dashboard'
                    }
                })
            )
        })
    } // End of loadAdminDashboard()

    //load home
    loadHome() {
        //Home
        this._qs('.logo').addEventListener('click', () => {
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        path: `/`,
                        comp: `home/main/main`,
                        compName: 'main-comp'
                    }
                })
            )
        })
    } // End of loadHome()

    //load login form
    loadLoginForm() {
        this._qs('#login-button').addEventListener('click', () => {
            dispatchEvent(new CustomEvent('load-login-form'))
        })
    } // End of loadLoginForm()

    //Toggle Nav bar
    toggleNavBar() {
        let visible = true
        this._qs('.hamburger').addEventListener('click', () => {
            if (visible) {
                this._qs('.dropbtn').classList.add('responsive-dropbtn')
                this._qs('.nav-items').classList.add('responsive-nav-items')
                this._qs('.dropdown').classList.add('responsive-dropdown')
                this._qs('.dropdown-content').classList.add(
                    'responsive-dropdown-content'
                )
                this._qs('.topnav').classList.add('responsive-topnav')
            } else {
                this._qs('.dropbtn').classList.remove('responsive-dropbtn')
                this._qs('.nav-items').classList.remove('responsive-nav-items')
                this._qs('.dropdown').classList.remove('responsive-dropdown')
                this._qs('.dropdown-content').classList.remove(
                    'responsive-dropdown-content'
                )
                this._qs('.topnav').classList.remove('responsive-topnav')
            }

            visible = !visible
        })
    } // toggleNavBar()

    //set as Active
    setAsActive() {
        this._qsAll('a').forEach(item => {
            if (item.id == window.location.pathname.split('/')[1]) {
                // console.log(item.dataset.path)
                item.classList.add('active')
            } else item.classList.remove('active')
        })
    } //End of setAsActive()

    //Monitor link clicks
    monitorLinkClicks() {
        this._qsAll('a').forEach(link => {
            link.addEventListener('click', () => this.setAsActive())
        })
    } //End of monitorLinkClicks()

    //Scrolbar behavoiur when scroll
    scrollNavbar() {
        addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 10) {
                this._qs('nav').classList.add('nav-scroll')
                this._qs('header').classList.add('header-scroll')
            } else {
                this._qs('nav').classList.remove('nav-scroll')
                this._qs('header').classList.remove('header-scroll')
            }
        })
    } //End of scrollNavbar()

    //Login
    loginMethod() {
        addEventListener('login-success', () => {
            this.setNavBar()
            //Set Navigation
            if (this.isLogin()) this.setNavigation()
        })
    } //loginMethod()

    //Log out
    logOutMethod() {
        this.logOut()
        this.setNavBar()
        dispatchEvent(
            new CustomEvent('load-comp', {
                detail: {
                    path: `/`,
                    comp: `home/main/main`,
                    compName: 'main-comp'
                }
            })
        )
    } //logOutMethod()

    connectedCallback() {
        //Login method
        this.loginMethod()

        //Monitor link clicks
        this.monitorLinkClicks()

        //Scrolbar behavoiur when scroll
        this.scrollNavbar()
    } // End of connected callback
} // End of Class

window.customElements.define('navigation-bar', Nav)
