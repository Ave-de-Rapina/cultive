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

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-umidade-histerese");
    var output = document.getElementById("umidadeHistereseAdjus");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath15).set({
            umidadeHistereseAjuste: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-umidade-offset");
    var output = document.getElementById("umidadeOffsetAdjus");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath16).set({
            umidadeOffsetAjuste: output.innerHTML
          });
    };
})