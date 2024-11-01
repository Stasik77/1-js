//
// // примитивы:  - имеют одто значение
// // string
//  // number
//  //boolean
//  //undefined
//  //null
//
//
//  //symbol
//  // bigInt
//
//
// //обьекты
//
// //array - упорядрченно данные
// //object - неупорядрченно (ключ :значение )
// // function
//
// //1. Сложная структура
// //2. Ссылочный тип данных
// //3. Имеют свойства и методы
//
//
// const obj = {name: 'John'};
//
// const obj2 = new Object()
//
// const num = 10;
// const num2 = num;
//
// const obj3 = obj
// obj3.name = 'Alex';
//
// console.log(obj);
//
// //
//
//
// const user = {
//     name: 'John',
//     age: 30,
//     isStudent: false,
// }
// // const copyUser = user ;
//
// const copyUser = {...user,name: "Bob",age:15 , isStudent: true};
// //= {...user};  создается копия обьекта где делаются изменения .А ориг не меняется
//
//
//
// console.log(copyUser);
// console.log(user);
// console.log(copyUser===user)
//
//
// const array = [1,2,3,4,5];
//
//
//
// array[array.length] =  9
//
//
// console.log(array)
//
// const copyArray = [7,... array,]
// console.log(copyArray);


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

// const copyUsers = [...users]
//
// let user34 = copyUsers[0];
//
// user34[0] = {};
//
//
// console.log(copyUsers)
//
// console.log(user34)
//
// console.log(users)
//
//
// const fullCopy = structuredClone(users)
// console.log(fullCopy === users)
//
// console.log(fullCopy)

// create  el
//delete el
//update

// crud



//Create

// const newUser = { id: 5,name: 'Helga',isStudent: true,}
// const copyUsers2 = [...users,newUser];


// Delete

// delete copyUsers2[0],
// delete copyUsers2[1],

//
// const copyUser33 = [...users ]
// copyUser33.pop()
// console.log(copyUsers2)

// console.log(copyUser33)
// console.log(users)

// const filteredUsers =  []
// for (let i=0; i<users.length; i++) {
//     if (users[i].name === "Donald") {
//         filteredUsers.puish(users[i])
//     }
// }


// const filteredUsers = users.filter(u => u.name !=="Alex")

console.log(filteredUsers)

// console.log(filteredUsers===users)



//Update


