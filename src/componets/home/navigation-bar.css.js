const loginButton = `
  #login-button, #admin-dashboard {	
    height: 2.5rem;	
    width: 10rem;	
    margin: auto 2rem;	
    text-transform: uppercase;	
    color: #eeeeee;	
    background-color: #239710;	
    border: none;	
    box-shadow: 1px 1px 5px 1px rgba(23,97,10,0.64);	
    outline: none;	
    cursor: pointer;	
    transition: 0.4s;	
  }	
  #admin-dashboard {	
      height: 2rem;	
    }	
        
  #login-button:hover {	
      background-color: #34a832;	
  }
`

const scroll = `
  // .nav-scroll {	
  //   transform: scale(0.98);	
  //   margin: 0.2rem 0rem 0.2rem 0.1rem !important;	
  // }	
  .header-scroll {	
    background-color: #ffffff;
    box-shadow: 0px 2px 8px -1px rgba(0,0,0,0.75);
  }
`

const profile = `
  .profile {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  
  .profile img {
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
    margin-right: 1rem;
  }
`

export default CSS = `

  ${loginButton}
  ${scroll}
  ${profile}

  header {
    position: fixed;
    width: 100%;
    z-index: 1;
    transition: all 0.5s ease;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #001f3f;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    color: #ffffff;
  }

  .separator {
    flex: 1;
  }

  /* Style the links inside the navigation bar */
  .nav-items a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    transition: all 0.2s ease;
    width: auto;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
  }

  .logo > img {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }

  .nav-items {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
  }

  /* Add an active class to highlight the current page */
  .active {
    background-color: #4CAF50;
    color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .hamburger {
    display: none;
  }

  /* Dropdown container - needed to position the dropdown content */
  .dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style the dropdown button to fit inside the topnav */
  .dropdown .dropbtn {
    outline: none;
    color: #ffffff;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    border: none;
    font-size: 1.1rem;
    height: 100%;
    padding: 0 1rem;
  }

  /* Style the dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 8rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    top: 4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Style the links inside the dropdown */
  .dropdown-content a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    color: #000000;
  }

  /* Add a dark background on topnav links and the dropdown button on hover */
  .topnav a:hover, .dropdown:hover, .dropdown button:hover {
    background-color: #555;
    color: white;
    cursor: pointer;
  }

  /* Add a grey background to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Show the dropdown menu when the user moves the mouse over the dropdown button */
  .dropdown:hover .dropdown-content {
    display: flex;
  }

  .responsive-nav-items {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
  } 

  .responsive-dropdown{
    display: block;
    text-align: center;
  }

  .responsive-topnav a {
    display: flex !important;
  }

  .responsive-dropbtn{
    display: flex !important;
  }

  .responsive-dropdown-content{
    display: block;
    position: relative;
  }

  .responsive-dropbtn :not(.nohover):hover{
    display: none;
  }

  .responsive-dropdown-content :not(.nohover):hover{
    display: block;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.hamburger) */
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child), .dropdown .dropbtn {
      display: none;
    }
    .topnav a.hamburger {
      display: flex;
      font-size: 2.5rem;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive a.hamburger {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
    .topnav.responsive .dropdown {float: none;}
    .topnav.responsive .dropdown-content {position: relative;}
    .topnav.responsive .dropdown .dropbtn {
      display: block;
      width: 100%;
      text-align: left;
    }
  }
`
