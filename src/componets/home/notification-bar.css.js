export default CSS = `
.notifications {
    z-index:1;
    position: absolute;
    top: calc(50% + 1em);
    left: calc(50%);
    background-color: rgb(31, 26, 26);
    box-shadow: 0 0 0 0.5em rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
}
.notification {
    position: relative;
    width: 40em;
    padding: 0 1em;
    font-size: 1em;
    line-height: 3.125;
    color: white;
    cursor: pointer;
}
.notification .date {
    float: right;
}
.notification:hover {
    font-weight: bold;
    background-color: rgb(245, 77, 10);
    
}
.notification:hover .date {
    color: #1034a6;
}

`