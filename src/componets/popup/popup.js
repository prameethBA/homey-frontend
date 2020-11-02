import Base from './../Base.js'

export default class error extends Base {

  css = `
  .container {
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 1rem;
    right: 0;
    background-color: red;
    background-image: linear-gradient(to right top, #eb5d5d, #e85b5b, #e45958, #e15656, #de5454);
    width: 90%;
    border-radius: 3px;
    margin: auto;
    transition: all 2s ease;
  }

  .onsuccess {
    background-color: green;
    background-image: linear-gradient(to right top, #24da37, #31de4a, #3ce35a, #47e769, #51eb77);
  }

  .onnotice {
    background-color: gray;
    background-image: linear-gradient(to right top, #b2b2b2, #9c9b9c, #878586, #737071, #605b5b);
  }

  .oninfo {
    background-color: lightblue;
    background-image: linear-gradient(to right top, #0066ff, #0076ff, #0084ff, #0091ff, #009dff);
  }

  ::slotted(div) {
      padding: 1em;
      text-align: center;
      color: #eeeeee;
  }

  #close-popup {
    color: #ffffff;
    display: inline-block;
    font-size: 2em;
    transform: rotate(45deg);
    position: absolute;
    right: 0.1em;
    top: -0.3em;
    cursor: pointer;
  }

  .title {
      margin: 1em 0.5em;
      color: #ffffff;
      font-weight: bold;
  }
`

  content = `
    <div class="container">
        <span class="title"> Error </span>
        <span id="close-popup">+</span>
        <hr />
            <slot name="message"></slot>
        <hr />
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

    console.log(this.state.duration)
    
    setTimeout(() => {
      this._qs('.container').style.top = '-100%'
    }, this.state.duration);
  }

}// End of Class

window.customElements.define('pop-up', error)
