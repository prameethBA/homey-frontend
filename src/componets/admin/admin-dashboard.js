import Base from './../Base.js'
import CSS from './admin-dashboard.css.js'

export default class AdminDashboard extends Base {

    css = CSS

    content = `
    <div id="backdrop" title="click to close side bar"></div>
    <div id="hamburger-icon" class="hamburger-collapse"></div>
        <header class="container" role="banner">
            <h1 class="logo">
            <a>Admin <span>Homey</span></a>
            </h1>
            <div class="nav-wrap">
            <nav class="main-nav" role="navigation">
                <ul class="unstyled list-hover-slide">
                <li><a>Dashboard</a></li>
                <li><a id="pendings">Pendings</a></li>
                <li><a>Properties</a></li>
                <li><a>Users</a></li>
                <li><a>Payments</a></li>
                <li><a>Home</a></li>
                <li><a>Properties</a></li>
                <li><a>Payments</a></li>
                </ul>
            </nav>
            <ul class="links list-inline unstyled list-hover-slide">
                <li><a>Comments</a></li>
                <li><a>Reports</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </header>
    <div id="mainContainer">
        Welcome Admin
    </div>
`
    constructor() {
        super()
        this.mount()
        // Remove nav-bar
        document.querySelector('app-comp').shadowRoot.querySelector('navigation-bar').shadowRoot.innerHTML = ''

    }//End of the constructor

    //Listners for view hide sidbar
    sideBar() {
        this._qs('#hamburger-icon').addEventListener('click', () => {
            this._qs('.container').style.left = '0'
            this._qs('#backdrop').style.display = 'block'
            
            this._qs('#backdrop').addEventListener('click', () => {
                this._qs('.container').style.left = '-100%'
                this._qs('#backdrop').style.display = 'none'
            })
        })
    }//End of sideBar()

    async loadContent(comp) {
        await import(`./comps/${comp}.js`)
        .then( () => {
            this._qs('#mainContainer').innerHTML = `<${comp}></${comp}>`
            this._qs('.container').style.left = '-100%'
            this._qs('#backdrop').style.display = 'none'
        })
        .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } })))
    }
    

    //connectedCallback
    connectedCallback() {

        // Display hide sidebar
        this.sideBar()

        const navLinks = [
            {link: '#pendings', comp: 'pending-comp'}
        ]

        navLinks.forEach(item => {
            this._qs(item.link).addEventListener('click', () => {

                this.loadContent(item.comp)
            })
        })

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('admin-dashboard', AdminDashboard)
