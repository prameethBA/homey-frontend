import Base from './../Base.js'
import CSS from './account-settings.css.js'

export default class AccountSettings extends Base {

  css =  CSS


  content = `
<div class="container container_profile">
        <aside>
            <div class="profile_pic">
                <img src="../assets/img/profile2.png" alt="">
                <h3>Full Name</h3>
            </div>
            <div class="profile_details">
                <article class="profile_detail">
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, cum odit velit quaerat, a cumque cupiditate ipsam iure iusto</p> 
                </article>
                <article class="profile_detail">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, cum odit velit quaerat, a cumque cupiditate ipsam iure iusto</p> 
                </article>
                <article class="profile_detail">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, cum odit velit quaerat, a cumque cupiditate ipsam iure iusto</p> 
                </article>
                <article class="profile_detail">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, cum odit velit quaerat, a cumque cupiditate ipsam iure iusto</p> 
                </article>
            </div>
        </aside>
        <main>
            <form action="">
                <div class="profile-item-two">
                    <label for="">First Name</label>
                    <input type="text">
                </div>
                <div class="profile-item-two">
                    <label for="">Last Name</label>
                    <input type="text">
                </div>
                <div class="profile-item-two">
                    <label for="">NIC</label>
                    <input type="text">
                </div>
                <div class="profile-item-two">
                    <label for="">Mobile No</label>
                    <input type="text">
                </div>
                <div class="profile-item-one">
                    <label for="">Email</label>
                    <input type="text">
                </div>
                <div class="profile-item-one">
                    <label for="">User Detail</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="image_property">
                    <label for="">Profile picture</label>
                    <div class="image_upload image_upload-lg">
                        <label for="upload-photo"></label>
                        <input type="file" name="photo" id="upload-photo" />
                        <input type="submit"value="Upload" class="btn btn-upload btn-sm">
                    </div>
                    
                </div>
                <div class="btn-group">
                    <button class="btn btn-primary btn-sm">Save</button>
                    <a href="" class="btn btn-secondary btn-sm ">Cancel</a>

                </div>
               
            </form>
        </main>
    </div>
`
    constructor() {
      super()
      this.mount()

    }

  }

  window.customElements.define('account-settings', AccountSettings)