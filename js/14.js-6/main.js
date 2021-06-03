// - создать массив с 20 числами.
// let arrOfNumbers = [20, 40, 60, 25, 153, 23, -123, 542, -432, 5452, 241, 0, 1, 29, 12312, -3232, 233, 767, 769, 878];
// console.log(arrOfNumbers);

// -- при помощи метода sort и колбека  отсортировать массив.
// const sortNumb = arrOfNumbers.sort((a, b) => a - b);
// console.log(sortNumb);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// const sortNumb = arrOfNumbers.sort((a, b) => b - a);
// console.log(sortNumb);

// -- при помощи filter получить числа кратные 3
// const sortNumb = arrOfNumbers.filter((value) => value % 3 === 0 && value !== 0);
// console.log(sortNumb);

// -- при помощи filter получить числа кратные 10
// const sortNumb = arrOfNumbers.filter(value => value % 10 === 0 && value !== 0);
// console.log(sortNumb);

// -- перебрать (проитерировать) массив при помощи foreach()
// const sortNumb = arrOfNumbers.forEach(value => console.log(value));
// console.log(sortNumb);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// const sortNumb = arrOfNumbers.map(value => value * 3);
// console.log(sortNumb);

// - создать массив со словами на 15-20 элементов.
// let arrOfStrings = [
//     "1Berlin",
//     "2Amsterdam",
//     "Kyiv",
//     "Odessa",
//     "tokyo",
//     "23Minsk",
//     "Praga",
//     "vena",
//     "2amsterdam",
//     "Chernigiv",
//     "Kharkiv",
//     'Moscow',
//     '33Toronto',
//     'washington',
//     'Warsaw',
//     'Rome',
//     '57madrid',
//     'dublin',
//     '68Havana',
//     'Riga',
//     'Oslo'
// ];
// console.log(arrOfStrings);

// -- отсортировать его по алфавиту в восходящем порядке.
// const sortStrings = arrOfStrings.sort((a, b) => {
//     if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return 1;
//     if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return -1;
//     return 0;
// });
// console.log(sortStrings);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// const sortStrings = arrOfStrings.sort((a, b) => {
//     if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) return -1;
//     if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) return 1;
//     return 0;
// });
// console.log(sortStrings);

// -- отфильтровать слова длиной менее 4х символов
// const sortStrings = arrOfStrings.filter(value => value.length <= 4);
// console.log(sortStrings);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const sortStrings = arrOfStrings.map(value => value += '!');
// console.log(sortStrings);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 30, status: true },
//   { name: "kolya", age: 29, status: true },
//   { name: "olya", age: 28, status: false },
//   { name: "max", age: 30, status: true },
//   { name: "anya", age: 31, status: false },
//   { name: "oleg", age: 28, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 30, status: true },
//   { name: "olya", age: 31, status: false },
//   { name: "max", age: 31, status: true },
// ];
// console.log(users);

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// const sortUsers = users.sort((a, b) => a.age - b.age)
// console.log(sortUsers);

// const sortUsers = users.sort((a, b) => b.age - a.age);
// console.log(sortUsers);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const sortUsers = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sortUsers);

// const sortUsers = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sortUsers);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив(первинний масив залишиться без змін)
// let arr = JSON.parse(JSON.stringify(users));

// let sortUsers = arr.map((user, index) => {
//     user.id = index;
//     return user;
// });
// console.log(sortUsers);
// - відсортувати його за індентифікатором
// let arr = JSON.parse(JSON.stringify(users));

// let sortUsers = arr.map((user, index) => {
//   user.id = index;
//   return user;
// });

// sortUsers.sort((a, b) => b.id - a.id);
// console.log(sortUsers);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calc(a, b, callback) {
//     return callback(a, b);
// };

// const addTwo = calc(55, 46, (a, b) => {
//     return a + b;
// });
// console.log(addTwo);
// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc(a, b, c, callback) {
//   return callback(a, b, c);
// }

