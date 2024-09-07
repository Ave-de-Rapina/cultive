document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider");
    var output = document.getElementById("tempAdjus");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    
        // Update temperature value in Firebase
        firebase.database().ref(dbPath01).set({
            temperaturaAjuste: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-temperatura-histerese");
    var output = document.getElementById("tempAdjusHisterese");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    
        // Update temperature value in Firebase
        firebase.database().ref(dbPath13).set({
            temperaturaHistereseAjuste: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-temperatura-offset");
    var output = document.getElementById("tempAdjusOffset");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    
        // Update temperature value in Firebase
        firebase.database().ref(dbPath14).set({
            temperaturaOffsetAjuste: output.innerHTML
          });
    };
})

