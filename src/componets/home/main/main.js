import Base from '../../Base.js'
import CSS from './main.css.js'

import '../user-comp.js'

class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate
        this.el = el
        this.loopNum = 0
        this.period = parseInt(period, 10) || 1000
        this.txt = ''
        this.tick()
        this.isDeleting = false
        console.log(this)
    }

    tick() {
        const i = this.loopNum % this.toRotate.length
        const fullTxt = this.toRotate[i]

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`

        const that = this
        let delta = 160 - Math.random() * 100

        if (this.isDeleting) {
            delta /= 2
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false
            this.loopNum++
                delta = 50
        }

        setTimeout(() => {
            that.tick()
        }, delta)
    }
}
export default class Main extends Base {
    css = CSS

    userComp = `
        <div class='user-comp'>
            <user-comp
                mirror='true'
                route='add-new-property'
                id='add-new-property'>
                <img
                    slot='image'
                    defer
                    src='https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg='
                    alt='Image'></img>
                <h1 slot='title'>Rent or Lease your own property</h1>
            </user-comp>
            <user-comp
                mirror='true'
                route='available-property'
                id='find-property'>
                <img
                    slot='image'
                    defer
                    src='https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg'
                    alt='Image'></img>
                <h1 slot='title'>Looking for a place</h1>
            </user-comp>
        </div>
    `

    main = `
        <div class='main-content'>
            <h1 id='main-title'>
                <span
                    id='main-title-text'
                    class='txt-rotate'
                    data-period='1000'
                    data-rotate='[ "Welcome to Homey.lk", "New way to find a Home" ]'></span>
            </h1>
        </div>
    `

    content = `
        <div class='container'>
            <div class='parallax parallax-1'>
                ${this.main}                
                <div class='down-wrap'>
                    <div class='down'>»</div>
                </div>
            </div>

            <div class='description'>
                <h1 class='title title-head'>
                    Everyone Deserves the Opportunity of a Home. <br /> it's
                    just a touch away.
                </h1>
                <h4 class='title'>
                    <span>find great home or find someone for your home</span>
                    <span>
                        Need to find a tenant ? advertise your place for rent or
                        lease{' '}
                    </span>
                    <span>
                        Need to find a property ? look through our vast property
                        collection to find one that suit your needs
                    </span>
                </h4>
                <div class='horizontal-buttons'>
                    <button class='login'>Login</button>
                    <button class='signup'>Sign Up</button>
                </div>
            </div>

            <div class='parallax parallax-2'>
                <span class='slider slider-previous'>‹</span>
                <div class='top-ads'>
                    <div class='ad'></div>
                </div>
                <span class='slider slider-next'>›</span>
            </div>

            <div class='features'>
                <div class='features-row'>
                    <div class='features-image features-image-1'></div>
                    <div class='features-description'>
                        <div class='feature-title'>
                            Stay safe while trading!
                        </div>
                        <div class='feature-body'>
                            All ads are manually reviewed by our team of admins
                            for your safety. All unreliable properties are taken
                            care of by our admins.
                        </div>
                        <div class='feature-more'>
                            <a> Learn More >> </a>
                        </div>
                    </div>
                </div>
                <div class='features-row'>
                    <div class='features-description-reverse'>
                        <div class='feature-title'>
                            Security and reliability
                        </div>
                        <div class='feature-body'>
                            Transfer files between cloud drives, FTP and WebDav.
                            For instance, you can easily move all files from one
                            Google Drive to another or use “copy and paste” to
                            copy certain files from Dropbox to Google Drive. And
                            as cloud transfer runs on Multicloud, transfer
                            process continues even when your computer is powered
                            off.
                        </div>
                        <div class='feature-more'>
                            <a> Learn More >> </a>
                        </div>
                    </div>
                    <div class='features-image features-image-2'></div>
                </div>
                <div class='features-row'>
                    <div class='features-image'></div>
                    <div class='features-description'>
                        <div class='feature-title'>Cloud Transfer</div>
                        <div class='feature-body'>
                            Transfer files between cloud drives, FTP and WebDav.
                            For instance, you can easily move all files from one
                            Google Drive to another or use “copy and paste” to
                            copy certain files from Dropbox to Google Drive. And
                            as cloud transfer runs on Multicloud, transfer
                            process continues even when your computer is powered
                            off.
                        </div>
                        <div class='feature-more'>
                            <a> Learn More >> </a>
                        </div>
                    </div>
                </div>
                <div class='features-row'>
                    <div class='features-description-reverse'>
                        <div class='feature-title'>Cloud Transfer</div>
                        <div class='feature-body'>
                            Transfer files between cloud drives, FTP and WebDav.
                            For instance, you can easily move all files from one
                            Google Drive to another or use “copy and paste” to
                            copy certain files from Dropbox to Google Drive. And
                            as cloud transfer runs on Multicloud, transfer
                            process continues even when your computer is powered
                            off.
                        </div>
                        <div class='feature-more'>
                            <a> Learn More >> </a>
                        </div>
                    </div>
                    <div class='features-image'></div>
                </div>
            </div>

            <div class='parallax parallax-3'>
                <h1 class='api-title'>Technologies and Partners</h1>
                <h4 class='api-description'>They make homey more effecient</h4>
                <div class='api-row'>
                    <span class='slider slider-previous'>‹</span>
                    <div class='api-content'>
                        <div class='api-1'></div>
                        <div class='api-2'></div>
                        <div class='api-3'></div>
                    </div>
                    <span class='slider slider-next'>›</span>
                </div>
            </div>

            <div class='about-us'>
                <div class='about-us-description'>
                    <span>
                        <a name='about-us'></a>
                        <div class='about-us-title'>About Us</div>
                        <div class='about-us-paragraph'>
                            Our primary goal is to uplift the Housing rental system in Sri Lanka and restore it to a glorious state by facilitating
                            and helping the property owners and tenants through technology and transforming the existing environment into a much more
                            efficient, modern way.we can bridge the gap between house owners and tenants by building an interactive community.
                            <br>
                            Homey.lk is for finding Boarding places, Annexes and
                            other properties and We try to provide exact
                            matches, or matches which are similar to the
                            criteria provided.
                        </div>
                    </span>
                </div>
                <div class='news-letter'>
                    <span>
                        <div class='news-letter-title'>
                            Receive renting advice, tips, and more...
                        </div>
                        <div>
                            <div class='news-letter-description'>
                                Subscribe to our newsletter to get latest
                                updates on our offers and features on homey.lk
                            </div>
                            <div class='news-letter-form'>
                                <label for='email'> Enter your email </label>
                                <input
                                    type='email'
                                    placeholder='sample@domain.com'
                                />
                                <button class='subscribe-button'>
                                    
                                    Subscribe
                                </button>
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

    //typingEffect
    // typingEffect(text) {
    //     let target = this._qs('#main-title')
    //     let index = 0
    //     const writing = () => {
    //         if (index < text.length) {
    //             target.innerHTML += text.charAt(index)
    //             index++
    //         } else {
    //             target.innerHTML = 'H'
    //             index = 0
    //         }
    //     }
    //     setInterval(() => writing(), 200)
    // } //End of typingEffect()

    typingEffect() {
        const elements = this._qs('#main-title-text')
        const toRotate = elements.getAttribute('data-rotate')
        const period = elements.getAttribute('data-period')
        if (toRotate) {
            new TxtRotate(elements, JSON.parse(toRotate), period)
        }
    }

    // Scroll haf of the page
    scrollHalf() {
        window.scrollBy(0, document.documentElement.clientHeight / 2)
    }

    scrollDown() {
        this._qs('.down-wrap').addEventListener('click', () =>
            this.scrollHalf()
        )
    }

    // Load signuo or login form
    loadForm(elem) {
            this._qs(`.${elem}`).addEventListener('click', () => {
                dispatchEvent(new Event(`load-${elem}-form`))
            })
            if (this.isLogin()) this._qs(`.${elem}`).style.display = 'none'
        } //End of loadForm()

    connectedCallback() {
            //typingEffect
            this.typingEffect()
                //scroll down page when click scroll down arrow
            this.scrollDown()

            // Load signup or login form
            this.loadForm('login')
            this.loadForm('signup')
        } //End of connectedCallback()
} //End of Class

window.customElements.define('main-comp', Main)