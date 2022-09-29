const showTimeNow = () => {

    //Selecinando a tag de destino
    const clockTag = document.querySelector('time');

    //Instanciando a classe Date
    let dateNow = new Date();

    //pegando os valores desejados
    let hh = dateNow.getHours();
    let mm = dateNow.getMinutes();
    let ss = dateNow.getSeconds();

    hh = hh < 10 ? '0' + hh : hh;
    mm = mm < 10 ? '0' + mm : mm;
    // ss = ss < 10 ? '0' + ss : ss; os segundos não são necessários...

    clockTag.innerText = hh + ':' + mm;
}

//executando a funcao a cada 1 segundo
showTimeNow()
setInterval(showTimeNow, 1000);



// data
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;

function appendZero(value) {
    return "0" + value;
}

function theTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString("en-US");
}

if (day < 10) {
    day = appendZero(day);
}

if (month < 10) {
    month = appendZero(month);
}

today = day + "/" + month + "/" + today.getFullYear();

document.getElementById("date").innerHTML = today;


//musica



//voice over 
var som = document.getElementById("som");

$(".voice-over div").mouseover(function () {
    som.pause();
    som.currentTime = 0;
    som.play();
});