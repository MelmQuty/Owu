// // - створити функцію яка виводить масив
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true];
// let printArr = function(arr) {
//     for(const arrItem of arr) {
//         console.log(arrItem);
//     }
// }
// printArr(array);
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true];
// let printArr = function(arr) {
//     for(const arrItem of arr) {
//         console.log(arrItem);
//     }
// }
// // printArr(array);

// let createRandomArr = function(length, max, min) {
//     let arr =[];
//     for(let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * (max-min)+min))
//     }
//     return arr;
// }

// const arr1 = createRandomArr(10, 100, 10);
// printArr(arr1);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// const returnMin = function(a, b, c) {
//     let min;
//     if(a <= b && a <= c) min = a;
//     if(b <= a && b <= c) min = b;
//     if(c <= b && c <= a) min = c;
    
//     return min;
// }

// const min = returnMin(17, 4, 3);
// console.log(min);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// const returnMax = function(a, b, c) {
//     let max;
//     if(a >= b && a >= c) max = a;
//     if(b >= a && b >= c) max = b;
//     if(c >= b && c >= a) max = c;

//     console.log(max);
//     return max;

// }

// returnMax(36, 20, 52);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше;
// const returnMinPrintMax = function() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for(const item of arguments) {
//         if(max < item) max = item;
//         if(min > item) min = item;
//     }
//     console.log(`max: ${max}`);
//     return min;
// }

// const returnMinPrintMax1 = returnMinPrintMax(12, 35 ,45 ,63, 23 ,53);
// console.log(`min : ${returnMinPrintMax1}`);
// // - створити функцію яка виводить масив
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true];
// const printArr = function(arr) {
//     for(const itemArr of arr) {
//         console.log(itemArr)
//     }
// }

// printArr(array);

// - створити функцію яка повертає найбільше число з масиву
// let array = [1, 2, 3, 4, 5, 6, 45, 7, 8, 9, 10, 27 ,0.5];

// const returnMax =(arr)=> {
// let max = arr[0];
//     for(const itemArr of arr) {
//         if(max < itemArr) max = itemArr
//     }
//     return max;
// }

// const returnMax1 = returnMax(array);
// console.log(returnMax1);

// - створити функцію яка повертає найменьше число з масиву
// let array = [1, 2, 3, 0.5, 4, 5, 0.25, 6, 7,54, 8, 9, 10,27];

// const returnMin = function(arr) {
// let min = arr[0];
//     for(const itemArr of arr) {
//         if(itemArr < min) min = itemArr;
//     }
//     return(min);
// }

// const returnMin1 = returnMin(array);
// console.log(returnMin1);
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let array = [1, 2, 3, 0.5, 4, 5, 0.25, 6, 7,54, 8, 9, 10,27];
// const sumArr = function(arr) {
//     let sum = 0;
//     for(const item of arr) {
//         sum += item;
//     }
//     return sum;
// }

// const sumArr1 = sumArr(array);
// console.log(sumArr1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1, 2, 3, 0.5, 4, 5, 0.25, 6, 7,54, 8, 9, 10,27];
// const sumArrReturnAvarage = function(arr) {
//     let sum = 0;
//     for(const item of arr) {
//         sum += item;
//     }
//     return sum/arr.length
// }

// const sumArrReturnAvarage1 = sumArrReturnAvarage(array);
// console.log(sumArrReturnAvarage1);
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let users = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]

// const amount = function(arr) {
//     let amount = 0;
//     for(const itemArr of arr) {
//         if(typeof itemArr === 'object') {
//             amount++;
//         }
//     }
//     return amount
// }

