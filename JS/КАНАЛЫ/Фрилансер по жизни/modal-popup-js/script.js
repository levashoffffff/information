//Вытаскиваем все ссылки 
const popupLinks = document.querySelectorAll('.popup-link');
//Вытаскиваем body для того, чтобы в дальнейшем блокировать скролл внутри него
const body = document.querySelector('body');
//Получаем все элементыы, которым добавили этот класс, чтобы не прыгал контент при открытии окна, когда скрывается scroll
const lockPadding = document.querySelectorAll(".lock-padding");

//Для того чтобы не было двойных нажатий
let unlock = true;

//Связано с transition 0.8
const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            //Получаю параметр href="#popup" и отсекаю #. В переменную попадает "popup"
            const popupName = popupLink.getAttribute('href').replace('#', '');
            //Получаю в переменную блок с id="popup"
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            //Элмент ссылка, запрет на перезагрузку страницы
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            //Отправляем в функцию объект, который является ближайшим родителем нажатой ссылки с классом .popup (<div id="popup" class="popup">). Т.е будет прыгать по родиелям пока не найдет этот элемент и закрое тего
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        //Получаем объект с классом popup у которого есть класс open
        const popupActive = document.querySelector('.popup.open');
        //Если существует
        if (popupActive) {
            //Закрываем
            popupClose(popupActive, false);
        } else {
            //Блокируем скролл
            bodyLock();
        }
        //Добавляем к нашему классу класс open
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            //Если в родителях нет popup__content (отсекаем все, кроме темной области)
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}


function popupClose(popupActive, doUnlock = true) {
    if(unlock) {
        popupActive.classList.remove('open');
        if(doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    //Разница между шириной окна и шириной объекта, который находится внутри данного окна. Это делается для того, чтобы получить ширину scroll, который в дальнейшем будем скрывать. Чтобы не происходило сдвига контента при открытии окна и пропадании скрола мы это делам
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.computedStyleMap.paddingRight = lockPaddingValue;
        }
    }

    //Чтобы не сдвигался контент при открытии окна, когда пропадает скролл. Добавляется отступ справа у body
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    //На время лочим переменную unlock. Это нужно чтобы не было повторных нажатий
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

//Убираем отступ при закрытии Popup
function bodyUnLock() {
    setTimeout(function() {
        for(let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if(e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

//ПОЛИФИЛЫ
(function () {
    //проверяем поддержку
    if(!Element.prototype.closest) {
        //реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if(node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    //проверяем поддержку
    if(!Element.prototype.matches) {
        //определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
})();