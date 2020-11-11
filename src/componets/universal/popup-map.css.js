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
  right: 18%;
  margin-top: -2.5rem;
}

  #map {
    top: 0;
    bottom: 0;
    display: block;
    left: 0;
    right: 0;
    height: 40vw;
  }

  .gmnoprint {
    display: none;
  }

`