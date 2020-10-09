import Base from './../Base.js'

const style = `
.container {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #eeeeee;
  }
  .row1,
  .row2,
  .row3,
  .row4,
  .row5,
  .row6 {
    padding-bottom: 1em;
  }
  #add-property {
    width: 100%;
    margin-bottom: 25px;
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    background-size: 200%;
    font-size: 0.8rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    margin: 1rem 0;
    cursor: pointer;
    transition: 1s;
  }
  button:hover {
    background-position: right;
    color: black;
  }
  

`

const content = `
<div class="container">
<div class="row1">
  <label for="title">Title</label>
  <input
    type="text"
    id="title"
    name="title"
    title="Title : House for rent"
  />
  <label for="price">Price</label>
  <input type="text" id="price" name="price" title="Price : 30000" />
  <label for="keymoney">Key Money</label>
  <input
    type="text"
    id="keymoney"
    name="keymoney"
    title="Key Money : 50000"
  />
</div>

<div class="row2" style="display: block">
  <label for="period">Minimum Period</label>
  <input
    type="text"
    id="period"
    name="period"
    title="Minimum Period : 1year"
  />
  <label for="avail-from">Available From</label>
  <input
    type="date"
    id="avail-from"
    name="avail-from"
    title="Available From : 08/10/2020"
  />
  <label for="property-type">Property Type</label>
  <select name="property-type">
    <option selected>House</option>
    <option>Semi-detached house</option>
    <option>Townhouse/Villa</option>
    <option>Annex</option>
    <option>Apartments/Unit</option>
    <option>Block of units</option>
  </select>
</div>

<div class="row3" style="display: block">
  <label for="discription">Discription</label>
  <textarea
    name="discription"
    title="Enter discription about your property"
    rows="5"
    cols="50"
  ></textarea>
</div>

<div class="row4" style="display: block">
  <label for="facilities">Facilities</label>
  <input type="checkbox" name="electricity" />Electricity
  <input type="checkbox" name="water" />Water Supply
  <input type="checkbox" name="gas" />Gas
  <input type="checkbox" name="ac" />AirConditioned
  <input type="checkbox" name="wall fans" />Wall Fans
  <input type="checkbox" name="roof fans" />Roof Fans
  <input type="checkbox" name="furniture" />Furniture
  <input type="checkbox" name="front-yard" />Front Yard
  <input type="checkbox" name="back-yard" />Back Yard
  <input type="checkbox" name="attached-bathroom" />Attached Bathroom
  <input type="checkbox" name="vehicle-parking" />Vehicle Parking
</div>

<div class="row5" style="display: block">
  <label for="images">Images</label>
  <input
    type="text"
    id="images"
    name="images"
    title="Add Images in .jpeg"
  />
  <button id="upload-images">Upload Images</button>
</div>

<div class="row6" style="display: block">
  <button id="add-property">Add Property</button>
</div>
</div>
`

export default class AddProperty extends Base {
  constructor() {
    super()

    this.render(style, content)
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))
  }
}
window.customElements.define('add-property', AddProperty)
