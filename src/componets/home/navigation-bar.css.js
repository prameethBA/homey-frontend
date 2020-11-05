export default CSS = `
header {
  position: fixed;
  width: 100%;
  z-index: 1;
  transition: all 0.5s ease;
}

.nav-scroll {
  transform: scale(0.98);
  margin: 0.2rem 0rem 0.2rem 0.1rem !important;
}

.header-scroll {
  background-color: #ffffff;
}

.navbar {
  display: flex;
  margin: 0.5rem 0 -0.1rem 1rem;
  transition: all 0.5s ease;
}

.separator {
  flex: 1;
}

.logo {
  cursor: pointer;
  width: 50px;
  height: 50px;
}

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

.name {
  margin-top: 2rem;
}

.wrapper {
  margin: 0.5rem;
  position: absolute;
  right: 1rem;
  display: inline-block;
}

#hamburger-icon {
  display: none;
}

.nav-link {
  text-decoration:none;
  color:#001f3f;
  padding:10px 0px;
  border:5px solid transparent;
  cursor: pointer;
  transition:1s ease;
}

.nav-link:hover {
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
  animation: line 2s;
}

.active {
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
  animation: line 2s;
}

.dropdown {
  display: none;
  text-align: right;
  position: absolute;
  right: -1rem;
  top: 2rem;
  background-color: #aceaff;
  background-image: linear-gradient( to top, #10dbc6, #61e4f4, #aceaff, #e3f1ff, #ffffff );
  background-size: cover;
  background-attachment: fixed;
  transition: all 1s;
  box-shadow: 0px 0px 5px 1px rgba(23,12,120,0.58);
  border-radius: 2px;
}

.menu-item {
  padding: 1rem;
  cursor: pointer;
  text-decoration:none;
  color:#001f3f;
  border:5px solid transparent;
  transition:1s ease;
}

.menu-item:hover {
  background-image: linear-gradient(to right top, #ff8c43, #ff8a38, #ff892c, #ff881c, #ff8700);
  transition: all 0.5s;
  color: #ffffff;
}

.navlink-separator {
  display: none;
}

.dropdown  .navlink-separator {
    display: block;
    margin: 0 auto;
    border: solid 1px #777777;
    width: 90%;
}

@keyframes line {
  0% {
    background-position-x: 390px;
  }
}

@media screen and (max-width: 1200px) {

  #hamburger-icon {
    display: inline-block;
    cursor: pointer;
    margin: 1rem;
    width: 2rem;
    height: 1.5rem;
    transition: 1s ease;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: 1rem;
  }
  
  .hamburger-collapse {
    background : url('./assets/icon/hamburger-icon.png');
  }
  .hamburger-expand {
    background : url('./assets/icon/close-icon.png');
  }


  .wrapper {
    display: none;
    position: absolute;
    justify-content: stretch;
    top: 4rem;
    left: -0.5rem;
    width: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 1s ease;
  }

  .nav-link, .menu-item {
    transition:1s ease;
    cursor: pointer;
    text-align: center;
    color: #ffffff;
  }

  .menu-item:hover, .nav-link:hover {
    background-image: linear-gradient(to right top, #ff8c43, #ff8a38, #ff892c, #ff881c, #ff8700);
  }

  .active {
    background-image: linear-gradient(to right top, #ff8c43, #ff8a38, #ff892c, #ff881c, #ff8700);
  }

  .navlink-separator {
    display: block;
    margin: 0 auto;
    border: solid 1px #777777;
    width: 25%;
  }
  
  .dropdown {
    display: grid;
    text-align: center;
    position: initial;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
  }


  #admin-dashboard {
    width: auto;
    margin: unset;
    height: 2.5rem;
  }
  
}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {
  #login-button {
    height: 3rem;
    width: 10rem;
    margin: 0.2rem 1rem;
    font-size: 1.2rem;
  }
}

`