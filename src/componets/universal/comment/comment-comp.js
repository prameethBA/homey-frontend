import Base from '../../Base.js'
import CSS from './comment-comp.css.js'

export default class Comment extends Base {
    css = CSS

    loader = `<img src="/assets/img/alt/load-post.gif">`

    content = `
    
    <div class="comments-app">
        <div id="close">+</div>
        <h1>${this.getParams('data-data')}</h1>
        
        <!-- From -->
        <div class="comment-form">
          <!-- Comment Avatar -->
          <div class="comment-avatar" id="profile-picture">
            ${this.loader}
          </div>
      
          <div class="form" name="form">
            <div class="form-row">
              <textarea class="input" placeholder="Add comment..." required id="feedback"></textarea>
            </div>
            <div class="form-row">
              <!--<input class="input" placeholder="Email" type="email">-->
            </div>
            <div class="form-row text-right">
              <input id="comment-anonymous" type="checkbox">
              <label for="comment-anonymous">Anonymous</label>
            </div>
            <div class="form-row">
              <input type="submit" value="Add Comment" id="submit">
            </div>
          </div>
        </div>
      
        <!-- Comments List -->
        <div class="comments">
          <!-- Comment -->
          <div class="comment">
            <!-- Comment Avatar -->
            <div class="comment-avatar">
              <img >
            </div>
      
            <!-- Comment Box -->
            <div class="comment-box">
              <div class="comment-text"></div>
              <div class="comment-footer">
                <div class="comment-info">
                  <span class="comment-author">
                    <em >Anonymous</em>
                    <span class="comment-author"></span>
                  </span>
                  <span class="comment-date"></span>
                </div>
      
                <div class="comment-actions">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Comment - Dummy -->
          <div class="comment">
            <!-- Comment Avatar -->
            <div class="comment-avatar">
              <img src="http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80">
            </div>
      
            <!-- Comment Box -->
            <div class="comment-box">
              <div class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum.</div>
              <div class="comment-footer">
                <div class="comment-info">
                  <span class="comment-author">
                    <span class="comment-author">Prameeth Maduwantha</span>
                  </span>
                  <span class="comment-date">Feb 2, 2013 11:32:04 PM</span>
                </div>
      
                <div class="comment-actions">
                  <a href="#">Reply</a>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Comment - Dummy -->
          <div class="comment">
            <!-- Comment Avatar -->
            <div class="comment-avatar">
              <img src="http://lorempixel.com/200/200/people">
            </div>
      
            <!-- Comment Box -->
            <div class="comment-box">
              <div class="comment-text">Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</div>
              <div class="comment-footer">
                <div class="comment-info">
                  <span class="comment-author">
                    <span class="comment-author">Osanda Rathnayake</span>
                  </span>
                  <span class="comment-date">Jan 31, 1986 11:32:04 PM</span>
                </div>
      
                <div class="comment-actions">
                  <a href="#">Reply</a>
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
    } //End of constructor

    //getprofilePicture
    async getprofilePicture() {
        try {
            const res = await axios.post(`${this.host}/images/profile/get`, {
                userId: this.getUserId(),
                token: this.getToken()
            })
            this._qs('#profile-picture').innerHTML = `<img 
              src="${
                  res.data.image != ''
                      ? res.data.image
                      : '/assets/img/alt/no-mage.png'
              }" 
              alt="Profile picture"
              />`
        } catch (err) {
            console.log(err)
        }
    } //End of getprofilePicture()

    //add new comment
    addNewComment() {
        this._qs('#submit').addEventListener('click', async () => {
            try {
                const feedback = this._qs('#feedback').value
                const anonymous = this._qs('#comment-anonymous').checked ? 1 : 0

                const res = await axios.post(`${this.host}/feedback/add`, {
                    ...this.authData(),
                    feedback: feedback,
                    anonymous: anonymous
                })

                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        })
    } //End of addNewComment()

    connectedCallback() {
        this._qs('#close').addEventListener(
            'click',
            () => (this._qs('.comments-app').style.display = 'none')
        )

        //getprofilePicture
        this.getprofilePicture()

        //add new comment
        this.addNewComment()
    } //End of connectedCallback
} //End of class

window.customElements.define('comment-comp', Comment)
