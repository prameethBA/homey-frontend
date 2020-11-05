import Base from './../Base.js'
import CSS from './user-comp.css.js'

export default class UserComp extends Base {

  css = CSS
  
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

  }// End of constructor

  connectedCallback() {
    // Add Event Listern for user-comp then load properties-component
    this._qs('.container').addEventListener('click', () => {
      dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/` + this.getAttribute('route'), comp: `property/${this.getAttribute('route')}`, compName: this.getAttribute('route') } }))
    })

  }//End of connected callbacks


}//End of class

window.customElements.define('user-comp', UserComp)
