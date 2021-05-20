// This is a JavaScript file

$(document).on("click", "#alerta", function(){
    function retorno(){

    }
    navigator.notification.alert("Minha Mensagem", retorno, "Aviso!", "Aceito");
});

$(document).on("click", "#confirm", function(){
    function confirma(buttonIndex){
      if(buttonIndex == 1){
       navigator.notification.alert("Você escolheu One Pierce");
      }else{
        navigator.notification.alert("Você escolheu Dragon ball");
      }
    }
    navigator.notification.confirm("Escolha One Pierce ou Dragon ball",confirma, "Escolha: ", ['One Pierce', 'Dragon ball']);
});

$(document).on("click", "#confirm2", function(){
    function confirma(buttonIndex){
      if(buttonIndex == 1){
       navigator.notification.alert("Você escolheu Doce");
      }else{
        navigator.notification.alert("Você escolheu Salgado");
      }
    }
    navigator.notification.confirm("Escolha qual tipo de comida você gosta doce ou salgado",confirma, "Escolha: ", ['Doce', 'Salgado']);
});

$(document).on("click", "#beep", function(){
    function retorno(){

    }
    navigator.notification.beep(3);
});

$(document).on("click", "#vibrar", function(){
    function retorno(){

    }
    navigator.vibrate(4000);
});

function mapaMostrar(lat, long){
   L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click", "#local", function(){
    var onSuccess = function(position) {
   mapaMostrar(position.coords.latitude, position.coords.longitude)
     alert(position.coords.latitude);
  };

  
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
