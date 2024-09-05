// Variáveis globais para armazenar os valores mais recentes
var tempInt = null;
var tempExt = null;
var humidityInt = null;
var humidityExt = null;
var ledStateIluminacao = null;
var ledStateVentilacaoExterna = null;
var ledStateVentilacaoInterna = null;

const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for sensor readings
const tempElement = document.getElementById("temp");  // tempElement CONTEM O ELEMENTO COM id="temp" em HTML  
const humElement = document.getElementById("hum");
const tempElement2 = document.getElementById("temp2");  // tempElement CONTEM O ELEMENTO COM id="temp" em HTML  
const humElement2 = document.getElementById("hum2");
const notificationsContainer = document.getElementById("notifications-container");
const ledIluminacaoElement = document.getElementById("led-indicator-iluminacao");
const ledTemperaturaElement = document.getElementById("led-indicator-temperatura");
const ledUmidadeElement = document.getElementById("led-indicator-umidade");
const ledVentilacaoExternaElement = document.getElementById("led-indicator-ventilacao-externa");
const ledVentilacaoInternaElement = document.getElementById("led-indicator-ventilacao-interna");
const ajusIluminLigaElement = document.getElementById("ligar-value");
const ajusIluminLigaInputElement = document.getElementById("ligar");
const ajusIluminLigaMinElement = document.getElementById("ligar-value-min");
const ajusIluminLigaMinInputElement = document.getElementById("ligarMin");
const ajusIluminDesligaElement = document.getElementById("desligar-value");
const ajusIluminDesligaInputElement = document.getElementById("desligar");
const ajusIluminDesligaMinElement = document.getElementById("desligar-value-min");
const ajusIluminDesligaMinInputElement = document.getElementById("desligarMin");
const ajusTemperaturaElement = document.getElementById("tempAdjus");
const ajusTemperaturaInputElement = document.getElementById("temp-slider");
const ajusTemperaturaHistereseElement = document.getElementById("tempAdjusHisterese");
const ajusTemperaturaHistereseInputElement = document.getElementById("temp-slider-temperatura-histerese");
const ajusTemperaturaOffsetElement = document.getElementById("tempAdjusOffset");
const ajusTemperaturaOffsetInputElement = document.getElementById("temp-slider-temperatura-offset");

const ajusUmidadeElement = document.getElementById("umidadeAdjust");
const ajusUmidadeInputElement = document.getElementById("temp-slider-umidade");
const ajusUmidadeHistereseElement = document.getElementById("umidadeHistereseAdjus");
const ajusUmidadeHistereseInputElement = document.getElementById("temp-slider-umidade-histerese");
const ajusUmidadeOffsetElement = document.getElementById("umidadeOffsetAdjus");
const ajusUmidadeOffsetInputElement = document.getElementById("temp-slider-umidade-offset");

const ajusVentilacaoExternaLigaElement = document.getElementById("ventilacaoExternaAdjustLiga");
const ajusVentilacaoExternaLigaInputElement = document.getElementById("temp-slider-ventilacao-externa-liga");
const ajusVentilacaoExternaDesligaElement = document.getElementById("ventilacaoExternaAdjustDesliga");
const ajusVentilacaoExternaDesligaInputElement = document.getElementById("temp-slider-ventilacao-externa-desliga");

const ajusVentilacaoInternaLigaElement = document.getElementById("ventilacaoInternaAdjustLiga");
const ajusVentilacaoInternaLigaInputElement = document.getElementById("temp-slider-ventilacao-interna-liga");
const ajusVentilacaoInternaDesligaElement = document.getElementById("ventilacaoInternaAdjustDesliga");
const ajusVentilacaoInternaDesligaInputElement = document.getElementById("temp-slider-ventilacao-interna-desliga");


//const ledElement = document.getElementById("led");

