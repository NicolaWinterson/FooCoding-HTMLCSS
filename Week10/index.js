console.log("js files")

document.getElementById('about-me').onclick = function() {
    console.log("about me was clicked")
    const toggleAboutInfo = document.getElementById("about-me-text");
    toggleAboutInfo.style.display = toggleAboutInfo.style.display === 'none' ? 'block' : 'none';
};

