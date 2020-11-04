export default CSS = `

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        pointer-events: none;
        scroll-behavior: auto;
        transition: all 1s ease; 
    }

    .container {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5rem;
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

`