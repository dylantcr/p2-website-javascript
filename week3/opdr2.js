document.addEventListener("DOMcontentLoaded", function() {
    var outputElement = document.getElementById("output");

    for (var i = 1; i <= 100; i++) {
        var textNode = document.createTextNode("Dit is regel " + i);
        
        outputElement.appendChild(textNode);

        if (i < 100) {
            outputElement.appendChild(document.createElement('br'));
        }
    }
})