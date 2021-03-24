export default CSS = `
.comment-form,
  .comment{
    margin-bottom: 20px;
    position: relative;
    z-index: 0;
  }
  
  .comment-form .comment-avatar,
  .comment .comment-avatar{
    border: none;
    border-radius: 50%;
    box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.7);
    height: 3rem;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .comment-form .comment-avatar img,
  .comment .comment-avatar img{
    display: block;
    height: auto;
    width: 100%;
  }
  
  .comment .comment-box{
    background-color: #DADADA;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    margin-left: 80px;
    min-height: 60px;
    position: relative;
    padding: 15px;
  }
  
  .comment .comment-box:before,
  .comment .comment-box:after{
    border-width: 10px 10px 10px 0;
    border-style: solid;
    border-color: transparent #FCFCFC;
    content: "";
    left: -10px;
    position: absolute;
    top: 20px;
  }
  
  .comment .comment-box:before{
    border-color: transparent rgba(0, 0, 0, .05);
     top: 22px;
  }
  
  .comment .comment-text{
    color: #797979;
    font-size: 15px;
    margin-bottom: 25px;
  }
  
  .comment .comment-footer{
    color: #414345;
    font-size: 13px;
  }
  
  .comment .comment-footer:after{
    content: "";
    display: table;
    clear: both;
  }
  
  .comment .comment-footer a{
    color: #493240;
    text-decoration: none;
  
    -webkit-transition: 350ms color;
    -moz-transition: 350ms color;
    -ms-transition: 350ms color;
    -o-transition: 350ms color;
    transition: 350ms color;
  }
  
  .comment .comment-footer a:hover{
    color: #555f77;
    text-decoration: underline;
  }
  
  .comment .comment-info{
    float: left;
    width: 85%;
  }
  
  .comment .comment-author{ }
  .comment .comment-date{ }
  
  .comment .comment-date:before{
    content: "|";
    margin: 0 10px;
  }
  
  .comment-actions{
    float: left;
    text-align: right;
    width: 15%;
  }
`