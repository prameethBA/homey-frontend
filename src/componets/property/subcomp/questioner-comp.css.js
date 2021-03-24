export default CSS = `
    .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        scroll-behavior: auto;
        background-color: rgba(0, 0, 0, 0.7);
        transition: all 0.5s ease-in-out;
    }

    .form {
        background-color: #ffffff;
        min-width: 60%;
        min-height: 60%;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        transition: all 1s ease-in-out;
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

    .inner-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
        transition: all 1s ease-in-out;
    }

    .number {
        font-weight: bold;
        margin: 2rem;
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
        margin: auto auto 1rem auto;
    }

    select, .answer {
        outline: none;
        border: navajowhite;
        background-color: #a9a9a9;
        height: 2rem;
        min-width: 10rem;
        border-radius: 1rem;
        margin: auto auto 1rem auto;
        color: #ffffff;
        text-indent: 1rem;
        text-align: center;
        background-image: linear-gradient(to right top, #ff9900, #f69d14, #eea122, #e6a42d, #dea738);
    }

    .buttons {
        display: flex;
        width: 100%;
    }
    
    .button {
        height: 2rem;
        border-radius: 1rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        color: aliceblue;
        cursor: pointer;
        transition: all 1s;
        text-transform: unset;
        padding: 0.3rem;
        margin: 1rem;
        width: 50%;
    }

    .button:hover {
        cursor: pointer;
        color: #000000;
        box-shadow: 0 0 20px -5px;
    }
    @media(max-Width: 800px){
        .title {
            margin: 0em 3em 0em 4em; 
        }
        .buttons {
            width: 70%;
        }
      }

`