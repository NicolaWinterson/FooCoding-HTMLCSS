function showParagraph() {
    console.log("linksChildren")
    var expandExperience = document.getElementById("menuLinks");
  
    p.style.display = "none"
    search.style.display = "none"
    c.style.display = "none"
    
    if (expandExperience.style.display === "block") {
        expandExperience.style.display = "none";
    } else {
        expandExperience.style.display = "block";
    }
  }