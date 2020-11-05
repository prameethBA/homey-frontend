export default CSS = `
  .container {
    margin-top: 5rem;
  }

  #add-preview {
    position: sticky;
    z-index: 1;
  }

  #progress {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
  }

  #progress-bar {
    width: 50%;
    background-color: #777777;
    border-radius: 25px;
    margin: auto;
    height: 1rem;
  }
  
  #progress-bar-progress {
    background-color: green;
    border-radius: 25px;
    height: 1rem;
    width: 0%;
    background-image: linear-gradient(to right top, #138722, #179331, #1ba040, #1ead4f, #20ba5e, #20bf66, #1fc36d, #1fc875, #1ec676, #1dc378, #1cc179, #1cbe7a);
    text-align: center;
  }

  #progress-progress {
    position: absolute;
    top: 2rem;
    bottom: 0;
    color: #ffffff;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .preview-buttons {
    display: block !important;
  }

  #edit {
    background-image: linear-gradient(to right, #aaaaaa, #aaaaaa);
  }

  #preview-facilities {
    display: grid !important;
    grid-template-columns: auto auto auto auto !important;
    margin: 1rem 8rem !important;
  }

  #preview-facilities span {
    margin: 0.4rem auto;
  }

  #pickLocation {
    height: 2rem;
    border-radius: 2px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    font-size: 0.8rem;
    cursor: pointer;
    width: 100%;
    transition: all 1s;
    display: flex;
    justify-content: start;
    align-items: center;
    text-indent: 1rem;
  }

  .map {
    width: 50%;
    height: 50vw;
    margin: auto;
  }

  .gmnoprint {
    display: none;
  }

  #pac-input {
    display: none;
    z-index: 0;
    position: absolute;
    margin: 1rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
    width: 75%;
    left: 20px;
    top: 0px;
    color: #000000;
  }

  .form {
    position: relative;
    margin: 1rem auto 0 auto;
    background-color: rgba(0,0,0,0.75);
    color: #eeeeee;
    padding: 0.5rem 3rem;
    padding-bottom: 3rem;
    border-radius: 1px;
    transition: all 0.5s ease;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }

  .col {
    width: 30%;
    margin-top: 1rem;
  }

  input {
    outline: none;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: solid 1.25px #33dd22;
    color: #ffffff;
    margin: 1rem auto;
    transition: all 0.5s ease;
  }

  select {
    height: 2rem;
    border-radius: 2px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    font-size: 0.8rem;
    color: #fff;
    cursor: pointer;
    width: 100%;
    transition: all 1s;
    text-indent: 1rem;
    margin-top: 0.3rem;
  }

  select option {
    color: #ffffff;
    background-color: #000000;
  }

  label {
      display: block;
      transition: all 0.2s;
  }

  .description textarea {
    width: 90vw;
    min-height: 3rem;
    border-radius: 2px;
    outline: none;
    border: solid 1px;
    background-color: transparent;
    color: #fff;
    transition: all 0.1s;
    text-indent: 2px;
    margin-top: 0.3rem;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #facilities {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;  
  }

  facility-comp {
    list-style: inside;
    margin-left: 10rem;
  }

  .imageUpload {
    width: 100%;
  }

  input[type='file'] {
    display:none;
  }
  
  .upload-image-label,
    button {
      position: relative;
      width: 80%;
      display: block;
      height: 3em;
      border-radius: 25px;
      outline: none;
      border: none;
      background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
      font-size: 0.8rem;
      color: #fff;
      text-transform: uppercase;
      margin: 2rem auto;
      cursor: pointer;
      transition: all 1s;
  }
 
  button:hover{
      background-position: right;
      color: black;
  }

  .load-more {
    width: 20%;
    display: inline;
    height: 2em;
  }

  .upload-image-label {
    text-align: center;
    padding: 1rem 0 0 0;
    font-size: 0.8rem;
    border-radius: 2px;
    padding: 0 0 1rem 0;
    width: 80%;
  }

  .upload-image-label b {
    font-size: 2rem;
  }

  .uploaded-image {
    width: 4rem;
    height: 4rem;
    margin: 0.5em;
    cursor: url(./assets/icon/remove-icon.png), auto;
    background-color: #eeeeee;
    padding: 0.2rem;
    border-radius: 2px;
  }

  #previewImages {
    margin: auto;
  }

  .row-2 {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    justify-content: space-evenly;
  }

  .row-2 span {
      font-weight: unset;
      color: #4212ff;
  }

  .row-2 span > a {
      text-decoration: underline;
      cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    #preview-facilities {
      grid-template-columns: auto auto auto auto !important;
    }
  }

  @media screen and (max-width: 992px) {
    facility-comp {
      margin-left: 5rem;
    }
    #preview-facilities {
      grid-template-columns: auto auto auto !important;
    }
  }

  @media screen and (max-width: 768px) {
    #facilities {
      margin: auto;
      display: block;  
    }

    facility-comp {
      margin: 1rem;
    }

    .row {
      display: block;
    }
  
    .col {
      width: 100%;
      margin-top: 1rem;
    }

    .description textarea {
      width: 100%;
    }

    #preview-facilities {
      grid-template-columns: auto auto !important;
    }

  }

  @media screen and (max-width: 512px) {
    #facilities {
      width: 85%
      font-size: 0.9rem;
    }
    #preview-facilities {
      grid-template-columns: auto !important;
    }
  }

`
