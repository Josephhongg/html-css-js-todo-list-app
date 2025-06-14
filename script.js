const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
	if (inputBox.value === "") {
		alert("You must enter something!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
	}
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else {
        e.target.parentElement.remove();
        saveData()
    }
})

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();