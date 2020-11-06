export default CSS = `
    .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        scroll-behavior: auto;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .form {
        background-color: #ffffff;
        min-width: 60%;
        min-height: 60%;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
    }

    #close-popup {
        color: #444444;
        font-size: 3rem;
        transform: rotate(45deg);
        cursor: pointer;
        position: relative;
        margin: 0 0 auto auto;
    }

    .inner-form {
        position: absolute;
        margin: 3rem;
    }

    .title {

    }

`