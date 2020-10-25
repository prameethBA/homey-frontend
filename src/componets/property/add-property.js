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

  facility-comp {
    display: inline-block;
    width: 50%;
  }
 
  input[type='file'] {
    display:none;
  }
  
  .upload-image-label {
    padding: 0.5em 1em;
    background-color: #239710;
    color: white;
    text-align: center;
    position: absolute;
    right: 20%;
    left: 20%;
  }

  .rect {
    display: block;
    height: 2em;
  }
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
                    <option value='2'>Week</option>
                    <option value='3'>Month</option>
                    <option value='4'>Year</option>
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
                  <select class="district_type" id="district">
                  </select>
              </div>
              <div class="property">
                  <label for="city">City</label>
                  <input type="text" id="city" list="city-list" autocomplete="false"/>
                    <datalist id="city-list">
                    </datalist>
              </div>
              <div class="property">
                  <label for="propertyType">Property Type</label>
                  <select class="property_type" id="propertyType">
                  </select>
              </div>
              <div class="property_description">
                  <label for="description">Description</label>
                  <textarea id="description" cols="30" rows="5"></textarea>
              </div>
              
              <div class="select_properties" id="facilities">
              </div>

              <div class="property_description">
                <input type="file" id="uploadImages" accept="image/jpg, image/png, image/jpeg, image/*" multiple>
                <label class="upload-image-label" for="uploadImages">Upload Images</label>
                <div class="rect"></div>
              </div>
              <div id="previewImages"></div>
              <div class="property_description">
                <button class="btn btn-primary btn-lg">Add Property</button>
              </div>

          </div>
          
      </section>
    </div>
`
  constructor() {
    super()
    this.mount()
  }

  async connectedCallback() {

    // API call for get Districts
    await fetch('http://homey-api.atwebpages.com/district')
      .then(res => res.json())
      .then(res => res.data.forEach(element => this._qs('#district').innerHTML += `<option value="${element._id}">${element.district}</option>`))
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))

    // API call for get property types
    await fetch('http://homey-api.atwebpages.com/property-type')
      .then(res => res.json())
      .then(res => res.data.forEach(element => this._qs('#propertyType').innerHTML += `<option value="${element.property_type_id}">${element.property_type_name}</option>`))
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))

    const rentalPeriod = this._qs('#rentalPeriod')

    rentalPeriod.addEventListener('change', () => {
      this._qs('#keyMoneyPeriod').innerHTML = `
          <option value = "enter-value" > Enter a value</option >
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

      this._qs('#minimum-period-label').innerHTML = ` Minimum period(${rentalPeriod.options[rentalPeriod.selectedIndex].text}s)`

      if (keyMoneyPeriod.value == 'enter-value') {
        this._qs('#key-money-label').innerHTML = `Key Money(Rs.)`
        keyMoney.value = ''
      } else if (keyMoneyPeriod.value == 'enter-period') {
        this._qs('#key-money-label').innerHTML = `${rentalPeriod.options[rentalPeriod.selectedIndex].text}s`
        keyMoney.value = ''
      } else {
        this._qs('#key-money-label').innerHTML = `Key Money(Rs.)`
        keyMoneyPeriod.value != 0 ? keyMoney.value = price.value * keyMoneyPeriod.value : keyMoney.value = "No key money"
      }
    }//End of calculateKeyMoney

    // Add evenrlistners to excute calculateMoney Method
    const events = ['focus', 'keyup', 'change']
    const elements = ['#rentalPeriod', '#keyMoneyPeriod', '#price']

    events.forEach(eve => elements.forEach(elm => {
      this._qs(elm).addEventListener(eve, () => calculateKeyMoney())
    }))

    // Add evenrlistner to load citeis
    this._qs("#district").addEventListener('change', async () => {
      // API call for get Districts
      await fetch(`http://homey-api.atwebpages.com/cities/districtId/${this._qs("#district").value}`)
        .then(res => {
          if (res.status == '200') return res.json()
          else throw "Server Error."
        })
        .then(res => res.data.forEach(element => this._qs('#city-list').innerHTML += `<option value="${element.city}"/>`))
        .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    })

    await import("./subcomp/facility.js")
      .then(
        // API call for get Facilities List
        await fetch(`http://homey-api.atwebpages.com/facility`)
          .then(res => {
            if (res.status == '200') return res.json()
            else throw "Server Error."
          })
          .then(res => res.data.forEach(element => this._qs('#facilities').innerHTML += `
              <facility-comp 
                key="${element._id}" 
                name="${element.feature_name}"
                measurable="${element.measurable}
                ">
              </facility-comp>
            `))
          .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
      )
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))

    const readImages = uploader => {
      let images = []

      const selectedfiles = uploader.files

      for (let index = 0; index < selectedfiles.length; index++) {
        const fileReader = new FileReader()

        fileReader.onload = fileLoadedEvent => {
          images.push(fileLoadedEvent.target.result)
        }

        fileReader.readAsDataURL(selectedfiles[index])
      }

      return images;
    }//End of readImages

    this._qs('#uploadImages').addEventListener('input', () => {
      const images = readImages(this._qs("#uploadImages"))
      console.log(images)
      for (let index = 0; index < images.length; index++) {
        this._qs('#previewImages').innerHTML += `<img src="${images[index]}" alt="image-${index}"/>`
      }
    })

  }//End of connectedCallback

}//End of Class

window.customElements.define('add-property', AddProperty)
