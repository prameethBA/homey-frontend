import Base from './../Base.js'

export default class AdvertisementSettings extends Base {

  css =  `
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /****************
  Typography
  ****************/
  h1 {
    font: verdana;
  }
  .feature_header {
    text-align: center;
    padding: 0.2em;
    margin-bottom: 60px;
    background: #ff4000;
    font-weight: bolder;
  }
  label {
    font-weight: bold;
  }
  /**********************
  Layout 
  **************************/
  body {
    padding-top: 30px;
  }
  .container {
    position: absolute;
    width: 90%;
    margin-left: 28%;
    margin-top: 5%;
    max-width: 767.98px;
    color: #000;
    padding: 15px;
    z-index:10;
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
  }
  .btn-primary {
    border: 2px solid #34a832;
    background-color: #34a832;
  }
  .btn-primary:hover {
    color: #001f3f;
    box-shadow: 6px 6px #ff4000;
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
    background-color: #240d94;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  
  input:checked + .slider {
    background-color: #ff4000;
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
  <div class="container">

  <h1 class="feature_header">Turn on/off Features</h1>
  <section class="feature_container">
      <form action="">
          <div class="toggle_opt">
              <label for="">Sharing among tenants</label>
              <label class="switch">
                  <input type="checkbox" >
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="">Boost Advertisement</label>
              <label class="switch">
                  <input type="checkbox" >
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="">Sharing among tenants</label>
              <label class="switch">
                  <input type="checkbox" >
                  <span class="slider round"></span>
                </label>
          </div>
          <div class="toggle_opt">
              <label for="">Sharing among tenants</label>
              <label class="switch">
                  <input type="checkbox" >
                  <span class="slider round"></span>
                </label>
          </div>
          
          <button class="btn btn-primary btn-lg">APPLY</button>
          
          

      </form>
      
  </section>

</div>
`
    constructor() {
      super()
      this.mount()

    }

  }
  
  window.customElements.define('advertisement-settings', AdvertisementSettings)