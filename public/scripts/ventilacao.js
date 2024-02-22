document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-ventilacao-liga");
    var output = document.getElementById("ventilacaoAdjustLiga");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath03).set({
            ventilacaoAjusteLiga: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-ventilacao-desliga");
    var output = document.getElementById("ventilacaoAdjustDesliga");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath04).set({
            ventilacaoAjusteDesliga: output.innerHTML
          });
    };
})