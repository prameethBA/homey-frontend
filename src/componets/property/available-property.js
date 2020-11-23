import Base from '../Base.js'
import CSS from './available-property.css.js'

export default class AvalibaleProperty extends Base {
    css = CSS

    notFound = `
        <div class="notFound">
            <h1> No Properties Found!</h1>
        </div>
    `

    filter = `
    <div class="left_nav row">
		<div class="nav_container column">
            <h3>Browse</h3>
            <dir></dir>
            <div class="column filter-items">
                <div class="row filter-item">
                    <input id="home" type="checkbox" />
                    <label for="home">Home</label>
                </div>
                <div class="row filter-item">
                    <input id="appartment" type="checkbox" />
                    <label for="appartment">Appartment</label>
                </div>
                <div class="row filter-item">
                    <input id="annex" type="checkbox" />
                    <label for="annex">Annex</label>
                </div>
                <div class="row filter-item">
                    <input id="building" type="checkbox" />
                    <label for="building">Building</label>
                </div>
            </div>
		</div>
		
		<div class="nav_container column">
            <h3>Availability</h3>
            <dir></dir>
            <div class="column filter-items">
                <div class="row filter-item">
                    <input id="now" type="checkbox" />
                    <label for="now">Available now</label>
                </div>
                <div class="row filter-item">
                    <input id="later" type="checkbox" />
                    <label for="later">Available later</label>
                </div>
                <div class="row filter-item">
                    <input id="sharing" type="checkbox" />
                    <label for="sharing">Available sharing</label>
                </div>
            </div>	
		</div>
		
		<div class="nav_container column">
            <h3>Rental Period</h3>
            <dir></dir>
            <div class="column filter-items">
                <div class="row filter-item">
                    <input id="daily" type="checkbox" />
                    <label for="daily">Daily</label>
                </div>
                <div class="row filter-item">
                    <input id="weekly" type="checkbox" />
                    <label for="weekly">Weekly</label>
                </div>
                <div class="row filter-item">
                    <input id="monthly" type="checkbox" />
                    <label for="monthly">Monthly</label>
                </div>
                <div class="row filter-item">
                    <input id="yearly" type="checkbox" />
                    <label for="yearly">Yearly</label>
                </div>
            </div>
		</div>
		
		<div class="nav_container column">
				<h3>Price</h3>
				<dir></dir>
                <div class="column filter-items">
                    <div class="row price">
                        <input type="text" placeholder="100"> 
                        <span> to </span>  
                        <input type="text" placeholder="1000">
                    </div>
					<button>Go</button>
				</div>	
		</div>
		
		<div class="nav_container column">
				<h3>Key Money</h3>
				<dir></dir>
				<div class="column filter-items">
                    <div class="row price">
                        <input type="text" placeholder="100"> 
                        <span> to </span>  
                        <input type="text" placeholder="1000">
                    </div>
					<button>Go</button>
				</div>		
		</div>
		
		<div class="nav_container column">
				<h3>District</h3>
				<dir></dir>
				<div class="column filter-select">
					<select name="District" id="District">
                		<option value="Colombo">Colombo</option>
                		<option value="Gampaha">Gampaha</option>
                		<option value="Kurunegala">Kurunegala</option>
                		<option value="Galle">Galle</option>
       				</select>
       			</div>	
		</div>
    </div>
    `

    search = `
        <div class="search">
            <input type="search" class="search-box" placeholder="Search here..." />
            <select class="district">
                <option selected disabled>Select a district</option>
                <option >All</option>
            </select>
            <select class="city">
                <option selected disabled>Select a city</option>
                <option >All</option>
            </select>
            <select class="property-type">
                <option selected disabled>Select a Property type</option>
                <option >All</option>
            </select>
            <button class="search-button"> Search now!</button>
            <span class="toggle-filter">🔃</span>
        </div>
    `

    content = `
        ${this.search}
        ${this.filter}
        <div id="container">
        </div>
        <div id="pagination">
            
        </div>
        <div id="questioner">
        </div>
    `

    pagination = `
        <div class='pagination'>
            <div class='previous'>First</div>{' '}
            <div class='pagination-active'>1</div> <div>2</div>{' '}
            <div class='current'>3</div> <div>4</div> <div>5</div>
            <div class='last'>Last</div>
        </div>
    `

    constructor() {
        super()
        this.mount()

        // load Questioner
        if (sessionStorage.questioner != 1) {
            this.loadQuestioner()
            sessionStorage.questioner = 1
        }

        //Load ad preview cards
        this.loadpropertyView()
    } //end of constructor

