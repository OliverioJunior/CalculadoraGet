
      /*var el = function(element) {
        if (element.charAt(0) === "#") { // If passed an ID...
          return document.querySelector(element); // ... returns single element
        }
    
        return document.querySelectorAll(element); // Otherwise, returns a nodelist
      };*/

      const proteina = 4;
      const lipidio = 9;
      var $nome = document.getElementById('name');
      var $idade = document.querySelector(".idade");
      var $peso = document.querySelector('.peso');
      var $altura = document.querySelector('.altura');
      var $idade = document.querySelector('.idade');
      var $AF = document.querySelector('.AF');
      var $proteina = document.querySelector(".proteina");
      var $lipidio = document.querySelector('.lipidio');
      var $exibir = document.querySelector('.textarea');
      
      
      var $gastoSobrepesoHomenGET = (1086-(10.1*$idade.value))+$AF.value*(13.7*$peso.value)+(416*$altura.value);
      var $gastoSaldavelMulherGET = (354-(6.91*$idade.value))+$AF.value*(9.36*$peso.value)+(726*$altura.value);
      var $gastoSobrepesoMulherGET = (448-(7.95*$idade.value))+$AF.value*(11.4*$peso.value)+(619*$altura.value);
      var calculoIMC = $peso.value/(($altura.value*0.01)**2);
      var IMCvalor = calculoIMC.toFixed(2); 

     
      function IMC(){
        if(IMCvalor < 18.5){
            'Peso baixo'
          } else if (IMCvalor <24.9){
            'Peso Normal'
          } else if (IMCvalor < 29.9){
            'Sobre Peso'
          } else if (IMCvalor < 34.9){
            "Obesidade(Grau I)"
  
          } else if (IMCvalor < 39.9){
            'Obesidade(Grau II)'
          } else{
            'Obesidade Morbida(Grau III)'
          }
          
       }
     
      function enviar(){
        var calculoIMC = $peso.value/(($altura.value*0.01)**2);
        var IMCvalor = calculoIMC.toFixed(2); 
        IMC();
        var $gastoSaldavelHomenGET = (662 - (9.53*($idade.value))+(($AF.value)*(15.91*($peso.value)))+(539.6*($altura.value)*0.01));
        var valor = $gastoSaldavelHomenGET.toFixed(2);
        $exibir.innerHTML =/* $nome.value +" "+ $idade.value+' '+$peso.value+' '+$altura.value+' '+' '+$AF.value+' '+$proteina.value+" "+$lipidio.value+' '+*/ valor /*+" " +IMCvalor*/;
        
     } 
     