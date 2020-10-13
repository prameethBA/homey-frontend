import Base from '../Base.js'

export default class AvalibaleProperties extends Base {
    css = `
    .container {
        text-align: center;
    }
    img {
        margin:0;
        height: 200px;
        width: 100%;
        z-index: 4;
        display: none;
    }
    `
    content = `
    <div class="container">
    <div>
    `

    constructor() {
        super()
        this.mount()

        this.dataArray  = ['Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface',
        'Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala',
        'Apartment in Wellwatte Near safeplace inface to Gallface']
        

        import('./property-view.js')
            .then(() => {
                let data = '';
                for (let index = 0; index < this.dataArray.length; index++) {
                    data += `
                    <property-view>
                        <div slot="img" id="img-` + index + `">
                        <img src="./assets/images/load-post.gif" />
                        <img src="./assets/images/desk2.png" />
                        <img src="./assets/images/desk3.png" />
                        <img src="./assets/images/desk.png" />
                        </div>
                        <h4 slot="title" id="add-` + index + `">` + '<progress></progress>' + `</h4>
                    </property-view>
                `
                }
                this._qs('.container').innerHTML = data
            })
            .catch(err => console.log(err))
    }

    connectedCallback() {
        
        const loadAdds = async () => {
            for (let index = 0; index < this.dataArray.length; index++) {
                let title = this.dataArray[index].length>75 ? this.dataArray[index].substr(0, 75) + `...` : this.dataArray[index]
                this._qs('#add-' + index).innerHTML = title
            }
        } 

        setTimeout(() => {
            loadAdds()
        }, 2000);

    }

}

window.customElements.define('avalibale-properties', AvalibaleProperties)
