import Base from '../Base.js'
import CSS from './forum.css.js'
import './forum-post.js'

export default class Forum extends Base {
    css = CSS

    content = `
        <div class="heading">
                <h1>HOMEY.LK Forum</h1>
        </div>
        <div class="buttons">
            <div>   
                <button class="tab-button">Forum Home</button>
                <button class="tab-button">My Posts</button>
            </div>
            <div>   
                <button class="tab-button" id="create-post">Create Post + </button>
                <div id="create-post-box"></div>
            </div>
        </div>
        <div class="container">
            <div class="tags">
                <h2 class="tags-txt">Populer <br/>Topics</h2>
                <ul>
                    <li><a href="#">Annexes</a></li>
                    <li><a href="#">Houses</a></li>
                    <li><a href="#">Bordings</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Site rules</a></li>
                    <li><a href="#">Reporting</a></li>
                </ul>
            </div>
            <div class="forum-post">
                <forum-post></forum-post>
                <forum-post></forum-post>
                <forum-post></forum-post>
            </div>
            
        </div>
`
    constructor() {
        super()
        this.mount()
    } //End of constructor

     createPost(){
        this._qs("#create-post").addEventListener("click",async()=>{
            this.setLoader()
            await import('./create-post.js')
                .then(() => {
                    this._qs('#create-post-box').innerHTML = `
                        <create-post>
                        </create-post>`
                    this.stopLoader()
                })
                .catch(err => {
                    this.stopLoader()
                    dispatchEvent(
                        new CustomEvent('pop-up', {
                            detail: {
                                pop: 'error',
                                msg: err.message,
                                duration:
                                    err.duration == undefined ? 3 : err.duration
                            }
                        })
                    )
                })
        })
    }

    connectedCallback() {
        this.createPost();
    } //End of connectedCallback()
} //End of class

window.customElements.define('forum-comp', Forum)
