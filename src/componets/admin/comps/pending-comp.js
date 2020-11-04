import Base from './../../Base.js'
import CSS from './pending-comp.css.js'

export default class Pendings extends Base {

    css = CSS

    content = `
    <div class="container">
        Welcome to Pendings
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
        await import(`./${comp}/.js`)
        .then( () => {
            this._qs('#content').innerHTML = `<${comp}></${comp}>`
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
            this._qs(item.link).addEventListener('click', () => this.loadContent(item.comp))
        })

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('pending-comp', Pendings)
