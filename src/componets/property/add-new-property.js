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
            <div class="row title">
              <div class="title">Add new property</div>
            </div>
              <div class="row">
                <div class="col">
                  <label for="title">Title</label>
                  <input type="text" title="Short description as the title" placeholder="Short description as the title" id="title">
                </div>
                <div class="col">
                  <label for="rentalPeriod">Rent per</label>
                  <select id="rentalPeriod">
                    <option value='0' selected disabled>Select a rental period</option>
                  </select>
                </div>

                <div class="col">
                  <label for="price">Price</label>
                  <input type="number" id="price" title="Price" placeholder="17,000">
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
                    <input type="number" name="" id="minimumPeriod">
                </div>
              </div>

              <div class="row">
                <div class="col">
                    <label for="availableFrom">Available From</label>
                    <input type="date" id="availableFrom" value="${new Date()
                        .toISOString()
                        .slice(0, 10)}">
                </div>
                <div class="col">
                    <div type="date" id="pickLocation">Pick a location<span>📌</span></div>
                </div>
              </div>

              <div class="row">
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

              <div class="row">
                <div class="description">
                  <label for="address">Address</label>
                  <textarea id="address"></textarea>
                </div>
              </div>
              
              <span class="row sub-title"> Facilities </span>
              <div class="row facilities" id="facilities-measurable">
              </div>

              <span class="row sub-title"> Features </span>
              <div class="row facilities" id="facilities">
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
        this.authenticate()
        this.mount()
    } //end of constructor

    //load google-map component
    async loadMap() {
        await import('/componets/universal/google-map/google-map.js')
        let location = { lat: 7.8731, lng: 80.7718 }
        this._qs('#map').innerHTML = `<google-map data-location="${this.encode(
            location
        )}"></google-map>`

        addEventListener('google-map-location-changed', () =>
            //get nearest city
            this.getNearestCity(
                this.decode(this._qs('google-map').dataset.location)
            )
        )
    } //End of loadMap()

    // API call for get Districts
    async getDistricts() {
        try {
            const res = await axios.get(`${this.host}/district`)
            res.data.data.forEach(
                element =>
                    (this._qs(
                        '#district'
                    ).innerHTML += `<option value="${element._id}">${element.district}</option>`)
            )
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: { pop: 'error', msg: err }
                })
            )
        }
    } //End of getDistricts()

    // API call for get RentalPeriod
    async getRentalPeriod() {
        try {
            const res = await axios.get(`${this.host}/rental-period`)
            res.data.forEach(
                element =>
                    (this._qs(
                        '#rentalPeriod'
                    ).innerHTML += `<option value="${element._id}" data-name="${element.rental_period}">${element.rental_period_name}</option>`)
            )
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: { pop: 'error', msg: err }
                })
            )
        }
    } //End of getRentalPeriod()

    // API call for get property types
    async getPropertytypes() {
        try {
            const res = await axios.get(`${this.host}/property-type`)
            res.data.data.forEach(
                element =>
                    (this._qs(
                        '#propertyType'
                    ).innerHTML += `<option value="${element.property_type_id}">${element.property_type_name}</option>`)
            )
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: { pop: 'error', msg: err }
                })
            )
        }
    } //End of getPropertytypes()

    //toggleMapVisible
    toggleMapVisible() {
        this._qs('#pickLocation').addEventListener('click', () => {
            const map = this._qs('#map')
            map.style.display == 'none' || map.style.display == ''
                ? (map.style.display = 'block')
                : (map.style.display = 'none')
        })
    } //End of toggleMapVisible

    //get nearest city
    async getNearestCity(location) {
        try {
            const res = await axios.post(
                `${this.host}/cities/nearest-city`,
                location
            )

            this._qs('#city-list').innerHTML = ''
            let index = 0
            res.data.forEach(item => {
                this._qs(
                    '#city-list'
                ).innerHTML += `<option value="${item.city}" />`
                if (index == 0) this._qs('#city').value = item.city
                index++
            })
            this._qs('#district').value = res.data[0].district
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: { pop: 'error', msg: err }
                })
            )
        }
    } //End of getNearestCity()

    //Laod faiclities
    async loadFacilities() {
        // API call for get Facilities List
        try {
            await import('./subcomp/facility.js')
            const res = await axios.get(`${this.host}/facility`)

            if (res.status == '200') {
                res.data.data.forEach(element => {
                    if (element.measurable == 1) {
                        this._qs('#facilities-measurable').innerHTML += `
                        <facility-comp 
                          class="feature-list" 
                          key="${element._id}" 
                          name="${element.feature_name}"
                          measurable="${element.measurable}
                          ">
                        </facility-comp>
                    `
                    } else {
                        this._qs('#facilities').innerHTML += `
                        <facility-comp 
                          class="feature-list" 
                          key="${element._id}" 
                          name="${element.feature_name}"
                          measurable="${element.measurable}
                          ">
                        </facility-comp>
                    `
                    }
                })
            } else throw res.data
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: { pop: 'error', msg: err }
                })
            )
        }
    } //End of loadFacilities()

    //Validate form
    validateForm() {
        try {
            if (this._qs('#title').value == '')
                throw {
                    message: '<b>Title<b> cannot be empty.',
                    duration: 5
                }

            if (this._qs('#rentalPeriod').value == 0)
                throw {
                    message: '<b>Select a rental period<b>',
                    duration: 5
                }

            if (this._qs('#price').value == '')
                throw {
                    message: '<b>Price<b> cannot be empty.',
                    duration: 5
                }

            switch (this._qs('#keyMoneyPeriod').value) {
                case 'enter-value':
                    break
                case 'enter-period':
                    this._qs('#keyMoney').value =
                        this._qs('#keyMoney').value * this._qs('#price').value
                    break
                case '0':
                    throw {
                        message: '<b>Select a rental period<b>',
                        duration: 5
                    }
                default:
            }

            if (
                this._qs('#district').value == 'Select a district' ||
                this._qs('#district') == '0'
            )
                throw { message: 'Select a district', duration: 5 }

            if (this._qs('#city').value == '')
                throw { message: 'Select a city', duration: 5 }

            if (!this._qs('#description').value.match(/\w+[\s\.]\w+/))
                throw {
                    message:
                        'Add a description about the property. (double spaces and fullstops are not allowed)',
                    duration: 5
                }

            return true
        } catch (err) {
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: { pop: 'error', msg: err.message }
                })
            )
            window.scrollTo(0, 0)

            return false
        }
    } //End of validate form

    //getValues
    getValues() {
        try {
            //Validate form
            if (!this.validateForm()) throw new Error()

            return {
                title: this._qs('#title').value,
                rentalPeriod: this._qs('#rentalPeriod').value,
                price: this._qs('#price').value,
                keyMoneyPeriod: this._qs('#keyMoneyPeriod').value,
                keyMoney: this._qs('#keyMoney').value,
                minimumPeriod: this._qs('#minimumPeriod').value,
                availableFrom: this._qs('#availableFrom').value,
                districtId: this._qs('#district').value,
                district: this._qs('#district').options[
                    this._qs('#district').selectedIndex
                ].text,
                city: this._qs('#city').value,
                propertyTypeId: this._qs('#propertyType').value,
                propertyType: this._qs('#propertyType').options[
                    this._qs('#propertyType').selectedIndex
                ].text,
                description: this._qs('#description').value,
                address: this._qs('#address').value,
                facilities: this.getSelectedFacilities(), //getSelectedFacilities
                images: this.getImages() //get images
            }
        } catch (err) {
            return false
        }
    } //End of getValues()

    //getSelectedFacilities
    getSelectedFacilities() {
        let data = []
        this._qsAll('.feature-list').forEach(item => {
            const feature = item.shadowRoot.querySelector('input')
            if (feature.checked) {
                const quantity =
                    item.shadowRoot.querySelector('.quantity') == null
                        ? 'null'
                        : item.shadowRoot.querySelector('.quantity').value
                data.push({
                    featureId: feature.id,
                    feature: item.shadowRoot.querySelector('.name').innerText,
                    quantity: quantity
                })
            }
        })
        return data
    } //End of getSelectedFacilities()

    //readImages
    readImages(file, target, index) {
        const fileReader = new FileReader()
        fileReader.onload = fileLoadedEvent =>
            (target.innerHTML += `
                      <img 
                        class="uploaded-image" 
                        src="${fileLoadedEvent.target.result}" 
                        id="uploaded-image-${index}" 
                        alt="image-${index}"
                        onclick="this.outerHTML = ''"
                        />`)
        fileReader.readAsDataURL(file)
    } //End of readImages()

    //preViewImages
    preViewImages() {
        this._qs('#uploadImages').addEventListener('input', () => {
            if (this._qs('#previewImages').children.length < 5) {
                for (
                    let index = 0;
                    index <
                    (this._qs('#uploadImages').files.length < 5
                        ? this._qs('#uploadImages').files.length
                        : 5);
                    index++
                ) {
                    this.readImages(
                        this._qs('#uploadImages').files[index],
                        this._qs('#previewImages'),
                        index
                    )
                }
                window.scrollTo(0, document.body.scrollHeight)
            } else
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg: 'Maximum 5 images can be uploaded.'
                        }
                    })
                )
        })
    } //End of preViewImages()

    //get images
    getImages() {
        let images = []
        this._qs('#previewImages').childNodes.forEach(item => {
            if (item !== undefined) images.push(item.src)
        })
        return images.filter(img => {
            if (img !== undefined) return img
        })
    } //End of getImages()

    //preview the add
    async previewAdvertisement(data) {
        const res = await import(
            '/componets/universal/preview-advertisement.js'
        )

        let innerData = `<preview-advertisement>`

        data.images.forEach(item => {
            innerData += `<img slot='image' src="${item}" />`
        })

        innerData += ` 
            <p slot='title'>
                ${data.title}
                <button class="load-more">Load more >></button>
            </p>
            <span slot="price" class="row-1 price">Rental: Rs. ${
                data.price
            }/Month</span>
            <span slot="key-money" class="row-1 key-money">Key Money : Rs. ${
                data.keyMoney
            }</span>
            <span slot="minimum-period" class="row-1 minimum-period">Minimum Period: ${
                data.minimumPeriod !== ''
                    ? data.minimumPeriod
                    : 'Not applicable'
            }</span>
            <span slot="available-from" class="row-1 available-from">Available From: ${
                data.availableFrom
            }</span>
            <p slot='description'>
                ${data.description}
                <button class="load-more">Load more >></button>
            </p>
            <div slot="facilities" class="facilities">
        `

        data.facilities.forEach(item => {
            innerData += `<facility-comp key="${item.featureId}" name="${
                item.feature
            }" ${
                item.quantity != 'null' ? 'measurable="1"' : 'measurable="0"'
            } checked="true" quantity="${item.quantity}"></facility-comp>`
        })

        innerData += `
            </div>
                <map-view slot="location" class="location" location="${this.encode(
                    data.location
                )}"></map-view>
                <div slot="location-details" class="row-2 location-details">
                    <span class="location-details-span district">
                        District : ${data.district}
                    </span>
                    <span class="location-details-span city">
                        City : ${data.city}
                    </span>
                    <span class="location-details-span address">Address : 
                        ${
                            /^ *$||^$/.test(data.address)
                                ? data.city + ', ' + data.district
                                : data.address
                        }
                    </span>
                </div>
                <div slot="approval" class="row approval">
                    <div class="button approve-button">Post the advertisement</div>
                    <div class="button decline-button">edit</div>
                </div>
            </preview-advertisement>
            <div id="progress">
            <div id="progress-bar"><div id="progress-bar-progress"></div></div>
            <div id="progress-progress">0%</div>
        </div>
    `
        window.scrollTo(0, 0)
        this._qs('#add-preview').innerHTML = innerData

        //post the Advertisement
        this.postAdvertisement(data)
    } //End of previewAdvertisement()

    //collect Data
    collectData() {
        this._qs('#add-property-button').addEventListener('click', () => {
            //getValues
            const data = this.getValues()

            if (data != false) {
                //preview the add
                this.previewAdvertisement(data)
            }
        })
    } //collectData()

    // Method for calculate Key Money
    calculateKeyMoney() {
        const rentalPeriod = this._qs('#rentalPeriod')
        const keyMoneyPeriod = this._qs('#keyMoneyPeriod').value
        const keyMoneyLabel = this._qs('#key-money-label')
        const price = this._qs('#price').value
        let keyMoney = this._qs('#keyMoney')

        if (keyMoneyPeriod == 'enter-value') {
            keyMoneyLabel.innerHTML = `Key Money(Rs.)`
            keyMoney.value = 0
        } else if (keyMoneyPeriod == 'enter-period') {
            keyMoneyLabel.innerHTML = `${
                rentalPeriod.options[rentalPeriod.selectedIndex].dataset.name
            }s`
            keyMoney.value = 0
        } else {
            keyMoneyLabel.innerHTML = `Key Money(Rs.)`
            keyMoneyPeriod != 0
                ? (keyMoney.value = price * keyMoneyPeriod)
                : (keyMoney.value = 0)
        }
    } //End of calculateKeyMoney()

    //changeMinimumPeriodLabel
    changeMinimumPeriodLabel(period) {
        this._qs(
            '#minimum-period-label'
        ).innerHTML = ` Minimum period(${period})`
    } //End of changeMinimumPeriodLabel()

    //changeRentalPeriod()
    changeRentalPeriod() {
        const rentalPeriod = this._qs('#rentalPeriod')

        rentalPeriod.addEventListener('change', () => {
            //changeMinimumPeriodLabel
            const period =
                rentalPeriod.options[rentalPeriod.value].dataset.name + 's'
            this.changeMinimumPeriodLabel(period)

            this._qs('#keyMoneyPeriod').innerHTML = `
              <option value = "enter-value" > Enter a value</option >
              <option value="enter-period">Enter No. of ${period}</option>
              <option value="1" selected>1 ${period}</option>
              <option value="2">2 ${period}</option>
              <option value="3">3 ${period}</option>
              <option value="6">6 ${period}</option>
              <option value="12">12 ${period}</option>
        `
        })

        // Add eventlistners to excute calculateMoney Method
        const events = ['focus', 'keyup', 'change']
        const elements = ['#rentalPeriod', '#keyMoneyPeriod', '#price']

        events.forEach(eve =>
            elements.forEach(elm => {
                this._qs(elm).addEventListener(eve, () =>
                    this.calculateKeyMoney()
                )
            })
        )
    } //End of changeRentalPeriod()

    // Add eventlistner to load citeis
    loadCities() {
        try {
            this._qs('#district').addEventListener('change', async () => {
                // Prevent laggin when do rapid changing
                addEventListener('change', async () => {
                    await this.sleep(100)
                    this._qs('#district').removeEventListener('change')
                })
                await this.sleep(101)
                // API call for get Districts
                const res = await axios.get(
                    `${this.host}/cities/districtId/${
                        this._qs('#district').value
                    }`
                )
                this._qs('#city-list').innerHTML = ''
                if (res.status == '200')
                    res.data.forEach(
                        element =>
                            (this._qs(
                                '#city-list'
                            ).innerHTML += `<option value="${element.city}"/>`)
                    )
                else throw 'Server Error.'
            })
        } catch (err) {
            console.log(err)
        }
    } //End of loadCities()

    //post the Advertisement
    postAdvertisement(data) {
        addEventListener('post-advertisement', async () => {
            try {
                this._qs('#progress').style.display = 'flex'
                // Api call to add Advertisement to the databsse
                const res = await axios.post(
                    `${this.host}/property/add-new`,
                    {
                        ...data,
                        userId: this.getUserId(),
                        token: this.getToken()
                    },
                    {
                        onUploadProgress: progressEvent => {
                            const { loaded, total } = progressEvent
                            let percent = Math.floor((loaded * 100) / total)
                            this._qs('#progress-bar-progress').style.width =
                                percent + '%'
                            this._qs('#progress-progress').innerText = `${
                                Math.round((loaded / 1024 / 1024) * 100) / 100
                            }MB of ${
                                Math.round((total / 1024 / 1024) * 100) / 100
                            }MB | ${percent}%`
                            if (percent >= 100) {
                                this._qs('#progress').innerHTML = ''
                                this._qs('#add-preview').innerHTML = ''
                            }
                        }
                    }
                )
                // Popup for enable add fetures
                if (res.status == 201) {
                    dispatchEvent(
                        new CustomEvent('pop-up', {
                            detail: { pop: 'success', msg: res.data.message }
                        })
                    )
                    await import('./subcomp/advertisement-settings.js')
                    this._qs(
                        '.popup'
                    ).innerHTML = `<advertisement-settings data-key="${res.data.propertyId}"></advertisement-settings>`
                } else throw res.data
            } catch (err) {
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg: err.message,
                            duration:
                                err.duration == undefined ? 10 : err.duration
                        }
                    })
                )
            } //End of the catch for try
        })
    } //End of the postAdvertisement()

    connectedCallback() {
        // API call for get RentalPeriod
        this.getRentalPeriod()

        //changeRentalPeriod()
        this.changeRentalPeriod()

        //Load faiclities
        this.loadFacilities()

        // API call for get Districts
        this.getDistricts()

        //toggleMapVisible
        this.toggleMapVisible()

        //Load Map
        this.loadMap()

        //load Cities
        this.loadCities()

        // API call for get property types
        this.getPropertytypes()

        //preViewImages
        this.preViewImages()

        //collect Data
        this.collectData()
    } //End of connectedCallback
} //End of Class

window.customElements.define('add-new-property', AddNewProperty)
