import Base from './../Base.js'
import CSS from './footer.css.js'


export default class Footer extends Base {

  css = CSS
  content = `
    <footer>
        <span>
            Copyright | ${new Date().getFullYear()} | homey.lk
        </span>
        <div class="float">
          <div class="float-icon">^</div>
        </div>
    </footer>
`
  constructor() {
    super()
    this.mount()

  }// End of the constructor

  // back top
  backToTop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      this._qs('.float').style.bottom = '2rem'
      this._qs('.float').addEventListener('click', () => {
        window.scrollTo(0, 0)
      })
    } else {
      this._qs('.float').style.bottom = '-100%'
      this._qs('.float').removeEventListener('click', () => {})
    }
  }

  connectedCallback() {

    addEventListener('scroll', () => this.backToTop())

  } //End of the connected callback

} // End of Class
window.customElements.define('footer-c', Footer)
