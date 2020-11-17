export default CSS = `
footer{
  margin: 0;
  color: #eeeeee;
  background-color: #001f3f;
}

span {
  margin: auto;
  display: table;
  padding: 0.5em;
}

.float-icon {
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
}

.float {
    display: flex;
    position: fixed;
    right: 3rem;
    bottom: -100%;
    animation: animation-up 2s infinite ease;
    cursor: pointer;
    background-color: #ffffff;
    width: 4rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: inset 0px -1px 4px 1px rgba(0,0,0,1);
    transition: all 1s ease-in-out;
    background-image: url('/assets/icon/up-arrow.png');
    background-repeat: no-repeat;	
    background-size: contain;
}

@keyframes animation-up {
  0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
  }
  40% {
      transform: translateY(20px);
  }
  60% {
      transform: translateY(10px);
  }
}

`
