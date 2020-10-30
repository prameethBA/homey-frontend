import Base from './componets/Base.js'

import './componets/home/user-comp.js'

export default class Main extends Base {

    css = `

    .user-comp {
        margin: 5rem auto;
        display: table;
    }

    .parallax {
        height: 90vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }

    .parallax-1 {
        background-image: url('./assets/img/house.jpg');
    }

    .parallax-2 {
        background-image: url('./assets/img/background.jpg');
    }

    @media screen and (max-width: 1200px) {
        .parallax {
            height: 75vh;
        }
    }
  
    @media screen and (max-width: 992px) {
        .user-comp {
            display: grid;
            grid-template-columns: auto;
            justify-content: center;
        }

        .parallax {
            height: 100vh;
        }
    }
  
    @media screen and (max-width: 768px) {
        .parallax {
            height: 98vh;
        }
    }
  
    @media screen and (max-width: 512px) {
        .parallax {
            height: 65vh;
        }
    }
    
`
    content = `
        <div class="container">
          <div class="parallax parallax-1">
            <div class="user-comp">
                <user-comp mirror="true" route="add-new-property" id="add-new-property">
                    <img slot="image" defer src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg=" alt="Image"></img>
                    <h1 slot="title">Rent or Lease your own property</h1>
                </user-comp>
                <user-comp mirror="true" route="available-property" id="find-property">
                    <img slot="image" defer src="https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg" alt="Image"></img>
                    <h1 slot="title">Looking for a place</h1>
                </user-comp>
            </div>
          </div>
            
            <div style="display: table;margin: 2rem auto;">
                <h1>This is the middle content</h2>
            </div>
          <div class="parallax parallax-2"></div>
        </div>
`
    constructor() {
        super()
        this.mount()

        this.setPath('/')
    }

}//End of Class

window.customElements.define('main-comp', Main)