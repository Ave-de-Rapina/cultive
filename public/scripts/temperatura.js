






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


