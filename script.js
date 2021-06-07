"use strict";

const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const list = document.querySelector("ul");

addBtn.addEventListener("click", function () {
	const newTodo = document.getElementById("newtodo").value.trim();
	if (newTodo != "") {
		document.querySelector("ul").insertAdjacentHTML("beforeend", `<li><span>${newTodo}</span><button class="done-btn">Done</button> <button class="delete-btn">X</button></li>`);
		document.getElementById("newtodo").value = "";
	}
});

list.addEventListener("click", function(e){
  if(e.target.classList.contains("done-btn")){
    e.target.parentElement.firstElementChild.classList.toggle("finished");
  };

  if(e.target.parentElement.firstElementChild.classList.contains("finished")){
    e.target.parentElement.firstElementChild.style.textDecoration = "line-through";
  } else {
    e.target.parentElement.firstElementChild.style.textDecoration = "none";
  };
});

list.addEventListener("click", function (e) {
  if(e.target.classList.contains("delete-btn")){
    e.target.parentElement.remove();
  }
});

clearBtn.addEventListener("click", function(e){
  list.innerHTML = "";
})
