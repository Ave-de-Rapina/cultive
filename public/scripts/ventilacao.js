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

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-ventilacao-interna-liga");
    var output = document.getElementById("ventilacaoInternaAdjustLiga");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath03).set({
            ventilacaoInternaAjusteLiga: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-ventilacao-interna-desliga");
    var output = document.getElementById("ventilacaoInternaAdjustDesliga");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath04).set({
            ventilacaoInternaAjusteDesliga: output.innerHTML
          });
    };
})
//----------------------------VENTILACAO LIGA--------------------------------------
=======
//----------------------------ILUMINACAO LIGA--------------------------------------
>>>>>>> revert-c29d593


document.addEventListener('DOMContentLoaded', function () {
    const sliderLiga = document.getElementById('temp-slider-ventilacao-liga');
    const sliderDesliga = document.getElementById('temp-slider-ventilacao-desliga');
    const horasLigadoVentilacaoElement = document.getElementById('horas-ligado-ventilacao');
    const ventilacaoAdjustLiga = document.getElementById('ventilacaoAdjustLiga');
    const ventilacaoAdjustDesliga = document.getElementById('ventilacaoAdjustDesliga');

    function updateCiclosPorDia() {
        const tempoLiga = parseInt(sliderLiga.value, 10);
        const tempoDesliga = parseInt(sliderDesliga.value, 10);

        const tempoTotalCiclo = tempoLiga + tempoDesliga;

        const ciclosPorDia = (1440 / tempoTotalCiclo).toFixed(2);

        horasLigadoVentilacaoElement.textContent = ciclosPorDia;
    }

    function updateSliderValues() {
        ventilacaoAdjustLiga.textContent = sliderLiga.value;
        ventilacaoAdjustDesliga.textContent = sliderDesliga.value;
    }

    sliderLiga.addEventListener('input', () => {
        updateSliderValues();
        updateCiclosPorDia();
    });

    sliderDesliga.addEventListener('input', () => {
        updateSliderValues();
        updateCiclosPorDia();
    });

    // Initialize values
    updateSliderValues();
    updateCiclosPorDia();
});