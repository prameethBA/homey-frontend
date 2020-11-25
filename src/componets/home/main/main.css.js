export default CSS = `

    .main-content {
        margin-top: 4rem;
    }

    #main-title {
        color: #ffffff;
        font-size: 5rem;
        text-align: center;
    }

    .wrap {
        transition: all 2s ease;
    }

    .user-comp {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        margin: 5rem auto;
        flex-wrap: wrap;
    }

    user-comp {
        transform: scale(0.8);
    }

    .down-wrap {
        margin: -4rem auto 2rem auto;
        cursor: pointer;
        animation: animation-down 2s infinite ease;
    }

    .down {
        transform: rotate(90deg);
        font-size: 3rem;
        color: #ffffff;
    }

    @keyframes animation-down {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }

    .parallax {
        display: flex;
        flex-direction: column;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }

    .parallax-1 {
        background-image: url('./assets/img/apt-img-7.jpg');
        height: 42rem;
    }

    .parallax-2 {
        background-image: url('./assets/img/apt-img-9.jpg');
        min-height: 95vh;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .parallax-3 {
        background-image: url(./assets/img/apt-img-11.jpg);
        justify-content: center;
        align-items: center;
        color: #ffffff;
    }

    .description {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #ffffff;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .title {
        text-align: center;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .title-head {
        font-family: monospace;
    }

    .title > span {
        margin: 0.5rem auto;
    }

    button {
        height: 3em;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        margin: 1rem;
        cursor: pointer;
        transition: all 1s;
        width: 20%;
        border-radius: 2px;
        font-weight: bold;
    }

    button:hover{
        background-position: right;
        color: black;
    }

    .horizontal-buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }

    .top-ads {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.8);
        cursor: pointer;
    }

    .ad {
        background-image: url(/assets/img/apt-img-5.jpg);
        width: 70vw;
        min-height: 50vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .slider {
        color: #ffffff;
        font-size: 10rem;
        margin: auto 1rem;
        cursor: pointer;
        color: rgba(200, 200, 200, 0.5);
        transition: all 0.5s ease;
    }

    .slider:hover {
        color: rgba(255, 255, 255, 0.8);
    }

    .features {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
    }

    .features-row {
        display: grid;
        flex-wrap: nowrap;
        margin: 1rem 10vw;
        gap: 4rem;
        grid-auto-flow: column;
    }

    .features-image {
        background-image: url(/assets/img/1.png);
        width: 30vw;
        height: 30vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .features-image-1 {
        background-image: url(/assets/img/safe.jpg);
    }

    .features-image-2 {
        background-image: url(/assets/img/security.jpg);
    }

    .features-description {
        display: flex;
        flex-direction: column;
        margin: 1%;
        justify-content: center;
        text-align: end;
    }

    .features-description-reverse {
        display: flex;
        flex-direction: column;
        margin: 1%;
        justify-content: center;
        text-align: start;
    }

    .feature-body {
        display: flex;
        flex-wrap: wrap;
    }

    .feature-title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .feature-more {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: #2183ef;
        cursor: pointer;
    }

    .feature-more a {
        text-decoration: underline;
        transition: 0.5s ease;
    }

    .feature-more a:hover {
        color: #0000ef;
    }

    .api {
        min-height: 20vw;
        width: 20vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin: 2rem 1rem;
    }

    .api-1 {
        background-image: url(./assets/img/payhere.png);
    }
    .api-2 {
        background-image: url(./assets/img/google-maps-api.png);
    }
    .api-3 {
        background-image: url(./assets/img/google-charts-api.png);
    }

    .api-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .api-title, .api-description {
        margin: 1rem 5vw;
        text-align: center;
    }

    .api-row {
        display: flex;
    }

    .about-us {
        position: relative;
        z-index: 0;
        display: grid;
        grid-template-columns: auto auto;
        padding: 2rem;
        background-color: #ffffff;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        align-items: center;
    }
        
    .about-us:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        right: 0;
        bottom: 0;
        left: 0;
        background: #001f3f;
    }

    .about-us-title, .news-letter-title {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .about-us-description {
        background-color: white;
        padding: 2rem;
        border-radius: 3px;
        align-items: center;
        display: flex;
    }

    .about-us-paragraph, .news-letter-description {
        text-align: justify;
    }

    .news-letter {
        display: flex;
        padding: 2rem;
    }

    .news-letter-form {
        display: flex;
        flex-direction: column;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 2px;
        background-image: linear-gradient(to bottom, #ff7600, #ff8400, #ff9200, #ff9f00, #ffac00);
    }

    .news-letter-form > label {
        font-size: 1.2rem;
        color: #ffffff;
        font-weight: bolder;
        pointer-events: none;
    }

    .news-letter-form > input {
        margin: 1rem 0;
        border-radius: 1rem;
        height: 2rem;
        outline: none;
        border: none;
        text-indent: 1rem;
        text-align: center;
    }

    .subscribe-button {
        min-width: 30%;
        margin: auto;
    }

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 992px) {
        .features-row {
            display: flex;
            flex-wrap: wrap;
            margin: 1rem 10vw;
            justify-content: center;
            align-items: center;
        }

        .features-description, .features-description-reverse {
            text-align: justify;
        }

        .features-row:nth-child(even) {
            flex-direction: column-reverse;
        }
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 512px) {

}

`
