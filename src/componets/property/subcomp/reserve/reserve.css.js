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
    }

    .container {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        min-width: 60%;
        min-height: 60%;
        padding: 2rem;
        border-radius: 2px;
    }

    .row {
        margin: 1rem 0;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
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
`