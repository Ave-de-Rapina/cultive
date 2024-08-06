
const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for sensor readings
const tempElement = document.getElementById("temp");  // tempElement CONTEM O ELEMENTO COM id="temp" em HTML  
const humElement = document.getElementById("hum");
const ledIluminacaoElement = document.getElementById("led-indicator-iluminacao");
const ledTemperaturaElement = document.getElementById("led-indicator-temperatura");
const ledUmidadeElement = document.getElementById("led-indicator-umidade");
const ledVentilacaoElement = document.getElementById("led-indicator-ventilacao");
const ledIrrigacaoElement = document.getElementById("led-indicator-irrigacao");
const tempElement02 = document.getElementById("temp02");  // tempElement CONTEM O ELEMENTO COM id="temp" em HTML  
const humElement02 = document.getElementById("hum02");
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
const ajusUmidadeHistereseElement = document.getElementById("umidadeHistereseAdjust");
const ajusUmidadeHistereseInputElement = document.getElementById("temp-slider-umidade-histerese");
const ajusUmidadeOffsetElement = document.getElementById("umidadeOffsetAdjus");
const ajusUmidadeOffsetInputElement = document.getElementById("temp-slider-umidade-offset");

const ajusVentilacaoLigaElement = document.getElementById("ventilacaoAdjustLiga");
const ajusVentilacaoLigaInputElement = document.getElementById("temp-slider-ventilacao-liga");
const ajusVentilacaoDesligaElement = document.getElementById("ventilacaoAdjustDesliga");
const ajusVentilacaoDesligaInputElement = document.getElementById("temp-slider-ventilacao-desliga");
const ajusIrrigacao01HoraElement = document.getElementById("ligar-value-irrigacao");
const ajusIrrigacao01HoraInputElement = document.getElementById("ligar-irrigacao");
const ajusIrrigacao01Element = document.getElementById("irrigacaoAdjust");
const ajusIrrigacao01InputElement = document.getElementById("temp-slider-irrigacao");

const ajusIrrigacao02HoraElement = document.getElementById("ligar-value-irrigacao02");
const ajusIrrigacao02HoraInputElement = document.getElementById("ligar-irrigacao02");
const ajusIrrigacao02Element = document.getElementById("irrigacaoAdjust02");
const ajusIrrigacao02InputElement = document.getElementById("temp-slider-irrigacao02");

const ajusIrrigacao03HoraElement = document.getElementById("ligar-value-irrigacao03");
const ajusIrrigacao03HoraInputElement = document.getElementById("ligar-irrigacao03");
const ajusIrrigacao03Element = document.getElementById("irrigacaoAdjust03");
const ajusIrrigacao03InputElement = document.getElementById("temp-slider-irrigacao03");


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
var dbPath10;
var dbPath11;
var dbPath12;
var dbPath13;
var dbPath14;
var dbPath15;
var dbPath16;
//var dbPathLed;

