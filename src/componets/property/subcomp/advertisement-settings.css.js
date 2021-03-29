export default CSS = `
#backdrop {
  position: fixed;
  z-index: 2;
  background-color: rgba(0,0,0,0.7);
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  cursor: url(./assets/icon/remove-icon.png), auto;
}

#boost-message {
    margin: 1rem 0;
    color: red;
}

#share-pop {
  display: none;
}

.feature_header {
  text-align: center;
  padding: 0.2em;
  margin-bottom: 60px;
  background: #ff4000;
  font-weight: bolder;
  color: #eeeeee;
}
label {
  font-weight: bold;
}

.container {
  position: fixed;
  z-index: 2;
  margin: 6rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 2px;
  overflow: auto;
}

.container::-webkit-scrollbar {
  width: 1px !important;
}

/* features */
.feature_container {
  margin: auto;
  width: 100%;
  max-width: 400px;
  padding-bottom: 30px;
}
.toggle_opt {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

/* *********************
Components
 **************************/
/* Buttons */

.btn {
  display: block;
  border: none;

  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-align: center;
  color: #fff;
  padding: 0.5em 2em;
  border-radius: 20px;
  transition: 0.3s;
  text-transform: uppercase;
  outline:none;
}
.btn-primary {
  border: 2px solid #34a832;
  background-color: #34a832;
}
.btn-primary:hover {
  box-shadow: 0 0 0 2px #006600;
  transition: 0.5s;
}

.btn-lg {
  width: 100%;
}

/* Toggler */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b3cee0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #eeeeee;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #34A832;
}

input:focus + .slider {
  box-shadow: 0 0 1px #00a5cf;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.7);
}

.schedule-container {
    background: #ffffff;
    padding: 6rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.schedule-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 auto 1rem auto;
}

.schedule-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.schedule-date > input {
    margin: 0.5rem auto;
    width: 100%;
    border-radius: 1rem;
    height: 1.5rem;
    text-indent: 0.2rem;
}

@media(max-width: 768px) {
  .container {
    margin-left: 5%;
  }
}


`
