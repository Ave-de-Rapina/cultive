
const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for sensor readings
const tempElement = document.getElementById("temp");  // tempElement CONTEM O ELEMENTO COM id="temp" em HTML  
const humElement = document.getElementById("hum");
const presElement = document.getElementById("pres");
//const ledElement = document.getElementById("led");

//VARIAVEIS CILUMINAÇÃO
const ligarInput = document.getElementById('ligar');
const desligarInput = document.getElementById('desligar');
const ledIndicator = document.getElementById('led-indicator');
const horasLigadoDisplay = document.getElementById('horas-ligado');
const ligarValueDisplay = document.getElementById('ligar-value');
const desligarValueDisplay = document.getElementById('desligar-value');

var dbPathOn;
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
    var dbPathTemp = 'UsersDats/' + uid.toString() + '/temperature'; //VAI PASSAR O ENDEREÇO DO BANCO DE DADOS PARA dbPathTemp 
    var dbPathHum = 'UsersData/' + uid.toString() + '/humidity';    //uid.toString VAI CONVERTER O VALOR DE UID SEJA FLOAT, INT... PARA STRING
    var dbPathPres = 'UsersData/' + uid.toString() + '/pressure';  //dbPathPres VAI ESTAR O ENDEREÇO DO BANCO DE DADOS UID com o uid do usuario
    dbPathOn = 'UsersData/' + uid.toString() + '/cultiveSoft';
    //dbPathLed = 'UsersData/' + uid.toString() + '/led';

    // Database references
    var dbRefTemp = firebase.database().ref().child(dbPathTemp);
    var dbRefHum = firebase.database().ref().child(dbPathHum);
    var dbRefPres = firebase.database().ref().child(dbPathPres);
    // var dbPathLed = firebase.database().ref().child(dbPathLed);
    //var dbPathOn = firebase.database().ref().child(dbPathOn);

    // Update page with new readings
    dbRefTemp.on('value', snap => {

      tempElement.innerText = snap.val().toFixed(2);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));

         // y = parseFloat(this.responseText);
      //console.log(this.responseText);
      if(chartT.series[0].data.length > 40) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
    
    });
    dbRefHum.on('value', snap => {
      humElement.innerText = snap.val().toFixed(2);
    });
    dbRefPres.on('value', snap => {
      presElement.innerText = snap.val().toFixed(2);
    });
  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }  
}


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
    iluminLigar: ligarHora,
    iluminDesligar: desligarHora
  });
}

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