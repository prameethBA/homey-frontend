import Base from '../Base.js'
import CSS from './own-properties.css.js'

export default class OwnProperties extends Base {

  css =  CSS

  content = `
        <div id="container">
            <div class="row">
                <span class="search-container">
                    <input id="search" type="text" class="search" placeholder="Search here" />
                    <label for="search">🔍</label>
                    </span>
                    <div class="button-group">
                        <button class="blocked danger-button">Blocked Properties</button>
                        <button class="pending primary-button">Pending Approvals</button>
                        <button class="rejected danger-button">Rejected Properties</button>
                        <button class="private primary-button">Private</button>
                        <button class="public primary-button">Public</button>
                        <button class="boosted danger-button">Boosted Properties</button>
                    </div>
            </div>
            <div class="row">
                <div class="content"></div>
            </div>
        </div>
        <div class="pagination">
            <a class="previous">First</a> | <a>1</a> | <a>2</a> | <a class="current">3</a> | <a>4</a> | <a>5</a> |<a class="last">Last</a>
        </div>
        <div id="questioner">
        </div>
    `
    constructor() {
      super()
      this.mount()

    }//End of the constructor

    // Load add comps 
    async loadpropertyView() {
      this.setLoader()
      await import('./subcomp/property-view.js')
          .then(() => {
              this.state.page = 1
              this.state.limit = 12
      
              for (let index = 0; index < this.state.limit; index++) {
                  this._qs('.content').innerHTML += `
                          <property-view id="id-${index}" key="${index}" overview='true'>
                              <img slot="thumbnail" class="thumbnail" src="/assets/img/alt/load-post.gif" style="display: block !important;"/>
                              <p slot="title" class=" title title-${index}">Boarding place at Colombo-08</p>
                              <p slot="price" class=" price price-${index}">Rs. 17, 000</p>
                              <p slot="description" class=" description description-${index}">
                                  A boarding house is a house (frequently a family home) in which lodgers rent one or more rooms for one or more nights, and sometimes for extended periods of weeks, months, and years. The common parts of the house are maintained, and some services, such as laundry and cleaning, may be supplied.
                              </p>
                              <input class="id id-${index}" type="hidden" slot="id" value=""/>
                          </property-view>
                      `
              }
              this.stopLoader()
          })
          .catch(err => {
              dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
              this.setLoader()
          })

    }//End of loadpropertyView()

    connectedCallback() {

      // Load add comps 
      this.loadpropertyView()

    }//End of connectedCallback()
    
  }//End of the class

  window.customElements.define('own-properties', OwnProperties)