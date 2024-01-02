function iniciar(){
    location.href = "src/inicio/";
}

function jogar(){
    location.href = "../fase1/";
}

let val = ["2054844561","3982157412","5296874301", "1273968536"
, "1273968536", "1457028369", "4736192850", "9260481573"
, "3105726849", "8659243017", "2471865309", "6109532478"
, "4837952106", "2591078346", "1745038269", "6953178402"
, "8231054769", "7310684295", "5482061937", "9617308254"
, "3059724816", "6120947538", "8743560192", "2906134578"
, "1568493072", "3409217658", "7891052436", "4372610985"
, "5028316479", "9381045726", "6741582903", "8456923017"
, "2301978564", "5196784023", "7651342980", "2830146579"
, "6413952078", "8203461759", "1978356420", "3852196074"
, "9467021538", "5106372894", "6728143509", "9345861720"
, "2037586149", "7182953406", "4657082319", "8765419023"
, "3547802196", "1896345072", "5294786013", "7612803954"
, "8342059617", "2936814750", "6571923048", "4185307926"
, "1087453962", "9427615308", "5062931874", "7304851962"
, "3852106974", "6198047532", "2471089653", "5738964210"
, "8946571203", "3105796824", "4653872910", "1825364709"
, "9350742861", "7013849256", "2984637150", "8107253496"
, "5264930178", "4672895013", "6317508429",]

function proximo(){
    var resposta = document.getElementById('resposta').value;
    /*
    for(i = 0; i <= val.length; i = i+3){
        console.log(i)
    }
    */
    //console.log(resposta.hashCode())

    if(resposta.hashCode() == val[0]){
        location.href = "/src/fase2";
    } 
    else{
        alert("Resposta Invalida!")
    }
}

//----------------------------------------------------------

String.prototype.hashCode = function(){
    var hash = 0,
        i,chr;
    if(this.length === 0) return hash
    for(i = 0; i < this.length; i++){
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0
    }
    return hash
}
/*
const str = 'aprimeiravez'
console.log(str, str.hashCode())
*/
//----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    var mainDiv = document.querySelector('.main-div-img');
    
    mainDiv.classList.add('animateImg');
});

document.addEventListener('DOMContentLoaded', function() {
    var mainDiv = document.querySelector('.main-div-bttn');
    
    mainDiv.classList.add('animateBttn');
});

//----------------------------------------------------------

