document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("ligar-irrigacao");
    var output = document.getElementById("ligar-value-irrigacao");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath08).set({
            irrigacaoAjusteHora: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-irrigacao");
    var output = document.getElementById("irrigacaoAdjust");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath05).set({
            irrigacaoAjuste: output.innerHTML
          });
    };
})


document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("ligar-irrigacao02");
    var output = document.getElementById("ligar-value-irrigacao02");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath09).set({
            irrigacaoAjusteHora02: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-irrigacao02");
    var output = document.getElementById("irrigacaoAdjust02");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath10).set({
            irrigacaoAjuste02: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("ligar-irrigacao03");
    var output = document.getElementById("ligar-value-irrigacao03");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath11).set({
            irrigacaoAjusteHora03: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-irrigacao03");
    var output = document.getElementById("irrigacaoAdjust03");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath12).set({
            irrigacaoAjuste03: output.innerHTML
          });
    };
})