// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let key = {
//     keyName : 'first',
//     keyPosition : true,
//     keyNumber : 123
// };

// const mother = {
//     motherName : 'Tanya',
//     status: true,
//     age: 34
// };

// let user = {
//     hobby : 'Programming',
//     timeTable : false,
//     positionInRow : 2
// };

// let js = {
//     level : 'Begginner',
//     difficulty : 'The hardest',
//     positionInRow : 1
// };

// let university = {
//     locatin:  'Kiyv',
//     metroStation : 'Polytechnichnuy',
//     getKnowledge: true
// };

// //

// -создать 5 объектов с полностью разным набором полей.В каждом объекте должен присутсвовать массив и внутренний объект.Опишите что угодно, машину, картину, болт...Пример: let man = {
//     name: 'kokos',
//     skills: ['java', 'js'],
//     wife: {
//         name: 'cherry'
//     }
// };


// let cat = {
//     catName : 'Tosha',
//     catAge : 10,
//     catSkills: ['breaking', 'meowing', 'making a lot of noise'],
//     catGirl: {
//         catGirlName : 'Samanta',
//         catGirlColor: 'Black'
//     }
// };

// let car = {
//     carDamage: false,
//     carCondition: 'Excellent',
//     carParts: ['doors', 'engine', 'hood'],
//     carOwner: {
//         ownerName: 'Vlad',
//         ownerAge: 32
//     }
// };

// let food = {
//     foodPrice: 120,
//     foodName: 'Bananas',
//     foodFriendly: ['cherry', 'blueberry', 'apple'],
//     foodArea: {
//         firstPosition: 'VelykaKushena',
//         secontPosiiton: 'Silpo',
//     }
// };

// let laptop = {
//     laptopLanguage: 'English',
//     laptopWindow: 'WhoKnows',
//     laptopComposition: ['mouse', 'cable'],
//     laptopInfo: {
//         laptopManufacturer: 'Lenovo',
//         laptopModel: 'E-531'
//     }

// };

// let table = {
//     tableMaterial: 'wood',
//     tableSize:'20sm',
//     itemsOnTheTable: ['butter', 'bananas', 'iPhone'],
//     itemOnTheTable: {
//         phone: 'iPhone11'
//     }
// };


// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (key in key) {
//     console.log(key);
// };

// for (key in mother) {
//     console.log(key);
// };

// for (key in user) {
//     console.log(key);
// };

// for (key in js) {
//     console.log(key);
// };

// for (key in university) {
//     console.log(key);
// };


// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(cat));
// console.log(Object.keys(car));
// console.log(Object.keys(food));
// console.log(Object.keys(laptop));
// console.log(Object.keys(table));

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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

// console.log(carArr);

// // // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let citiesArr = [
//     {city: 'Alohomora', population: 12340, country: 'Norway', region: 'South Mars'},
//     {city: 'NewYork', population: 1, country: 'Ukraine', region: 'South Venus'},
//     {city: 'Ripky', population: 8540, country: 'Belarus', region: 'South Jupiter'},
//     {city: 'GrayDevil', population: 666666, country: 'Hellion', region: 'The deepest Hell'},
//     {city: 'Mirakuya', population: 7878787, country: 'Japan', region: 'West Toyoto'},
//     {city: 'Relabion', population: 5412323, country: 'USA', region: 'South Mercury'}
// ];

// // console.log(citiesArr);

// // // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let carArr = [{
//         model: 'Vs-105',
//         issueYear: 1985,
//         capacity: 220,
//         color: 'black',
//         driver: {
//             driverName: 'Tosha',
//             age: 17,
//             sex: 'cat',
//             exp: 16
//         }
//     },
//     {
//         model: 'Ma-305',
//         issueYear: 2007,
//         capacity: 230,
//         color: 'white',
//         driver: {
//             driverName: 'Vlad',
//             age: 32,
//             sex: 'male',
//             exp: 32
//         }
//     },
//     {
//         model: 'Ma-320',
//         issueYear: 2045,
//         capacity: 195,
//         color: 'yellow',
//         driver: {
//             driverName: 'Andrey',
//             age: 24,
//             sex: 'male',
//             exp: 56
//         }
//     },
//     {
//         model: 'Alakabadra',
//         issueYear: 2012,
//         capacity: 246,
//         color: 'green',
//         driver: {
//             driverName: 'Alina',
//             age: 32,
//             sex: 'female',
//             exp: 67
//         }
//     },
//     {
//         model: 'Madgenta',
//         issueYear: 2005,
//         capacity: 176,
//         color: 'blue',
//         driver: {
//             driverName: 'Georgiy',
//             age: 26,
//             sex: 'male',
//             exp: 123
//         }
//     },
//     {
//         model: 'Mirable',
//         issueYear: 2013,
//         capacity: 255,
//         color: 'pink',
//         driver: {
//             driverName: 'Alena',
//             age: 32,
//             sex: 'female',
//             exp: 54
//         }
//     },
//     {
//         model: 'Versula',
//         issueYear: 2015,
//         capacity: 278,
//         color: 'grey',
//         driver: {
//             driverName: 'Lesha',
//             age: 42,
//             sex: 'male',
//             exp: 87
//         }
//     },
//     {
//         model: 'Miraconda',
//         issueYear: 3021,
//         capacity: 999,
//         color: 'invisible',
//         driver: {
//             driverName: 'Nastya',
//             age: 54,
//             sex: 'female',
//             exp: 67
//         }
//     },
//     {
//         model: 'Laura',
//         issueYear: 2152,
//         capacity: 256,
//         color: 'aquamarine',
//         driver: {
//             driverName: 'Kusaraba',
//             age: 65,
//             sex: 'male',
//             exp: 12
//         }
//     },
//     {
//         model: 'Leyra',
//         issueYear: 2052,
//         capacity: 320,
//         color: 'crimson',
//         driver: {
//             driverName: 'Nagito',
//             age: 54,
//             sex: 'male',
//             exp: 34
//         }
//     },
// ];
// console.log(carArr);

// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// i = 0;
// while (i < carArr.length) {
//     console.log(carArr[i]);
//     i++;
// };

// i = 0;
// while (i < citiesArr.length) {
//     console.log(citiesArr[i]);
//     i++;
// };

// // - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (i = 0; i < carArr.length; i++) {
//     console.log(carArr[i]);
// };

// for (i = 0; i < citiesArr.length; i++) {
//     console.log(citiesArr[i]);
// };

// //  - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (key in citiesArr) {
//     console.log(citiesArr[key]);
// };

// for (key in carArr) {
//     console.log(carArr[key]);
// };

// // - взять объекты из задания 1 и превратить каждый в json.

// console.log(JSON.stringify(key));
// console.log(JSON.stringify(mother));
// console.log(JSON.stringify(user));
// console.log(JSON.stringify(js));
// console.log(JSON.stringify(university));

// // // - взять json из задания 11 и превратить их обратно в объекты.

// console.log(JSON.parse(JSON.stringify(key)));
// console.log(JSON.parse(JSON.stringify(mother)));
// console.log(JSON.parse(JSON.stringify(user)));
// console.log(JSON.parse(JSON.stringify(js)));
// console.log(JSON.parse(JSON.stringify(university)));

// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (i = 0; i < carArr.length; i++) {
//     const item = carArr[i];
//     console.log(JSON.stringify(item));
// };
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (i = 0;i < citiesArr.length; i++) {
//     let item = citiesArr[i];
//     console.log(JSON.stringify(item));
// };

// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let newArr = [];
// for (i = 0; i < carArr.length; i++) {
//     newArr = carArr[i];
//     console.log(JSON.stringify(newArr));
// };

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// const users = [
//     {name: 'Vlad', age: 23, status: 'active', skills:['js', 'html', 'css']},
//     {name: 'Danil', age: 42, status: 'non-active', skills:['python', 'nodeJs']},
//     {name: 'Yuriy', age: 24, status: 'active', skills:['MySQL', 'PHP']},
//     {name: 'Alina', age: 35, status: 'non-active', skills:['java', 'javascript']},
//     {name: 'Sofiya', age: 18, status: 'active', skills:['js','python','java']}
// ];

// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     };
// };

// // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let newSkills = [];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         newSkills.push(skill);
//     };
// };

// console.log(newSkills);

// // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];

// for (const user of users) {
//         console.log(user);
//         for (const skill of user.skills) {
//             console.log(skill);
//         };
//     };

// // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let userAddress = [];
// for (const user of users) {
//     userAddress.push(user.address);
// };
// console.log(userAddress);

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//     const div = document.createElement('div');
//     div.innerText = `${user.name} ${user.age}`
//     document.body.appendChild(div);
// };

// for(i = 0; i <users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     let address = '';
//     for(const address1 in user.address) {
//         address = address + "  " + user.address[address1];
//     };
//     div.innerText = `${user.name} ${user.age} ${address}`
//     document.body.appendChild(div);
// };
// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for(i = 0; i <users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p1 = document.createElement('p');
//     const p2 = document.createElement('p');
//     let address = '';
//     for(const address1 in user.address) {
//         address = address + "  " + user.address[address1];
//     };
//     h2.innerText = user.name;
//     p1.innerText = user.age;
//     p2.innerText = address;
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     document.body.appendChild(div);
// };

// // // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for(i = 0; i <users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const name = document.createElement('h2');
//     const age = document.createElement('p');
//     const status = document.createElement('p');
//     const address = document.createElement('div');
//     for(const item in user.address) {
//         const temp = document.createElement('div')
//         temp.innerHTML = user.address[item];
//         address.appendChild(temp);
//     };
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;

//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// };

// // - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

// let usersWithId = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
// }, ];

// let citiesWithId = [{
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
// }, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
// }, {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
// }, ];

// let newArr = [];
// for (user of usersWithId) {
//     for(city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//         }
//     }
//     newArr.push(usersWithId);
// }
// console.log(usersWithId);
// console.log(newArr);

// // - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегуd
// const content = document.getElementById('content');
// const innerText = content.innerText;
// console.log(innerText);

// // - змінити цей текст використовуючи селектори id, class,  tag

// const content = document.getElementById('content');
// content.innerText = 'Alochomora';
// const class2 = document.getElementsByClassName('rules');
// for (item of class2) {
//     item.innerText = 'ROKOMAKAFO'
// };
// const div = document.getElementsByTagName('div');
// for (item of div) {
//     item.innerText = 'Yarlo'
// };


// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// const content = document.getElementById('content');
//  content.style.width = '300px';
//  content.style.height = '50px';

// const class2 = document.getElementsByClassName('rules');
// for (item of class2) {
//         item.style.width = '200px';
//         item.style.height = '150px';
// };

// const tag = document.getElementsByTagName('div');
// for (item of tag) {
//         item.style.width = '200px';
//         item.style.height = '150px';
//     };

// // - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// table.appendChild(tr);

// document.body.appendChild(table);

// // - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені


// const table = document.createElement('table');

// for(let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0;j < 3; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     };
//     table.appendChild(tr);
// };
// document.body.appendChild(table);

// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// const table = document.createElement('table');

// for(let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0;j < 5; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     };
//     table.appendChild(tr);
// };
// document.body.appendChild(table);

// // - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let prompt1 = prompt('How many tr?');
// let prompt2 = prompt('How many td?');


// const table = document.createElement('table');

// for(let i = 0; i < prompt1; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0;j < prompt2 ; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     };
//     table.appendChild(tr);
// };
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class

// const class2 = document.getElementsByTagName('*');
// console.log(class2);
// for(item of class2) {
//     if(item.getAttribute('class')) {
//         console.log(item);
//     };
// };
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
// const p = document.getElementsByTagName('p');
// console.log(p);
// for(item of p) {
//     item.innerText = "hello oktenweb!";
// };
//  - знайти всі div та змінити ім колір на червоний
// const div = document.getElementsByTagName('div');
// console.log(div);
// for(item of div) {
//     item.style.color = "red";
// };

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// const arrayh2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const ul = document.createElement('ul');
// for (h2 of arrayh2) {
//     const li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// };
// content.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },

// ];

//  const wrap = document.createElement('div');
//  wrap.id = 'wrap';
//  for(let i = 0; i < rules.length; i++) {
//      const rule = rules[i];
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

// // *** за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі users.За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок(блок в блоці). 

// fetch ('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(users => {
//         for(const user of users) {
//             const container = document.createElement('div');
//             const userHeader = document.createElement('h2');
//             const userSubheader = document.createElement('h2')
//             const userBody = document.createElement('div');

//             userHeader.innerText = `${user.id} - ${user.username}`;
//             userSubheader.innerText = `${user.name} - ${user.email}`
//             userBody.innerText = `${user.address.city} - '${user.company.name}'`;

//             container.appendChild(userHeader);
//             container.appendChild(userSubheader);
//             container.appendChild(userBody);


//             document.body.appendChild(container);
//         }
//     });

// // //*** за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі posts.За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок(блок в блоці). 

// fetch ('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for(const post of posts) {
//             const container = document.createElement('div');
//             const postHeader = document.createElement('h2');
//             const postBody = document.createElement('div');

//             postHeader.innerText = `${post.userId} - ${post.id} '${post.title}'`;
//             postBody.innerText = `${post.body}`;

//             container.appendChild(postHeader);
//             container.appendChild(postBody);


//             document.body.appendChild(container);
//         }
//     });
// //     *** за допомогою fetch(як в прикладі) отримати від jsonplaceholder всі comments.За допомогою document.createElement вивести їх в браузер.
// // Помістити кожен окремий об 'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок(блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(value => value.json())
//         .then(comments => {
//             for(const comment of comments) {
//                 const container = document.createElement('div');
//                 const commentHeader = document.createElement('h2');
//                 const commentSubheader = document.createElement('h3')
//                 const commentBody = document.createElement('div')

//                 commentHeader.innerText = `${comment.postId} - ${comment.id} '${comment.name}'`;
//                 commentSubheader.innerText = comment.email;
//                 commentBody.innerText = comment.body;

//                 container.appendChild(commentHeader);
//                 container.appendChild(commentSubheader);
//                 container.appendChild(commentBody);

//                 document.body.appendChild(container);

//             }
//         });
//  //    ****** при помощи fetch(как в примере) получить от jsonplaceholder все posts.Внутри последнего then() сделать еще один fetch который сделает 
//     zaпрос и получит все comments.Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.Подсказка: в каждом comment 
// есть поле postId которое определяет какой комментарий принадлежит какому посту

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for( const post of posts) {
//             post.comments = [];
//             const container = document.createElement('div');
//             const h2 = document.createElement('h2');
//             h2.innerText = `${post.id} - ${post.title}`;
//             container.appendChild(h2);
//             document.body.appendChild(container);
//             fetch('https://jsonplaceholder.typicode.com/comments') 
//                 .then(value => value.json())
//                 .then(comments => {
//                     for(const comment of comments) {
//                         if(post.id === comment.postId) {
//                             post.comments.push(comment);
//                         }
//                     }
//                     const ul = document.createElement('ul');
//                     for(const comment of post.comments) {
//                         const li = document.createElement('li');
//                         li.innerText = `${comment.body}`
//                         ul.appendChild(li);
//                         container.appendChild(ul);
//                     }
//                 });
//         }
//     });

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(value => value.json())
    // .then(posts => {
    //     for( const post of posts) {
    //         post.comments = [];
    //         fetch('https://jsonplaceholder.typicode.com/comments') 
    //             .then(value => value.json())
    //             .then(comments => {
    //                 for(const comment of comments) {
    //                     if(post.id === comment.postId) {
    //                         post.comments.push(comment);
    //                     }
    //                 }
    //                 document.write(`<div>`);
    //                 document.write(`post id - ${post.id} - ${post.title}`);
    //                     document.write('<ul>')
    //                     for(const comment of post.comments) {
    //                         document.write(`<li>${comment.body}</li>`)
    //                     };
    //                     document.write('</ul>');
    //                 document.write(`</div>`);
    //             });
    //     }
    // });