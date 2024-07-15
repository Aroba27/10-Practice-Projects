/************* 
const note = document.getElementsByClassName("notes");
const btn = document.getElementById("btn");
const container = document.getElementsByClassName("container");

btn.addEventListener("click", function(){
    let main = document.createElement("div");
    container.appendChild(main);

    let para = document.createElement("p");
    para.classList.add("text");
    main.appendChild(para);
});
**********/
/***** 
const notesDiv = document.querySelector(".notes");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    let para = document.createElement("p");
    para.classList.add("text");
    para.innerHTML = "this is me";
    notesDiv.appendChild(para);
});*/


const notes = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");

let text = document.querySelectorAll(".input-box");

function showNotes(){
    notes.innerHTML = localStorage.getItem("text");
}


showNotes();
function saveNotes(){
    localStorage.setItem("text", notes.innerHTML);
}

createBtn.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notes.appendChild(inputBox).appendChild(img);
})

notes.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes();
    } else if (e.target.tagName === "P") {
        text = document.querySelectorAll(".input-box");
        text.forEach(txt =>{
            txt.onkeyup = function(){
                saveNotes();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


