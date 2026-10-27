// let body = document.querySelector("body")
// let h1 = document.querySelector("h1")
// body.removeChild(h1)
let h1 = document.querySelector("#trocarCor");

// esse comando  serve para eu acessar a propriedade das coresda fonte no html
// h1.style.color = "purple"
// h1.style.backgroun = "Blue"
// h1.style.height = "20px"

// Sempre quiser alterar ou saber um valor  do css de um elemento html
// nomeDateg.style.atributo

// let body = document.querySelector("#trocarFundo");
// body.style.background = "pink"
// let body = document.querySelector("body")

// function verificaCor(color = null){
//     switch(color){
//         case "red":
//         case "blue":
//         case "yellow":
//               color = "primario"
//               break;

//         case "green":
//         case "purple":
//         case "orange":
//             color = "secunadaria"
//             break;

//         default 
//             color = "nao é primario nem secundaria"
//             break;
//     }  return color;
// }

// let bgColor = prompt ("Digite uma cor:")
// body.style.backgroundColor = bgColor;
// let corVerificada = verificaCor(bgColor)
// console.log (corVerificada);

// let button = document.querySelector("button")

// button.addEventListener("click", function(){
//     console.log("cliquei")
// });
let body = document.querySelector("body")
let button = document.querySelector("button")
h1= document.querySelector("h1");

button.addEventListener("click", function(){
    body.style.backgroundColor = "black";
    h1.style.color = "white";
});
