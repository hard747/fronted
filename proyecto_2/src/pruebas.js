
function holamundo(){
    window.alert('hola mundo')
}
// holamundo()
// document.write('<h2> que tal <h2/>')
// document.getElementById('parrafo').innerHTML='nuevo parrafo'
// console.log('usando la consola')
var a=3.14
var b=5
//alert(a+b)
var nombre = "harry"
 //document.getElementById("parrafo").innerHTML= nombre;
 //onclick="document.getElementById("parrafo").innerHTML='javascript en xhtml'"
   // onmouseover="this.style.background='white'"
 //document.onclick = document.getElementById("parrafo").innerHTML='javascript en xhtml'
 //onmouseover=document.getElementById("parrafo").style.background='white'
 document.querySelector('p').addEventListener('click',()=> {document.body.style.background='blue'})
 //document.getElementById("parrafo").addEventListener('click',()=> {document.body.style.background='violet'})
 document.getElementById("parrafo").addEventListener('click',()=> {document.getElementById("parrafo").style.background='black'
 document.getElementById("parrafo").style.color='green'
 document.getElementById("parrafo").addEventListener('click',()=> {document.getElementById("parrafo").style.background='blue'
 document.getElementById("parrafo").style.color='black'
})
})
 //document.getElementById("parrafo").addEventListener('mouseover',()=> {document.getElementById("parrafo").style.background='black'})
// document.getElementById("parrafo").addEventListener('click',()=> {document.getElementById("parrafo").color.background='green'})
var myObjectNumber={
  getnumeber: function(){
    return this.number
  }
}
var a={
  number:22,
  __ptoto__: myObjectNumber
}
var b ={
  numer: 50,
  __proto__: myObjectNumber
}
var c= function(){
  return "hola mundo"
}
console.log(c)
console.log(a)
