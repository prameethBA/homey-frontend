import Base from '../Base.js'
import CSS from './profile.css.js'

export default class Profiel extends Base {

  css =  CSS


  content = `
    <div class="container">
        <div class="row">
            <div class="column">
                <div class="profile-picture-container">
                    <img  class="profile-picture" src="/assets/img/11.png" />
                </div>
                <div class="name-container">
                    <span class="name">Dimuthu Lakmal</span>
                </div>
                <div class="last-login-container">
                    <span class="last-login-date">2020-10-20</span>
                    <span class="last-login-time">@ 15:43:23</span>
                    <span class="last-location">From Sri Lanka</span>
                    <span class="show-more"><a>Show More...</a></span>
                </div>
            </div>
            <div class="column">
                <div class="form">
                    <div class="row">
                        <div class="column">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" value="Dimuthu" />
                            <label for="LastName">First Name</label>
                            <input type="text" id="LastName" value="Lakmal" />
                        </div>
                    </div>
                    <div class="row">
                        <label for="address-1">Address Line 1</label>
                        <input type="text" id="address-1" value="No.141" />
                        <label for="address-2">Address Line 2</label>
                        <input type="text" id="address-1" value="" />
                        <label for="address-3">Address Line 3</label>
                        <input type="text" id="address-3" value="Mediyawa" />
                        <div class="column">
                            <label for="city">City</label>
                            <input type="text" id="city" value="Eppawala" />
                            <label for="district">District</label>
                            <input type="text" id="district" value="Anuradhapura" />
                        </div>
                    </div>
                    <div class="row">
                        <label for="nic">NIC</label>
                        <input type="text" id="nic" value="981421485V" />
                    </div>
                    <div class="row">
                        <label >Date of birth</label>
                        <div class="column">
                            <input type="text" id="year" value="1998" />
                            <label for="month">May</label>
                            <input type="text" id="day" value="21" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
    constructor() {
      super()
      this.mount()

    }

  }

  window.customElements.define('profile-comp', Profiel)