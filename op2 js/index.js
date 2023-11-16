const winkelmandje = ["bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

//op1
var Aantal = winkelmandje.length;
document.getElementById('opdracht1').innerHTML = "Aantal producten in je winkelmandje: " + Aantal;

//op2
document.getElementById('opdracht2').innerHTML = winkelmandje.join('<br>');

//op3
document.getElementById('opdracht3').innerHTML = 'het 4de product is: ' + winkelmandje[3];

//op4
winkelmandje[1] = 'bier';
document.getElementById('opdracht4').innerHTML = 'whiskey vervangen voor bier: ' + winkelmandje.join(', ');

//op5
function addProduct() {
const nieuwProduct = prompt("voer het nieuwe product in: ");
winkelmandje.push(nieuwProduct);
document.getElementById("Opdracht5").innerHTML = winkelmandje;
}

//op6
if (winkelmandje.length > 1) {
    document.getElementById("Opdracht6").innerHTML = "<p> U heeft genoeg producten om te tonen.</p>";
    + winkelmandje.join('<br>');
}   else {
    document.getElementById("Opdracht6").innerHTML = "<p> U heeft niet genoeg producten om te tonen.</p>";
}

//op7
if (winkelmandje[4] == "Drop") {
    document.getElementById("Opdracht7").innerHTML = "<p> U heeft drop.</p>";
} else {
    document.getElementById("Opdracht7").innerHTML = "<p> U heeft geen drop.</p>";
}

//op8
document.getElementById("Opdracht8").innerHTML = "<p>Producten met spaties:</p>"
+ winkelmandje.join(' - ') ;

//op9
document.getElementById("Opdracht9").innerHTML = "Oude winkelmand: " + winkelmandje.join(' - ') ;

+ winkelmandje.splice('o, 2');
document.getElementById("nieuwewinkelmand").innerHTML = "Nieuwe winkelmand: " + winkelmandje.join(' - ') ;

//op10
const winkelmand = ["bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
winkelmand.sort();
document.getElementById("Opdracht10").innerHTML = 'Gesorteerde array: ' + winkelmandje.join(', ');







