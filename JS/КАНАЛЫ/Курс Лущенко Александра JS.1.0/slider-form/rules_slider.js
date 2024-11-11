//Привязываем обработчик события к кнопке .read-rules
document.querySelector('.read-rules').onclick = function() {
    //ВЫтаскиваем форму и меняем ей margin left
    document.querySelector('.form-slider').style.marginLeft = '-250px';
}

//Привязываем обработчик события ко кнопке .read-rules-back
let back = document.querySelectorAll('.read-rules-back');
for(let i = 0; i < back.length; i++) {
    back[i].onclick = function() {
        document.querySelector('.form-slider').style.marginLeft = '-0px';
    }
}
