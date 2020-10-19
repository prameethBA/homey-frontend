import Base from './../Base.js'


export default class UserComp extends Base {

  css = `
  .container {
      background-color: #041837;
      width:40vw;
      height: 20em;
      box-shadow: 1px 1px 5px 1px rgba(10,0,54,0.64);
      display: grid;
      grid-template-columns: 18vw 22vw;
  }
  
  ::slotted(img) {
      width: 22vw;
      height: 100%;
  }
  
  ::slotted(h1) {
      display: flex;
      color: #ffffff;
      font-size: 2em;
      text-align: right;
      padding-right: 1em;
      padding: 1.2em;
  }
  
  `
  content = `
          <div class='container'>
              <div><slot name="image" ></slot></div>
              <div><slot name="title" ></slot></div>
          </div>
  `
  constructor() {
    super()
    this.mount()

    this.state.mirror = this.getAttribute('mirror') === 'true' ? true : false
    if (this.state.mirror) {
      this._qs('.container').innerHTML = `
            <div><slot name="title" ></slot></div>
            <div><slot name="image" ></slot></div>
            `
    }
  }
}
window.customElements.define('user-comp', UserComp)
