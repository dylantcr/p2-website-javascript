document.addEventListener("DOMContentLoaded", function() {
    let tafelContainer = document.getElementById("tafelContainer");

    for (let i = 1; i <= 10; i++) {
        let resultaat = i * 10;
        let tafelElement = document.createElement("div");
        tafelElement.textContent = `${i} x 10 = ${resultaat}`;
        tafelContainer.appendChild(tafelElement);
    }
});
