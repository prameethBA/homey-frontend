import Base from '../../Base.js'
import CSS from './google-map.css.js'

export default class GoogleMap extends Base {
    css = CSS

    content = `
    <div class="container">
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
    } //End of the constructor

    // Innitialize map
    initMap(params) {
        const mapDiv = this._qs('#map')
        const input = this._qs('#pac-input')

        const map = new google.maps.Map(mapDiv, {
            center: params.location,
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.HYBRID
        })

        // Create the search box and link it to the UI element.
        const searchBox = new google.maps.places.SearchBox(input)
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', () => {
            searchBox.setBounds(map.getBounds())
        })

        input.style.display = 'block'

        // const marker = new google.maps.Marker({
        //     position: params.location,
        //     map: map
        // })

        let markers = []
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', () => {
            const places = searchBox.getPlaces()
            if (places.length == 0) return

            // Clear out the old markers.
            markers.forEach(marker => marker.setMap(null))

            markers = []

            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds()
            places.forEach(place => {
                if (!place.geometry) {
                    console.log('Returned place contains no geometry')
                    return
                }

                // Create a marker for each place.
                markers.push(
                    new google.maps.Marker({
                        map,
                        title: place.name,
                        position: place.geometry.location
                    })
                )

                if (place.geometry.viewport)
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport)
                else bounds.extend(place.geometry.location)
            })
            map.fitBounds(bounds)
        })

        //Listen for any clicks on the map.
        let marker = false
        google.maps.event.addListener(map, 'click', event => {
            // Clear out the old markers.
            markers.forEach(marker => marker.setMap(null))
            //Get the location that the user clicked.
            let clickedLocation = event.latLng
            //If the marker hasn't been added.
            if (marker === false) {
                //Create the marker.
                marker = new google.maps.Marker({
                    position: clickedLocation,
                    map: map,
                    draggable: true //make it draggable
                })

                google.maps.event.addListener(marker, 'dragend', event => {
                    this.setLocation({
                        lng: marker.getPosition().lng(),
                        ltd: marker.getPosition().lat()
                    })
                })
            } //Marker has already been added, so just change its location.
            else marker.setPosition(clickedLocation)

            this.setLocation({
                lng: marker.getPosition().lng(),
                ltd: marker.getPosition().lat()
            })
        })
    } //End of initMap()

    //set Location
    setLocation(location) {
        this.setAttribute('data-location', this.encode(location))
        dispatchEvent(new Event('google-map-location-changed'))
    } //End of setLocation()

    //connectedCallback
    connectedCallback() {
        this.state.mapLoaded = false
        let loadMap = setInterval(() => {
            try {
                if (!this.state.mapLoaded)
                    this.initMap({ location: this.getParams('data-location') })
                else clearInterval(loadMap)
                this.state.mapLoaded = true
            } catch (err) {
                console.log('google')
            }
        }, 1000)
    } //End of connectedCallback()
} //End of Class

window.customElements.define('google-map', GoogleMap)
