import Base from '../../Base.js'
import CSS from './main.css.js'

import '../user-comp.js'

export default class Main extends Base {

    css = CSS

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