document.getElementById("plus-button").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.getElementById('book-form').reset();
});

var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
});

var addbutton = document.getElementById("add-bookbutton");
var deletebutton = document.getElementById("delete");

var title=document.getElementById("title");
var author=document.getElementById("author");
var descrpition=document.getElementById("description");

addbutton.addEventListener("click", function(event) {
    event.preventDefault()

    const titleValue = title.value;
    const authorValue = author.value;
    const descriptionValue = description.value;

    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";

    const newbook=document.createElement("div");
    newbook.setAttribute("class","book-container");
    newbook.innerHTML=`
    <h2>${titleValue}</h2>
    <h3>${authorValue}</h3>
    <p>${descriptionValue}</p>
    <button id="delete" onclick="dlt(event)">Delete</button>
    `;

    document.getElementById("container").append(newbook);
    newbook.style.display="inline-block";
});

function dlt(event){
    event.target.parentNode.remove();
}