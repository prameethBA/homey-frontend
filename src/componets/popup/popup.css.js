export default CSS = `
.container {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: -100%;
  right: 0;
  background-color: red;
  background-image: linear-gradient(to right top, #eb5d5d, #e85b5b, #e45958, #e15656, #de5454);
  width: 90%;
  border-radius: 3px;
  margin: auto;
  transition: all 1s ease-in-out;
}

.onsuccess {
  background-color: green;
  background-image: linear-gradient(to right top, #24da37, #31de4a, #3ce35a, #47e769, #51eb77);
}

.onnotice {
  background-color: gray;
  background-image: linear-gradient(to right top, #b2b2b2, #9c9b9c, #878586, #737071, #605b5b);
}

.oninfo {
  background-color: lightblue;
  background-image: linear-gradient(to right top, #0066ff, #0076ff, #0084ff, #0091ff, #009dff);
}

::slotted(div) {
    padding: 0.2rem;
    text-align: center;
    color: #eeeeee;
}

#close-popup {
  color: #eeeeee;
  display: inline-block;
  font-size: 5rem;
  transform: rotate(90deg);
  position: absolute;
  right: 0.2rem;
  bottom: -2rem;
  cursor: pointer;
}

.title {
    margin: 1em 0.5em;
    color: #ffffff;
    font-weight: bold;
}

.loading {
  width: 0;
  padding: 0;
  margin: 0 0 0.2rem 0;
  transition: width 0.1s ease;
}

`
