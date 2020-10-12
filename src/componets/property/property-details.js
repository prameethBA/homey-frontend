import Base from './../Base.js'

export default class PropertyDetails extends Base {

  css =  `
  @import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
img {
    max-width: 100%;
    display: block;
}

/****************
Typography
****************/

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


/*Property select area */
.properties form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}


.select_properties{
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}
.select_property{
    width: 15%;
}
.select_property input{
    margin-right: 15px;
}



 /* about */
 .container_about {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
 }
 .container_about aside {
     width: 32%;
 }
 .container_about main {
     width: 65%;
 }
 .about_main_image{
     margin-bottom: 20px;
 }
 .about_sub_images {
     display: flex;
     justify-content: space-between;
 }
 .about_sub_image {
     width: 20%;
 }

 .about_section {
     display: flex;
     flex-wrap: wrap;
 }
 .about_section_details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
 }
 .about_icons{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 10px;
    width: 40%;
    margin: auto;
    margin-bottom: 10px;
 }
 .about-p{
     margin-bottom: 20px;
 }
 .about_section_details h2 {
     margin-bottom: 20px;
 }
 
.select_property_about {
    width: 25%;
}
.select_property_about input{
    margin-right: 15px;
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



  `

  content = `
  <div class="container container_about">
  <aside>
      <div class="about_main_image">
          <img src="../assets/images/1.png" alt="">
      </div>
      <div class="about_sub_images">
          <div class="about_sub_image">
              <img src="../assets/images/2.jpg" alt="">
          </div>
          <div class="about_sub_image">
              <img src="../assets/images/2.jpg" alt="">
          </div>
          <div class="about_sub_image">
              <img src="../assets/images/2.jpg" alt="">
          </div>
          <div class="about_sub_image">
              <img src="../assets/images/2.jpg" alt="">
          </div>
      </div>
  </aside>
  <main>
      <section class="about_section">
          <div class="about_section_details">
              <h2>TITLE</h2>
              <h2>PRICE</h2>
              
          </div>
          <div class="about_icons">
              <i class="fa fa-heart" style="font-size:18px;color:red"></i>
              <i class="fa fa-star"style="font-size:18px;"></i>
              <i class="fa fa-upload" style="font-size:18px;"></i>
          </div>
          <div class="about-p">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro beatae nam et perferendis, veritatis dolor consequatur. Eligendi vel recusandae, unde quisquam commodi pariatur minima maiores? Omnis voluptas similique repellat, sed sit saepe molestias ipsa, corporis ab optio, ipsum nostrum et harum error sapiente neque impedit eos! Totam, optio omnis?</p>
          </div>
          <form action="">
              <div class="select_properties">
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  <div class="select_property_about">
                      <input type="checkbox" name="" id="">
                      <label for="">Feature x</label>
                  </div>
                  
              </div>
              
          </form>
          <div class="about-p">
              <p>Lorem ipsum dolor sit amet consectetur adipisic</p>
          </div>
          <div class="btn-group btn-group-bw">
              <button class="btn btn-primary btn-sm"> RESERVE</button>
              <button class="btn btn-secondary btn-sm">FEEDBACK</button>
              <button class="btn btn-success btn-sm"><i class="fa fa-map-marker" aria-hidden="true"></i> ON MAP</button>
          </div>
          
      </section>
  </main>
</div>
  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('property-details', PropertyDetails)