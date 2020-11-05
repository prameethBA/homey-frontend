import Base from './../Base.js'
import CSS from './footer.css.js'


export default class Footer extends Base {

  css = CSS
  content = `
    <footer>
        <span>
            Copyright | ${new Date().getFullYear()} | homey.lk
        </span>
    </footer>
`
  constructor() {
    super()
    this.mount()

  }// End of the constructor

  connectedCallback() {

  } //End of the connected callback

} // End of Class
window.customElements.define('footer-c', Footer)
