/*var obj = {
	color : "blue",
	width : 300,
	method : function() {return "method";},
	another : {
		size: 2.0,
		height: 100,
		arr : ["a", "b", {size: 2}]
	}
};
var array = [1, 2, [3,4], {obj: "red"}]

//alert("Esse é um alerta!");
//confirm("Stop acting like a retard and climb!") 									  // confirmação Ok/Cancel
//var a = prompt("Cloud?") 															  // input field
//var b = prompt("Tifa?")
var c = Number(a) + Number(b) 														  // converte para Number
var d = String(a) + String(b) 														  // converte para String
document.write(`<strong> Length </strong> => ${d.length} <br/>`) 					  // br pula linha, strong para bold
document.write(`<strong> Upper Case </strong> => ${d.toUpperCase()}`)
//alert(`welcome, ${d}`) 																  // pode-se colocar codigo javascript entre o $ e entre ` ` pode-se botar código HTML
document.write(alert(c.toFixed(3))) 												  // 3 casas decimais fixas
document.write(c.toFixed(2).replace('.', ',')) 										  // replace . por , (metodo de Number)
var CLocale = Number(c).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // transforma para R$ X,XXXX.00
//alert(CLocale)
CLocale = Number(c).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})     // transforma para doláres US$ 
//alert(CLocale)

document.write(`${document.URL} </br>`)
document.write(`${navigator.appName} </br>`)
var p1 = document.getElementsByTagName("p")[0]
p1.style.color = "yellow";
document.write(`${p1.innerText} + ${p1.innerHTML}` )
var d = document.getElementById("message")
d.style.background = "blue";
document.querySelector("div#message") //Select por ID
*/
// document.querySelector("div.message") //Select por Class


console.log("ok") // apertando F8 executa o node
var area = document.getElementById("area")
var inputbtn = document.getElementById("iptbtn")

area.addEventListener("click", clicar)
area.addEventListener("mouseout", function() {area.innerHTML = "Mouse saiu!"})
area.addEventListener("mouseenter", function() {area.innerHTML = "E aí mouse!"})

inputbtn.addEventListener("click", somar)
inputbtn.addEventListener("mouseout", function(){inputbtn.style.backgroundColor = "white"})


function somar(){
	let input1 = document.getElementById("input1")
	let input2 = document.querySelector("input#input2")
	let divRes = document.getElementById("resultSoma")

	let soma = Number(input1.value) + Number(input2.value)

	divRes.innerHTML = `Resultado da Soma = <strong> ${soma} </strong>.`
	inputbtn.style.backgroundColor = "grey"
}

function clicar() {
	area.innerHTML = "Clicado."
	area.style.background = "black"
}

