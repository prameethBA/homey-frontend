export default CSS = `
    .container {
        border: solid 1px;
        position: relative;
        min-width: 300px;
        width: 30%;
        margin: 2rem;
        min-height: 450px;
        height: 26rem;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 2px rgba(36,31,135,0.7);
    }

    .slider {
        position: absolute;
        opacity: 0.5;
        cursor: pointer;
        transition: 0.5s;
        transform: translateY(100%);
    }

    .slider:hover {
        opacity: 0.7;
        transition: 0.1s;

    }

    .slider:active {
        opacity: 0.9;
    }

    .slider-next {
        right: 1%;
    }
    
    .slider-previous {
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
        padding: 0 0.4rem 0 0.4rem;
        height: 3.5rem;
        text-align: justify;
        overflow: hidden;
        word-break: break-word;
        margin: 0;
    }

    .details > div:first-child > span {
        position: absolute;
        right: 0;
        left: 0;
        display: grid;
        grid-template-columns: 15% 20% auto;
    }

    .star {
        background: url(/assets/icon/start-yellow.png);
        width: 35px;
        height: 35px;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin: 0.5rem auto 0 0.5rem;
    }

    .share {
        background: url(/assets/icon/share.png);
        width: 35px;
        height: 35px;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        margin: 0.5rem auto 0 0.5rem;
    }

    .report {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    ::slotted(.price) {
        position: absolute;
        right: 1rem;
        font-weight: bold;
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