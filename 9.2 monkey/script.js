// met getEllementById
var openEyes = document.getElementById("opened");
var closedEyes = document.getElementById("closed");

openEyes.onclick = function() {
    openEyes.style.display = "none";
    closedEyes.style.display = "block";
}

closedEyes.onclick = function() {
    openEyes.style.display = "block";
    closedEyes.style.display = "none";
}