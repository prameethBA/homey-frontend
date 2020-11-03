import Base from './../Base.js'
import CSS from './add-new-property.css.js'

export default class AddNewProperty extends Base {

  css = CSS

  content = `
    <div class="popup"></div>
    <div class="container">
      <div id="add-preview">
      </div>
          <div class="form">
              <div class="row">
                <div class="col">
                  <label for="title">Title</label>
                  <input type="text" title="Short description as the title" placeholder="Short description as the title" id="title">
                </div>
                <div class="col">
                  <label for="rentalPeriod">Rent per</label>
                  <select id="rentalPeriod">
                    <option value='1'>Select a rental period</option>
                    <option value='1'>Day</option>
                    <option value='2'>Week</option>
                    <option value='3'>Month</option>
                    <option value='4'>Year</option>
                  </select>
                </div>

                <div class="col">
                  <label for="price">Price</label>
                  <input type="text" id="price" title="Price" placeholder="17,000">
                </div>
              </div>
                
              <div class="row">
                <div class="col">
                    <label for="keyMoneyPeriod">Key money</label>
                    <select id="keyMoneyPeriod">
                      <option value="0">Selecet a rental period</option>
                    </select>
                </div>
                <div class="col">
                    <label for="keyMoney" id="key-money-label">Key money (Rs.)</label>
                    <input type="text" id="keyMoney" />
                </div>
                <div class="col">
                    <label for="minimumPeriod" id="minimum-period-label">Minimum Period</label>
                    <input type="text" name="" id="minimumPeriod">
                </div>
              </div>

              <div class="row">
                <div class="col">
                    <label for="availableFrom">Available From</label>
                    <input type="date" id="availableFrom" value="${new Date().toISOString().slice(0, 10)}">
                </div>
                <div class="col">
                    <div type="date" id="pickLocation">Pick a location<span>📌</span></div>
                </div>
              </div>

              <div class="row">
              <input
                  id="pac-input"
                  class="controls"
                  type="text"
                  placeholder="Search Box"
                />
                <div id="map"></div>
              </div>

              <div class="row">
              <div class="col">
                    <label for="">District</label>
                    <select class="district_type" id="district">
                      <option value='0' selected disabled> Select a district</option> 
                    </select>
                </div>
                <div class="col">
                    <label for="city">City</label>
                    <input type="text" id="city" list="city-list" autocomplete="false"/>
                      <datalist id="city-list">
                      </datalist>
                </div>
                <div class="col">
                  <label for="propertyType">Property Type</label>
                  <select class="property_type" id="propertyType">
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="description">
                  <label for="description">Description</label>
                  <textarea id="description"></textarea>
                </div>
              </div>
              
              <div class="row facilities">
                <div id="facilities">
                </div>
              </div>

              <div class="row">
                <div class="col imageUpload">
                  <input type="file" id="uploadImages" accept="image/jpg, image/png, image/jpeg, image/*" multiple>
                  <label class="upload-image-label" for="uploadImages">Upload Images <b>⬆<b> </label>
                </div>
              </div>

              <div class="row">
                <div id="previewImages"></div>
              </div>

              <div class="row">
                <button class="btn btn-primary btn-lg" id="add-property-button">Add Property</button>
              </div>
          </div>
    </div>
`

constructor() {
    super()
    if(!this.isLogin()) {
      dispatchEvent(new CustomEvent("load-comp", { detail: {parh: '/', comp: 'home/main/main', compName: 'main-comp' } }))
      dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: "Log in to your account to continue.", duration: 5 } }))
      dispatchEvent(new Event('load-login-form'))
    }
    this.mount()

    }//end of constructor

    async connectedCallback() {

      
      // Innitialize map
      const initMap = async () => {
        const mapDiv = this._qs('#map')
        const input = this._qs("#pac-input")
  
        mapDiv.classList.add('map')
        
        const map = new google.maps.Map(mapDiv, {
          center: {lat: 7.8731, lng: 80.7718},
          zoom: 7.5,
          mapTypeId: google.maps.MapTypeId.HYBRID
        })
        
        // Create the search box and link it to the UI element.
        const searchBox = new google.maps.places.SearchBox(input)
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds())
        })
        
        input.style.display =  'block'
        let markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces()
          if (places.length == 0) return

          // Clear out the old markers.
          markers.forEach((marker) => marker.setMap(null))

          markers = []

          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds()
          places.forEach((place) => {
            if (!place.geometry) {
              console.log("Returned place contains no geometry")
              return
            }

            // Create a marker for each place.
            markers.push(
              new google.maps.Marker({
                map,
                title: place.name,
                position: place.geometry.location,
              })
            )
    
            if (place.geometry.viewport) // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            else 
              bounds.extend(place.geometry.location);
          })
          map.fitBounds(bounds)
        })

        
          //Listen for any clicks on the map.
          let marker = false
          google.maps.event.addListener(map, 'click', async event => {
            // Clear out the old markers.
            markers.forEach((marker) => marker.setMap(null))  
            //Get the location that the user clicked.
            let clickedLocation = event.latLng;
            //If the marker hasn't been added.
            if(marker === false){
                //Create the marker.
                marker = new google.maps.Marker({
                    position: clickedLocation,
                    map: map,
                    draggable: true //make it draggable
                })

                //get nearest Location!
                this.state.getNearestLocation = async () => {
                  
                  this.state.location = {
                    lng:marker.getPosition().lng(),
                    ltd:marker.getPosition().lat()
                  }

                  await axios.post(`${this.host}/cities/nearest-city`, {
                    lng:marker.getPosition().lng(),
                    ltd:marker.getPosition().lat()
                  })
                    .then(res => {
                        this._qs('#city-list').innerHTML = ''
                        let index = 0
                        res.data.forEach(element =>  {
                          this._qs('#district').value = element.district
                          index == 0 ? this._qs('#city').value = element.city : null
                          this._qs('#city-list').innerHTML += `<option value="${element.city}"/>`
                          index++
                        })
                    })
                }

                google.maps.event.addListener(marker, 'dragend', event => this.state.getNearestLocation())

            } else//Marker has already been added, so just change its location.
            marker.setPosition(clickedLocation)
            this.state.getNearestLocation()
        })
        
      }//End of initMap()

      // try {
      //   google != undefined
      // } catch(err) {
      //   initMap()
      // }
      // addEventListener('map-loaded', ()=> initMap())

    // API call for get Districts
    await axios.get(`${this.host}/district`)
      .then(res => res.data.data.forEach(element => this._qs('#district').innerHTML += `<option value="${element._id}">${element.district}</option>`))
      .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))

    // API call for get property types
    await axios.get(`${this.host}/property-type`)
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

    // Add eventlistner to load citeis
    this._qs("#district").addEventListener('change', async () => {
      // Prevent laggin when do rapid changing
      addEventListener('change',async ()=> {
        await this.sleep(100);
        this._qs("#district").removeEventListener('change')
      })
      await this.sleep(101);
      // API call for get Districts
      await axios.get(`${this.host}/cities/districtId/${this._qs("#district").value}`)
        .then(res => {
          this._qs('#city-list').innerHTML = ''
          if (res.status == '200') res.data.data.forEach(element => this._qs('#city-list').innerHTML += `<option value="${element.city}"/>`)
          else throw "Server Error."
        })
        .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
    })

    this._qs('#pickLocation').addEventListener('click', () => {
      initMap()
      this._qs('#pickLocation').display = 'none'
      this._qs('#pickLocation').removeEventListener('click', {} )
    })

    await import("./subcomp/facility.js")
      .then(
        // API call for get Facilities List
        await axios.get(`${this.host}/facility`)
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
              feature: item.shadowRoot.querySelector('.name').innerText,
              quantity: quantity
            })
          }
        })

        this._qs('#previewImages').childNodes.forEach(item => images.push(item.src))
        
        // validate the details
        if (title == '') throw {message:'<b>Title<b> cannot be empty.', duration: 5}
        
        let rentalPer
        switch (rentalPeriod) {
          case '1': rentalPer = 'Daily'; break;
          case '2': rentalPer = 'Weekly'; break;
          case '3': rentalPer = 'Monthly'; break;
          case '4': rentalPer = 'Yearly'; break;
          default: throw {message:'<b>Select a rental period<b>', duration: 5}
        }

        if (price == '') throw {message: '<b>Price<b> cannot be empty.', duration: 5}
        if (!price.match(/^[0-9]+$/)) throw {message: '<b>Price<b> cannot be contain letters or any other characters except numbers.', duration: 5}

        switch (keyMoneyPeriod) {
          case 'enter-value': ; break;
          case 'enter-period': keyMoney = keyMoney * price; break;
          case '0': throw {message:'<b>Select a rental period<b>', duration: 5}
          default: ;
        }

        switch (minimumPeriod) {
          case '': ; break;
          default:
            if (!minimumPeriod.match(/^[0-9]+$/)) throw {message:'<b>Minimum period<b> cannot be contain letters or any other characters except numbers.', duration: 5}
            break;
        }

        if (district == 'Select a district' || district == '0') throw {message: 'Select a district', duration: 5}
        if (city == '') throw {message: 'Select a city', duration: 5}

        if (!description.match(/\w+[\s\.]\w+/)) throw {message: 'Add a description about the property. (double spaces and fullstops are not allowed)', duration: 5}
        this._qs("#add-preview").style.display = 'block';
        this._qs("#add-preview").innerHTML = `
            <div>Title 👉 <b> ${title}</b></div>
          <div>Rental Period 👉 <b> ${rentalPer}</b></div>
          <div>Price : <b>Rs. ${parseFloat(price).toLocaleString('en')}</b></div>
          <div>Key Money 👉 <b>Rs. ${keyMoney}</b></div>
          <div>Minimum Period 👉 <b> ${minimumPeriod} ${rentalPer.slice(-3) == 'ily' ? rentalPer.slice(0, -3) + 'ys' : rentalPer.slice(0, -2) + 's'}</b></div>
          <div>Available From 👉 <b> ${availableFrom}</b></div>
          <div>District 👉 <b> ${district}</b></div>
          <div>City 👉 <b> ${city}</b></div>
          <div>Property Type 👉 <b> ${propertyType}</b></div>
          <div>Description 👉 <b> ${description}</b></div>
          <div id="preview-facilities">Features : </div>
          <div id="preview-images"></div>
          <div id="progress">
            <div id="progress-bar"><div id="progress-bar-progress"></div></div>
            <div id="progress-progress">0%</div>
          </div>
          <div class="preview-buttons">
            <button calss="save" id="save">Add this Advertisement</button>
            <button calss="edit" id="edit">Edit</button>
          </div>

      `

        let previewFacilities = this._qs("#preview-facilities")
        facilities.forEach(item => previewFacilities.innerHTML += `<span>${item.feature} ${item.quantity != 'null' ? ' -' + item.quantity : ''}</span>`)

        let previewImages = this._qs("#preview-images")
        previewImages.innerHTML = ''
        let newImages = []

        images.forEach(item => {
          if(item !== undefined) {
            previewImages.innerHTML += `<img src="${item}" />`
            newImages.push(item)
          } 
        })

        // Save add at the database
        const getAdData = () => {
            const data = {
              userId: this.getUserId(),
              token: this.getToken(),
              title: title,
              rentalperiod: rentalPeriod,
              price: price,
              keyMoney: keyMoney,
              minimumPeriod: minimumPeriod,
              availableFrom: availableFrom,
              district: district,
              city: city,
              location: this.state.location =! null ? this.state.location : {},
              propertyType: propertyType,
              description: description,
              facilities: facilities,
              images: newImages
            }
            return data
          }

        this._qs('#edit').addEventListener('click', () => this._qs("#add-preview").style.display = 'none')

        this._qs('#save').addEventListener('click', async () => {
          
          // Api call to add Advertisement to the databsse
          await axios.post(`${this.host}/property/add-new`, getAdData(), {
                  onUploadProgress: (progressEvent) => {
                    const {loaded, total} = progressEvent;
                    let percent = Math.floor( (loaded * 100) / total )
                    this._qs('#save').style.display = 'none'
                    this._qs('#edit').style.display = 'none'
                    this._qs('#progress-bar-progress').style.width = percent + '%'
                    this._qs('#progress-progress').innerText = `${Math.round(loaded/1024/1024* 100)/100}MB of ${ Math.round(total/1024/1024* 100)/100}MB | ${percent}%`
                  }
                })
                .then(async res => {
                  // Popup for enable add fetures
                  if(res.status == 201) {
                    dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'success', msg: res.data.message } }))
                    await import('./subcomp/advertisement-settings.js')
                    .then(
                      this._qs('.popup').innerHTML = `<advertisement-settings data="${res.data}" key="${res.data}"></advertisement-settings>`
                    )
                  } else throw res.data
                })
                .catch(err =>  dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } })))
          
        })
      } catch (err) {
        dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err.message, duration: err.duration == undefined ? 10 : err.duration } }))
      }//End of the catch for try
    })

  }//End of connectedCallback

}//End of Class

window.customElements.define('add-new-property', AddNewProperty)
