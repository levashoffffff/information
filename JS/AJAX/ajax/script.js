const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const number = document.querySelector("#number");
clickMeButton.addEventListener("click", () => {
    makeRequest(number.value, onDataReceived);
});

function onDataReceived(data) {
    data.forEach(element => {
        let name = document.createElement('div');
        name.innerHTML = element.name;
        document.querySelector('#result').append(name);
    });
}



