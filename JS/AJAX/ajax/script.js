const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", makeRequest);

function makeRequest() {
    $.ajax('https://jsonplaceholder.typicode.com/users', {
        success: function (data) {
            data.forEach(element => {
                let name = document.createElement('div');
                name.innerHTML = element.name;
                document.querySelector('#result').append(name);
            });
        }
    });
}