    // load questioner
    async loadQuestioner() {
        this.setLoader()
        await import('./subcomp/questioner-comp.js')
            .then(() => {
                this._qs(
                    '#questioner'
                ).innerHTML = `<questioner-comp></questioner-comp>`
                this.stopLoader()
            })
            .catch(err => {
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: { pop: 'error', msg: err }
                    })
                )
                this.setLoader()
            })
    } //End of loadQuestioner

    // Load add comps
    async loadpropertyView() {
        this.setLoader()
        try {
            import('./subcomp/property-view.js')
            const page = 1
            const limit = 12

            const res = await axios.get(
                `${this.host}/property/all/${limit}/${page}`
            )

            if (res.data.length < 1) {
                this._qs('#container').innerHTML = this.notFound
            } else {
                res.data.forEach(item => {
                    this._qs('#container').innerHTML += `
                    <property-view 
                    id="${item._id}"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `
                })
                this._qs('#pagination').innerHTML = this.pagination
            }
        } catch (err) {
            console.log(err)
        }
        this.stopLoader()
    } //End of loadpropertyView()

    // Toggle filter
    toggleFilter() {
        let visible = true

        this._qs('.toggle-filter').addEventListener('click', () => {
            if (visible) this._qs('.left_nav').style.display = 'flex'
            else this._qs('.left_nav').style.display = 'none'
            visible = !visible
        })
    } //End of toggleFilter()

    // API call for get Districts
    async getDistricts() {
        try {
            const res = await axios.get(`${this.host}/district`)
            res.data.data.forEach(
                element =>
                    (this._qs(
                        '.district'
                    ).innerHTML += `<option value="${element._id}">${element.district}</option>`)
            )
        } catch (err) {
            console.log(err)
        }
    } //End of getDistricts()

    // Add eventlistner to load citeis
    loadCities() {
        try {
            this._qs('.district').addEventListener('change', async () => {
                // Prevent laggin when do rapid changing
                addEventListener('change', async () => {
                    await this.sleep(100)
                    this._qs('.district').removeEventListener('change')
                })
                await this.sleep(101)
                // API call for get Districts
                const res = await axios.get(
                    `${this.host}/cities/districtId/${
                        this._qs('.district').value
                    }`
                )
                this._qs('.city').innerHTML = ''
                if (res.status == '200')
                    res.data.forEach(
                        element =>
                            (this._qs(
                                '.city'
                            ).innerHTML += `<option value="${element._id}"/>${element.city}</option>`)
                    )
                else throw 'Server Error.'
            })
        } catch (err) {
            console.log(err)
        }
    } //End of loadCities()

    // API call for get property types
    async getPropertytypes() {
        try {
            const res = await axios.get(`${this.host}/property-type`)
            res.data.data.forEach(
                element =>
                    (this._qs(
                        '.property-type'
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

    // search add comps
    async searchProperty() {
        // this.setLoader()
        try {
            this.wait('.search-button')
            import('./subcomp/property-view.js')
            const page = 1
            const limit = 12

            let search = this._qs('.search-box')

            const res = await axios.get(
                `${this.host}/property/search/${search.value}`
            )

            search.value = ''
            this._qs('#container').innerHTML = ''

            if (res.data.length < 1) {
                this._qs('#container').innerHTML = this.notFound
            } else {
                res.data.forEach(item => {
                    this._qs('#container').innerHTML += `
                    <property-view 
                    id="${item._id}"
                    data-data="${this.encode(item)}"
                    >
                    </property-view>
                    `
                })
                this._qs('#pagination').innerHTML = this.pagination
            }
        } catch (err) {
            console.log(err)
        }
        // this.stopLoader()
        this.unwait('.search-button')
    } //End of searchProperty

    //loadSearch
    loadSearch() {
        this._qs('.search-button').addEventListener('click', () => {
            this.searchProperty()
        })
    } //End of loadSearch()

    connectedCallback() {
        // Load add comps
        // this.loadpropertyView()

        // API call for get Districts
        this.getDistricts()
        // Add eventlistner to load citeis
        this.loadCities()

        // API call for get property types
        this.getPropertytypes()

        //loadSearch
        this.loadSearch()

        // Toggle filter
        this.toggleFilter()
    } //End of connected callback
} //End of Class

window.customElements.define('available-property', AvalibaleProperty)
