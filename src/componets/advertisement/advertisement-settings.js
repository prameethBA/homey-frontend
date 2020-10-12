import Base from './../Base.js'

export default class AdvertisementSettings extends Base {

  css =  `
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

/****************
Typography
****************/
.feature_header {
    
    text-align: center;
    padding: 0.2em;
    margin-bottom: 60px;
    background: #E0C81F;
    font-weight: bolder;

}
label{
    font-weight: bold;
}
/**********************
Layout 
**************************/
body {
    padding-top: 30px;
    
}
.container {
    width: 90%;
    max-width: 767.98px;
    margin: auto;
    background: #D1CEE0;
    padding: 30px;
}

/* features */
.feature_container {
    margin: auto;
    width:100%;
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
    font-weight:bolder;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-align: center;
    color: #fff;
    padding: 0.5em 2em;
    border-radius: 20px;
    transition: .3s;
    text-transform: uppercase;
}
.btn-primary{
    border: 2px solid #3c73ff;
    background-color: #3c73ff;
   
}
.btn-primary:hover {
    box-shadow: 8px 8px #99bdff;
    transition: .3s;
  }

.btn-secondary{
    background-color: #C266D3;
   
}
.btn-secondary:hover {
    box-shadow: 8px 8px #dfa7e9;
    transition: .3s;
}
.btn-success{
    background-color: #25a18e;
   
}
.btn-danger{
    background-color: #E00880;
   
}
.btn-danger:hover {
    box-shadow: 8px 8px #f87cc0;
    transition: .3s;
}
.btn-upload {
    border-radius:0 10px 10px 0;
    background:#444857;
}
.btn-lg{

    width: 100%;
}
.btn-md{

    width: 60%;
}
.btn-sm{

    width: 28%;
    font-size: .8rem;
}
.btn-group{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
}
.btn-group-bw{
    justify-content: space-between;
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
    background-color: #B3CEE0;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #240D94;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #00a5cf;
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