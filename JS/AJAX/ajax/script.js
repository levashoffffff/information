const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");
const number = document.querySelector("#number");

clickMeButton.addEventListener("click", () => {
    //Получаем промис
    const promise = makeRequest(number.value);
    //В случае успеха ЗАТЕМ нужно вызвать callback
    promise
        .then(onDataReceived);
});

getTasksButton.addEventListener("click", () => {
    //Получаем промис
    const promise = getTasks();
    //В случае успеха ЗАТЕМ нужно вызвать callback
    promise
        .then(onTasksReceived);
});

function onDataReceived(data) {
    data.forEach(element => {
        let name = document.createElement('div');
        name.innerHTML = element.name;
        document.querySelector('#result').append(name);
    });
}

function onTasksReceived(data) {
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element.title;
        document.querySelector('#result').append(li);
    });
}




