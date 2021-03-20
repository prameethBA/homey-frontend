export default CSS = `
    .backdrop {
        position: fixed;
        overflow: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0, 0.7);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
    }

    .report-container {
        display: flex;
        flex-direction: column;
        border-radius: 2px;
        max-width: 90%;
        transition: all 0.5s ease-in-out;
        background-color: #444442;
        padding: 2rem;
        margin: 8rem;
    }
    
    #close-popup {
        color: #878787;
        font-size: 3rem;
        transform: rotate(45deg);
        cursor: pointer;
        position: absolute;
        right: 20%;
        margin-top: -1rem;
        transition: all 1s ease;
    }

    #close-popup:hover {
        color: #cccccc;
    }
    
    h1 {
        font-family: 'Poppins', sans-serif, 'arial';
        font-weight: 600;
        font-size: 1rem;
        color: white;
        text-align: center;
    }
    
    h4 {
        font-family: 'Roboto', sans-serif, 'arial';
        font-weight: 400;
        color: #9b9b9b;
    }
    
    input:focus~label,
    textarea:focus~label,
    input:valid~label,
    textarea:valid~label {
        font-size: 0.8rem;
        top: -2.5rem;
        left: -1.7rem;
        color: #ff4400;
        transition: all 0.225s ease;
    }
    
    .styled-input {
        float: left;
        width: 293px;
        margin: 1rem 0;
        position: relative;
        border-radius: 4px;
    }
    
    @media only screen and (max-width: 768px) {
        .styled-input {
            width: 100%;
        }
    }
    
    .styled-input label {
        color: #999;
        padding: 1.3rem 30px 1rem 30px;
        position: absolute;
        top: -0.75rem;
        transition: all 0.25s ease;
        pointer-events: none;
    }
    
    .styled-input.wide {
        width: 650px;
        max-width: 100%;
    }
    
    input,
    textarea {
        width: 100%;
        font-size: 1rem;
        background-color: #2d2d2d;
        color: white;
        border-radius: 3px;
        border: none;
        height: 2rem;
    }
    
    input:focus,
    textarea:focus {
        outline: 0;
    }
    
    input:focus~span,
    textarea:focus~span {
        width: 100%;
        -webkit-transition: all 0.075s ease;
        transition: all 0.075s ease;
    }
    
    textarea {
        width: 100%;
        min-height: 15em;
    }
    
    .input-container {
        width: 650px;
        max-width: 100%;
        margin: 20px auto 25px auto;
    }
    
    button {
        height: 2rem;
        outline: none;
        border: none;
        font-size: 0.8rem;
        color: #fff;
        cursor: pointer;
        transition: all 1s;
        width: 45%;
        background-image: linear-gradient(to right top, #ff8700, #ff8100, #ff7a00, #ff7400, #ff6d00);
        overflow: hidden;
        border-radius: 1rem;
    }

    button:hover, .primary-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
    }
    
    .col-xs-12 {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .submit-btn {
            width: 100%;
            float: none;
            text-align: center;
        }
    }

`
