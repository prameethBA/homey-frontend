import Base from '../../../Base.js'
import CSS from './map-view.css.js'

export default class MapView extends Base {

    css = CSS

    content = `
    <div class="container">
      <button id='loadMap'>Load Map</button>
        <input
          id="pac-input"
          class="controls"
          type="text"
          placeholder="Search Box"
        />
        <div id="map"></map>
    </div>
    
`
    constructor() {
        super()
        this.mount()

    }//End of the constructor
    
    // Innitialize map
    async initMap() {
      const mapDiv = this._qs('#map')
      const input = this._qs("#pac-input")

      mapDiv.classList.add('map')
      
      const map = new google.maps.Map(mapDiv, {
        center: JSON.parse(decodeURIComponent(this.getAttribute('location'))),
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
  
    
    //connectedCallback
    connectedCallback() {
      try {
        google != undefined
      } catch(err) {
        this.initMap()
      }
      
      addEventListener('map-loaded', ()=> this.initMap())

      this._qs('#loadMap').addEventListener('click', () => {
        this.initMap()
      })

    }//End of connectedCallback()
    
}//End of Class

window.customElements.define('map-view', MapView)
