import Base from '../../Base.js'
import CSS from './advertisement-settings.css.js'

export default class AdvertisementSettings extends Base {

  css =  CSS


  content = `
  <div id="backdrop" title=">>Click to close this form">
  </div>

  <div class="container">

  <h1 class="feature_header">Turn on/off Features</h1>
  <section class="feature_container">
      <div>
          <div class="toggle_opt">
              <label for="">Boost Advertisement(Paid)</label>
              <label class="switch">
                  <input type="checkbox" id="boost" />
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="">Save Private</label>
              <label class="switch">
                  <input type="checkbox" id="private" >
                  <span class="slider round"></span>
              </label>
          </div>
          <div class="toggle_opt">
              <label for="">Schedule to post</label>
              <label class="switch">
                  <input type="checkbox" id="schedule" >
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="">Send me a copy as email</label>
              <label class="switch">
                  <input type="checkbox" id="sendCopy" >
                  <span class="slider round"></span>
                </label>
          </div>
          
          <button class="btn btn-primary btn-lg" id="apply">APPLY</button>
          
          

      </div>
      
  </section>

</div>
`
    constructor() {
      super()
      this.mount()

    }//End of constructor
    
    connectedCallback() {
      
      // backdrop
      this._qs('#backdrop').addEventListener('click', () => {
        this._qs('.container').style.display = "none"
        this._qs('#backdrop').style.display = "none"
      })

      this._qs('#apply').addEventListener('click', () => {
        //Add New property
        dispatchEvent(new CustomEvent('load-comp', { detail: { path: `/`, comp: `property/own-properties`, compName: 'own-properties' } }))
      })

    }//End of connected callBack()

  }//End of class
  
  window.customElements.define('advertisement-settings', AdvertisementSettings)