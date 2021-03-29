import Base from "../../../Base.js";
import CSS from "./google-map.css.js";

export default class GoogleMap extends Base {
  css = CSS;

  content = `
    <div class="container">
        <div id="map"></map>
    </div>
    
`;
  constructor() {
    super();
    this.mount();

    //load Map
    this.loadMap();
  } //End of the constructor

  //load Map
  loadMap() {
    if (document.getElementById("map") == null) {
      let script = document.createElement("script");
      script.id = "map";
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8RpefQ5-mHoAPGkt6tf1uZAaKjHghTNI&libraries=places&callback=initMap";
      document.body.appendChild(script);
    }
  } //End of loadMap()

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
    // try {
    //     google != undefined
    // } catch (err) {
    //     this.initMap()
    // }
    this.initMap();
  } //End of connectedCallback()
} //End of Class

const elementName = "google-map";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, GoogleMap)
  : null;
