import Base from './../Base.js'

export default class Footer extends Base {

  css = `
    footer {
      display: flex;
      text-align: center;
    }
    
    span {
      padding: 0.5em;
      color: #eeeeee;
      background-color: #001f3f;
      width: 100vw;
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
  }
}
window.customElements.define('footer-c', Footer)
