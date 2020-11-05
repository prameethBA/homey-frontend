export default CSS = `

#backdrop {
  position: fixed;
  z-index: 99;
  background-color: rgba(0,0,0,0.7);
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  cursor: url(./assets/icon/remove-icon.png), auto;
}

.form {
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.container {
  background-color: rgba(0,0,0,0.9);
  color: #eeeeee;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

a {
  color: rgb(176, 200, 240);
  cursor: pointer;
  transition: all 0.5s ease;
}

a:hover {
  color: rgb(125, 150, 255);
}


@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 512px) {

}

`