var popupoverlay=document.querySelector('.popup-overlay');
var popupbox=document.querySelector('.popup-box');
var addbutton=document.getElementById('add-button')

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn=document.getElementById('cancel-popup')

cancelbtn.addEventListener("click",function(event){
   event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector('.container')
var addbook=document.getElementById('add-book')
var booktitlepopup=document.getElementById('book-title-popup')
var bookauthor=document.getElementById('book-author')
var popupdesc=document.getElementById('popup-desc')


addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitlepopup.value}</h2>
            
            <p>${popupdesc.value}</p>
            <button onclick="deletebook(event)">delete</button>`
            container.append(div)
  popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}