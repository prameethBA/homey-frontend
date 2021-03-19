import Base from '../Base.js'
import CSS from './forum.css.js'

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
                <button class="tab-button">Create Post + </button>
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
            <div class="posts">
                <div class="post-container">
                    <div class="post-row">
                        <img class="user-image" src="user.png" alt="">
                        <h4 class="post-username">Username</h4>
                    </div>
                    <div class="post-row">
                        <h3 class="post-heading">Post title txt</h3>
                        <p class="justify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div class="post-row">
                        <i class="fa fa-thumbs-up" style="font-size:25px; color:#138D75; margin-right:10px;"></i>10
                        <i class="fa fa-thumbs-down" style="font-size:25px; color:#black; margin-left:10px; margin-right:10px;"></i>1
                        <i class="fa fa-comment-o" style="font-size:25px; color:#black; margin-left:25px; margin-right:15px;"></i>3
                        <textarea class="textarea" rows="1" cols="60" id="comment" name="comment" placeholder="Write comment"></textarea>
                    </div>
                    <hr>
                </div>
`
    constructor() {
        super()
        this.mount()
    } //End of constructor
} //End of class

window.customElements.define('forum-comp', Forum)
