export default CSS = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
  }
  
  body{
    background-color: #dee1e3;
    font-family: "Roboto", "Tahoma", "Arial", sans-serif;,
  }
  
  .text-right{ text-align: right; }
  
  .comments-app{
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 5rem 10rem 1rem 10rem;
    top: 0;
    left: 0;
    right: 0;
    overflow: auto;
    bottom: 0;
    background-color: rgba(255,255,255,1);
    z-index: 1;
  }

  *::-webkit-scrollbar {
    width: 1px !important;
  }
  
  .comments-app h1{
    margin-bottom: 1.5em;
    text-align: center;
    text-shadow: 0 0 2px rgba(152, 152, 152, 1);
  }
  
  .comment-form{  }
  .comment-form .comment-avatar{  }
  
  .comment-form .form{ margin-left: 100px; }
  
  .comment-form .form .form-row{ margin-bottom: 10px; }
  .comment-form .form .form-row:last-child{ margin-bottom: 0; }
  
  .comment-form .form .input{
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    color: #555f77;
    font-family: inherit;
    font-size: 14px;
    padding: 5px 10px;
    outline: none;
    width: 100%;
  
    -webkit-transition: 350ms box-shadow;
    -moz-transition: 350ms box-shadow;
    -ms-transition: 350ms box-shadow;
    -o-transition: 350ms box-shadow;
    transition: 350ms box-shadow;
  }
  
  .comment-form .form textarea.input{
    height: 100px;
    padding: 15px;
  }
  
  .comment-form .form label{
    color: #888888;
    font-family: inherit;
    font-size: 14px;
  }
  
  .comment-form .form input[type=submit]{
    background-color: #555f77;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: #fff;
    cursor: pointer;
    display: block;
    margin-left: auto;
    outline: none;
    padding: 6px 15px;
  
    -webkit-transition: 350ms box-shadow;
    -moz-transition: 350ms box-shadow;
    -ms-transition: 350ms box-shadow;
    -o-transition: 350ms box-shadow;
    transition: 350ms box-shadow;
  }
  
  .comment-form .form .input:focus,
  .comment-form .form input[type=submit]:focus,
  .comment-form .form input[type=submit]:hover{
    box-shadow: 0 2px 6px rgba(121, 137, 148, .55);
  }
  
  .comment-form .form.ng-submitted .input.ng-invalid,
  .comment-form .form .input.ng-dirty.ng-invalid{
    box-shadow: 0 2px 6px rgba(212, 47, 47, .55) !important;
  }
  
  .comment-form .form .input.disabled {
      background-color: #E8E8E8;
  }
  
  
  .comments{  }
  
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
    height: 5rem;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 5rem;
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
    background-color: #fcfcfc;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    margin-left: 100px;
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
    color: #555f77;
    font-size: 15px;
    margin-bottom: 25px;
  }
  
  .comment .comment-footer{
    color: #acb4c2;
    font-size: 13px;
  }
  
  .comment .comment-footer:after{
    content: "";
    display: table;
    clear: both;
  }
  
  .comment .comment-footer a{
    color: #acb4c2;
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

  #close {
    color: #767676;
    display: inline-block;
    font-size: 4rem;
    transform: rotate(45deg);
    position: absolute;
    right: 3rem;
    top: 3rem;
    cursor: pointer;
  }

  #close:hover {
    color: #111111;
  }
  
`
