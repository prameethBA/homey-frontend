export default CSS = `
    .container {
        border-radius: 4px;
        box-shadow: 0 0 3px 2px rgba(36,31,135,0.7);
        position: relative;
        height: 100%;
    }

    .row {
        display: flex;
        align-items: center;
    }

    .row > div {
        display: flex;
        align-items: center;
    }

    .slide  {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
    }

    .slider {
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .slider:hover {
        opacity: 0.8;
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

    .thumbnail {
        width: 100%;
    }

    .img {
        display: none;
        width: 100%;
        height: 12.5rem;
    }

    .title {
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
        min-height: 2rem;
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
        position: relative;
        margin:5px;

    }

    .price {
        right: 1rem;
        font-weight: bold;
    }

    .toggle-menu {
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 1rem;
        align-items: center;
    }

    .visibility {
        justify-content: space-evenly;
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
        height: 85%;
        width: 1.3rem;
        left: 2px;
        bottom: 2px;
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
        border-radius: 1rem;
    }
    
    .toggle.round:before {
        border-radius: 50%;
    }

    .description {
        overflow: hidden;
        word-break: break-word;
        line-height: 0.9rem;
        display: flex;
        justify-content: center;
        margin: 1rem;
        max-height: 4.5rem;
    }

    button {
        position: relative;
        width: 45%;
        height: 2rem;
        border-radius: 1rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 1s;
        margin: 0.2rem;
    }

    button:hover{
        background-position: right;
        color: black;
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

    .button-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: auto 1rem;
    }

    `
