const inputBox = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.TodoList')
const deleteAllBtn = document.querySelector('.footer button')

inputBox.onkeyup = () => {
    let userEnterdValue = inputBox.value
    if (userEnterdValue.trim() != 0) {
        addBtn.classList.add("active")
    }else{
        addBtn.classList.remove("active")
    }
}

showTasks()

addBtn.onclick = () => {
    let userEnterdValue = inputBox.value
    let getLocalStorageDate = localStorage.getItem("new to do")

    if (getLocalStorageDate == null) {
        listArray = []
    }else {
        listArray = JSON.parse(getLocalStorageDate)
    }
    listArray.push(userEnterdValue)
    localStorage.setItem("new to do", JSON.stringify(listArray))
    showTasks()
    addBtn.classList.remove("active")
}

function showTasks() {
    let getLocalStorageDate = localStorage.getItem("new to do")

    if (getLocalStorageDate == null) {
        listArray = []
    }else {
        listArray = JSON.parse(getLocalStorageDate)
    }
    const pendingTasks = document.querySelector('.pendingTasks')
    pendingTasks.textContent = listArray.length
    if (listArray.length > 0) {
        deleteAllBtn.classList.add("active")
    }else {
        deleteAllBtn.classList.remove("active")
    }
    newLitag = ""
    listArray.forEach((element, index) => {
        newLitag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`
    })
    todoList.innerHTML = newLitag
    inputBox.value = ""
}

function deleteTask(index) {
    let getLocalStorageDate = localStorage.getItem("new to do")
    listArray = JSON.parse(getLocalStorageDate)
    listArray.splice(index, 1)
    localStorage.setItem("new to do", JSON.stringify(listArray))
    showTasks()
}

deleteAllBtn.onclick = () => {
    let getLocalStorageDate = localStorage.getItem("new to do")
    if (getLocalStorageDate == null) {
        listArray = []
    }else {
        listArray = JSON.parse(getLocalStorageDate)
        listArray = []
    }
    localStorage.setItem("new to do", JSON.stringify(listArray))
    showTasks()
}

document.addEventListener('keyup', function(e){
	e.preventDefault();
	if(e.keyCode == 13){ // 13 is unicode for "Enter" key

        let userEnterdValue = inputBox.value
    let getLocalStorageDate = localStorage.getItem("new to do")

    if (getLocalStorageDate == null) {
        listArray = []
    }else {
        listArray = JSON.parse(getLocalStorageDate)
    }
    listArray.push(userEnterdValue)
    localStorage.setItem("new to do", JSON.stringify(listArray))
    showTasks()
    addBtn.classList.remove("active")

	}
		// do something
});

document.addEventListener('keyup', function(e){
	e.preventDefault();
	if(e.keyCode == 46){ // 13 is unicode for "Enter" key
		let getLocalStorageDate = localStorage.getItem("new to do")
    if (getLocalStorageDate == null) {
        listArray = []
    }else {
        listArray = JSON.parse(getLocalStorageDate)
        listArray = []
    }
    localStorage.setItem("new to do", JSON.stringify(listArray))
    showTasks()
	}
		// do something
});