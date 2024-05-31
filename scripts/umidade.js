document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-umidade");
    var output = document.getElementById("umidadeAdjust");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath02).set({
            umidadeAjuste: output.innerHTML
          });
    };
})