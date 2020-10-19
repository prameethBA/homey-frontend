import Base from '../Base.js'

export default class AvalibaleProperties extends Base {

    css = `
        .container {
            margin: 3.3em auto 2em auto;
            display: grid;
            grid-template-columns: auto auto auto auto;
        }

        property-view {
            display: inline-block;
        }

        img {
            width: 100%;
            height: 210px;
        }

        .progress {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        
        .progress span {
            width: 100%;
            height: 20%;
            margin: 0.2em;
            background-color: red;
            display: inline-block;
            border-radius: 5px;
            animation-name: progress;
            animation-duration: 0.75s;
            animation-iteration-count: infinite;
        }

        @keyframes progress {
            0%   {background-image: linear-gradient(to right, #787775, #868582, #949390, #a2a19e, #b0afac);}
            20%  {background-image: linear-gradient(to right, #b0afac, #787775, #868582, #949390, #a2a19e);}
            40%  {background-image: linear-gradient(to right, #a2a19e, #b0afac, #787775, #868582, #949390);}
            60%  {background-image: linear-gradient(to right, #949390, #a2a19e, #b0afac, #787775, #868582);}
            80% {background-image: linear-gradient(to right, #868582, #949390, #a2a19e, #b0afac, #787775);}
            100%   {background-image: linear-gradient(to right, #787775, #868582, #949390, #a2a19e, #b0afac);}
        } 

        @media screen and (max-width: 1200px) {
            .container {
                grid-template-columns: auto auto auto;
            }
          }

        @media screen and (max-width: 992px) {
            .container {
                grid-template-columns: auto auto;
            }
          }

        @media screen and (max-width: 768px) {
            .container {
                display: flex;
                /*grid-template-columns: auto;*/
            }
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
                        <div slot="thumbnail" id="img-` + index + `">
                            <img src="./assets/img/alt/load-post.gif"/>
                            <img src="./assets/img/alt/no-mage.png" />
                        </div>
                        <h4 slot="title" id="add-` + index + `">
                        ` + `
                            <div class="progress">
                                <span></span>
                            </div>
                        ` + `
                        </h4>
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
