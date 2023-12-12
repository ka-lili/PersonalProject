const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("close"); // Add a class to the delete button
        li.appendChild(span);
        
        listContainer.appendChild(li);
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.classList.contains("close")) { // Check for the "close" class
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();