// const calcThree = calc(55, 46, 2, (a, b, c) => {
//   return a * b * c;
// });
// console.log(calcThree);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

// let cars = [
//   {
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400,
//   },
//   {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250,
//   },
//   {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300,
//   },
//   {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140,
//   },
//   {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200,
//   },
//   {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165,
//   },
//   {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350,
//   },
//   {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400,
//   },
//   {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230,
//   },
// ];

// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів
// const carFilter = cars.filter(value => value.volume > 3);
// console.log(carFilter);

// - двигун = 2л
// const carFilter = cars.filter(value => value.volume == 2);
// console.log(carFilter);

// - виробник мерс
// const carFilter = cars.filter(value => value.producer == "mercedes");
// console.log(carFilter);

// - двигун більше 3х літрів + виробник мерседес
// const carFilter = cars.filter(
//   (value) => value.volume >= 3 && value.producer == "mercedes"
// );
// console.log(carFilter);

// - двигун більше 3х літрів + виробник субару
// const carFilter = cars.filter(value => value.volume >= 3 && value.producer == 'subaru');
// console.log(carFilter);

// - сили більше ніж 300
// const carFilter = cars.filter(value => value.power > 300);
// console.log(carFilter);

// - сили більше ніж 300 + виробник субару
// const carFilter = cars.filter(value => value.power >= 300 && value.producer == 'subaru');
// console.log(carFilter);

// - мотор серіі ej
// const carFilter = cars.filter(value => value.engine.startsWith('ej'));
// console.log(carFilter);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const carFilter = cars.filter(value => value.power >= 300 && value.producer == 'subaru' && value.engine.startsWith('ej'));
// console.log(carFilter);

// - двигун меньше 3х літрів + виробник мерседес
// const carFilter = cars.filter(value => value.volume < 3 && value.producer == 'mercedes');
// console.log(carFilter);

// - двигун більше 2л + сили більше 250
// const carFilter = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(carFilter);

// - сили більше 250  + виробник бмв
// const carFilter = cars.filter(value => value.power > 250 && value.producer == "bmw");
// console.log(carFilter);

// - взять слдующий массив
// let usersWithAddress = [
//   {
//     id: 1,
//     name: "vasya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 16 },
//   },
//   {
//     id: 2,
//     name: "petya",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 1 },
//   },
//   {
//     id: 3,
//     name: "kolya",
//     age: 29,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 121 },
//   },
//   {
//     id: 4,
//     name: "olya",
//     age: 28,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 90 },
//   },
//   {
//     id: 5,
//     name: "max",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 115 },
//   },
//   {
//     id: 6,
//     name: "anya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 2 },
//   },
//   {
//     id: 7,
//     name: "oleg",
//     age: 28,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 22 },
//   },
//   {
//     id: 8,
//     name: "andrey",
//     age: 29,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 43 },
//   },
//   {
//     id: 9,
//     name: "masha",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 12 },
//   },
//   {
//     id: 10,
//     name: "olya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 16 },
//   },
//   {
//     id: 11,
//     name: "max",
//     age: 31,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 121 },
//   },
// ];
// console.log(usersWithAddress);

// -- отсортировать его по id пользователей
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => a.id - b.id);
// console.log(sortUser);

// -- отсортировать его по id пользователей в обратном опрядке
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => b.id - a.id);
// console.log(sortUser);

// -- отсортировать его по возрасту пользователей
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => a.age - b.age);
// console.log(sortUser);

// // -- отсортировать его по возрасту пользователей в обратном порядке
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => b.age - a.age);
// console.log(sortUser);

