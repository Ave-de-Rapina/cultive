document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-ventilacao-externa-liga");
    var output = document.getElementById("ventilacaoExternaAdjustLiga");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath03).set({
            ventilacaoExternaAjusteLiga: output.innerHTML
          });
    };
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider-ventilacao-externa-desliga");
    var output = document.getElementById("ventilacaoExternaAdjustDesliga");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath04).set({
            ventilacaoExternaAjusteDesliga: output.innerHTML
          });
    };
})

//----------------------------VENTILACAO LIGA--------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const sliderLiga = document.getElementById('temp-slider-ventilacao-externa-liga');
    const sliderDesliga = document.getElementById('temp-slider-ventilacao-externa-desliga');
    const horasLigadoVentilacaoExternaElement = document.getElementById('horas-ligado-ventilacao-externa');
    const ventilacaoExternaAdjustLiga = document.getElementById('ventilacaoExternaAdjustLiga');
    const ventilacaoExternaAdjustDesliga = document.getElementById('ventilacaoExternaAdjustDesliga');

    function updateCiclosPorDia() {
        const tempoLiga = parseInt(sliderLiga.value, 10);
        const tempoDesliga = parseInt(sliderDesliga.value, 10);

        const tempoTotalCiclo = tempoLiga + tempoDesliga;

        const ciclosPorDia = (1440 / tempoTotalCiclo).toFixed(2);

        horasLigadoVentilacaoExternaElement.textContent = ciclosPorDia;
    }

    function updateSliderValues() {
        ventilacaoExternaAdjustLiga.textContent = sliderLiga.value;
        ventilacaoExternaAdjustDesliga.textContent = sliderDesliga.value;
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