// const amount1 = amount(users);
// console.log(amount1);
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const amountField = (arr) => {
//     let amount = 0;
//     for(const itemArr of arr) {
//         if(typeof itemArr === 'object') {
//             for(const key in itemArr) {
//                 amount++;
//             }
//         }
//     }
//     return amount
// }

// const amountField1 = amountField(users);
// console.log(amountField1);
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// let array1 =  [27,28,27,28];
// let array2 =  [28,27,28,27];
// const sum = (arr1,arr2)=> {
//     let sum = [];
//     for(let i = 0;i < arr1.length; i++) {
//         sum.push(arr1[i]+arr2[i]);
//     }
//     return sum;
// }

// const sum1 = sum(array1,array2);
// console.log(sum1);
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let mainArr = [1,24,25,27,30,45];

// const changeIndex =(arr,index)=> {
//     let array = [...arr];
//     if(index < array.length-1) {
//         let temp = array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp;
//     }
//     return array;
// }
// const changeIndex1 = changeIndex(mainArr,3);
// console.log(mainArr);
// console.log(changeIndex1);
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array = [1, 2,0, 3, 0.5, 4,0, 5, 0.25, 6,0, 7,54, 8, 9, 10,27, 0];
// const zeroEnd = (arr)=> {
//     let zero = [];
//     let nonZero = [];
//     for(const item of arr) {
//         if(item === 0) {
//             zero.push(0);
//         } else {
//             nonZero.push(item);
//         }
//     }
//     return nonZero.concat(zero);
// }

// const zeroEnd1 = zeroEnd(array);
// console.log(zeroEnd1);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// const addBlock =(typeTag)=> {
//     const block = document.createElement(typeTag);
//     block.innerText = "Hello owu";
//     document.body.appendChild(block);
// }
// addBlock('h2');
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// const addBlock =(typeTag, message)=> {
//         const block = document.createElement(typeTag);
//         block.innerText = message || "Hello owu";
//         document.body.appendChild(block);
//     }
//     addBlock('h2', 'Aloha');
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  
// індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, 
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let carArr = [ {model: 'Vs-105', issueYear: 1985, capacity: 220, color: 'black'},
//     {model: 'Ma-305', issueYear: 2007, capacity: 230, color: 'white'},
//     {model: 'Ma-320', issueYear: 2045, capacity: 195, color: 'yellow'},
//     {model: 'Alakabadra', issueYear: 2012, capacity: 246, color: 'green'},
//     {model: 'Madgenta', issueYear: 2005, capacity: 176, color: 'blue'},
//     {model: 'Mirable', issueYear: 2013, capacity: 255, color: 'pink'},
//     {model: 'Versula', issueYear: 2015, capacity: 278, color: 'grey'},
//     {model: 'Miraconda', issueYear: 3021, capacity: 999, color: 'invisible'},
//     {model: 'Laura', issueYear: 2152, capacity: 256, color: 'aquamarine'},
//     {model: 'Leyra', issueYear: 2052, capacity: 320, color: 'crimson'},

// ];

// const addCarList = (arr, idTag)=> {
//     const block = document.getElementById(idTag);
//     const ul = document.createElement('ul');
//     for(let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         const li = document.createElement('li');
//         li.innerText = `${item.model} - ${item.issueYear}`
//         const p = document.createElement('p');
//         p.innerText = `capacity: ${item.capacity} - ${item.color}`
//         ul.appendChild(li);
//         ul.appendChild(p);
//     }
//     block.appendChild(ul);
// }
// addCarList(carArr, 'cars');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let carArr = [ {model: 'Vs-105', issueYear: 1985, capacity: 220, color: 'black'},
//     {model: 'Ma-305', issueYear: 2007, capacity: 230, color: 'white'},
//     {model: 'Ma-320', issueYear: 2045, capacity: 195, color: 'yellow'},
//     {model: 'Alakabadra', issueYear: 2012, capacity: 246, color: 'green'},
//     {model: 'Madgenta', issueYear: 2005, capacity: 176, color: 'blue'},
//     {model: 'Mirable', issueYear: 2013, capacity: 255, color: 'pink'},
//     {model: 'Versula', issueYear: 2015, capacity: 278, color: 'grey'},
//     {model: 'Miraconda', issueYear: 3021, capacity: 999, color: 'invisible'},
//     {model: 'Laura', issueYear: 2152, capacity: 256, color: 'aquamarine'},
//     {model: 'Leyra', issueYear: 2052, capacity: 320, color: 'crimson'},
// ];


// const addCarList = (arr, idTag)=> {
//     const block = document.getElementById(idTag);
//     const ul = document.createElement('ul');
//     for(let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         for(const key in item) {
//         const li = document.createElement('li');
//         li.innerText = item[key];
//         ul.appendChild(li);
//         }
//     }
//     block.appendChild(ul);
// }
// addCarList(carArr, 'cars');



// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// console.log(usersWithId);
// const splitArr = (userArray,cityArray) => {
//     let users = JSON.parse(JSON.stringify(userArray));
//     let cities = JSON.parse(JSON.stringify(cityArray));
//     for(const city of cities) {
//         for(const user of users) {
//             if(user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     return users;
// }

// const splitArr1 = splitArr(usersWithId, citiesWithId);
// console.log(splitArr1);




// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];

// const rulesFunc = (arr) => {
//      const wrap = document.createElement('div');
//      wrap.id = 'wrap';
//      for(let i = 0; i < arr.length; i++) {
//      const rule = arr[i];
//      const div = document.createElement('div');
//      const h2 = document.createElement('h2');
//      const p = document.createElement('p');

//      div.className = `rules rule$[i]`;
//      h2.innerText = rule.title;
//      p.innerText = rule.body;

//      div.appendChild(h2);
//      div.appendChild(p);
//      wrap.appendChild(div);
//  }


//  document.body.appendChild(wrap);
// };

// rulesFunc(rules);
