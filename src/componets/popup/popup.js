import Base from './../Base.js'
import CSS from './popup.css.js'

export default class error extends Base {

  css = CSS

  content = `
    <div class="container">
        <span class="title"> Error </span>
        <span id="close-popup">‹</span>
        <hr />
        <slot name="message"></slot>
        <hr />
        <hr class="loading" />
    </div>
`
  constructor() {
    super()
    this.mount()
    switch (this.getAttribute('type')) {
      case 'success':
        this._qs('.title').innerHTML = 'Success'
        this._qs('.container').classList.add('onsuccess')
        break;
      case 'notice':
        this._qs('.title').innerHTML = 'Notice'
        this._qs('.container').classList.add('onnotice')
        break;
      case 'info':
          this._qs('.title').innerHTML = 'Info'
          this._qs('.container').classList.add('oninfo')
          break;
      default:
      // Default is the error
    }

    if (this.getAttribute('duration') != '' && this.getAttribute('duration') != undefined && this.getAttribute('duration') != null ) this.state.duration =  this.getAttribute('duration') * 1000
    else this.state.duration = 10000 //10seconds
    
  }//End of constructor

  connectedCallback() {

    this._qs('#close-popup').addEventListener('click', () => {
      this._qs('.container').style.top = '-100%'
    })

    let widthvalue = 0
    const loader =  setInterval(() => {
      this._qs('.loading').style.width = widthvalue +'%'
      widthvalue ++
      if(widthvalue > 100) { 
        clearInterval(loader)
        this._qs('.container').style.top = '-100%'
      }
    }, this.state.duration / 100);

  }//End of the connectedCallback()

}// End of Class

window.customElements.define('pop-up', error)
