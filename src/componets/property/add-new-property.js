import Base from './../Base.js'

export default class AddNewProperty extends Base {

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

  input, select, textarea {
    border: 1px solid;
    border-radius: 4px;
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
  .uploaded-image {
    width: 20%;
    margin: 0.5em;
    cursor: url("./assets/icon/remove-icon.png"), auto;
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

  #add-preview {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    background-color: black;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    text-align: center;
    color: #ffffff;
    display: none;
  }

  @media(max-width: 768px) {
    .container {
      margin-left: 5%;
    }
  }
  

`

  content = `
    <div class="container">
      <div id="add-preview">
      </div>
      <section class="properties">
          <div class="form">
              <div class="property">
                  <label for="title">Title</label>
                  <input type="text" title="Short description as the title" placeholder="Short description as the title" id="title">
              </div>
              <div class="property">
                  <label for="rentalPeriod">Rent per</label>
                  <select id="rentalPeriod">
                    <option value='1'>Select a rental period</option>
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
                  <label for="minimumPeriod" id="minimum-period-label">Minimum Period</label>
                  <input type="text" name="" id="minimumPeriod">
              </div>
              <div class="property">
                  <label for="availableFrom">Available From</label>
                  <input type="date" id="availableFrom" value="${new Date().toISOString().slice(0, 10)}">
              </div>
              <div class="property">
                  <label for="">District</label>
                  <select class="district_type" id="district">
                    <option value='0' selected disabled> Select a district</option> 
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
                <button class="btn btn-primary btn-lg" id="add-property-button">Add Property</button>
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
    await axios.get('http://homey-api.atwebpages.com/district')
      .then(res => res.data.data.forEach(element => this._qs('#district').innerHTML += `<option value="${element._id}">${element.district}</option>`))
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))

    // API call for get property types
    await axios.get('http://homey-api.atwebpages.com/property-type')
      .then(res => res.data.data.forEach(element => this._qs('#propertyType').innerHTML += `<option value="${element.property_type_id}">${element.property_type_name}</option>`))
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
      // Prevent laggin when do rapid changing
      addEventListener('change',async ()=> {
        await this.sleep(100);
        this._qs("#district").removeEventListener('change')
      })
      await this.sleep(101);
      // API call for get Districts
      await axios.get(`http://homey-api.atwebpages.com/cities/districtId/${this._qs("#district").value}`)
        .then(res => {
          this._qs('#city-list').innerHTML = ''
          if (res.status == '200') res.data.data.forEach(element => this._qs('#city-list').innerHTML += `<option value="${element.city}"/>`)
          else throw "Server Error."
        })
        .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    })

    await import("./subcomp/facility.js")
      .then(
        // API call for get Facilities List
        await axios.get(`http://homey-api.atwebpages.com/facility`)
          .then(res => {
            if (res.status == '200') {
              res.data.data.forEach(element => this._qs('#facilities').innerHTML += `
              <facility-comp 
                key="${element._id}" 
                name="${element.feature_name}"
                measurable="${element.measurable}
                ">
              </facility-comp>
            `)
            }
            else throw "Server Error."
          })
          .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
      )
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))

    const readImages = (file, target, index) => {
      const fileReader = new FileReader()
      fileReader.onload = fileLoadedEvent => target.innerHTML += `
                      <img 
                        class="uploaded-image" 
                        src="${fileLoadedEvent.target.result}" 
                        id="uploaded-image-${index}" 
                        alt="image-${index}"
                        onclick="this.outerHTML = ''"
                      />`
      fileReader.readAsDataURL(file)
    }//End of readImages
    
    this._qs('#uploadImages').addEventListener('input', () => {
      if (this._qs('#previewImages').children.length < 5) {
        for (let index = 0; index < (this._qs("#uploadImages").files.length < 5 ? this._qs("#uploadImages").files.length : 5); index++) {
          readImages(this._qs("#uploadImages").files[index], this._qs('#previewImages'), index)
        }
        window.scrollTo(0, document.body.scrollHeight)
      } else dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: "Maximum 5 images can be uploaded." } }))
    })

    this._qs('#add-property-button').addEventListener('click', () => {
      try {
        const title = this._qs("#title").value;
        const rentalPeriod = this._qs("#rentalPeriod").value;
        const price = this._qs("#price").value;
        const keyMoneyPeriod = this._qs("#keyMoneyPeriod").value;
        let keyMoney = this._qs("#keyMoney").value;
        const minimumPeriod = this._qs("#minimumPeriod").value;
        const availableFrom = this._qs("#availableFrom").value;
        const district = this._qs("#district").options[this._qs("#district").selectedIndex].text;
        const city = this._qs("#city").value;
        const propertyType = this._qs("#propertyType").options[this._qs("#propertyType").selectedIndex].text;
        const description = this._qs("#description").value;
        let facilities = []
        let images = []

        window.scrollTo(0, 0)

        this._qsAll('facility-comp').forEach(item => {
          const feature = item.shadowRoot.querySelector('input')
          if (feature.checked) {
            const quantity = item.shadowRoot.querySelector('.quantity') == null ? 'null' : item.shadowRoot.querySelector('.quantity').value
            facilities.push({
              featureId: feature.id,
              feature: item.shadowRoot.querySelector('label').innerText,
              quantity: quantity
            })
          }
        })

        this._qs('#previewImages').childNodes.forEach(item => images.push(item.src))

        // validate the details
        if (title == '') throw '<b>Title<b> cannot be empty.'

        let rentalPer
        switch (rentalPeriod) {
          case '1': rentalPer = 'Daily'; break;
          case '2': rentalPer = 'Weekly'; break;
          case '3': rentalPer = 'Monthly'; break;
          case '4': rentalPer = 'Yearly'; break;
          default: throw '<b>Select a rental period<b>';
        }

        if (price == '') throw '<b>Price<b> cannot be empty.'
        if (!price.match(/^[0-9]+$/)) throw '<b>Price<b> cannot be contain letters or any other characters except numbers.'

        switch (keyMoneyPeriod) {
          case 'enter-value': ; break;
          case 'enter-period': keyMoney = keyMoney * price; break;
          case '0': throw '<b>Select a rental period<b>';
          default: ;
        }

        switch (minimumPeriod) {
          case '': ; break;
          default:
            if (!minimumPeriod.match(/^[0-9]+$/)) throw '<b>Minimum period<b> cannot be contain letters or any other characters except numbers.';
            break;
        }

        if (district == 'Select a district' || district == '0') throw 'Select a district'
        if (city == '') throw 'Select a city'

        if (!description.match(/\w+[\s\.]\w+/)) throw 'Add a description about the property. (double spaces and fullstops are not allowed)'

        this._qs("#add-preview").style.display = 'block';
        this._qs("#add-preview").innerHTML = `
            <div>Title : ${title}</div>
          <div>Rental Period : ${rentalPer}</div>
          <div>Price :RS. ${parseFloat(price).toLocaleString('en')}</div>
          <div>Key Money : ${keyMoney}</div>
          <div>Minimum Period : ${minimumPeriod} ${rentalPer.slice(-3) == 'ily' ? rentalPer.slice(0, -3) + 'ys' : rentalPer.slice(0, -2) + 's'}</div>
          <div>Available From : ${availableFrom}</div>
          <div>District : ${district}</div>
          <div>City : ${city}</div>
          <div>Property Type : ${propertyType}</div>
          <div>Description : ${description}</div>
          <div id="preview-facilities">Features : </div>
          <div id="preview-images"></div>
          <progress id="progress-bar" value="0" max="100">0%</progress>
          <div>
            <button calss="save" id="save">Add this Advertisement</button>
            <button calss="edit" id="edit">Edit</button>
          </div>

      `
        let previewFacilities = this._qs("#preview-facilities")
        facilities.forEach(item => previewFacilities.innerHTML += `<span>${item.feature} ${item.quantity != 'null' ? ' -' + item.quantity : ''}</span>`)

        let previewImages = this._qs("#preview-images")
        images.forEach(item => {
          if(item != undefined) {
            previewImages.innerHTML = ''
            previewImages.innerHTML += `<img src="${item}" />`
          } else images.shift()
        })
        this._qs('#edit').addEventListener('click', () => this._qs("#add-preview").style.display = 'none')

        // Api call to add Advertisement to the databsse
        this._qs('#save').addEventListener('click', async () => {
          const data = {
            Title: title,
            Rentalperiod: rentalPeriod,
            Price: price,
            Keymoney: keyMoney,
            Minimumperiod: minimumPeriod,
            Availablefrom: availableFrom,
            District: district,
            City: city,
            Propertytype: propertyType,
            Description: description,
            Facilities: facilities,
            Images: images
          }
            // let data = new FormData()
            // data.append('file', files[0])
          
            await axios.put('http://homey-api.atwebpages.com/facility', data, {
              onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                let percent = Math.floor( (loaded * 100) / total )
                this._qs('#progress-bar').value = percent
                this._qs('#progress-bar').innerText = `${loaded}kb of ${total}kb | ${percent}%`
              }
            })
              .then(res => console.log(res))
              .catch(err => console.log(err))
          
          dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'success', msg: "Property added successfuly." } }))
        })
      } catch (err) {
        dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
      }
    })

  }//End of connectedCallback

}//End of Class

window.customElements.define('add-new-property', AddNewProperty)
