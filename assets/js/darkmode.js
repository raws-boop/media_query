
  var icon=document.getElementById("icon");
  // Initialize a variable that will look for 'isDarkMode' in local storage, if it is undefined, defaut to false
  let isDarkmode = JSON.parse(localStorage.getItem('isDarkmode')) || false;
  console.log(isDarkmode)

  // separate the onclick to be able to toggle our variable
  icon.onclick=function(){
    isDarkmode = !isDarkmode
    localStorage.setItem("isDarkmode", JSON.stringify(isDarkmode))
    isDarkModeFunction();
  }

  //check the value of is dark mode and add or removes the classlist
  function isDarkModeFunction() {
    if(isDarkmode){
      document.body.classList.add("dark-theme")
      icon.src= "assets/images/sun.png";
    } else {
      document.body.classList.remove("dark-theme")
      icon.src= "assets/images/moon.png";
    }
  }

  // call the function upon document load
  isDarkModeFunction();
  localStorage.removeItem("dark-theme");