// -- отсортировать его по имени пользователей
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => {
//     if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
//     if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
//     return 0;
// });
// console.log(sortUser);

// -- отсортировать его по имени пользователей в обратном порядке
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => {
//   if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return -1;
//   if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return 1;
//   return 0;
// });
// console.log(sortUser);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => {
//     if (a.address.street.toLocaleLowerCase() > b.address.street.toLocaleLowerCase()) return 1;
//     if (a.address.street.toLocaleLowerCase() < b.address.street.toLocaleLowerCase()) return -1;
//     return 0;
// });
// console.log(sortUser);
// А смысл в чем? Тут же одинаковое название улицы во всех случаях.


// -- отсортировать его по номеру дома по возрастанию
// let arrUser = JSON.parse(JSON.stringify(usersWithAddress));
// const sortUser = arrUser.sort((a, b) => a.address.number - b.address.number);
// console.log(sortUser);

// -- отфильтровать (оставить) тех кто младше 30
// const sortUser = usersWithAddress.filter(value => value.age < 30);
// console.log(sortUser);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// const sortUser = usersWithAddress.filter(value => !value.status);
// console.log(sortUser);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// const sortUser = usersWithAddress.filter(value => !value.status && value.age < 30);
// console.log(sortUser);

// -- отфильтровать (оставить) тех у кого номер дома четный
// const sortUser = usersWithAddress.filter(value => value.address.number % 2 == 0 && value.address.number !== 0);
// console.log(sortUser);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// let cars = [
//   {
//     producer: "subaru",
//     owner: { name: "Mark", age: 23, exp: 5 },
//     year: 2010,
//     power: 400,
//     price: 28500,
//   },
//   {
//     producer: "subaru",
//     owner: { name: "Dinasour", age: 26, exp: 10 },
//     year: 2007,
//     power: 250,
//     price: 26500,
//   },
//   {
//     producer: "subaru",
//     owner: { name: "Shina", age: 23, exp: 7 },
//     year: 2011,
//     power: 300,
//     price: 24500,
//   },
//   {
//     producer: "subaru",
//     owner: { name: "Misha", age: 22, exp: 2 },
//     year: 1998,
//     power: 140,
//     price: 25500,
//   },
//   {
//     producer: "subaru",
//     owner: { name: "Liza", age: 28, exp: 4 },
//     year: 2014,
//     power: 200,
//     price: 23500,
//   },
//   {
//     producer: "bmw",
//     owner: { name: "Ralf", age: 27, exp: 4 },
//     year: 2013,
//     power: 120,
//     price: 21500,
//   },
//   {
//     producer: "bmw",
//     owner: { name: "Rebekka", age: 29, exp: 8 },
//     year: 2010,
//     power: 120,
//     price: 20500,
//   },
//   {
//     producer: "bmw",
//     owner: { name: "Melania", age: 26, exp: 3 },
//     year: 2009,
//     power: 350,
//     price: 19500,
//   },
//   {
//     producer: "mercedes",
//     owner: { name: "Alina", age: 30, exp: 3 },
//     year: 1990,
//     power: 180,
//     price: 17500,
//   },
//   {
//     producer: "mercedes",
//     owner: { name: "Volodya", age: 31, exp: 2 },
//     price: 16500,
//     year: 2017,
//     power: 400,
//   },
// ];

// let newCar = JSON.parse(JSON.stringify(cars));
// let allPrice = 0;

// for (let i = 0; i < newCar.length; i += 2) {
//   (newCar[i].power += newCar[i].power * 0.1);
//   (newCar[i].price += newCar[i].price * 0.05);
// }
// for (let i = 0; i < newCar.length; i++) {
//   if (newCar[i].owner.exp < 5 && newCar[i].owner.age > 25) {
//     newCar[i].owner.exp += 1;
//   }
//   allPrice += newCar[i].price;
// }

// console.log(allPrice);

// console.log(cars);
// console.log(newCar);


// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі



// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arrNumbers = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9];

// function findIndex(arr, item) {
//     let min = null;
//     let max = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             if (!min) min = i;
//             max = i;
//         }
//     }
//     min !== null
//         ? console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`)
//         : console.log(-1)
// };

// findIndex(arrNumbers, 56);


