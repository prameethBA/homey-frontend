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
    top: 5rem;
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
    border-radius: 1rem;
    outline: none;
    font-size: 0.8rem;
    cursor: pointer;
    width: 100%;
    transition: all 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-indent: 1rem;
    border: solid 1px;
  }

  #map {
    display: none;
    width: 100%;
    margin: 0.5rem auto;
    border-radius: 4px;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,0.75);
  }

  .gmnoprint {
    display: none;
  }

  .form {
    position: relative;
    margin: 0 10rem;
    padding: 0.5rem 3rem;
    transition: all 0.5s ease;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .col {
    width: 30%;
    margin-top: 1rem;
  }

  .title {
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
  }

  input {
    display: flex;
    width: 100%;
    height: 1.5rem;
    border-radius: 1rem;
    text-indent: 1rem;
    outline: none;
    transition: all 0.5s ease;
    background-color: transparent;
  }

  select {
    height: 2rem;
    border-radius: 1rem;
    outline: none;
    font-size: 0.8rem;
    cursor: pointer;
    width: 100%;
    transition: all 1s;
    text-indent: 1rem;
    background-color: transparent;
  }

  select option {
    color: #ffffff;
    background-color: #000000;
  }

  label {
    display: flex;
    transition: all 0.2s;
    margin: 0.1rem 0 0.2rem 0;
  }

  .description textarea {
    min-height: 3rem;
    border-radius: 0.3rem;
    outline: none;
    border: solid 1px;
    background-color: transparent;
    transition: all 0.1s;
    text-indent: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    width: 50rem;
  }

  .facilities {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;  
  }

  #facilities {
    flex-wrap: wrap;
    grid-gap: 0.1rem;
    grid-template-columns: repeat(auto-fill, 10rem);
  }

  facility-comp {
    margin: 0 1rem;
  }

  .sub-title {
    font-weight: bold;
    margin: 2rem auto -2rem auto;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .row-2 span {
    color: #4212ff;
    margin: 0.5rem;
    font-weight: bold;
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
    .facilities {
      margin: auto;
      display: block;  
    }

    facility-comp {
      margin: 1rem;
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
    .facilities {
      width: 85%
      font-size: 0.9rem;
    }
    #preview-facilities {
      grid-template-columns: auto !important;
    }
  }

`
