document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-irrigacao");
    var output = document.getElementById("irrigacaoAdjust");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath05).set({
            umidadeAjuste: output.innerHTML
          });
    };
})