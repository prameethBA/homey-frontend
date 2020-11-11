export default CSS = `
    .backdrop {
        position: fixed;
        scroll-behavior: auto;
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
    }

    #close-popup {
        color: #444444;
        font-size: 3rem;
        transform: rotate(45deg);
        cursor: pointer;
        position: absolute;
        right: 20%;
        margin-top: -1rem;
    }

    .row {
        margin: 1rem 0;
        text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
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

      .require {
          color: red;
          cursor: help;
      }

`