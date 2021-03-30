import Base from "/componets/Base.js";
import CSS from "./popup-map.css.js";

export default class MapView extends Base {
  css = CSS;

  location = this.getParams("location");

  content = `
    <div class="backdrop">
        <div class="container">
        <span id="close-popup" title="close(Esc)">+</span>
            <div id="map"></map>
        </div>
        <div id="direction">Get direction</div>
    </div>
    
`;
  constructor() {
    super();
    this.mount();
  } //End of the constructor

  //open direction on GMap
  getDirection() {
    this._qs('#direction').addEventListener('click', () => {
      window.open(`https://www.google.com/maps/search/?api=1&query=${this.location.lat},${this.location.lng}`)
    })
  }

  // Innitialize map
  async initMap() {
    const mapDiv = this._qs("#map");

    const map = new google.maps.Map(mapDiv, {
      center: this.location,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    });

    const marker = new google.maps.Marker({
      position: this.location,
      map: map,
    });
  } //End of initMap()

  //close the dock
  close() {
    this._qs("#close-popup").addEventListener("click", () => {
      this.exitDock();
    });
  } //End of the close()

  // Exit the dock
  exitDock() {
    this._qs(".backdrop").style.opacity = "0";
    this._qs(".backdrop").style.pointerEvents = "none";
  } // End of exitDock()

  //Exit with Escape key
  exitWithEscape() {
    addEventListener("keyup", ({ key }) =>
      key === "Escape" ? this.exitDock() : null
    );
  } // End of exitWithEscape()

  //connectedCallback
  connectedCallback() {
    try {
      if (google != undefined) {
        this.initMap();
      } else throw Error();
    } catch (err) {
      this.initMap();
    }

    // close the dock
    this.close();
    // Exit with escape key
    this.exitWithEscape();

    //open direction on GMap
  this.getDirection()
  } //End of connectedCallback()
} //End of Class

const elementName = "map-view";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, MapView)
  : null;
