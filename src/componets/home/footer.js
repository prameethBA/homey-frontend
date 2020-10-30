import Base from './../Base.js'

export default class Footer extends Base {

  css = `
  footer{
    margin: 1rem 0 0 0;
    color: #eeeeee;
    background-color: #001f3f;
  }
  
  span {
    margin: auto;
    display: table;
    padding: 0.5em;
  }
`
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
