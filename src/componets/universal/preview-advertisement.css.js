export default CSS = `

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.7);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    bottom: 0;
    transition: all 0.5s ease-in-out;
}

.backdrop::-webkit-scrollbar {
    width: 1rem;
}

.container {
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    max-width: 90%;
    transition: all 0.5s ease-in-out;
    background-color: #ffffff;
    padding: 2rem;
    position: absolute;
    top: 1rem;
    margin: 1rem;
    transition: all 0.5s ease-in-out;
}

#close-popup {
    color: #878787;
    font-size: 3rem;
    transform: rotate(45deg);
    cursor: pointer;
    position: absolute;
    right: 1rem;
    margin-top: -2rem;
    transition: all 1s ease;
}

#close-popup:hover {
    color: #000000;
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

    img {
        width: 10rem;
        border: 5px solid;
        border-radius: 2px;
        cursor: zoom-in;
        margin: 0.1rem;
        width: 10rem;
        border: 3px solid #767676;
        border-radius: 3px;
        cursor: zoom-in;
        margin: 0.1rem;
    }

    .title {
        text-transform: capitalize;
        text-align: center;
        padding: 2rem 2rem 1rem 2rem;
        font-weight: bold;
        overflow: hidden;
        line-height: 1rem;
        max-height: 2.1rem;
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
        flex-direction: row;
        font-weight: bold;
        color: darkblue;
        justify-content: space-around;
    }

    .row > div {
        margin: 0.2rem 1rem;
    }

    .row > div > a {
        font-weight: bolder;
        color: red;
    }

    span {
        font-weight: bold;
        margin: 1rem;
        color: rebeccapurple;
    }

    .description {
        text-transform: capitalize;
        text-align: justify;
        overflow: hidden;
        line-height: 1rem;
        max-height: 3.1rem;
        margin: 0.5rem auto;
    }

    .facilities {
        display: grid;
        grid-template-columns: repeat(auto-fill, 17rem);
        align-items: center;
        justify-content: center;
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
