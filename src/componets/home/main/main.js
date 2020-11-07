import Base from '../../Base.js'
import CSS from './main.css.js'

import '../user-comp.js'

export default class Main extends Base {

    css = CSS

    content = `
        <div class="container">
          <div class="parallax parallax-1">
            <div id="count-down"></div>
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
            <div class="down-wrap"><div class="down">»</div></div>
         </div>
            
        <div class="description">
            <h1 class="title title-head">Everyone Deserves the Opportunity of a Home. <br/> it's just a touch away.</h1>
            <h4 class="title">
                <span>find great home or find someone for your home</span>
                <span>Need to find a tenant ? advertise your place for rent or lease </span>
                <span>Need to find a property ? look through our vast property collection to find one that suit your needs</span>
            </h4>
            <div class="horizontal-buttons">
                <button class="login">Login</button>
                <button class="signup">Sign Up</button>
            </div>
        </div>

        <div class="parallax parallax-2">
            <span class="slider slider-previous">‹</span>
            <div class="top-ads">
                <div class='ad'></div>
            </div>
            <span class="slider slider-next">›</span>
        </div>

        <div class="features">
            <div class="features-row">
                <div class="features-image features-image-1"></div>
                <div class="features-description">
                    <div class="feature-title">
                        Stay safe while trading!
                    </div>
                    <div class="feature-body">
                        All ads are manually reviewed by our team of admins for your safety. All unreliable properties are taken care of by our  admins.
                    </div>
                    <div class="feature-more">
                        <a> Learn More >> </a>
                    </div>
                </div>
            </div>
            <div class="features-row">
                <div class="features-description-reverse">
                    <div class="feature-title">
                        Security and reliability
                    </div>
                    <div class="feature-body">
                        Transfer files between cloud drives, FTP and WebDav. For instance, you can easily move all files from one Google Drive to another or use “copy and paste” to copy certain files from Dropbox to Google Drive. And as cloud transfer runs on Multicloud, transfer process continues even when your computer is powered off.
                    </div>
                    <div class="feature-more">
                        <a> Learn More >> </a>
                    </div>
                </div>
                <div class="features-image features-image-2"></div>
            </div>
            <div class="features-row">
                <div class="features-image"></div>
                <div class="features-description">
                    <div class="feature-title">
                        Cloud Transfer
                    </div>
                    <div class="feature-body">
                        Transfer files between cloud drives, FTP and WebDav. For instance, you can easily move all files from one Google Drive to another or use “copy and paste” to copy certain files from Dropbox to Google Drive. And as cloud transfer runs on Multicloud, transfer process continues even when your computer is powered off.
                    </div>
                    <div class="feature-more">
                        <a> Learn More >> </a>
                    </div>
                </div>
            </div>
            <div class="features-row">
                <div class="features-description-reverse">
                    <div class="feature-title">
                        Cloud Transfer
                    </div>
                    <div class="feature-body">
                        Transfer files between cloud drives, FTP and WebDav. For instance, you can easily move all files from one Google Drive to another or use “copy and paste” to copy certain files from Dropbox to Google Drive. And as cloud transfer runs on Multicloud, transfer process continues even when your computer is powered off.
                    </div>
                    <div class="feature-more">
                        <a> Learn More >> </a>
                    </div>
                </div>
                <div class="features-image"></div>
            </div>
        </div>

        <div class="parallax parallax-3">
            <h1 class="api-title">
                Technologies and Partners
            </h1>
            <h4 class="api-description">
                They make homey more effecient 
            </h4>
            <div class="api-row">
                <span class="slider slider-previous">‹</span>
                <div class="api-content">
                    <div class="api"></div>
                    <div class="api"></div>
                    <div class="api"></div>
                </div>
                <span class="slider slider-next">›</span>
            </div>
        </div>

        <div class="about-us">
            <div class="about-us-description">
                <span>
                    <a name='about-us'></a>
                    <div class="about-us-title">
                        About Us
                    </div>
                    <div class="about-us-paragraph">
                        Homey.lk is for finding Boarding places, Annexes and other properties and We try to provide exact matches, or matches which are similar to the criteria provided.
                    </div>
                </span>
            </div>
            <div class="news-letter">
                <span>
                    <div class="news-letter-title">
                        Receive renting advice, tips, and more...
                    </div>
                    <div>
                        <div class="news-letter-description">
                            Subscribe to our newsletter to get latest updates on our offers and features on homey.lk
                        </div>
                        <div class="news-letter-form">
                            <label for="email"> Enter your email </label>
                            <input type="email" placeholder="sample@domain.com"/>
                            <button class="subscribe-button"> Subscribe </button>
                        </div>
                    </div>
                </span>
            </div>
        </div>

    </div>
`
    constructor() {
        super()
        this.mount()

        this.setPath('/')
    }

    // Scroll haf of the page
    scrollHalf() {
        window.scrollBy(0, document.documentElement.clientHeight / 2)
    }

    scrollDown() {
        this._qs('.down-wrap').addEventListener('click', () => this.scrollHalf())
    }

    // Count down
    countDown() {
        const countDownDate = new Date("Nov 13, 2020 23:59:59").getTime()
        let x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        this._qs("#count-down").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            this._qs("demo").innerHTML = "TOO LATE! HURRY UP!";
        }
        }, 1000);
    }//End of countDown()

    // Load signuo or login form
    loadForm(elem) {
        this._qs(`.${elem}`).addEventListener('click', () => {
            dispatchEvent(new Event(`load-${elem}-form`))
        })
        if(this.isLogin()) this._qs(`.${elem}`).style.display = 'none'
    }//End of loadForm()

    connectedCallback() {

        //scroll down page when click scroll down arrow
        this.scrollDown()

        // Count down for interim
        this.countDown()

        // Load signup or login form
        this.loadForm('login')
        this.loadForm('signup')

    }//End of connectedCallback()

}//End of Class

window.customElements.define('main-comp', Main)