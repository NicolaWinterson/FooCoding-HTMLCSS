/*DECLARING VARIABLES GLOBALLY
var p = document.getElementById("otherLinks");
var search = document.getElementById("searchBar");
var c = document.getElementById("submenu-nav-li");
var menuLinks = document.getElementById("menuLinks");
*/

function toggleLinks() {
  console.log("linksChildren")
  var menuLinks = document.getElementById("menuLinks");
  
  var p = document.getElementById("otherLinks");
  var search = document.getElementById("searchBar");
  var c = document.getElementById("submenu-nav-li");

  p.style.display = "none"
  search.style.display = "none"
  c.style.display = "none"
  
  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
}

document.getElementById("child").addEventListener("click", function (e) {
  console.log("child clicked")
  e = window.event || e;

  if (this === e.target) {
    console.log("event handled properly")
    var c = document.getElementById("submenu-nav-li");
    
    var p = document.getElementById("otherLinks");
    var menuLinks = document.getElementById("menuLinks");
    var search = document.getElementById("searchBar");
    
    menuLinks.style.display = "none"
    p.style.display = "none"
    search.style.display = "none"
    
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
  }
});


document.getElementById("parent").addEventListener("click", function (e) {
  console.log("event2 handled")
  e = window.event || e;

  if (this === e.target) {
    console.log("menuLinks handled")
    var menuLinks = document.getElementById("menuLinks");
    var p = document.getElementById("otherLinks");
    var search = document.getElementById("searchBar");
    var c = document.getElementById("submenu-nav-li");

    p.style.display = "none"
    search.style.display = "none"
    c.style.display = "none"

    if (menuLinks.style.display === "block") {
      menuLinks.style.display = "none";
    } else {
      menuLinks.style.display = "block";
    }
  }
});

function toggleOtherLinks() {
  var p = document.getElementById("otherLinks");
  
  var search = document.getElementById("searchBar");
  var menuLinks = document.getElementById("menuLinks");
  var c = document.getElementById("submenu-nav-li");
  
  search.style.display = "none"
  c.style.display = "none"
  menuLinks.style.display = "none"
  
  if (p.style.display === "block") {
    p.style.display = "none";
  } else {
    p.style.display = "block";
  }
}

function toggleSearch() {
  var search = document.getElementById("searchBar");

  var p = document.getElementById("otherLinks");
  var menuLinks = document.getElementById("menuLinks");
  var c = document.getElementById("submenu-nav-li");
  
  p.style.display = "none"
  c.style.display = "none"
  menuLinks.style.display = "none"
  
  if (search.style.display === "block") {
    search.style.display = "none";
  } else {
    search.style.display = "block";
  }
}