import Base from '../Base.js'
import CSS from './profile.css.js'

export default class Profile extends Base {
    css = CSS

    confirmProfileUpdate = `
    <div>
        <div class="title">Do you really want to update profile?</div>
        <div class="button-group">
            <button class="yes-profile danger-button">Yes</button>
            <button class="no-profile">No</button>
        </div>
    </div>
  `

    confirmPasswordUpdate = `
    <div>
        <div class="title">Do you really want to update password?</div>
        <div class="button-group">
            <button class="yes-password danger-button">Yes</button>
            <button class="no-password">No</button>
        </div>
    </div>
  `

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
                    <div class="progress">
                        <div class="progress-bar"></div>
                    </div>
                </div>
                <div class="name-container">
                    <span class="name"><div class="loader"></div></span>
                </div>
                <div class="last-login-container">
                    <span class="last-login-title">Last Login </span>
                    <div class="row last-login-data">
                        <span class="last-login-loader"><div class="loader"></div></span>
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
                    <div class="form-row">
                        <div class="form-column">
                            <label for="email">Email</label>
                            <input class="form-field" type="email" id="email" value="" />
                        </div>
                        <div class="form-column">
                            <label for="mobile">Mobile No: </label>
                            <input class="form-field" type="number" id="mobile" value="" />
                        </div>
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
                        <input type="password" class="passwrod-form-field" id="currentPassword" value="" />
                    </div>
                    <div class="form-column">
                        <label for="newPassword">New Password</label>
                        <input type="password" class="passwrod-form-field" id="newPassword" value="" />
                    </div>
                    <div class="form-column">
                        <label for="confirmPassword">Confirm New Password</label>
                        <input type="password" class="passwrod-form-field" id="confirmPassword" value="" />
                    </div>
                    <div class="form-row error-container">
                        <div class="error" id="error-password"></div>
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
        <div class="popup">
        </div>
    </div>
`
    constructor() {
        super()
        this.mount()

        if (!this.isLogin()) {
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        parh: '/',
                        comp: 'home/main/main',
                        compName: 'main-comp'
                    }
                })
            )
            return
        }

        //Get profile info
        this.getProfileInfo()
    } //End of constructor

    //Get profile info
    async getProfileInfo() {
        this.setLoader()
        await axios
            .post(`${this.host}/profile/info`, {
                userId: this.getUserId(),
                token: this.getToken()
            })
            .then(res => {
                this._qs(
                    '.name'
                ).innerHTML = `${res.data.userData.firstName} ${res.data.userData.lastName}`
                const lastLogin = res.data.authData.lastLogin.split(' ')
                let lastLoginTime = new Date(res.data.authData.lastLogin)
                lastLoginTime.setMinutes(lastLoginTime.getMinutes() - 90)
                this._qs('.last-login-data').innerHTML = `
                    <span>${lastLogin[0]}</span>
                    @ 
                    <span>
                        ${
                            lastLoginTime.getHours() < 10
                                ? '0' + lastLoginTime.getHours()
                                : lastLoginTime.getHours()
                        }:
                        ${
                            lastLoginTime.getMinutes() < 10
                                ? '0' + lastLoginTime.getMinutes()
                                : lastLoginTime.getMinutes()
                        }:
                        ${
                            lastLoginTime.getSeconds() < 10
                                ? '0' + lastLoginTime.getSeconds()
                                : lastLoginTime.getSeconds()
                        }
                    </span>
                `
                this._qs('#firstName').value = res.data.userData.firstName
                this._qs('#lastName').value = res.data.userData.lastName
                this._qs('#email').value = res.data.authData.email
                this._qs('#mobile').value = res.data.authData.mobile
                this._qs('#address-1').value = res.data.userData.address1
                this._qs('#address-2').value = res.data.userData.address2
                this._qs('#address-3').value = res.data.userData.address3
                this._qs('#city').value = res.data.userData.city
                this._qs('#district').value = res.data.userData.district
                this._qs('#nic').value = res.data.userData.nic
                const dob = res.data.userData.dob.split('-')
                this._qs('#year').value = dob[0]
                this._qs('#month').value = dob[1]
                this._qs('#day').value = dob[2]

                this.stopLoader()
            })
            .catch(err => {
                console.log(err)
                this.stopLoader()
            })
    } //End of getProfileInfo()

    //clear inputs
    clearInputs() {
        this._qs('#cancel').addEventListener('click', () => {
            //Get profile info
            this.getProfileInfo()
        })
    } //End of clearInputs()

    //update profile
    updateProfile() {
        this._qs('#update').addEventListener('click', () => {
            // validate profile
            this.validateProfile()
            if (this.state.validate) {
                this._qs('.popup').style.display = 'flex'
                this._qs('.popup').innerHTML = this.confirmProfileUpdate
                this._qs('.yes-profile').addEventListener('click', async () => {
                    this.setLoader()

                    const data = {
                        userId: this.getUserId(),
                        token: this.getToken(),
                        firstName: this._qs('#firstName').value,
                        lastName: this._qs('#lastName').value,
                        email: this._qs('#email').value,
                        mobile: this._qs('#mobile').value,
                        address1: this._qs('#address-1').value,
                        address2: this._qs('#address-2').value,
                        address3: this._qs('#address-3').value,
                        city: this._qs('#city').value,
                        district: this._qs('#district').value,
                        nic: this._qs('#nic').value,
                        dob: `${this._qs('#year').value}-${
                            this._qs('#month').value
                        }-${this._qs('#day').value}`
                    }

                    await axios
                        .post(`${this.host}/profile/update`, data)
                        .then(res => {
                            if (res.status == 201)
                                dispatchEvent(
                                    new CustomEvent('pop-up', {
                                        detail: {
                                            pop: 'success',
                                            msg: res.data.message,
                                            duration: 5
                                        }
                                    })
                                )
                            else throw res.data

                            this.stopLoader()
                            this._qs('.popup').style.display = 'none'
                        })
                        .catch(err => {
                            dispatchEvent(
                                new CustomEvent('pop-up', {
                                    detail: {
                                        pop: 'error',
                                        msg: err.message,
                                        duration:
                                            err.duration == undefined
                                                ? 10
                                                : err.duration
                                    }
                                })
                            )
                            this.stopLoader()
                            this._qs('.popup').style.display = 'none'
                        })
                })

                this._qs('.no-profile').addEventListener(
                    'click',
                    () => (this._qs('.popup').style.display = 'none')
                )
            } else
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg: 'Please input valid data to update profile',
                            duration: 5
                        }
                    })
                )
        })
    } //End of updateProfile()

    //get DOB form NIC
    getDob(nic) {
        let dayText = 0,
            year = '',
            month = '',
            day = '',
            gender = ''
        if (nic.length != 10 && nic.length != 12)
            return { action: false, message: 'Invalid NIC' }
        else if (nic.length == 10 && isNaN(nic.substr(0, 9)))
            return { action: false, message: 'Invalid NIC' }
        else {
            // Year
            if (nic.length == 10) {
                year = '19' + nic.substr(0, 2)
                dayText = parseInt(nic.substr(2, 3))
            } else {
                year = nic.substr(0, 4)
                dayText = parseInt(nic.substr(4, 3))
            }

            year = parseInt(year)

            // Gender
            if (dayText > 500) {
                gender = 'Female'
                dayText = dayText - 500
            } else {
                gender = 'Male'
            }

            // Day Digit Validation
            if (dayText < 1 && dayText > 366)
                return { action: false, message: 'Invalid NIC' }
            else {
                let february = 29
                // if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) february =  29 // Leap year
                // else february =  28 // Not a leap year

                let noOfDates = [
                    { month: 'january', dates: 31 },
                    { month: 'february', dates: february },
                    { month: 'march', dates: 31 },
                    { month: 'april', dates: 30 },
                    { month: 'may', dates: 31 },
                    { month: 'june', dates: 30 },
                    { month: 'july', dates: 31 },
                    { month: 'august', dates: 31 },
                    { month: 'september', dates: 30 },
                    { month: 'october', dates: 31 },
                    { month: 'november', dates: 30 },
                    { month: 'december', dates: 31 }
                ]

                let sum = 0
                try {
                    noOfDates.forEach(element => {
                        sum += element.dates
                        if (sum >= dayText) {
                            throw {
                                month: element.month,
                                day: dayText - sum + element.dates
                            }
                        }
                    })
                } catch (err) {
                    return {
                        action: true,
                        year: year,
                        month: err.month,
                        day: err.day,
                        gender: gender
                    }
                }
            }
            return { action: false, message: 'Invalid NIC' }
        }
    } //End of getDob()

    // validate profile
    validateProfile() {
        try {
            this.state.validate = true
            //validate Name
            const firstName = this._qs('#firstName').value
            const lastName = this._qs('#lastName').value
            if (firstName == '' || lastName == '')
                throw { message: 'Name cannot be empty' }
            if (
                !/^[A-Za-z ]+$/.test(firstName) ||
                !/^[A-Za-z ]+$/.test(lastName)
            )
                throw { message: 'Provide a valid name' }

            //validate email
            const email = this._qs('#email').value
            if (email == '') throw { message: 'Email cannot be empty' }
            if (
                !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                    email
                )
            )
                throw { message: 'Provide a valid email' }

            //validate mobile
            const mobile = this._qs('#mobile').value
            if (!/^(?:7|0|(?:\+94))[0-9]{9,10}$|^$/.test(mobile))
                throw { message: 'Provide a valid Mobile number' }

            const address1 = this._qs('#address-1').value
            const address2 = this._qs('#address-2').value
            const address3 = this._qs('#address-3').value
            const addressRegX = /^[a-zA-Z0-9\s,.'-]{3,}$|^$/
            if (
                !addressRegX.test(address1) ||
                !addressRegX.test(address2) ||
                !addressRegX.test(address3)
            )
                throw { message: 'Provide a valid Address' }

            //validate city and district
            const city = this._qs('#city').value
            const district = this._qs('#district').value
            if (!/^[A-Za-z ]+$|^$/.test(city))
                throw { message: 'Provide a valid city name' }
            if (!/^[A-Za-z ]+$|^$/.test(district))
                throw { message: 'Provide a valid district name' }

            //validate NIC
            const nic = this._qs('#nic').value
            if (!/^$/.test(nic)) {
                const dob = this.getDob(nic)
                if (!dob.action) {
                    this._qs('#month').value = ''
                    this._qs('#day').value = ''
                    this._qs('#year').value = ''
                    throw { message: dob.message }
                } else {
                    this._qs('#month').value = dob.month.toUpperCase()
                    this._qs('#day').value = dob.day
                    this._qs('#year').value = dob.year
                }
            }

            this._qs('.error').innerHTML = ''
        } catch (err) {
            this.state.validate = false
            this._qs('.error').innerHTML = err.message
        }
    } //End of validateProfile()

    //listen for validate
    listenInput() {
        this._qsAll('.form-field').forEach(item => {
            item.addEventListener('keyup', () => {
                //validate profile
                this.validateProfile()
            })
        })

        this._qsAll('.passwrod-form-field').forEach(item => {
            item.addEventListener('keyup', () => {
                //validate profile
                this.validatePassword()
            })
        })
    } //End of listenInput()

    //getprofilePicture
    async getprofilePicture() {
        await axios
            .post(`${this.host}/images/profile/get`, {
                userId: this.getUserId(),
                token: this.getToken()
            })
            .then(res => {
                this._qs('.profile-picture').innerHTML = `<img 
                    class="uploaded-image" 
                    src="${
                        res.data.image != ''
                            ? res.data.image
                            : '/assets/img/alt/no-mage.png'
                    }" 
                    id="uploaded-image" 
                    alt="Profile picture"
                    />`
            })
            .catch(err => console.log(err))
    } //End of getprofilePicture()

    //read image
    readImage(file, target) {
        const fileReader = new FileReader()
        fileReader.onload = fileLoadedEvent => {
            target.innerHTML = `
                        <img 
                          class="uploaded-image" 
                          src="${fileLoadedEvent.target.result}" 
                          id="uploaded-image" 
                          alt="Profile picture"
                          />`
            let data = {
                userId: this.getUserId(),
                image: fileLoadedEvent.target.result
            }

            this._qs('.progress').style.display = 'block'

            axios
                .post(`${this.host}/images/profile/save`, data, {
                    onUploadProgress: progressEvent => {
                        const { loaded, total } = progressEvent
                        let percent = Math.floor((loaded * 100) / total)
                        this._qs('.progress-bar').style.width = percent + '%'
                    }
                })
                .then(res => {
                    this._qs('.progress').style.display = 'none'
                    this._qs('.progress-bar').style.width = '0'
                    if (res.status == 201) {
                        dispatchEvent(
                            new CustomEvent('pop-up', {
                                detail: {
                                    pop: 'success',
                                    msg: res.data.message,
                                    duration: 3
                                }
                            })
                        )
                    } else throw res.data
                })
                .catch(err =>
                    dispatchEvent(
                        new CustomEvent('pop-up', {
                            detail: {
                                pop: 'error',
                                msg: err.message,
                                duration:
                                    err.duration == undefined
                                        ? 10
                                        : err.duration
                            }
                        })
                    )
                )
        }
        fileReader.readAsDataURL(file)
    } //End of readImage()

    //uploadImage
    uploadImage() {
        this._qs('#upload-image').addEventListener('input', () => {
            this.readImage(
                this._qs('#upload-image').files[0],
                this._qs('.profile-picture')
            )
        })
    } //End of uploadImage()

    //valdate password
    validatePassword() {
        try {
            this.state.validatePassword = true
            //validate Name
            const oldPassword = this._qs('#currentPassword').value
            const newPassword = this._qs('#newPassword').value
            const confirmPassword = this._qs('#confirmPassword').value
            if (oldPassword == '' || newPassword == '' || confirmPassword == '')
                throw { message: 'Password cannot be empty' }
            if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(
                    newPassword
                )
            )
                throw {
                    message:
                        'Enter a Strong password(Minimum 8 characters including minmum 2 Upper cases, 3 lower cases, 1 Special Character (!@#$&*) and 2 numerals (0-9))'
                }
            if (newPassword !== confirmPassword)
                throw { message: 'New password does not match' }

            this._qs('#error-password').innerHTML = ''
        } catch (err) {
            this.state.validatePassword = false
            this._qs('#error-password').innerHTML = err.message
        }
    } //end of validatePassword()

    //update Password
    updatePassword() {
        this._qs('#changePassword').addEventListener('click', async () => {
            // validate Password
            this.validatePassword()
            if (this.state.validatePassword) {
                this._qs('.popup').style.display = 'flex'
                this._qs('.popup').innerHTML = this.confirmPasswordUpdate
                this._qs('.yes-password').addEventListener(
                    'click',
                    async () => {
                        this.setLoader()
                        const data = {
                            userId: this.getUserId(),
                            token: this.getToken(),
                            email: this._qs('#email').value,
                            old: this._qs('#currentPassword').value,
                            new: this._qs('#newPassword').value
                        }

                        await axios
                            .patch(`${this.host}/login/password`, data)
                            .then(res => {
                                if (res.status == 201)
                                    dispatchEvent(
                                        new CustomEvent('pop-up', {
                                            detail: {
                                                pop: 'success',
                                                msg: res.data.message,
                                                duration: 20
                                            }
                                        })
                                    )
                                else throw res.data

                                this.stopLoader()
                                this._qs('.popup').style.display = 'none'
                            })
                            .catch(err => {
                                dispatchEvent(
                                    new CustomEvent('pop-up', {
                                        detail: {
                                            pop: 'error',
                                            msg: err.message,
                                            duration:
                                                err.duration == undefined
                                                    ? 10
                                                    : err.duration
                                        }
                                    })
                                )
                                this.stopLoader()
                                this._qs('.popup').style.display = 'none'
                            })
                    }
                )

                this._qs('.no-password').addEventListener(
                    'click',
                    () => (this._qs('.popup').style.display = 'none')
                )
            } else
                dispatchEvent(
                    new CustomEvent('pop-up', {
                        detail: {
                            pop: 'error',
                            msg:
                                'Please input valid password to update Password',
                            duration: 5
                        }
                    })
                )
        })
    } //End of updatePassword()

    connectedCallback() {
        axios
            .get(
                'http://api.ipstack.com/check?access_key=6a8331292e236ab2f72127dcc28dd9b7'
            )
            .then(res => {
                // console.log(res.data)
                this._qs('.last-location').innerHTML = res.data.country_name
                this._qs(
                    '.last-location'
                ).innerHTML += `<img src="${res.data.location.country_flag}" style="width: 2rem;margin: 0 1rem;"/>`
            })

        //getprofilePicture
        this.getprofilePicture()

        //update profile
        this.updateProfile()

        //clear inputs
        this.clearInputs()

        //update Password
        this.updatePassword()

        //listen for validate
        this.listenInput()

        //uploadImage
        this.uploadImage()
    } //End of connectedCallback()
} //End of class

window.customElements.define('profile-comp', Profile)
