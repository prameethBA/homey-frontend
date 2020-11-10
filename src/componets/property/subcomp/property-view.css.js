export default CSS = `
    .container {
        min-width: 300px;
        width: 30%;
        min-height: 450px;
        height: 26rem;
        border-radius: 4px;
        box-shadow: 0 0 3px 2px rgba(36,31,135,0.7);
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .slide  {
        display: flex;
        justify-content: space-between;
    }

    .toggle:hover {
        opacity: 0.7;
        transition: 0.1s;

    }

    .toggle:active {
        opacity: 0.9;
    }

    .toggle-next {
        right: 1%;
    }
    
    .toggle-previous {
        left: 1%;
    }

    ::slotted(img) {
        display: none;
        width: 100%;
        max-height: 210px;
        min-height: 210px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    ::slotted(.title) {
        font-weight: bold;
        max-height: 4.1rem;
        overflow: hidden;
        word-break: break-word;
        margin: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        line-height: 1rem;
        text-align: justify;
    }

    .details {
        display: flex;
        flex-direction: column;
     }

    .detail-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: auto 1rem;
    }

    .quick-links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
        width: 40%;
    }

    .quick-links > div {
        cursor: pointer;
    }

    // .details > div:first-child > span {
    //     position: absolute;
    //     right: 0;
    //     left: 0;
    //     display: grid;
    //     grid-template-columns: 15% 20% auto;
    // }

    // .star {
    //     background: url(/assets/icon/start-yellow.png);
    //     width: 35px;
    //     height: 35px;
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //     cursor: pointer;
    //     margin: 0.5rem auto 0 0.5rem;
    // }

    // .share {
    //     background: url(/assets/icon/share.png);
    //     width: 35px;
    //     height: 35px;
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //     cursor: pointer;
    //     margin: 0.5rem auto 0 0.5rem;
    // }

    // .report {
    //     display: flex;
    //     align-items: center;
    //     cursor: pointer;
    // }

    ::slotted(.price) {
        right: 1rem;
        font-weight: bold;
    }

    .online-payment {
        display: flex;
        justify-content: space-between;
        margin: auto 1rem;
    }

    .switch {
        position: relative;
        display: flex;
        width: 3rem;
        height: 1.5rem;
    }
      
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #767676;
        transition: 0.4s;
    }

    .toggle:before {
        position: absolute;
        content: '';
        height: 95%;
        width: 1.4rem;
        left: 1px;
        bottom: 1px;
        background-color: #eeeeee;
        transition: 0.4s;
      }

    input:checked + .toggle {
        background-color: #34af32;
    }
    
    input:focus + .toggle {
        box-shadow: 0 0 1px #00a5cf;
    }
    
    input:checked + .toggle:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    
    .toggle.round {
        border-radius: 34px;
    }
    
    .toggle.round:before {
        border-radius: 50%;
    }

    ::slotted(.description) {
        padding: 0.5rem;
        margin-top: 2.5rem;
        height: 4.5rem;
        overflow: hidden;
        word-break: break-word;
    }

    button {
        width: 30%;
        display: inline-block;
        height: 2em;
        border-radius: 25px;
        outline: none;
        border: none;
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: -1rem;
        transition: all 1s;
    }
   
    button:hover{
        color: #000000;
    }

    .comment {
        background-image: linear-gradient(to right top, #627e05, #6e8116, #7a8423, #84872f, #8e8a3a);
    }

    .reserve {
        background-image: linear-gradient(to right top, #ff8700, #ff8100, #ff7a00, #ff7400, #ff6d00);
    }

    .more {
        background-image: linear-gradient(to right top, #0fb5af, #0dc7c0, #0ad9d2, #06ece4, #00fff6);
        color: #777777;
    }

    .buttons {
        display: inline;
        padding-left: 0.75rem;
    }

    `