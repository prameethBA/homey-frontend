import Base from './../Base.js'

export default class AddProperty extends Base {

  css = `
  .container {
    width: 90%;
    margin-top: 4em;
    margin-left: 20vw;
    max-width: 770.98px;
    color: #000;
    padding: 15px;
    z-index:10;
  }
  
  /* add Prop */
  .properties .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .property {
    width: 30%;
  }
  
  .property input, .property select {
    width: 100%;
    margin-bottom: 20px;
    height: 30px;
  }

  .property_type{
    width: 100%;
    margin-bottom: 20px;
    height: 30px;
  }

  .district_type{
    width: 100%;
    margin-bottom: 20px;
    height: 30px;
  }

  .property_description {
    width: 100%;
    margin-bottom: 20px;
  }
  .property_description textarea {
    width: 100%;
  }
  .select_properties {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .select_property {
    width: 15%;
  }
  .select_property input {
    margin-right: 15px;
  }
  
  input:checked + label {
    color: #ff4000;
  }
  :checked {
    margin-left: 2px;
  }
  
  input[type='checkbox']:checked {
    box-shadow: 0 0 0 2px #ff4000;
  }
  
  .image_property {
    width: 100%;
    margin-bottom: 20px;
  }
  .image_property-md {
    width: 70%;
  }
  .image_upload {
    display: flex;
    border-radius: 10px 0 0 10px;
  }
  .image_upload-md label {
    width: 80%;
    border: 1px solid #004e64;
    background: white;
  }
  .image_upload-lg label {
    width: 100%;
    border: 1px solid #004e64;
    background: white;
  }
  #upload-photo {
    opacity: 0;
    position: absolute;
    z-index: -1;
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
  .btn-upload {
    border-radius: 0 10px 10px 0;
    background: #34a832;
  }
  .btn-lg {
    width: 100%;
  }
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }

  @media(max-width: 768px) {
    .container {
      margin-left: 5%;
    }
  }
  

`

  content = `
<div class="container">
<section class="properties">
    <div class="form">
        <div class="property">
            <label for="title">Title</label>
            <input type="text" title="Short description as the title" placeholder="Short description as the title" id="title">
        </div>
        <div class="property">
            <label for="rentalPeriod">Rent per</label>
            <select id="rentalPeriod">
              <option value='1'>Day</option>
              <option value='2'>Month</option>
              <option value='3'>Year</option>
            </select>
        </div>
        <div class="property">
            <label for="price">Price</label>
            <input type="text" id="price" title="Price" placeholder="17,000">
        </div>
        <div class="property">
            <label for="keyMoneyPeriod">Key money</label>
            <select id="keyMoneyPeriod">
              <option value="0">Selecet a rental period</option>
            </select>
        </div>
        <div class="property">
            <label for="keyMoney" id="key-money-label">Key money (Rs.)</label>
            <input type="text" id="keyMoney" />
        </div>
        <div class="property">
            <label for="" id="minimum-period-label">Minimum Period</label>
            <input type="text" name="" id="">
        </div>
        <div class="property">
            <label for="">Available From</label>
            <input type="date" id="" value="${new Date().toISOString().slice(0, 10)}">
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
        <div class="property_description">
            <label for="">Description</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        
        <div class="select_properties">
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
            <div class="select_property">
                <input type="checkbox" name="" id="">
                <label for="">Feature x</label>
            </div>
        </div>
        <div class="image_property image_property-md">
            <h3>Images</h3>
            <div class="image_upload image_upload-md">
                <label for="upload-photo"></label>
                <input type="file" name="photo" id="upload-photo" />
                <input type="submit"value="Upload Images" class="btn btn-upload">
            </div>
            
        </div>
        <button class="btn btn-primary btn-lg">Add Property</button>

    </div>
    
</section>
</div>
`
  constructor() {
    super()
    this.mount()
  }

  connectedCallback() {

    const rentalPeriod = this._qs('#rentalPeriod')

    rentalPeriod.addEventListener('change', () => {
      this._qs('#keyMoneyPeriod').innerHTML = `
          <option value="enter-value">Enter a value</option>
          <option value="enter-period">Enter  ${rentalPeriod.options[rentalPeriod.selectedIndex].text}</option>
          <option value="1" selected>1 ${rentalPeriod.options[rentalPeriod.selectedIndex].text}</option>
          <option value="2">2 ${rentalPeriod.options[rentalPeriod.selectedIndex].text}</option>
          <option value="3">3 ${rentalPeriod.options[rentalPeriod.selectedIndex].text}</option>
          <option value="6">6 ${rentalPeriod.options[rentalPeriod.selectedIndex].text}</option>
          <option value="12">12 ${rentalPeriod.options[rentalPeriod.selectedIndex].text}</option>
    `
    })

    // Method for calculate Key Money
    const calculateKeyMoney = () => {
      const rentalPeriod = this._qs('#rentalPeriod')
      const keyMoneyPeriod = this._qs('#keyMoneyPeriod')
      const keyMoney = this._qs('#keyMoney')
      const price = this._qs('#price')

      this._qs('#minimum-period-label').innerHTML = ` Minimum period (${rentalPeriod.options[rentalPeriod.selectedIndex].text}s)`

      if (keyMoneyPeriod.value == 'enter-value') {
        this._qs('#key-money-label').innerHTML = `Key Money (Rs.)`
        keyMoney.value = ''
      } else if (keyMoneyPeriod.value == 'enter-period') {
        this._qs('#key-money-label').innerHTML = `${rentalPeriod.options[rentalPeriod.selectedIndex].text}s`
        keyMoney.value = ''
      } else {
        this._qs('#key-money-label').innerHTML = `Key Money (Rs.)`
        keyMoneyPeriod.value != 0 ? keyMoney.value = price.value * keyMoneyPeriod.value : keyMoney.value = "No key money"
      }
    }//End of calculateKeyMoney

    const events = ['focus', 'keyup', 'change']
    const elements = ['#rentalPeriod', '#keyMoneyPeriod', '#price']

    events.forEach(eve => elements.forEach(elm => {
      this._qs(elm).addEventListener(eve, () => calculateKeyMoney())
    }))


  }//End of connectedCallback

}//End of Class

window.customElements.define('add-property', AddProperty)
