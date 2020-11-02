export default CSS = `
    .container {

    }

        @import "compass/css3";
    *, :before, :after {
        box-sizing: border-box;
    }
    .unstyled {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .unstyled a {
        text-decoration: none;
    }
    .list-inline {
        overflow: hidden;
    }
    .list-inline li {
        float: left;
    }
    .container {
        position: fixed;
        overflow: auto;
        left: 0;
        top: 0;
        bottom: 0;
        width: 17.5em;
        background: #35302d;
    }
    .logo {
        font: 300 2em 'Source Sans Pro', Helvetica, Arial, sans-serif;
        text-align: center;
        padding: 0;
        margin: 0;
        font-weight: bold;
    }
    .logo a {
        display: block;
        padding: 1em 0;
        color: #dfdbd9;
        text-decoration: none;
        transition: 0.1s linear color;
    }
    .logo a:hover {
        color: #fff;
    }
    .logo a:hover span {
        color: #df4500;
    }
    .logo span {
        font-weight: 700;
        transition: 0.15s linear color;
    }
    .main-nav ul {
        border-top: solid 1px #3c3735;
    }
    .main-nav li {
        border-bottom: solid 1px #3c3735;
    }
    .main-nav a {
        padding: 1.1em 0;
        color: #dfdbd9;
        font: 400 1.125em 'Source Sans Pro', Helvetica, Arial, sans-serif;
        text-align: center;
        letter-spacing: 0.3em;
        text-transform: uppercase;
    }
    .main-nav a:hover {
        color: #fff;
    }
    .links {
        border-bottom: solid 1px #3c3735;
    }
    .links li {
        width: 25%;
        border-left: solid 1px #3c3735;
    }
    .links li:first-child {
        border: none;
    }
    .links a {
        display: block;
        height: 5.5em;
        text-align: center;
        color: #ecc7b9;
        font: 0.75em/5.5em 'Source Sans Pro', Helvetica, Arial, sans-serif;
    }
    .links a:hover {
        color: #dfdbd9;
    }
    .list-hover-slide li {
        position: relative;
        overflow: hidden;
    }
    .list-hover-slide a {
        display: block;
        position: relative;
        z-index: 1;
        transition: 0.35s ease color;
    }
    .list-hover-slide a:before {
        content: '';
        display: block;
        z-index: -1;
        position: absolute;
        left: -100%;
        top: 0;
        width: 100%;
        height: 100%;
        border-right: solid 5px #df4500;
        background: #3c3735;
        transition: 0.35s ease left;
    }
    .list-hover-slide a.is-current:before, .list-hover-slide a:hover:before {
        left: 0;
    }
    
`