// MANAGE LOGIN/LOGOUT UI     -ESTUDAR
const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display ='block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    // get user UID to get data from database
    var uid = user.uid;   //VARIAVEL uid ESTA RECENBENDO O UID DO USUARIO PARA OBTER DADOS DO BANCO DE DADOS
    console.log(uid);   //MANDAR ESCREVER NO CONSOLE O UID do usuario

    // Database paths (with user UID)
    var dbPathTemp = 'UsersData/' + uid.toString()+ '/temperature'; //VAI PASSAR O ENDEREÇO DO BANCO DE DADOS PARA dbPathTemp 
    var dbPathHum = 'UsersData/' + uid.toString() + '/humidity';    //uid.toString VAI CONVERTER O VALOR DE UID SEJA FLOAT, INT... PARA STRING
    var dbPathStatusLedIluminacao = 'UsersData/' + uid.toString() + '/statusLedIluminacao';
    var dbPathStatusLedTemperatura = 'UsersData/' + uid.toString() + '/statusLedTemperatura';
    var dbPathStatusLedUmidade = 'UsersData/' + uid.toString() + '/statusLedUmidade';
    var dbPathStatusLedVentilacao = 'UsersData/' + uid.toString() + '/statusLedVentilacao';
    var dbPathStatusLedIrrigacao = 'UsersData/' + uid.toString() + '/statusLedIrrigacao';
    var dbPathTemp02 = 'UsersData/' + uid.toString() + '/temperature02'; 
    var dbPathHum02 = 'UsersData/' + uid.toString() + '/humidity02';    
    //var dbPathPres = 'UsersData/' + uid.toString() + '/pressure:';  //dbPathPres VAI ESTAR O ENDEREÇO DO BANCO DE DADOS UID com o uid do usuario
    dbPathOn = 'UsersData/' + uid.toString() + '/ajusteIluminacaoLiga';
    dbPathOff = 'UsersData/' + uid.toString() + '/ajusteIluminacaoDesliga';
    dbPath01 = 'UsersData/' + uid.toString() + '/ajusteTemperatura';
    dbPath02 = 'UsersData/' + uid.toString() + '/ajusteUmidade';
    dbPath03 = 'UsersData/' + uid.toString() + '/ajusteVentilacaoLiga';
    dbPath04 = 'UsersData/' + uid.toString() + '/ajusteVentilacaoDesliga';
    dbPath05 = 'UsersData/' + uid.toString() + '/ajusteIrrigacao';
    dbPath06 = 'UsersData/' + uid.toString() + '/ajusteIluminacaoLigaMin';
    dbPath07 = 'UsersData/' + uid.toString() + '/ajusteIluminacaoDesligaMin';
    dbPath08 = 'UsersData/' + uid.toString() + '/ajusteIrrigacaoHora';
    dbPath09 = 'UsersData/' + uid.toString() + '/ajusteIrrigacaoHora02';
    dbPath10 = 'UsersData/' + uid.toString() + '/ajusteIrrigacao02';
    dbPath11 = 'UsersData/' + uid.toString() + '/ajusteIrrigacaoHora03';
    dbPath12 = 'UsersData/' + uid.toString() + '/ajusteIrrigacao03';
    dbPath13 = 'UsersData/' + uid.toString() + '/ajusteTemperaturaHisterese';
    dbPath14 = 'UsersData/' + uid.toString() + '/ajusteTemperaturaOffset';
    dbPath15 = 'UsersData/' + uid.toString() + '/ajusteUmidadeHisterese';
    dbPath16 = 'UsersData/' + uid.toString() + '/ajusteUmidadeOffset';
    //dbPathLed = 'UsersData/' + uid.toString() + '/led';

    // Database references
    var dbRefTemp = firebase.database().ref().child(dbPathTemp);
    var dbRefHum = firebase.database().ref().child(dbPathHum);
    var dbRefStatusLedIluminacao = firebase.database().ref().child(dbPathStatusLedIluminacao);
    var dbRefStatusLedTemperatura = firebase.database().ref().child(dbPathStatusLedTemperatura);
    var dbRefStatusLedUmidade = firebase.database().ref().child(dbPathStatusLedUmidade);
    var dbRefStatusLedVentilacao = firebase.database().ref().child(dbPathStatusLedVentilacao);
    var dbRefStatusLedIrrigacao = firebase.database().ref().child(dbPathStatusLedIrrigacao);
    var dbRefTemp02 = firebase.database().ref().child(dbPathTemp02);
    var dbRefHum02 = firebase.database().ref().child(dbPathHum02);
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
    var dbRefdbPath10 = firebase.database().ref().child(dbPath10);
    var dbRefdbPath11 = firebase.database().ref().child(dbPath11);
    var dbRefdbPath12 = firebase.database().ref().child(dbPath12);
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

