import Base from '../Base.js'
import CSS from './profile.css.js'

export default class Profile extends Base {

  css =  CSS


  content = `
    <div class="container">
        <div class="row">
            <div class="column first-aside">
                <div class="profile-picture-container">
                    <div class="profile-picture"></div>
                    <div class="upload">
                        <input class="form-field" type="file" id="upload-image" accept=".jpg, .png, .jpeg, .gif"/>
                        <label for="upload-image" class="img-label" title="upload an image">📷</label>
                    </div>
                </div>
                <div class="name-container">
                    <span class="name"><div class="loader"></div></span>
                </div>
                <div class="last-login-container">
                    <span class="last-login-title">Last Login </span>
                    <div class="row">
                        <span class="last-login-date">2020-10-20</span>
                        <span class="last-login-time">@ 15:43:23</span>
                    </div>
                    <span class="last-location">From Sri Lanka</span>
                    <span class="show-more"><a>Show More...</a></span>
                </div>
            </div>
            <div class="column">
                <div class="form">
                    <div class="form-row">
                        <div class="form-column">
                            <label for="firstName">First Name</label>
                            <input class="form-field" type="text" id="firstName" value="" />
                        </div>
                        <div class="form-column">
                            <label for="LastName">First Name</label>
                            <input class="form-field" type="text" id="lastName" value="" />
                        </div>
                    </div>
                    <div class="form-column">
                        <label for="email">Email</label>
                        <input class="form-field" type="email" id="email" value="" />
                    </div>
                    <div class="form-column">
                        <label for="mobile">Mobile No: </label>
                        <input class="form-field" type="number" id="mobile" value="" />
                    </div>
                    <div class="form-column">
                        <label for="address-1">Address Line 1</label>
                        <input class="form-field" type="text" id="address-1" value="" />
                        <label for="address-2">Address Line 2</label>
                        <input class="form-field" type="text" id="address-2" value="" />
                        <label for="address-3">Address Line 3</label>
                        <input class="form-field" type="text" id="address-3" value="" />
                        <div class="form-row">
                            <div class="form-column">
                                <label for="city">City</label>
                                <input class="form-field" type="text" id="city" value="" />
                            </div>
                            <div class="form-column">
                                <label for="district">District</label>
                                <input class="form-field" type="text" id="district" value="" />
                            </div>
                        </div>
                    </div>
                    <div class="form-column">
                        <label for="nic">NIC</label>
                        <input class="form-field" type="text" id="nic" value="" />
                    </div>
                    <div class="form-column">
                        <label >Date of birth</label>
                        <div class="form-row">
                            <select id="month" class="form-field" disabled>
                                <option value="0" selected disabled>Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">Month</option>
                                <option value="5">Month</option>
                                <option value="6">Month</option>
                                <option value="7">Month</option>
                                <option value="8">Month</option>
                                <option value="9">Month</option>
                                <option value="10">Month</option>
                                <option value="11">Month</option>
                                <option value="12">Month</option>
                            </select>
                            <select id="day" class="form-field" disabled>
                                <option value="0" selected disabled>Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input class="form-field" type="text" id="year" value="" placeholder="Year"/>
                        </div>
                    </div>
                    <div class="form-row">
                            <button id="update">Update Profile</button>
                            <button id="cancel">Cancel</button>
                    </div>
                    <div class="form-column">
                        <hr/>
                    </div>
                    <div class="form-column">
                        <span class="password-title">Change password</span>
                    </div>
                    <div class="form-column">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" value="" />
                    </div>
                    <div class="form-column">
                        <label for="newPassword">New Password</label>
                        <input type="password" id="newPassword" value="" />
                    </div>
                    <div class="form-column">
                        <label for="confirmPassword">Confirm New Password</label>
                        <input type="password" id="confirmPassword" value="" />
                    </div>
                    <div class="form-column">
                            <button id="changePassword">Change Password</button>
                    </div>

                    <div class="form-column">
                        <hr/>
                    </div>
                    <div class="form-column">
                        <span class="danger-title">Danger Zone</span>
                    </div>
                    <div class="form-row">
                        <button class="danger-button" id="remove">Delete Account</button>
                        <button class="danger-button" id="deactivate">Deactivate Account</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
`
    constructor() {
      super()
      this.mount()

      //Get profile info
        this.getProfileInfo()

    }//End of constructor

    //Get profile info
    getProfileInfo() {
        axios.post(`${this.host}/profile/info`, {
            userId: this.getUserId(),
            token: this.getToken()
        })
            .then(res => {
                this._qs('.name').innerHTML = `${res.data.userData.firstName} ${res.data.userData.lastName}`
                this._qs('#firstName').value = res.data.userData.firstName
                this._qs('#lastName').value = res.data.userData.lastName
                this._qs('#email').value = res.data.authData.email
                // this._qs('#mobile').value = res.data.authData.mobile
            })
    }//End of getProfileInfo()

    //update profile
    updateProfile() {
            this._qs('#update').addEventListener('click', () => {
                 // edit profile
                this.validateProfile()
            })
    }//End of updateProfile()

    // validate profile
    validateProfile() {
        try {

            //validate Name
            const firstName = this._qs('#firstName').value
            const lastName = this._qs('#lastName').value
            if(firstName == '' || lastName == '') throw {message: "Name cannot be empty"}
            if(!/^[A-Za-z ]+$/.test(firstName) || !/^[A-Za-z ]+$/.test(lastName)) throw {message: "Provide a valid name"}

            //validate email
            const email = this._qs("#email").value
            if(email == '') throw {message: "Email cannot be empty"}
            if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) throw {message: "Provide a valid email"}

            //validate mobile
            const mobile = this._qs('#mobile').value
            if(!/^(?:7|0|(?:\+94))[0-9]{9,10}$/.test(mobile)) throw {message: "Provide a valid Mobile number"}

            const address1 = this._qs("#address-1").value
            const address2 = this._qs("#address-2").value
            const address3 = this._qs("#address-3").value
            const addressRegX = /^[a-zA-Z0-9\s,.'-]{3,}$|^$/
            if(!addressRegX.test(address1) || !addressRegX.test(address2) || !addressRegX.test(address3)) throw {message: "Provide a valid Address"}

            //validate city and district
            const city = this._qs('#city').value
            const district = this._qs('#district').value
            if(!/^[A-Za-z ]+$|^$/.test(city)) throw {message: "Provide a valid city name"}
            if(!/^[A-Za-z ]+$|^$/.test(district)) throw {message: "Provide a valid district name"}

            //validate NIC
            const nic = this._qs('#nic').value
            if(!/^([0-9]{9}[x|X|v|V]|[0-9]{12})$|^$/.test(nic)) throw {message: "Provide a valid NIC"}
            
        } catch(err){
            console.log(err.message)
        }
    }//End of validateProfile()

    connectedCallback() {
       
        //update profile
        this.updateProfile()

    }//End of connectedCallback()

  }//End of class

  window.customElements.define('profile-comp', Profile)