/*//VARIAVEIS ILUMINAÇÃO
const ligarInput = document.getElementById('ligar');
const desligarInput = document.getElementById('desligar');
//const ledIndicator = document.getElementById('led-indicator');
const horasLigadoDisplay = document.getElementById('horas-ligado');
const ligarValueDisplay = document.getElementById('ligar-value');
const desligarValueDisplay = document.getElementById('desligar-value');*/

var dbPathOn;
var dbPathOff;
var dbPath01;
var dbPath02;
var dbPath03;
var dbPath04;
var dbPath05;
var dbPath06;
var dbPath07;
var dbPath08;
var dbPath09;

var dbPath13;
var dbPath14;
var dbPath15;
var dbPath16;

//var dbPathLed;

// MANAGE LOGIN/LOGOUT UI     -ESTUDAR
const setupUI = (user) => {
  if (user) {
    // Toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display = 'block';
    userDetailsElement.style.display = 'block';
    userDetailsElement.innerHTML = user.email;

    // Get user UID to get data from the database
    var uid = user.uid;
    console.log(uid);

    // Extract the portion of the email before the '@'
    var emailPrefix = user.email.split('@')[0];

    // Database paths (with user email prefix and UID)
    var dbPathTemp = `${emailPrefix}/${uid.toString()}/data01/temperature`;
    var dbPathHum = `${emailPrefix}/${uid.toString()}/data01/humidity`;
    var dbPathTemp2 = `${emailPrefix}/${uid.toString()}/data01/temperature2`;
    var dbPathHum2 = `${emailPrefix}/${uid.toString()}/data01/humidity2`;
    var dbPathCodigoErro = `${emailPrefix}/${uid.toString()}/data01/CodigoErro`;
    var dbPathStatusLedIluminacao = `${emailPrefix}/${uid.toString()}/data01/statusLedIluminacao`;
    var dbPathStatusLedTemperatura = `${emailPrefix}/${uid.toString()}/data01/statusLedTemperatura`;
    var dbPathStatusLedUmidade = `${emailPrefix}/${uid.toString()}/data01/statusLedUmidade`;
    var dbPathStatusLedVentilacaoExterna = `${emailPrefix}/${uid.toString()}/data01/statusLedVentilacaoExterna`;
    var dbPathStatusLedVentilacaoInterna = `${emailPrefix}/${uid.toString()}/data01/statusLedVentilacaoInterna`;
    dbPathOn = `${emailPrefix}/${uid.toString()}/ajuste/ajusteIluminacaoLiga`;
    dbPathOff = `${emailPrefix}/${uid.toString()}/ajuste/ajusteIluminacaoDesliga`;
    dbPath01 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteTemperatura`;
    dbPath02 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteUmidade`;
    dbPath03 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteVentilacaoExternaLiga`;
    dbPath04 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteVentilacaoExternaDesliga`;
    dbPath05 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteVentilacaoInternaLiga`;
    dbPath06 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteIluminacaoLigaMin`;
    dbPath07 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteIluminacaoDesligaMin`;
    dbPath08 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteVentilacaoInternaLiga`;
    dbPath09 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteVentilacaoInternaDesliga`;
    
    dbPath13 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteTemperaturaHisterese`;
    dbPath14 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteTemperaturaOffset`;
    dbPath15 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteUmidadeHisterese`;
    dbPath16 = `${emailPrefix}/${uid.toString()}/ajuste/ajusteUmidadeOffset`;

    // Database references
    var dbRefTemp = firebase.database().ref().child(dbPathTemp);
    var dbRefHum = firebase.database().ref().child(dbPathHum);
    var dbRefTemp2 = firebase.database().ref().child(dbPathTemp2);
    var dbRefHum2 = firebase.database().ref().child(dbPathHum2);
    var dbRefCodigoErro = firebase.database().ref().child(dbPathCodigoErro);
    var dbRefStatusLedIluminacao = firebase.database().ref().child(dbPathStatusLedIluminacao);
    var dbRefStatusLedTemperatura = firebase.database().ref().child(dbPathStatusLedTemperatura);
    var dbRefStatusLedUmidade = firebase.database().ref().child(dbPathStatusLedUmidade);
    var dbRefStatusLedVentilacaoExterna = firebase.database().ref().child(dbPathStatusLedVentilacaoExterna);
    var dbRefStatusLedVentilacaoInterna = firebase.database().ref().child(dbPathStatusLedVentilacaoInterna);
    var dbRefdbPathOn = firebase.database().ref().child(dbPathOn);
    var dbRefdbPathOff = firebase.database().ref().child(dbPathOff);
    var dbRefdbPath01 = firebase.database().ref().child(dbPath01);
    var dbRefdbPath02 = firebase.database().ref().child(dbPath02);
    var dbRefdbPath03 = firebase.database().ref().child(dbPath03);
    var dbRefdbPath04 = firebase.database().ref().child(dbPath04);
    var dbRefdbPath05 = firebase.database().ref().child(dbPath05);
    var dbRefdbPath06 = firebase.database().ref().child(dbPath06);
    var dbRefdbPath07 = firebase.database().ref().child(dbPath07);
    var dbRefdbPath08 = firebase.database().ref().child(dbPath08);
    var dbRefdbPath09 = firebase.database().ref().child(dbPath09);
    
    var dbRefdbPath13 = firebase.database().ref().child(dbPath13);
    var dbRefdbPath14 = firebase.database().ref().child(dbPath14);
    var dbRefdbPath15 = firebase.database().ref().child(dbPath15);
    var dbRefdbPath16 = firebase.database().ref().child(dbPath16);
    
    //var dbRefPres = firebase.database().ref().child(dbPathPres);
    // var dbPathLed = firebase.database().ref().child(dbPathLed);
    //var dbPathOn = firebase.database().ref().child(dbPathOn);  

    // RECUPERA O VALOR DO AJUSTES QUANDO ATUALIZA OU ENTRA NA PAGINA
//----------------------------ILUMINACAO LIGA--------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElemento(valor) {
  ajusIluminLigaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInput(valor) {
  ajusIluminLigaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPathOn.on('value', snap => {
  var valor = snap.val().iluminacaoAjusteLiga;
  // Atualizar o valor do elemento span
  atualizarValorElemento(valor);
  // Atualizar o valor do input
  atualizarValorInput(valor);
});

// Adicionar um listener para mudanças no input range
ajusIluminLigaInputElement.addEventListener('input', function() {
  var novoValor = ajusIluminLigaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPathOn.set({ iluminacaoAjusteLiga: novoValor });
});

//----------------------------------ILUMINACAO LIGA MINUTO--------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoLigaMin(valor) {
  ajusIluminLigaMinElement.innerText = valor;
}
// Função para atualizar o valor do input
function atualizarValorInputLigaMin(valor) {
  ajusIluminLigaMinInputElement.value = valor;
}
dbRefdbPath06.on('value', snap => {
  var valor = snap.val().iluminacaoAjusteLigaMin;
  // Atualizar o valor do elemento span
  atualizarValorElementoLigaMin(valor);
  // Atualizar o valor do input
  atualizarValorInputLigaMin(valor);
});

// Adicionar um listener para mudanças no input range
ajusIluminLigaMinInputElement.addEventListener('input', function() {
  var novoValor = ajusIluminLigaMinInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath06.set({ iluminacaoAjusteLigaMin: novoValor });
});

//--------------------------------ILUMINACAO DESLIGA---------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoDesligaMin(valor) {
  ajusIluminDesligaMinElement.innerText = valor;
}
// Função para atualizar o valor do input
function atualizarValorInputDesligaMin(valor) {
  ajusIluminDesligaMinInputElement.value = valor;
}
dbRefdbPath07.on('value', snap => {
  var valor = snap.val().iluminacaoAjusteDesligaMin;
  // Atualizar o valor do elemento span
  atualizarValorElementoDesligaMin(valor);
  // Atualizar o valor do input
  atualizarValorInputDesligaMin(valor);
});

// Adicionar um listener para mudanças no input range
ajusIluminDesligaMinInputElement.addEventListener('input', function() {
  var novoValor = ajusIluminDesligaMinInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath07.set({ iluminacaoAjusteDesligaMin: novoValor });
});

//---------------------------------------ILUMINACAO DESLIGA-------------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoDesliga(valor) {
  ajusIluminDesligaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputDesliga(valor) {
  ajusIluminDesligaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPathOff.on('value', snap => {
  var valor = snap.val().iluminacaoAjusteDesliga;
  // Atualizar o valor do elemento span
  atualizarValorElementoDesliga(valor);
  // Atualizar o valor do input
  atualizarValorInputDesliga(valor);
});

// Adicionar um listener para mudanças no input range
ajusIluminDesligaInputElement.addEventListener('input', function() {
  var novoValor = ajusIluminDesligaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPathOff.set({ iluminacaoAjusteDesliga: novoValor });
});

//------------------------------------TEMPERATURA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoTemperatura(valor) {
  ajusTemperaturaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputTemperatura(valor) {
  ajusTemperaturaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath01.on('value', snap => {
  var valor = snap.val().temperaturaAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoTemperatura(valor);
  // Atualizar o valor do input
  atualizarValorInputTemperatura(valor);
});

// Adicionar um listener para mudanças no input range
ajusTemperaturaInputElement.addEventListener('input', function() {
  var novoValor = ajusTemperaturaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath01.set({ temperaturaAjuste: novoValor });
});

//------------------------------------TEMPERATURA HISTERESE-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoTemperaturaHisterese(valor) {
  ajusTemperaturaHistereseElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputTemperaturaHisterese(valor) {
  ajusTemperaturaHistereseInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath13.on('value', snap => {
  var valor = snap.val().temperaturaHistereseAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoTemperaturaHisterese(valor);
  // Atualizar o valor do input
  atualizarValorInputTemperaturaHisterese(valor);
});

// Adicionar um listener para mudanças no input range
ajusTemperaturaHistereseInputElement.addEventListener('input', function() {
  var novoValor = ajusTemperaturaHistereseInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath13.set({ temperaturaHistereseAjuste: novoValor });
});

//------------------------------------TEMPERATURA OFFSET-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoTemperaturaOffset(valor) {
  ajusTemperaturaOffsetElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputTemperaturaOffset(valor) {
  ajusTemperaturaOffsetInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath14.on('value', snap => {
  var valor = snap.val().temperaturaOffsetAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoTemperaturaOffset(valor);
  // Atualizar o valor do input
  atualizarValorInputTemperaturaOffset(valor);
});

// Adicionar um listener para mudanças no input range
ajusTemperaturaOffsetInputElement.addEventListener('input', function() {
  var novoValor = ajusTemperaturaOffsetInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath14.set({ temperaturaOffsetAjuste: novoValor });
});

//------------------------------------UMIDADE-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoUmidade(valor) {
  ajusUmidadeElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputUmidade(valor) {
  ajusUmidadeInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath02.on('value', snap => {
  var valor = snap.val().umidadeAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoUmidade(valor);
  // Atualizar o valor do input
  atualizarValorInputUmidade(valor);
});

// Adicionar um listener para mudanças no input range
ajusUmidadeInputElement.addEventListener('input', function() {
  var novoValor = ajusUmidadeInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath02.set({ umidadeAjuste: novoValor });
});

//------------------------------------UMIDADE HISTERESE-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoUmidadeHisterese(valor) {
  ajusUmidadeHistereseElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputUmidadeHisterese(valor) {
  ajusUmidadeHistereseInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath15.on('value', snap => {
  var valor = snap.val().umidadeHistereseAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoUmidadeHisterese(valor);
  // Atualizar o valor do input
  atualizarValorInputUmidadeHisterese(valor);
});

// Adicionar um listener para mudanças no input range
ajusUmidadeHistereseInputElement.addEventListener('input', function() {
  var novoValor = ajusUmidadeHistereseInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath15.set({ umidadeHistereseAjuste: novoValor });
});

//------------------------------------UMIDADE OFFSET-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoUmidadeOffset(valor) {
  ajusUmidadeOffsetElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputUmidadeOffset(valor) {
  ajusUmidadeOffsetInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath16.on('value', snap => {
  var valor = snap.val().umidadeOffsetAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoUmidadeOffset(valor);
  // Atualizar o valor do input
  atualizarValorInputUmidadeOffset(valor);
});

// Adicionar um listener para mudanças no input range
ajusUmidadeOffsetInputElement.addEventListener('input', function() {
  var novoValor = ajusUmidadeOffsetInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath16.set({ umidadeOffsetAjuste: novoValor });
});

//------------------------------------VENTILACAO EXTERNA LIGA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoVentilacaoExternaLiga(valor) {
  ajusVentilacaoExternaLigaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputVentilacaoExternaLiga(valor) {
  ajusVentilacaoExternaLigaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath03.on('value', snap => {
  var valor = snap.val().ventilacaoExternaAjusteLiga;
  // Atualizar o valor do elemento span
  atualizarValorElementoVentilacaoExternaLiga(valor);
  // Atualizar o valor do input
  atualizarValorInputVentilacaoExternaLiga(valor);
});

// Adicionar um listener para mudanças no input range
ajusVentilacaoExternaLigaInputElement.addEventListener('input', function() {
  var novoValor = ajusVentilacaoExternaLigaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath03.set({ ventilacaoExternaAjusteLiga: novoValor });
});
//------------------------------------VENTILACAO EXTERNA DESLIGA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoVentilacaoExternaDesliga(valor) {
  ajusVentilacaoExternaDesligaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputVentilacaoExternaDesliga(valor) {
  ajusVentilacaoExternaDesligaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath04.on('value', snap => {
  var valor = snap.val().ventilacaoExternaAjusteDesliga;
  // Atualizar o valor do elemento span
  atualizarValorElementoVentilacaoExternaDesliga(valor);
  // Atualizar o valor do input
  atualizarValorInputVentilacaoExternaDesliga(valor);
});

// Adicionar um listener para mudanças no input range
ajusVentilacaoExternaDesligaInputElement.addEventListener('input', function() {
  var novoValor = ajusVentilacaoExternaDesligaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath04.set({ ventilacaoExternaAjusteDesliga: novoValor });
});

//------------------------------------VENTILACAO INTERNA LIGA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoVentilacaoInternaLiga(valor) {
  ajusVentilacaoInternaLigaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputVentilacaoInternaLiga(valor) {
  ajusVentilacaoInternaLigaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath08.on('value', snap => {
  var valor = snap.val().ventilacaoInternaAjusteLiga;
  // Atualizar o valor do elemento span
  atualizarValorElementoVentilacaoInternaLiga(valor);
  // Atualizar o valor do input
  atualizarValorInputVentilacaoInternaLiga(valor);
});

// Adicionar um listener para mudanças no input range
ajusVentilacaoInternaLigaInputElement.addEventListener('input', function() {
  var novoValor = ajusVentilacaoInternaLigaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath05.set({ ventilacaoInternaAjusteLiga: novoValor });
});
//------------------------------------VENTILACAO INTERNA DESLIGA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoVentilacaoInternaDesliga(valor) {
  ajusVentilacaoInternaDesligaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputVentilacaoInternaDesliga(valor) {
  ajusVentilacaoInternaDesligaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath09.on('value', snap => {
  var valor = snap.val().ventilacaoInternaAjusteDesliga;
  // Atualizar o valor do elemento span
  atualizarValorElementoVentilacaoInternaDesliga(valor);
  // Atualizar o valor do input
  atualizarValorInputVentilacaoInternaDesliga(valor);
});

// Adicionar um listener para mudanças no input range
ajusVentilacaoInternaDesligaInputElement.addEventListener('input', function() {
  var novoValor = ajusVentilacaoInternaDesligaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath09.set({ ventilacaoInternaAjusteDesliga: novoValor });
});

//---------------------------LOGICA CADEADO------------------------------------------------------

document.querySelectorAll('.lock-icon').forEach(lock => {
  lock.addEventListener('click', function() {
      const card = this.parentElement;
      const sliders = card.querySelectorAll('.temp-slider');
      const isLocked = this.classList.contains('fa-lock');
      sliders.forEach(slider => {
          slider.disabled = !isLocked;
      });
      this.classList.toggle('fa-lock', !isLocked);
      this.classList.toggle('fa-lock-open', isLocked);
  });
});


//---------------------------------GRAFICOS----------------------------------------------------------


function getBrasiliaTime() {
  var now = new Date();
  now.setUTCHours(now.getUTCHours() - 3); // Ajusta para UTC-3 (Brasília)
  return now.getTime();
}

function updateChart() {
  var x = getBrasiliaTime(); // Tempo atual ajustado para Brasília

  // Atualiza o gráfico de temperatura
  if (tempInt !== null) {
    chartT.series[0].addPoint([x, tempInt], true, false, true);
  }

  if (tempExt !== null) {
    chartT.series[1].addPoint([x, tempExt], true, false, true);
  }

  if (ledStateIluminacao !== null) {
    chartT.series[2].addPoint([x, ledStateIluminacao], true, false, true);
  }

  if (ledStateVentilacaoExterna !== null) {
    chartT.series[3].addPoint([x, ledStateVentilacaoExterna], true, false, true);
  }

  if (ledStateVentilacaoInterna !== null) {
    chartT.series[4].addPoint([x, ledStateVentilacaoInterna], true, false, true);
  }

  // Atualiza o gráfico de umidade
  if (humidityInt !== null) {
    chartH.series[0].addPoint([x, humidityInt], true, false, true);
  }

  if (humidityExt !== null) {
    chartH.series[1].addPoint([x, humidityExt], true, false, true);
  }

  if (ledStateIluminacao !== null) {
    chartH.series[2].addPoint([x, ledStateIluminacao], true, false, true);
  }

  if (ledStateVentilacaoExterna !== null) {
    chartH.series[3].addPoint([x, ledStateVentilacaoExterna], true, false, true);
  }

  if (ledStateVentilacaoInterna !== null) {
    chartH.series[4].addPoint([x, ledStateVentilacaoInterna], true, false, true);
  }
}

// Atualiza os dados de temperatura
dbRefTemp.on('value', snap => {
  tempInt = parseFloat(snap.val().toFixed(1));
  tempElement.innerText = tempInt;
  updateChart(); // Chama a função para atualizar os gráficos
});

dbRefTemp2.on('value', snap => {
  tempExt = parseFloat(snap.val().toFixed(1));
  tempElement2.innerText = tempExt;
  updateChart(); // Chama a função para atualizar os gráficos
});

// Atualiza os dados de umidade
dbRefHum.on('value', snap => {
  humidityInt = parseFloat(snap.val().toFixed(1));
  humElement.innerText = humidityInt;
  updateChart(); // Chama a função para atualizar os gráficos
});

dbRefHum2.on('value', snap => {
  humidityExt = parseFloat(snap.val().toFixed(1));
  humElement2.innerText = humidityExt;
  updateChart(); // Chama a função para atualizar os gráficos
});

// Atualiza os estados dos LEDs de Iluminação
dbRefStatusLedIluminacao.on('value', snap => {
  ledStateIluminacao = snap.val();

  // Atualiza o estado do LED no DOM
  const ledIndicator = document.getElementById("led-indicator-iluminacao");
  if (ledStateIluminacao === 1) {
    ledIndicator.classList.add('on');
    ledIndicator.classList.remove('off');
  } else {
    ledIndicator.classList.add('off');
    ledIndicator.classList.remove('on');
  }

  updateChart(); // Chama a função para atualizar os gráficos
});

// Atualiza os estados dos LEDs de Ventilação
dbRefStatusLedVentilacaoExterna.on('value', snap => {
  ledStateVentilacaoExterna = snap.val();

  // Atualiza o estado do LED no DOM
  const ledIndicator = document.getElementById("led-indicator-ventilacao-externa");
  if (ledStateVentilacaoExterna === 1) {
    ledIndicator.classList.add('on');
    ledIndicator.classList.remove('off');
  } else {
    ledIndicator.classList.add('off');
    ledIndicator.classList.remove('on');
  }

  updateChart(); // Chama a função para atualizar os gráficos
});

// Atualiza os estados dos LEDs de Ventilação
dbRefStatusLedVentilacaoInterna.on('value', snap => {
  ledStateVentilacaoInterna = snap.val();

  // Atualiza o estado do LED no DOM
  const ledIndicator = document.getElementById("led-indicator-ventilacao-interna");
  if (ledStateVentilacaoInterna === 1) {
    ledIndicator.classList.add('on');
    ledIndicator.classList.remove('off');
  } else {
    ledIndicator.classList.add('off');
    ledIndicator.classList.remove('on');
  }

  updateChart(); // Chama a função para atualizar os gráficos
});



//---------------------------CÓDIGO DE ERRO--------------------------------

  let lastCodigoErro = null; // Variável para armazenar o último código de erro

// Função para adicionar uma nova notificação
  function addNotification(message, type) {
    const timestamp = new Date();
    const timeString = timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    // Criar o elemento de notificação
    const notification = document.createElement('p');
    notification.className = `notification ${type}`;
    notification.textContent = `${timeString} - ${message}`;

    // Adicionar a nova notificação no topo do contêiner
    notificationsContainer.prepend(notification);

    // Limitar o número de notificações a 10
    if (notificationsContainer.childElementCount > 10) {
      notificationsContainer.removeChild(notificationsContainer.lastChild);
    }
  }

// Monitorar mudanças no codigoErro no Firebase
dbRefCodigoErro.on('value', snap => {
  const codigoErroInt = parseInt(snap.val(), 10);

  // Verificar se o novo código de erro é diferente do último
  if (codigoErroInt !== lastCodigoErro) {
    // Atualizar o último código de erro
    lastCodigoErro = codigoErroInt;

    // Determinar a mensagem e o tipo de notificação com base no codigoErroInt
    let message = '';
    let type = '';

    //---------------------------------MENSAGENS DE NOTIFICAÇÃO-----------------------------

    if (codigoErroInt >= 0 && codigoErroInt < 10) {
      switch (codigoErroInt) {
          case 0:
              message = "O sistema iniciou, conectou com a rede wifi e com o banco de dados com sucesso. Configure ou verifique suas configurações.";
              break;
          case 1:
              message = "O sistema de ventilação foi acionado, ar fresco para suas plantas.";
              break;
          case 2:
              message = "O sistema de ventilação foi desligado";
              break;
          case 3:
              message = "O sistema de iluminação foi acionado, faça-se a luz!";
              break;
          case 4:
              message = "O sistema de iluminação foi desligado, a escuridão toma conta do ambiente";
              break;
          case 5:
              message = "O sistema desumidificador foi acionado, logo sua umidade será equalizada.";
              break;
          case 6:
              message = "O sistema desumidificador foi desligado, a umidade se encontra desntro da faixa estipulada.";
              break;
          case 7:
              message = "O sistema de aquecimento foi acionado, parece que esfriou por aqui.";
              break;
          case 8:
              message = "O sistema de aquecimento foi desligado, a temperatura está ok.";
              break;
          case 9:
              message = "É hora de atualizar a a data e hora do sistema com o servidor";
              break;
          case 10:
              message = "A hora foi atualizada com sucesso!";
              break;
          case 10:
              message = "------------";
              break;
          case 11:
              message = "-----------";
              break;
      }
      type = 'green';
  } else if (codigoErroInt >= 100 && codigoErroInt < 199) {
      switch (codigoErroInt) {
          case 100:
              message = "Reset caused by power-on event.";
              break;
          case 101:
              message = "Reset caused by external pin (not applicable for ESP32).";
              break;
          case 102:
              message = "Reset caused by software using esp_restart.";
              break;
          case 103:
              message = "Reset caused by exception/panic.";
              break;
          case 104:
              message = "Reset caused by interrupt watchdog.";
              break;
          case 105:
              message = "Reset caused by task watchdog.";
              break;
          case 106:
              message = "Reset caused by other watchdogs.";
              break;
          case 107:
              message = "Reset after exiting deep sleep mode.";
              break;
          case 108:
              message = "Brownout reset (voltage drop).";
              break;
          case 109:
              message = "Reset over SDIO.";
              break;
          case 110:
                message = "Não foi possível sincronizar a hora após várias tentativas, mais tarde será tentado novamente.";
                break;
      }
      type = 'yellow';
  } else if (codigoErroInt >= 200 && codigoErroInt < 299) {
      switch (codigoErroInt) {
          case 200:
              message = "Sensor interno em falha. Por questão de segurança todo sistema de temperatura e umidade foi bloqueado.";
              break;
          case 201:
              message = "Sensor externo em falha.";
              break;
          case 202:
              message = "Alerta! A situação é mais urgente que aquele email de spam.";
              break;
          case 203:
              message = "Erro! Algo deu ruim, e não foi só a previsão do tempo.";
              break;
          case 204:
              message = "Alerta! O sistema quer que você faça algo, tipo agora!";
              break;
          case 205:
              message = "Erro crítico! Melhor resolver antes que fique pior que sua última reunião.";
              break;
          case 206:
              message = "Ação necessária! Isso aqui tá mais tenso que filme de terror.";
              break;
          case 207:
              message = "Erro! Melhor consertar antes que vire novela mexicana.";
              break;
          case 208:
              message = "Alerta crítico! O sistema está mais temperamental que segunda-feira.";
              break;
          case 209:
              message = "Erro! Hora de entrar em ação, tipo super-herói, mas sem a capa.";
              break;
      }
      type = 'red';
  }
  

    // Adicionar notificação apenas se a mensagem foi definida
    if (message) {
      addNotification(message, type);
    }
  }
});


//--------------------------STATUS LED-----------------------------------------------------
    
    dbRefStatusLedTemperatura.on('value', snap => {
      const ledState = snap.val();
     
      
      const ledIndicator = document.getElementById("led-indicator-temperatura");
      if (ledState === 1) {
          ledIndicator.classList.add('on');
          ledIndicator.classList.remove('off');
      } else {
          ledIndicator.classList.add('off');
          ledIndicator.classList.remove('on');
      }
    });
    dbRefStatusLedUmidade.on('value', snap => {
      const ledState = snap.val();
     
      
      const ledIndicator = document.getElementById("led-indicator-umidade");
      if (ledState === 1) {
          ledIndicator.classList.add('on');
          ledIndicator.classList.remove('off');
      } else {
          ledIndicator.classList.add('off');
          ledIndicator.classList.remove('on');
      }
    });     

  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }  

  
// if user is logged out
} 


/*
setInterval(function ( ) {
 
      var x = (new Date()).getTime(),
      y=5;
          //y = parseFloat(this.responseText);
      //console.log(this.responseText);
      if(chartT.series[0].data.length > 1000) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
}, 1000 ) ;*/

