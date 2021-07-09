//task1

let admin;
let namee;
namee = "John";
admin = namee ;
alert(admin);

//task2

let planet = "Earth";
let user = "John";

//task3

let naame = prompt('Как тебя зовут?', '');
alert(naame);

//task4

let a = Number(prompt("Первое число?", 1));
let b = Number(prompt("Второе число?", 2));
alert(a+b);

//task5

let question= prompt('Какое «официальное» название JavaScript?','');
if (question === 'ECMAScript') {
    alert('Верно')
}else {
    alert('Не знаете? ECMAScript')
}

//task6

let num = (prompt('Введите число',''));
if (num >0){
    alert(1);
} else if (num <0){
    alert(-1);
} else {
    alert(0);
} 

//task7

let a = (prompt('a=',''));
let b = (prompt('b=',''));
let result = (a + b < 4) ? 'Мало' : 'Много'; 
alert(result);

//task8

let age = prompt('age = ', '');
if (age >= 14 && age <= 90) {

}

//task9 

let age = prompt('age = ', '');
if (age < 14 || age > 90) {
    
}

//task10

let login = prompt('Введите логин', '');
if (login == 'Админ') {
    let password = prompt('Введите пароль','')
    if (password ==  'Я главный'){
        alert( 'Здравствуйте!' );
    } else if (password != 'Я главный') {
        alert( 'Неверный пароль' );
      } else if (pass == null){
        alert( 'Отменено' );
      }
} else if (login == null) {
    alert( 'Отменено' );
} else if(login != 'Админ') {
    alert( "Я вас не знаю" );
}

//task11

for (let i = 2; 2< i <=10; i++ ) {
    if (i %2 == 0){
        alert(i);
    }
}

//task12

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//task13

if(browser == 'Edge'){
    alert("You've got the Edge!");
}else if(browser === 'Chrome' || browser === 'Firefox'|| browser === 'Safari'|| browser === 'Opera' ){
    alert('Okay we support these browsers too');
}else {
    alert('We hope that this page looks ok!');
}

//task14

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//task15

function min(a,b){
    if (a<b){
        return a;
    }else if (a>b){
        return b;
    }

}

let a = prompt('a','')
let b = prompt('b','')
alert(a,b)

//task16

function pow(x, n) {
    return x**n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n<1){
    alert('нельзя использовать эту степень');
}else if (n>1){ 
    alert(pow(x,n))
}

//task17

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );