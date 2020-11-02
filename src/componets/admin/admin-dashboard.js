import Base from './../Base.js'
import CSS from './admin-dashboard.css.js'

export default class AdminDashboard extends Base {

    css = CSS

    content = `
    <div id="backdrop" title="click to close side bar"></div>
    <div id="hamburger-icon" class="hamburger-collapse"></div>
        <header class="container" role="banner">
            <h1 class="logo">
            <a href="#">Admin <span>Homey</span></a>
            </h1>
            <div class="nav-wrap">
            <nav class="main-nav" role="navigation">
                <ul class="unstyled list-hover-slide">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Payments</a></li>
                </ul>
            </nav>
            <ul class="links list-inline unstyled list-hover-slide">
                <li><a href="#">Comments</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
            </div>
        </header>
    <div class="content">
        Welcome Admin
    </div>
`
    constructor() {
        super()
        this.mount()
        // Remove nav-bar
        document.querySelector('app-comp').shadowRoot.querySelector('navigation-bar').shadowRoot.innerHTML = ''

    }//End of the constructor

    connectedCallback() {

        this._qs('#hamburger-icon').addEventListener('click', () => {
            this._qs('.container').style.left = '0'
            this._qs('#backdrop').style.display = 'block'

            this._qs('#backdrop').addEventListener('click', () => {
                this._qs('.container').style.left = '-100%'
                this._qs('#backdrop').style.display = 'none'
            })
        })

    }//End of connectedCallback

}//End of Class

window.customElements.define('admin-dashboard', AdminDashboard)
