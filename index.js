//работа с объектами
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
console.log(user1);

//получить знач свойства, если ого есть. Способы:
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