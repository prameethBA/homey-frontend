import Base from '../../Base.js'

export default class AdvertisementSettings extends Base {

  css =  `
  #backdrop {
    position: fixed;
    z-index: 2;
    background-color: rgba(0,0,0,0.7);
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    cursor: url(./assets/icon/remove-icon.png), auto;
  }

  .feature_header {
    text-align: center;
    padding: 0.2em;
    margin-bottom: 60px;
    background: #ff4000;
    font-weight: bolder;
    color: #eeeeee;
  }
  label {
    font-weight: bold;
  }

  .container {
    position: fixed;
    z-index: 2;
    margin: 6rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 2px;
    overflow: auto;
  }
  
  .container::-webkit-scrollbar {
    width: 1px !important;
  }

  /* features */
  .feature_container {
    margin: auto;
    width: 100%;
    max-width: 400px;
    padding-bottom: 30px;
  }
  .toggle_opt {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
  
  /* *********************
  Components
   **************************/
  /* Buttons */
  
  .btn {
    display: block;
    border: none;
  
    font-size: 16px;
    font-weight: bolder;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-align: center;
    color: #fff;
    padding: 0.5em 2em;
    border-radius: 20px;
    transition: 0.3s;
    text-transform: uppercase;
    outline:none;
  }
  .btn-primary {
    border: 2px solid #34a832;
    background-color: #34a832;
  }
  .btn-primary:hover {
    box-shadow: 0 0 0 2px #006600;
    transition: 0.5s;
  }
  
  .btn-lg {
    width: 100%;
  }
  
  /* Toggler */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #b3cee0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #eeeeee;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #34A832;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #00a5cf;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }

  @media(max-width: 768px) {
    .container {
      margin-left: 5%;
    }
  }
  

`


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

      this._qs('#apply').addEventListener('click', () => console.log('Applied'))

    }//End of connected callBack()

  }//End of class
  
  window.customElements.define('advertisement-settings', AdvertisementSettings)