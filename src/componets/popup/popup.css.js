export default CSS = `
.container {
  z-index: 1000;
  position: fixed;
  top: 9em;
  right: -100%;
  background-color: red;
  background-image: linear-gradient(to right top, #f73d4d, #e3343c, #cf2b2c, #bb221c, #a71a0b);
  width: 25rem;
  height: 5rem;
  border-radius: 5px;
  margin-bottom:6%;
  margin-top:auto;
  transition: all 1s ease-in-out;
}

.onsuccess {
  background-color: green;
  background-image: linear-gradient(to right top, #00d86f, #00cc5a, #02bf43, #06b32a, #09a702);
}

.onnotice {
  background-color: gray;
  background-image: linear-gradient(to right top, #626262, #818181, #a1a1a1, #c2c2c3, #e4e5e5);
}

.oninfo {
  background-color: lightblue;
  background-image: linear-gradient(to right top, #8e2de2, #8023e1, #7119e1, #600de0, #4a00e0);
}

::slotted(div) {
    padding: 0.2rem;
    text-align: center;
    color: #eeeeee;
    padding: 0.5rem 0.2rem 1.2rem 0.2rem;
}

#close-popup {
  color: #eeeeee;
  display: inline-block;
  position: absolute;
  right: 0.1rem;
  top: 0rem;
  cursor: pointer;
}
.close-img{
  size:smaller;
}

.title {
    margin:0em 0em 0em 9em;
    color: #ffffff;
    font-weight: bold;
    font-size: larger;
    

}

.loading {
  width: 0;
  padding: 0;
  margin: 0 0 0.4rem 0;
  transition: width 0.1s ease;
  border: 3px solid white;
  border-radius: 1px;
}

`