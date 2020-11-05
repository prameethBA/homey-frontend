export default CSS = `

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.95);
        pointer-events: none;
        scroll-behavior: auto;
        transition: all 1s ease; 
    }

    .container {
        max-width: 100%;
        min-width: 40%;
        width: 40%;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5rem auto;
        padding: 1rem;
        border-radius: 2px;
        box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.75);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        transition: all 0.5s ease;
    }

    #close-popup {
        color: #444444;
        font-size: 3rem;
        transform: rotate(45deg);
        cursor: pointer;
        position: absolute;
        right: 0;
        top: -1rem;
    }

    .advertisement {
        margin-top: 1rem;
    }

    .images {
        justify-content: space-evenly;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    ::slotted(img) {
        width: 10rem;
        border: 5px solid;
        border-radius: 2px;
        cursor: zoom-in;
        margin: 0.1rem;
    }

    .title {
        text-transform: capitalize;
        text-align: justify;
        padding: 2rem 2rem 1rem 2rem;
        font-weight: bold;
        /*overflow: hidden;*/
        /*line-height: 1em;*/
        /*height: 2.1em;*/
    }

    button {
        height: 2em;
        border-radius: 5px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        color: #fff;
        cursor: pointer;
        transition: all 1s;
        text-transform: lowercase;
        padding: 0.3rem;
        margin: 0.2rem;
    }

    button:hover {
        color: #000000;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 2rem;
    }

    ::slotted(span) {
        font-weight: bold;
        margin: 1rem;
        color: rebeccapurple;
    }

    .description {
        text-transform: capitalize;
        text-align: justify;
        padding: 2rem 2rem 1rem 2rem;
        /*overflow: hidden;*/
        /*line-height: 1em;*/
        /*height: 2.1em;*/
    }

    ::slotted(.facilities) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 4rem;
    }

    .approval {
        justify-content: space-around;
    }

    .button {
        height: 2em;
        border-radius: 25px;
        outline: none;
        border: none;
        color: #fff;
        cursor: pointer;
        transition: all 1s;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .approve-button {
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    }

    .approve-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
    }

    .decline-button {
        background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
    }

    .decline-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
    }

    @media screen and (max-width: 1200px) {

        .container {
            width: 60%;
        }

    }
    
    @media screen and (max-width: 992px) {
        .container {
            width: 80%;
        }
    }
    
    @media screen and (max-width: 768px) {

    }
    
    @media screen and (max-width: 512px) {

    }

`