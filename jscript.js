function Change() {
    if (document.getElementById("lightbulb").src === "https://i.postimg.cc/KjK1wL3c/bulb-on.png") 
    {

      document.getElementById("lightbulb").src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
      document.getElementById("switch").innerHTML = "Turn it on!";
      document.getElementById("main").classList.remove("lighton");
      document.getElementById("main").classList.add("lightoff");

    } else if (document.getElementById("lightbulb").src === "https://i.postimg.cc/KjK1wL3c/bulb-off.png") 
    {

      document.getElementById("lightbulb").src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      document.getElementById("switch").innerHTML = "Turn it off?";
      document.getElementById("main").classList.remove("lightoff");
      document.getElementById("main").classList.add("lighton");

    }
  }
  
  document.getElementById("switch").addEventListener("click", Change);
  