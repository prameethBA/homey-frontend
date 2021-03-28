import Base from "/componets/Base.js";
import CSS from "./map-view.css.js";

export default class MapView extends Base {
  css = CSS;

  content = `
    <div class="container">
      <button id='loadMap'>Load Map</button>
        <div id="map"></map>
    </div>
    
`;
  constructor() {
    super();
    this.mount();
  } //End of the constructor

  // Innitialize map
  async initMap() {
    const mapDiv = this._qs("#map");

    const map = new google.maps.Map(mapDiv, {
      center: JSON.parse(decodeURIComponent(this.getAttribute("location"))),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    });

    const marker = new google.maps.Marker({
      position: JSON.parse(decodeURIComponent(this.getAttribute("location"))),
      map: map,
    });
  } //End of initMap()

  //connectedCallback
  connectedCallback() {
    try {
      google != undefined;
    } catch (err) {
      this.initMap();
    }

    addEventListener("map-loaded", () => this.initMap());

    this._qs("#loadMap").addEventListener("click", () => {
      this.initMap();
      this._qs("#map").style.display = "block";
    });
  } //End of connectedCallback()
} //End of Class

const elementName = "map-view";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, MapView)
  : null;
