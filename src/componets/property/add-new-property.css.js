export default CSS = `
  .container {
    margin-top: 5rem;
  }

  #add-preview {
    color: #ffffff;
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    z-index: 1;
    transition: all 1s;
    background-color: rgba(0,0,0,0.8);
  }

  #add-preview::-webkit-scrollbar {
    width: 0 !important;
  }

  #add-preview > div {
    margin: 1.5rem auto;
    display: table;
    font-family: monospace;
  }

  #add-preview b {
    color: lightblue;
  }

  #add-preview #preview-images img {
    background-color: #ffffff;
    width: 5rem;
    height: 4rem;
    padding: 0.7rem;
    margin: 0.5rem;
    padding: 0.2rem;
    border-radius: 2px;
  }

  #progress {
    width: 100%;
    text-align: center;
  }

  #progress-bar {
    width: 50%;
    background-color: #777777;
    border-radius: 25px;
    margin: auto;
  }
  
  #progress-bar-progress {
    background-color: green;
    border-radius: 25px;
    height: 3px;
    width: 0%;
    background-image: linear-gradient(to right top, #138722, #179331, #1ba040, #1ead4f, #20ba5e, #20bf66, #1fc36d, #1fc875, #1ec676, #1dc378, #1cc179, #1cbe7a);
    text-align: center;
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

  #map {
    width: 100%;
    height: 50vh;
    margin: auto;
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
