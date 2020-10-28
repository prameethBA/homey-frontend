import Base from './../Base.js'


export default class UserComp extends Base {

  css = `
    .container {
      display: inline-flex;
      box-shadow: 2px 2px 11px 3px rgba(10,0,54,0.64)
    }

    .container div {
      padding: 0;
    } 

    ::slotted(img) {
      width: 20vw;
      height: 30vw;
    }

    ::slotted(h1) {
      width: 20vw;
      margin: 6rem 0.1rem 0 0.1rem;
    }
  
  `
  content = `
          <div class='container'>
              <slot name="image" ></slot>
              <slot name="title" ></slot>
          </div>
  `
  constructor() {
    super()
    this.mount()

    this.state.mirror = this.getAttribute('mirror') === 'true' ? true : false
    if (this.state.mirror) {
      this._qs('.container').innerHTML = `
            <slot name="title" ></slot>
            <slot name="image" ></slot>
            `
    }
  }
}
window.customElements.define('user-comp', UserComp)
