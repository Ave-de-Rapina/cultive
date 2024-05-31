  
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
  
  document.addEventListener("DOMContentLoaded", function() {
      var slider = document.getElementById("desligar");
      var output = document.getElementById("desligar-value");
      output.innerHTML = slider.value;
  
      slider.oninput = function() {
          output.innerHTML = this.value;
          
          
          // Update temperature value in Firebase
          firebase.database().ref(dbPathOff).set({
              iluminacaoAjusteDesliga: output.innerHTML
            });
      };
  })

  document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("desligarMin");
    var output = document.getElementById("desligar-value-min");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        
        
        // Update temperature value in Firebase
        firebase.database().ref(dbPath07).set({
            iluminacaoAjusteDesligaMin: output.innerHTML
          });
    };
})


    
