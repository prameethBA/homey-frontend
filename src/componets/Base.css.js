export default CSS = `
.lds-dual-ring {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    transition: all 1s ease;
    pointer-events: none;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 1rem;
    height: 1rem;
    margin: 0;
    border-radius: 100%;
    border: 0.2rem solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 0.9s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
