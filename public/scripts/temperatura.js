//import { getDatabase, ref, set } from "firebase/database";



document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("temp-slider");
    var output = document.getElementById("tempAdjus");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        

        /*
        // Update temperature value in Firebase
        firebase.database().ref(dbPath01).set({
            temperaturaAjuste: 
          });*/
    };
})


/*
function writeUserData(uid, temperaturaAjuste) {
    const dbPath01 = getDatabase();
    set(ref(dbPath01, 'UsersData/' + uid.toString() + '/temperaturaAjuste'), {
        temperaturaAjuste: tempAdjust
    });
  }
  */