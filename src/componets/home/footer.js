import Base from './../Base.js'

export default class Footer extends Base {

  css = `
    footer {
      display: none;
      text-align: center;
      height: 0;
      transition: height 2s;
      z-index: 5;
    }

    .visible {
      height: 100%;
      display: flex;
    }
    
    span {
      padding: 0.5em;
      color: #eeeeee;
      background-color: #001f3f;
      width: 100vw;
    }

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 992px) {

    }

    @media screen and (max-width: 768px) {
      footer {
        height: 100%;
        display: flex;
      }
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

  connectedCallback() {
    const scrollMethod = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 40/*722.400390625*/) this._qs('footer').classList.add('visible')
      else this._qs('footer').classList.remove('visible')
    }

    addEventListener('scroll', () => scrollMethod())

  } //End of the connected callback

} // End of Class
window.customElements.define('footer-c', Footer)