//------------------------------------VENTILACAO LIGA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoVentilacaoLiga(valor) {
  ajusVentilacaoLigaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputVentilacaoLiga(valor) {
  ajusVentilacaoLigaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath03.on('value', snap => {
  var valor = snap.val().ventilacaoAjusteLiga;
  // Atualizar o valor do elemento span
  atualizarValorElementoVentilacaoLiga(valor);
  // Atualizar o valor do input
  atualizarValorInputVentilacaoLiga(valor);
});

// Adicionar um listener para mudanças no input range
ajusVentilacaoLigaInputElement.addEventListener('input', function() {
  var novoValor = ajusVentilacaoLigaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath03.set({ ventilacaoAjusteLiga: novoValor });
});
//------------------------------------VENTILACAO DESLIGA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoVentilacaoDesliga(valor) {
  ajusVentilacaoDesligaElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputVentilacaoDesliga(valor) {
  ajusVentilacaoDesligaInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath04.on('value', snap => {
  var valor = snap.val().ventilacaoAjusteDesliga;
  // Atualizar o valor do elemento span
  atualizarValorElementoVentilacaoDesliga(valor);
  // Atualizar o valor do input
  atualizarValorInputVentilacaoDesliga(valor);
});

// Adicionar um listener para mudanças no input range
ajusVentilacaoDesligaInputElement.addEventListener('input', function() {
  var novoValor = ajusVentilacaoDesligaInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath04.set({ ventilacaoAjusteDesliga: novoValor });
});

//------------------------------------IRRIGACAO 01 HORA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoIrrigacao01Hora(valor) {
  ajusIrrigacao01HoraElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputIrrigacao01Hora(valor) {
  ajusIrrigacao01HoraInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath08.on('value', snap => {
  var valor = snap.val().irrigacaoAjusteHora;
  // Atualizar o valor do elemento span
  atualizarValorElementoIrrigacao01Hora(valor);
  // Atualizar o valor do input
 atualizarValorInputIrrigacao01Hora(valor);
});

// Adicionar um listener para mudanças no input range
ajusIrrigacao01HoraInputElement.addEventListener('input', function() {
  var novoValor = ajusIrrigacao01HoraInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath08.set({ irrigacaoAjusteHora: novoValor });
});

//------------------------------------IRRIGACAO 01 SEGUNDOS-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoIrrigacao01(valor) {
  ajusIrrigacao01Element.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputIrrigacao01(valor) {
  ajusIrrigacao01InputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath05.on('value', snap => {
  var valor = snap.val().irrigacaoAjuste;
  // Atualizar o valor do elemento span
  atualizarValorElementoIrrigacao01(valor);
  // Atualizar o valor do input
 atualizarValorInputIrrigacao01(valor);
});

// Adicionar um listener para mudanças no input range
ajusIrrigacao01InputElement.addEventListener('input', function() {
  var novoValor = ajusIrrigacao01InputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath05.set({ irrigacaoAjuste: novoValor });
});


//------------------------------------IRRIGACAO 02 HORA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoIrrigacao02Hora(valor) {
  ajusIrrigacao02HoraElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputIrrigacao02Hora(valor) {
  ajusIrrigacao02HoraInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath09.on('value', snap => {
  var valor = snap.val().irrigacaoAjusteHora02;
  // Atualizar o valor do elemento span
  atualizarValorElementoIrrigacao02Hora(valor);
  // Atualizar o valor do input
 atualizarValorInputIrrigacao02Hora(valor);
});

// Adicionar um listener para mudanças no input range
ajusIrrigacao02HoraInputElement.addEventListener('input', function() {
  var novoValor = ajusIrrigacao02HoraInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath09.set({ irrigacaoAjusteHora02: novoValor });
});

//------------------------------------IRRIGACAO 02 SEGUNDOS-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoIrrigacao02(valor) {
  ajusIrrigacao02Element.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputIrrigacao02(valor) {
  ajusIrrigacao02InputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath10.on('value', snap => {
  var valor = snap.val().irrigacaoAjuste02;
  // Atualizar o valor do elemento span
  atualizarValorElementoIrrigacao02(valor);
  // Atualizar o valor do input
 atualizarValorInputIrrigacao02(valor);
});

// Adicionar um listener para mudanças no input range
ajusIrrigacao02InputElement.addEventListener('input', function() {
  var novoValor = ajusIrrigacao02InputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath10.set({ irrigacaoAjuste02: novoValor });
});

//------------------------------------IRRIGACAO 03 HORA-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoIrrigacao03Hora(valor) {
  ajusIrrigacao03HoraElement.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputIrrigacao03Hora(valor) {
  ajusIrrigacao03HoraInputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath11.on('value', snap => {
  var valor = snap.val().irrigacaoAjusteHora03;
  // Atualizar o valor do elemento span
  atualizarValorElementoIrrigacao03Hora(valor);
  // Atualizar o valor do input
 atualizarValorInputIrrigacao03Hora(valor);
});

// Adicionar um listener para mudanças no input range
ajusIrrigacao03HoraInputElement.addEventListener('input', function() {
  var novoValor = ajusIrrigacao03HoraInputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath11.set({ irrigacaoAjusteHora03: novoValor });
});

//------------------------------------IRRIGACAO 03 SEGUNDOS-------------------------------------------
// Função para atualizar o valor do elemento span
function atualizarValorElementoIrrigacao03(valor) {
  ajusIrrigacao03Element.innerText = valor;
}

// Função para atualizar o valor do input
function atualizarValorInputIrrigacao03(valor) {
  ajusIrrigacao03InputElement.value = valor;
}

// Adicionar um listener para 'value' no banco de dados
dbRefdbPath12.on('value', snap => {
  var valor = snap.val().irrigacaoAjuste03;
  // Atualizar o valor do elemento span
  atualizarValorElementoIrrigacao03(valor);
  // Atualizar o valor do input
 atualizarValorInputIrrigacao03(valor);
});

// Adicionar um listener para mudanças no input range
ajusIrrigacao03InputElement.addEventListener('input', function() {
  var novoValor = ajusIrrigacao03InputElement.value;
  // Atualizar o valor no banco de dados quando o input range é alterado
  dbRefdbPath12.set({ irrigacaoAjuste03: novoValor });
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






//-------------------------------------------------------------------------------------------
    dbRefTemp.on('value', snap => {

      tempElement.innerText = snap.val().toFixed(1);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));

      //y = parseFloat(this.responseText);
      //console.log(this.responseText);
      
      if(chartT.series[0].data.length > 1000) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }

    });
    dbRefHum.on('value', snap => {
      humElement.innerText = snap.val().toFixed(1);
    });
    dbRefStatusLedIluminacao.on('value', snap => {
      const ledState = snap.val();
     
      
      const ledIndicator = document.getElementById("led-indicator-iluminacao");
      if (ledState === 1) {
          ledIndicator.classList.add('on');
          ledIndicator.classList.remove('off');
      } else {
          ledIndicator.classList.add('off');
          ledIndicator.classList.remove('on');
      }
    });
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
    dbRefStatusLedVentilacao.on('value', snap => {
      const ledState = snap.val();
     
      
      const ledIndicator = document.getElementById("led-indicator-ventilacao");
      if (ledState === 1) {
          ledIndicator.classList.add('on');
          ledIndicator.classList.remove('off');
      } else {
          ledIndicator.classList.add('off');
          ledIndicator.classList.remove('on');
      }
    });
    dbRefStatusLedIrrigacao.on('value', snap => {
      const ledState = snap.val();
     
      
      const ledIndicator = document.getElementById("led-indicator-irrigacao");
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

  dbRefTemp02.on('value', snap => {

    tempElement02.innerText = snap.val().toFixed(2);
    var w = (new Date()).getTime(),
    z = parseFloat(snap.val().toFixed(2));

    //y = parseFloat(this.responseText);
    //console.log(this.responseText);
    
    if(chartT.series[0].data.length > 40) {
      chartT.series[0].addPoint([w, z], true, true, true);
    } else {
      chartT.series[0].addPoint([w, z], true, false, true);
    }

  });
  dbRefHum02.on('value', snap => {
    humElement02.innerText = snap.val().toFixed(2);
  });
// if user is logged out
} 



//ligarInput.addEventListener('input', updateLedStatus);
//desligarInput.addEventListener('input', updateLedStatus);



/*
function toggleLed() {
  console.log("Toggle");
  if (ledElement.checked) 
  {
    console.log("led ON");
    firebase.database().ref(dbPathLed).set("ON");
  }
  else{
    console.log("led OFF");
    firebase.database().ref(dbPathLed).set("OFF");
  }
}
*/

/*
setInterval(function ( ) {
 
      var x = (new Date()).getTime(),
      y=5;
          //y = parseFloat(this.responseText);
      //console.log(this.responseText);
      if(chartT.series[0].data.length > 40) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
}, 1000 ) ;*/