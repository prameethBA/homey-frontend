import Base from './../Base.js'
import CSS from './admin-dashboard.css.js'

export default class AdminDashboard extends Base {

    css = CSS

    content = `
    <div id="backdrop" title="click to close side bar"></div>
    <div id="hamburger-icon" class="hamburger-collapse"></div>
    <div id="breadcrumb" class="breadcrumb">
    </div>
        <header class="container" role="banner">
            <h1 class="logo">
            <a>Admin <span>Homey</span></a>
            </h1>
            <div class="nav-wrap">
            <nav class="main-nav" role="navigation">
                <ul class="unstyled list-hover-slide">
                <li><a id="dashBoard">Dashboard</a></li>
                <li><a id="pending">Pendings</a></li>
                <li><a id="properties">Properties</a></li>
                <li><a id="users">Users</a></li>
                <li><a id="payments">Payments</a></li>
                <li><a id="admin-accounts">Admin Accounts</a></li>
                <li><a id="home">Home</a></li>
                </ul>
            </nav>
            <ul class="links list-inline unstyled list-hover-slide">
                <li><a>Comments</a></li>
                <li><a id="report">Reports</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </header>
    <div id="mainContainer">
    </div>
`
    constructor() {
        super()
        this.mount()

        if(!this.isLogin()) {
            dispatchEvent(new CustomEvent("load-comp", { detail: {parh: '/', comp: 'home/main/main', compName: 'main-comp' } }))
            return
        }
        // Remove nav-bar
        const navbar= document.querySelector('app-comp').shadowRoot.querySelector('navigation-bar')
        navbar.parentNode.removeChild(navbar)

        } //End of the constructor

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
        } //End of sideBar()

    // load comp
    async loadContent(comp) {
            await
            import (`./comps/${comp}.js`)
            .then(() => {
                    this.setPath(`/admin/${comp.substr(0, comp.length - 5)}`) //remove '-comp' string piece to set path
                    this._qs('#mainContainer').innerHTML = `<${comp}></${comp}>`
                    this._qs('.container').style.left = '-100%'
                    this._qs('#backdrop').style.display = 'none'

                    //Set breadcrumbs
                    this.setBreadCrumbs(window.location.pathname.split('/'))
                })
                .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } })))
        } //End of loadComp()

        // redirect Admin URIs
        redirectURI() {
            const uri = window.location.pathname.split('/')
            this._qs(`#${uri[2]}`) != null ? this._qs(`#${uri[2]}`).click() : null
            //Set breadcrumbs
            this.setBreadCrumbs(uri)
        } // End of redirectURI

        //Set breadcrumbs
        setBreadCrumbs(uri) {
            let breadCrumb = ''
            uri.forEach(link => {
                if(link == '') breadCrumb += 'Homey '
                else breadCrumb += ` » <a>${link}`
            })
            this._qs('#breadcrumb').innerHTML = breadCrumb
        }//End of setBreadCrumbs()

    //connectedCallback
    connectedCallback() {

            // Display hide sidebar
            this.sideBar()

            const navLinks = [
                { link: '#dashBoard', comp: 'dashboard-comp' },
                { link: '#pending', comp: 'pending-comp' },
                { link: '#properties', comp: 'properties-comp' },
                { link: '#users', comp: 'users-comp' },
                { link: '#payments', comp: 'payments-comp' },
                { link: '#admin-accounts', comp: 'admin-accounts-comp' },
                { link: '#home', comp: 'home-comp' },
                { link: '#report', comp: 'report-comp' }
            ]

            navLinks.forEach(item => {
                this._qs(item.link).addEventListener('click', () => {

                    this.loadContent(item.comp)
                })
            })


            // redirect URI
            this.redirectURI()

        } //End of connectedCallback()

} //End of Class

window.customElements.define('admin-dashboard', AdminDashboard)