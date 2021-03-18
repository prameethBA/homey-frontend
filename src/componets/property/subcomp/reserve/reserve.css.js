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
    }

    .menu-title {
        display: flex;
        justify-content: center;
        font-size: 2rem;
        font-weight: bold;
    }
    
    #propertyId {
        color: #3512Df;
        font-weight: bold;
    }

    .title {
        text-transform: capitalize;
        font-weight: bold;
        line-height: 1rem;
        max-height: 3.1rem;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        min-width: 50vw;
        max-width: 60vw;
    }

    .keymoney-title, .keymoney {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .keymoney {
        color: #dc3106;
    }

    .payment-type {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pay-advance, .pay-keymoney {
        text-transform: capitalize;
        font-weight: bold;
        color: midnightblue;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin: auto 1rem;
      }
      
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #11fe02;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      
      .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #eeeeee;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #34A832;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #00a5cf;
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }

      hr {
        height: 1px;
        background-color: #765498;
        width: 100%;
      }

      .sub-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
      }

      .total {
        font-size: 1.5rem;
        font-weight: bold;
        border-top: solid 1px;
        margin: 0.2rem 0;
      }

      .reserve {
        justify-content: center;
        display: flex;
        align-items: center;
      }

      .reserve-button {
        width: 40%;
        height: 2.5em;
        border-radius: 2rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 1.2rem;
        color: aliceblue;
        text-transform: uppercase;
        margin: 2rem auto;
        cursor: pointer;
        transition: all 1s;
    }

    .reserve-button:hover{
        box-shadow: 1px 1px 5px 0px rgba(0,62,21,0.8);
    }
`
