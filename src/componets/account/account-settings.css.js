export default CSS =`
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

img {
  max-width: 100%;
  display: block;
}
* input {
  border-radius: 10px;
}
* textarea {
  border-radius: 10px;
}
/****************
Typography
****************/

label {
  font-weight: bold;
}
/**********************
Layout 
**************************/
.container {
  position: absolute;
  width: 90%;
  margin-left: 28%;
  max-width: 767.98px;
  color: #000;
  padding: 15px;
  z-index:10;
}

.image_property {
  width: 100%;
  margin-bottom: 20px;
}
.image_property-md {
  width: 70%;
}
.image_upload {
  display: flex;
  border-radius: 10px 0 0 10px;
}
.image_upload-md label {
  width: 80%;
  border: 1px solid #004e64;
  background: white;
}
.image_upload-lg label {
  width: 100%;
  border: 1px solid #004e64;
  background: white;
}
#upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

/* profile */
.container_profile {
  position: absolute;
  margin-top: 4.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container_profile aside {
  width: 35%;
}
.container_profile aside {
  width: 30%;
}
.profile_pic {
  margin-bottom: 20px;
}

.profile_pic h3 {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #ff4000;
}
.profile_pic img {
  margin: auto;
  margin-bottom: 10px;
}

.profile_detail {
  margin-bottom: 20px;
  padding: 10px;
  margin-bottom: 20px;
}
.profile_detail p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: black;
  font-size: 0.9em;
}
.container_profile main {
  width: 60%;
}
.container_profile main form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
}
.profile-item-two {
  width: 45%;
  margin-bottom: 20px;
}
.profile-item-two input {
  width: 100%;
  height: 30px;
}
.profile-item-one {
  width: 100%;
  margin-bottom: 20px;
}
.profile-item-one input {
  width: 100%;
  height: 30px;
}
.profile-item-one textarea {
  width: 100%;
}
.profile-item-one input {
  width: 100%;
  height: 30px;
}
.profile-item-three {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;
}
.profile-item-three label {
  width: 100%;
  height: 30px;
}
.profile-item-three input {
  width: 30%;
  height: 30px;
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
}
.btn-primary {
  border: 2px solid #34a832;
  background-color: #34a832;
}
.btn-primary:hover {
  color: #001f3f;
  box-shadow: 4px 4px #ff4000;
  transition: 0.5s;
}

.btn-secondary {
  background-color: #34a832;
}
.btn-secondary:hover {
  color: #001f3f;
  box-shadow: 4px 4px #ff4000;
  transition: 0.5s;
}
.btn-upload {
  border-radius: 0 10px 10px 0;
  background: #34a832;
}
.btn-md {
  width: 60%;
}
.btn-sm {
  width: 28%;
  font-size: 0.8rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

@media(max-width: 768px) {
  .container {
    margin-left: 5%;
  }
}

`