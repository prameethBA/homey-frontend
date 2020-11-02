import Base from './../Base.js'
import CSS from './admin-dashboard.css.js'

export default class AdminDashboard extends Base {

    css = CSS

    content = `
    <div class="container">
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
    </div>
`
    constructor() {
        super()
        this.mount()
        // Remove nav-bar
        document.querySelector('app-comp').shadowRoot.querySelector('navigation-bar').shadowRoot.innerHTML = ''

    }//End of the constructor

    connectedCallback() {


    }//End of connectedCallback

}//End of Class

window.customElements.define('admin-dashboard', AdminDashboard)
