export default CSS =`
  .container {
    margin: 5rem 2.5rem;
  }
  
  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .first-aside {
    position: relative;
    width: 30%;
    align-items: center;
  }

  .profile-picture-container {
    width: 20vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .profile-picture {
    position: relative;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    border: solid #ffffff 6px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  }

  .name-container {
    text-align: center;
  }

  .name {
    font-size: 2rem;
    font-weight: bold;
  }

  .last-login-container {
    flex-direction: column;
    display: flex;
    margin: 1rem auto;
  }

  .last-login-container > .column {
    flex-direction: row;
  }

  .last-login-container > .column, .last-login-container > span {
    margin: 0.2rem auto;
  }

  .form {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-direction: column;
    width: 75%;
    margin: 3rem auto;
  }

  .form-column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .form-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    height: 2.2rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    font-size: 0.8rem;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    transition: all 1s;
    margin: 1rem auto;
    width: 40%;
  }

  button:hover {
    box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
  }

  #cancel {
    background-image: none;
    color: #000000;
  }

  #cancel:hover {
    box-shadow: 1px 1px 10px 3px rgba(150,150,150,0.5);
  }

  input {
    margin: 0.4rem;
    height: 2rem;
    outline: none;
    border: 1px solid;
    border-radius: 1rem;
    text-indent: 1rem;
  }

  label {
    text-indent: 0.5rem;
  }

  hr {
    height: 1px;
    width: 90%;
    background-color: #444444;
  }

  .password-title {
    font-size: 1.2rem;
    font-weight: bold;
    text-indent: 0.5rem;
    margin: 1rem 0;
  }

  #year, #day, #month {
    text-align: center;
    text-indent: unset;
  }

  .show-more a {
    text-decoration: underline;
    font-size: 0.9rem;
    color: #120cf4;
    cursor: pointer;
  }

`