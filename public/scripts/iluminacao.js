const ligarInput = document.getElementById('ligar');
    const desligarInput = document.getElementById('desligar');
    const ledIndicator = document.getElementById('led-indicator');
    const horasLigadoDisplay = document.getElementById('horas-ligado');
    const ligarValueDisplay = document.getElementById('ligar-value');
    const desligarValueDisplay = document.getElementById('desligar-value');

    ligarInput.addEventListener('input', updateLedStatus);
    desligarInput.addEventListener('input', updateLedStatus);

    function updateLedStatus() {
      const ligarHora = parseInt(ligarInput.value);
      const desligarHora = parseInt(desligarInput.value);

      ligarValueDisplay.textContent = ligarHora;
      desligarValueDisplay.textContent = desligarHora;
      console.log(ligarHora);
      console.log(desligarHora);

      const currentHour = new Date().getHours();

      if (currentHour >= ligarHora && currentHour < desligarHora) {
        ledIndicator.style.backgroundColor = 'green';
        const horasLigado = desligarHora - ligarHora;
        horasLigadoDisplay.textContent = horasLigado;
      } else {
        ledIndicator.style.backgroundColor = 'red';
        horasLigadoDisplay.textContent = '0';
      }
      
      firebase.database().ref(dbPathOn).set({
        ligar: ligarHora,
        desligar: desligarHora
      });

    }