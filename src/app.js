import Base from './componets/Base.js'
import Router from './assets/js/Router.js'

import './componets/home/navigation-bar.js'
import './componets/home/footer.js'

const router = new Router()

export default class App extends Base {

    css = `
    .container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

`
    content = `
    <navigation-bar id="navigationBar"></navigation-bar>
    <div class="container"></div>
`
    constructor() {
        super()
        this.mount()

        // Add event listener for an error Page
        addEventListener('error', async (e) => await import(`./componets/errors/Error${e.detail.err}.js`).then(this._qs('.container').innerHTML = `<err-404></err-404>`))

        // Load home component
        router.get('/', async () => { await import('./main.js').then(this._qs('.container').innerHTML = `<main-comp></main-comp>`) })

    }//End of constructor

    connectedCallback() {

        addEventListener('load-comp', async (e) => {
            this.setLoader()
            await import('./componets' + e.detail.comp)
            .then(() => {
                this._qs('.container').innerHTML = `<` + e.detail.compName + `></` + e.detail.compName + `>`
                this.stopLoader()
            })
                .catch(err => {
                    console.log(err)
                    this.stopLoader()
                })
            this.setPath(e.detail.path)
        })
    }//End of connectedCallback

}//End of Class

router.init()

window.customElements.define('app-comp', App)

document.getElementById('root').innerHTML = '<app-comp></app-comp>'