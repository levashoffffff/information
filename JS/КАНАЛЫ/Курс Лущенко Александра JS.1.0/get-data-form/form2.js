let select = document.querySelector('#select-1');
let radio = document.querySelectorAll('input[name="rad-1"]');

select.onchange = function(){
    console.log(select.value);
}

let sendForm = document.querySelector('#send-form');
sendForm.onclick = function() {
    console.log('work');
}