//контекст = область видимости + переменная this
//this - ссылка на объект, который вызывает код в данный момент

let count = 0;
//--------------------------------------

/*function f1() {
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

/* //Вытягивание методов

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

console.log(validatePassword()); */

//--------------------------------------------

//---------------Кэширование функции----------------

/* Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов. */



function work(a, b) {
    return a + b;
  }

function spy(func) {
    let calls = new Map();
    return function(x, y) {
        let str_key = `${x},${y}`;
        if (calls.has(str_key)) {
            console.log("Данные из кэш");
            return calls.get(str_key);
        }
        //В данном случае вызывается просто функция slow из параметра func. Но эта функция не понимает откуда брать this, ведь она вызвана не из объекта. Поэтому используем call для привязки к контексту. В this попадет объект worker, т.к. на 189 строке функция вызывается из объекта worker.
        let result = func(x, y);  // теперь 'this' передаётся правильно
        calls.set(str_key, result);
        return result;
      };
} 
  
  work = spy(work);
  
console.log(work(1, 2));
console.log(work(4, 5)); 

console.log(work(1, 2));
console.log(work(4, 5));

  
/*   for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

    let collect = new Map();
    collect.set("1,2", [1,2]);
    collect.set("3,4", [3,4]) 
    collect.set("5,6", [5,6])  */

/*     for(let args of collect.keys()) {
        console.log('call:' + args);
    } */