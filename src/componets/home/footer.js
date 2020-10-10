import Base from './../Base.js'

export default class Footer extends Base {

  style = `
    footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.5em 0;
      text-align: center;
      color: #eeeeee;
      background-color: #001f3f; 
    }

`
content = `
    <footer>
        <div>
            Copyright | ${new Date().getFullYear()} | homey.lk
        </div>
    </footer>
`
  constructor() {
    super()

    this.mount()
  }
}
window.customElements.define('footer-c', Footer)
