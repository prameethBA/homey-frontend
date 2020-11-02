export default CSS = `
.user-comp {
    margin: 5rem auto;
    display: table;
}

.parallax {
    height: 90vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}

.parallax-1 {
    background-image: url('./assets/img/house.jpg');
}

.parallax-2 {
    background-image: url('./assets/img/background.jpg');
}

@media screen and (max-width: 1200px) {
    .parallax {
        height: 75vh;
    }
}

@media screen and (max-width: 992px) {
    .user-comp {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
    }

    .parallax {
        height: 100vh;
    }
}

@media screen and (max-width: 768px) {
    .parallax {
        height: 98vh;
    }
}

@media screen and (max-width: 512px) {
    .parallax {
        height: 65vh;
    }
}

`