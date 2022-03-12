function Converter ()
{ var valorElemento= document.getElementById("Valor")
var valor = valorElemento.value
var valorEmDolarNumerico = parseFloat(valor)
var valorEmReal = valorEmDolarNumerico * 5 
console.log (valorEmReal )
var elementoValorConvertido = document.getElementById("Valor Convertido")


}