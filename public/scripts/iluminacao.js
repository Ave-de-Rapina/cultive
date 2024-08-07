  
    document.addEventListener("DOMContentLoaded", function() {
      var slider = document.getElementById("ligar");
      var output = document.getElementById("ligar-value");
      output.innerHTML = slider.value;

      
  
      slider.oninput = function() {
          output.innerHTML = this.value;
          
          
          // Update temperature value in Firebase
          firebase.database().ref(dbPathOn).set({
              iluminacaoAjusteLiga: output.innerHTML
            });
      };
  })
  document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("ligarMin");
    var output = document.getElementById("ligar-value-min");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath06).set({
            iluminacaoAjusteLigaMin: output.innerHTML
          });
    };
})

//----------------------------CALCULAR HORAS LIGADO--------------------------------------
  
document.addEventListener('DOMContentLoaded', function () {
  const ligar = document.getElementById('ligar');
  const ligarMin = document.getElementById('ligarMin');
  const desligar = document.getElementById('desligar');
  const desligarMin = document.getElementById('desligarMin');
  const horasLigadoElement = document.getElementById('horas-ligado');
  const ligarValue = document.getElementById('ligar-value');
  const ligarValueMin = document.getElementById('ligar-value-min');
  const desligarValue = document.getElementById('desligar-value');
  const desligarValueMin = document.getElementById('desligar-value-min');

  function updateHoursLigado() {
      const ligarHora = parseInt(ligar.value, 10);
      const ligarMinuto = parseInt(ligarMin.value, 10);
      const desligarHora = parseInt(desligar.value, 10);
      const desligarMinuto = parseInt(desligarMin.value, 10);

      const ligarTotalMinutos = (ligarHora * 60) + ligarMinuto;
      const desligarTotalMinutos = (desligarHora * 60) + desligarMinuto;

      let totalMinutosLigado = desligarTotalMinutos - ligarTotalMinutos;
      if (totalMinutosLigado < 0) {
          totalMinutosLigado += 24 * 60; // Caso o horário de desligar seja no dia seguinte
      }

      const horas = Math.floor(totalMinutosLigado / 60);
      const minutos = totalMinutosLigado % 60;

      horasLigadoElement.textContent = `${horas}:${minutos.toString().padStart(2, '0')}`;
  }

  function updateSliderValues() {
      ligarValue.textContent = ligar.value;
      ligarValueMin.textContent = ligarMin.value;
      desligarValue.textContent = desligar.value;
      desligarValueMin.textContent = desligarMin.value;
  }

  ligar.addEventListener('input', () => {
      updateSliderValues();
      updateHoursLigado();
  });

  ligarMin.addEventListener('input', () => {
      updateSliderValues();
      updateHoursLigado();
  });

  desligar.addEventListener('input', () => {
      updateSliderValues();
      updateHoursLigado();
  });

  desligarMin.addEventListener('input', () => {
      updateSliderValues();
      updateHoursLigado();
  });

  // Initialize values
  updateSliderValues();
  updateHoursLigado();
});

