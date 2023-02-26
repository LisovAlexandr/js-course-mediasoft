

//------работа с объектами
const obj1={}//литерал
obj1.name='kolya'//new key,value
//console.log(obj1)
obj1['age age']=30//key more words
//console.log(obj1)
const obj1Key=Object.keys(obj1)//get key from obj1
//console.log(obj1Key)
const obj1Val=Object.values(obj1)
//console.log(obj1Val)

const obj2 =new Object() //конструктор объекта
Object.assign(obj2,obj1) //копируем обж1 в обж2
obj2.male=true
//console.log(obj1)
//console.log(obj2)

const obj3={...obj1,...obj2}//копирование spread
//console.log(obj3)

const obj3Entries=Object.entries(obj3)
//console.log(obj3Entries)//массив массивов ключ,знач
const fromEntries=Object.fromEntries(obj3Entries)
//console.log(fromEntries);//объект из массива массивов

for (let keys in obj3){
  //console.log("ключ: "+keys+", знач: "+obj3[keys]);
}//перебор массива


const user1={
  name: "Vasya",
  address:{
    street: "Pervaya",
    number: 30
  }
}
//console.log(user1);

//получить знач свойства, если оно есть. Способы:
//1 ||
const addressUser1=user1.address||{}
const streetUser1=addressUser1.street;
//console.log(streetUser1);

//2 &&
const streetUser2=user1.address&&user1.address.street
//console.log(streetUser2);

//3 ?.
const streetUser3=user1.address?.street
//console.log(streetUser3);

//-----conext this

function aboutThis(){
  console.log(this)
}

//aboutThis()//вернет объект Windows

const objThis={
  name: "Petya",
  sayName(){
    console.log(`My name ${this.name}`);
  },
  aboutThis //аналогично aboutThis: aboutThis
}

//objThis.aboutThis()// objThis
//objThis.sayName()// Petya


// функции-конструкторы

function User(name){
  //this={} (неявно)
  this.name = name
  this.isAdmin = false
  this.sayHi = function(){
    console.log(`Hi, i am ${this.name}`);
  }
  //return this (неявно)
}

let userKolya=new User("Kolya")//создали колю с помощью конструктора

//console.log(userKolya);
//console.log(userKolya.name);
//userKolya.sayHi()

//-----объект Date

const date =new Date() //в date сохраняется текующее дата время
//console.log(+date);//получим милисекунды

//------функции

function sum(a,b){
  return a+b
}
//console.log(sum(4,5));

//стрелочные функции
const minus=(a,b)=>a-b
//console.log(minus(3,2));

const minus2=(a,b)=>console.log(a-b);
//minus2(4,2)

//======прототипы

const animal={
  eat: true
}
//console.log(animal);
const cat={
  voice: "meow",
  __proto__: animal
}
//console.log(cat.eat);

//-----свойство prototype для функции-конструктора

function Rabbit(name){
  this.name=name;
}
Rabbit.prototype=animal //буквально сказали"когда создашь объект, прототипом выбери animal"
const rabbitRodger=new Rabbit("Rodger")
//console.log(rabbitRodger);