import Base from './../Base.js'
import CSS from './property-details.css.js'

export default class PropertyDetails extends Base {

  css =  CSS

  content = `
  <div class="container container_about">
    <aside>
        <div class="about_main_image">
            <img src="../assets/img/1.png" alt="">
        </div>
        <div class="about_sub_images">
            <div class="about_sub_image">
                <img src="../assets/img/2.jpg" alt="">
            </div>
            <div class="about_sub_image">
                <img src="../assets/img/2.jpg" alt="">
            </div>
            <div class="about_sub_image">
                <img src="../assets/img/2.jpg" alt="">
            </div>
            <div class="about_sub_image">
                <img src="../assets/img/2.jpg" alt="">
            </div>
        </div>

        <div class="about-p">

              <div class="property">
                <label for="">KeyMoney</label>
                <input type="text" name="" id="">
              </div>

              <div class="property">
                <label for="">Minimum Period</label>
                <input type="text" name="" id="">
              </div>

              <div class="property">
                <label for="">Available From</label>
                <input type="date" name="" id="">
              </div>

              <div class="property">
                <label for="">District</label>
                <select class="district_type">
                  <option>Ampara</option>
                  <option>Anuradhapura</option>
                  <option>Badulla</option>
                  <option>Batticaloa</option>
                  <option>Colombo/Office</option>
                  <option>Galle</option>
                  <option>Gampaha</option>
                  <option>Hambantota</option>
                  <option>Jaffna</option>
                  <option>Kalutara</option>
                  <option>Kandy</option>
                  <option>Kegalle</option>
                  <option>Kilinochchi</option>
                  <option>Kurunegala</option>
                  <option>Mannar</option>
                  <option>Matale</option>
                  <option>Matara</option>
                  <option>Monaragala</option>
                  <option>Mullaitivu</option>
                  <option>Nuwara Eliya</option>
                  <option>Polonnaruwa</option>
                  <option>Puttalam</option>
                  <option>Ratnapura</option>
                  <option>Trincomalee</option>
                  <option>Vavuniya</option>
                </select>
              </div>

              <div class="property">
                  <label for="">City</label>
                  <input type="text" name="" id="">
              </div>

              <div class="property">
                  <label for="">Property Type</label>
                  <select class="property_type">
                    <option>Home</option>
                    <option>Annex</option>
                    <option>Room</option>
                    <option>Apartment</option>
                    <option>Business/Office</option>
                    <option>Warehouse</option>
                    <option>Mixed Use Buildings</option>
                  </select>
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