
function clicou(){
document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.ventures/");  // nova janela
    // window.location.href = "https://globallabs.ventures/";  // mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}





/*
function soma(n1, n2){
    return n1 + n2;
}

var validar =0;
function validaIdade(idade){
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
//alert(soma(5, 10));
*/

/*
var d = Date();
alert(d);
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while(count <=5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade ?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.push("");

//console.lista
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome="Marcio Barcellos";
//var n1=5;
//var n2=3;
//var frase="Japão é o melhor time do mundo";
//alert(nome + " tem "+idade);
//alert(n1 * n2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"))

