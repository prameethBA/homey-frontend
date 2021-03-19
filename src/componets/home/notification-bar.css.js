export default CSS = `
    @import "bourbon";

    $border-size: 0.25em;
    $border-color: hsl(0, 90, 40);

    .notifications {
    position: absolute;
    top: calc(50% + 1em);
    left: calc(50%);
    box-shadow: 0 0 0 0.5em hsla(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
    }

    .notification {
    position: relative;
    width: 40em;
    padding: 0 1em;
    font-size: 0.8em;
    line-height: 3.125;
    color: white;
    cursor: pointer;
    @include linear-gradient(hsl(0, 0, 17), hsl(0, 0, 15));
    }
    .notification .date{
    float:right;
    }

    .notification:hover {
    @include linear-gradient(tomato, darken(tomato, 20%));
    font-weight:bold;
    }
    .notification:hover .date{
    color:#1034A6;
    }
`