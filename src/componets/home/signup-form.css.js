export default CSS = `
    
    #backdrop {
        position: fixed;
        z-index: 99;
        background-color: rgba(0,0,0,0.7);
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        cursor: url(./assets/icon/remove-icon.png), auto;
    }

    .form {
       position: absolute;
        z-index: 100;
        width: 30%;
        background-color: rgba(0,0,0,0.9);
        color: #eeeeee;
        padding: 0.5rem 3rem;
        padding-bottom: 3rem;
        border-radius: 1px;
        transition: all 0.5s ease;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
        margin-top: 2rem;    
    }

    h2 {
        margin: 1rem;
        text-align: center;
    }

    .textField {
        outline: none;
        width: 80%;
        background-color: transparent;
        border: none;
        border-bottom: solid 1.25px #cccccc;
        color: #ffffff;
        display: block;
        margin: 2rem auto;
    }

    .textField:focus,
    .textField:valid {
        border-color: #38ee17;
    }

    .textField-label {
        position: absolute;
        display: block;
        pointer-events: none;
        transform: translate(3vw, -3.5rem);
        transition: all 0.2s;
    }

    .textField:focus + .textField-label,
    .textField:valid + .textField-label {
        transform: translate(2rem, -4.5rem);
        font-size: 0.8em;
    }

    .terms {
        display: table;
        margin: 1rem auto;
        transform: translateX(1rem);
    }

    .terms > label {
        font-size: 0.8rem;
        cursor: pointer;
    }

    .terms input {
        display: none;
        cursor: pointer;
    }

    .checkmark {
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border-radius: 50%;
        border: solid 1px #ffffff;
        transition: all 1s;
        transform: translateX(-2rem);
    }

    .terms input:checked ~ .checkmark {
        background-color: #32be8f;
    }

    .checkmark:after {
        content: "";
        display: none;
        margin: 2px 0 0 6px;
    }

    .terms input:checked ~ .checkmark:after {
        display: block;
    }

    .terms .checkmark:after {
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    button {
        position: relative;
        width: 100%;
        height: 2.5rem;
        display: block;
        border-radius: 3rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        margin: 1rem auto;
        cursor: pointer;
        transition: all 1s;
    }

    button:hover{
        background-position: right;
        color: black;
    }

    button:disabled {
        background-image: linear-gradient(to right, gray, gray);
        background-color: gray;
    } 

    .row a {
        display: inline-block;
        color: #9999ee;
        text-decoration: underline;
    }

    .hr-separator {
        width: 80%;
        border: solid 1px;
        margin: 2rem auto;
    }

    .or-separator {
        margin: auto;
        display: table;
    }

    .google {
        color: blue;
        background-size: 200%;
        background-image: url("../assets/img/google.svg");
    }


    .facebook {
        color: red;
        background-size: 200%;
        background-image: url("../assets/img/facebook.svg");
    }

    a:hover{
        color: #F4D03F;
        cursor: pointer;
    }

    button > img {
        position: absolute;
        transform: translate(-2rem, -0.3rem);
    }

    .validation {
        display: table;
        color: red;
        font-size: 0.8rem;
        font-weight: bold;
        margin: 0.3rem auto;
    }

    .login {
        display: grid;
        grid-template-columns: 56% 7% 78%;
        transform: translateX(1.5rem);
    }

    .login-button {
        margin: 0;
        font-size: 0.6em;
        width: 25%;
        height: 1.3rem;
    }

    .login a {
        font-size: 0.8em;
        display: contents;
    }

    @media screen and (max-width: 1200px) {
        .textField-label {
            transform: translate(4vw, -3.5rem);
        }
    }

    @media screen and (max-width: 992px) {
        .form {
            width: 40%;
        }
    }

    @media screen and (max-width: 768px) {
        .form {
            width: 50%;
        }
    }

    @media screen and (max-width: 512px) {
        .form {
            width: 60%;
        }

        .google , .facebook{
            font-size: 0.6rem;
            padding-bottom: 0.2rem;
        }

        .login {
            grid-template-columns: 49% 10% 93%;
        }
    }

`
