export default CSS = `
    .backdrop {
        position: fixed;
        overflow: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0, 0.7);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
    }

    .backdrop::-webkit-scrollbar {
      width: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        min-width: 60%;
        min-height: 60%;
        padding: 2rem;
        border-radius: 2px;
        max-width: 90%;
        transition: all 0.5s ease-in-out;
        position: absolute;
        top: 5rem;
    }

    #close-popup {
        color: #444444;
        font-size: 3rem;
        transform: rotate(45deg);
        cursor: pointer;
        position: absolute;
        right: 2%;
        top: 0;
    }

    .row {
        margin: 1rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .column {
      display: flex;
      flex-direction: column;
    }

    .menu-title {
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family: monospace;
    }

    .sub-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0.5rem auto;
    }

    .collapsible {
      display: flex;
      width: 100%;
    }

    .collapsible-row {
      justify-content: space-around;
      width: 100%;
    }

    .collapse {
      width: 100%;
    }

    .collapse > .row {
      justify-content: space-between;
    }
  
    .expand {
      font-size: 2rem;
      font-weight: 700;
      cursor: pointer;
    }

    .display-picture {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      border: solid #ffffff 2px;
      box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    }
  
    .name {
      font-size: 1.5rem;
      font-weight: bold;
      font-family: inherit;
      display: flex;
      flex-wrap: wrap;
      margin: 0.5rem;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
  
    .status {
      font-size: 0.8rem;
    }
  
    .email, .mobile {
      margin: 0.2rem;
      font-size: 0.9rem;
    }
  
    .sub-row:last-child {
      flex-direction: row;
      justify-content: space-between;
    }
  
    
    button {
      height: 2rem;
      border-radius: 2px;
      outline: none;
      border: none;
      font-size: 0.8rem;
      color: #fff;
      cursor: pointer;
      transition: all 1s;
      width: 45%;
    }
  
    .danger-button {
      background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
    }
  
    .danger-button:hover {
      box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
    }
  
    .primary-button {
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    }
  
    .primary-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
    }
  
    .button-group > button {
        width: 10rem;
        margin: 0.5rem auto;
    }
  
    .button-group {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  
    .button-group-user {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  
    .button-group-user > button {
      margin: 0.4rem auto;
     }
  
    .profile{
      margin: 1rem;
      transition: all 1s ease-in-out;
      background-color: #ffffff;
    }
  
    .users {
      display: flex;
      flex-wrap: wrap;
    }
  

`