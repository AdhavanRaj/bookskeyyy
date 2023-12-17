var buttonnn= document.getElementById("btn")
var coverpage= document.querySelector(".cover")
var poppage= document.querySelector(".popup")
buttonnn.addEventListener("click",function(){
    coverpage.style.display="block"
    poppage.style.display="block"

})
var rem = document.getElementById("remove")
rem.addEventListener("click",function(){
    coverpage.style.display="none"
    poppage.style.display="none"

})
var containerr= document.querySelector(".container")
var boknam=document.getElementById("bookname")
var auth=document.getElementById("author")
var discrip=document.getElementById("dis")
var addbook=document.getElementById("adding")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book1")
    div.innerHTML=` <h2>${boknam.value}</h2>
    <h5>${auth.value}</h5>
    <p>${discrip.value}</p>
    <button onclick="del(event)">Delete</button>`
    containerr.append(div)
    coverpage.style.display="none"
    poppage.style.display="none"
})

function del(event){
    event.target.parentElement.remove()

}