/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleLinks() {
    var myLinks = document.getElementById("myLinks");
    var p = document.getElementById("otherLinks");
    p.style.display = "none"
    if (myLinks.style.display === "block") {
      myLinks.style.display = "none";
    } else {
      myLinks.style.display = "block";
    }
  }

function toggleOtherLinks() {
    var otherLinks = document.getElementById("otherLinks");
    var x = document.getElementById("myLinks");
    x.style.display = "none"
    if (otherLinks.style.display === "block") {
      otherLinks.style.display = "none";
    } else {
      otherLinks.style.display = "block";
    }
  }
