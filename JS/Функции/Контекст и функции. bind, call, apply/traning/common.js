//контекст = область видимости + переменная this
//this - ссылка на объект, который вызывает код в данный момент

let count = 0;
//--------------------------------------

/* let count = 0;
function f1() {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
} 

document.querySelector('.b-1').addEventListener('click', f1);

//стрелочные функции не имеют this
const f2 = () => {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
}

document.querySelector('.b-2').addEventListener('click', f2); 

//call

//Если вызвать просто: count: 0, this:Window {window: Window, self: Window,
f1();

//внутри пропишем, что будет лежать в this
f1.call(document.querySelector('.b-1'));
//внутри пропишем, что будет лежать в this
f1.call(document.querySelector('.b-1'));
//внутри пропишем, что будет лежать в this
f1.call(document.querySelector('.b-1'));
//внутри пропишем, что будет лежать в this
f1.call(document.querySelector('.b-2')); 

//Применяем функцию call с addEventListener
document.querySelector('.b-1').addEventListener('click', ()=>{
    f1.call(document.querySelector('.b-2'));
})*/

//-----------------------------------------

//---------------------------------

/* function f3(count) {
    console.log(count);
    console.log(this);
    this.textContent = count;
}

document.querySelector('.b-3').addEventListener('click', () => {
    count++;
    f3.call(document.querySelector('.b-2'), count);
}) */
//-----------------------------------

//----------------------------------

/* function sum1(a, b) {
    this.innerHTML = a + b;
}

document.querySelector('.b-2').addEventListener('click', () => {
    sum1.call(document.querySelector('.out-3'), 3, 4);
    sum1.apply(document.querySelector('.out-4'), [3, 4]);
}); */

//-------------------------------------------

//-------------------------------------

//bind

//----------------------------------

/* function f1() {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
} 

const f4 = f1.bind(document.querySelector('.out-5'));

document.querySelector('.b-5').addEventListener('click', f4); */

//---------------------------------

//-----------------------------------

/* function sum1(a, b) {
    this.innerHTML = a + b;
}

const sum2 = sum1.bind(document.querySelector('.out-6'));
sum2(4, 5);
sum2(5, 10); */

//---------------------------------

//---------------------------------

/* function sum3(a, b, c) {
    console.log(arguments);
    this.innerHTML = a + b + c;
}

const sum4 = sum3.bind(document.querySelector('.out-7'), 10);

document.querySelector('.b-6').addEventListener('click', () => {
    sum4(3, 4, 5);
}) */

//-----------------------------

//-----------------------------

/* function sum7(a, b, c) {
    return a + b + c;
}

const sum8 = sum7.bind(undefined, 100, 300);

document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').textContent = sum8(5);
}) */

//Ответ 405

//-----------------------------

//Вытягивание методов

const validate = {
    password: 'himahai',
    email: 'pupkin@de',
    isValid: false,
    sayHi() {
        console.log(this);
        return(this.password.length > 6) ? true : false;
    }
}

console.log(validate.sayHi());

//Создал новый оъект
const obj = {password: 'hello'};
//Вытянул метод sayHi и перенес в obj
const validatePassword = validate.sayHi.bind(obj);

console.log(validatePassword());