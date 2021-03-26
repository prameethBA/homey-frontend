export default CSS = `

  
  .textarea {
      display: inline-flex;
      width: 90%;
      height: 1.5rem;
      border: none;
      border-radius: 0.2rem;
      text-indent: 0.2rem;
  }
  
  .container {
    display: flex;
    align-self: center;
    justify-content: center;
    margin-right: 1.5em;
    margin-top: 1em;
  }
  
  .posts {
    flex: 85%;
    padding-right: 2px;
    margin-left: 3em;
  }

  p{
    width: 95%;
    text-align: justify;
  }

  hr{
    width: 95%;
  }

  .form-row{ 
    margin-bottom: 10px; 
    display: flex;
  }

  .form-row:last-child{ 
    margin-bottom: 0; 
  }

#delete-post{
  margin-left: 1em;
}

  #submit {
    background-color: #555f77;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    color: #fff;
    cursor: pointer;
    display: block;
    outline: none;
    padding: 6px 15px;
  
    -webkit-transition: 350ms box-shadow;
    -moz-transition: 350ms box-shadow;
    -ms-transition: 350ms box-shadow;
    -o-transition: 350ms box-shadow;
    transition: 350ms box-shadow;
  }
  
  #submit:focus,
  #submit:hover{
    box-shadow: 0 2px 6px rgba(121, 137, 148, .55);
  }
  @media(max-Width:600px){
    .container {
      flex-direction: column;
    }
  }
  
  
`;