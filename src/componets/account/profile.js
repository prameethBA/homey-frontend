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
                            <input type="text" id="month" class="form-field"/>
                            <input type="text" id="day" class="form-field"/>
                            <input class="form-field" type="text" id="year" value="" placeholder="Year"/>
                        </div>
                    </div>
                    <div class="form-row error-container">
                        <div class="error"></div>
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
                 // validate profile
                this.validateProfile()
            })
    }//End of updateProfile()

    //get DOB form NIC
    getDob(nic) {
        let dayText = 0, year = "", month = "", day = "", gender = ""
        if (nic.length != 10 && nic.length != 12) return {action: false, message: "Invalid NIC"}
        else if (nic.length == 10 && isNaN(nic.substr(0, 9))) return {action: false, message: "Invalid NIC"}
        else {
            // Year
            if (nic.length == 10) {
                year = "19" + nic.substr(0, 2)
                dayText = parseInt(nic.substr(2, 3))
            } else {
                year = nic.substr(0, 4)
                dayText = parseInt(nic.substr(4, 3))
            }

            year = parseInt(year)

            // Gender
            if (dayText > 500) {
                gender = "Female"
                dayText = dayText - 500
            } else {
                gender = "Male"
            }

            // Day Digit Validation
            if (dayText < 1 && dayText > 366) return {action: false, message: "Invalid NIC"}
            else {
                let february = 29
                // if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) february =  29 // Leap year
                // else february =  28 // Not a leap year
                
                let noOfDates = [
                    {month: 'january', dates: 31},
                    {month: 'february', dates: february},
                    {month: 'march', dates: 31},
                    {month: 'april', dates: 30},
                    {month: 'may', dates: 31},
                    {month: 'june', dates: 30},
                    {month: 'july', dates: 31},
                    {month: 'august', dates: 31},
                    {month: 'september', dates: 30},
                    {month: 'october', dates: 31},
                    {month: 'november', dates: 30},
                    {month: 'december', dates: 31}
                ]

                let sum = 0 
                try {
                    noOfDates.forEach(element => {
                        sum+= element.dates
                        if(sum >= dayText) {
                            throw { month: element.month, day: (dayText-sum + element.dates)}
                        }
                    })
                } catch(err) {
                    return {
                        action: true, 
                        year: year,
                        month: err.month,
                        day: err.day,
                        gender: gender
                    }
                }

            }
            return {action: false, message: "Invalid NIC"}
        }
    }//End of getDob()

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
            if(!/^(?:7|0|(?:\+94))[0-9]{9,10}$|^$/.test(mobile)) throw {message: "Provide a valid Mobile number"}

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
            if(!/^$/.test(nic)) {
                const dob = this.getDob(nic)
                if(!dob.action) {
                    this._qs('#month').value = ''; this._qs('#day').value = ''; this._qs('#year').value = ''; throw {message: dob.message}
                }
                else {
                    this._qs('#month').value = dob.month.toUpperCase()
                    this._qs('#day').value = dob.day
                    this._qs('#year').value = dob.year
                }
            }
            
            this._qs('.error').innerHTML = ''

        } catch(err){
            this._qs('.error').innerHTML = err.message
        }
    }//End of validateProfile()

    //listen for validate 
    listenInput() {
        this._qsAll('.form-field').forEach(item => {
            item.addEventListener('keyup', () => {
                //validate profile
                this.validateProfile()
            })
        })
    }//End of listenInput()

    connectedCallback() {
       
        //update profile
        this.updateProfile()
        
        //listen for validate 
        this.listenInput()

    }//End of connectedCallback()

  }//End of class

  window.customElements.define('profile-comp', Profile)