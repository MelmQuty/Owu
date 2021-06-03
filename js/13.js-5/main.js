// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tag (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'a';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attrs = [
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' },
//     { titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.' },
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ]

// let a = new Tag(title, action, attrs);
// console.log(a);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }

// }

// let title = 'a';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attrs = [
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' },
//     { titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.' },
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ]

// let a = new Tag(title, action, attrs);
// console.log(a);

////div/////

// function Tag (titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'div';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attrs = [
//     { titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега' },
//     { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' },
// ]

// let div = new Tag(title, action, attrs);
// console.log(div);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }

// }

// let title = 'div';
// let action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attrs = [
//     { titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега' },
//     { titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' },
// ]

// let div = new Tag(title, action, attrs);
// console.log(div);

////h1/////

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'h1';
// let action = 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.';
// let attrs = [
//     { titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.' }
// ];

// let h1 = new Tag(title, action, attrs);
// console.log(h1);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let title = 'h1';
// let action = 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.';
// let attrs = [
//     { titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.' }
// ];

// let h1 = new Tag(title, action, attrs);
// console.log(h1);

////span////

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'span';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attrs = [
//     { titleOfAttr: 'different', actionOfAttr: 'Для этого тега доступны универсальные атрибуты и события.' }
// ];

// let span = new Tag(title, action, attrs);
// console.log(span);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let title = 'span';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attrs = [
//     { titleOfAttr: 'different', actionOfAttr: 'Для этого тега доступны универсальные атрибуты и события.' }
// ];

// let span = new Tag(title, action, attrs);
// console.log(span);

/////input////

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'input';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ';
// let attrs = [
//     { titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.' },
//     { titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.' }
// ];

// let input = new Tag(title, action, attrs);
// console.log(input);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let title = 'input';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ';
// let attrs = [
//     { titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.' },
//     { titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.' }
// ];

// let input = new Tag(title, action, attrs);
// console.log(input);

////form////

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'form';
// let action = 'Связывает поле с формой по её идентификатору.';
// let attrs = [
//     { titleOfAttr: null, actionOfAttr: null },
// ];

// let form = new Tag(title, action, attrs);
// console.log(form);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let title = 'form';
// let action = 'Связывает поле с формой по её идентификатору.';
// let attrs = [
//     { titleOfAttr: null, actionOfAttr: null },
// ];

// let form = new Tag(title, action, attrs);
// console.log(form);

//////option//////

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'option';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let attrs = [
//     { titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     { titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
// ];

// let option = new Tag(title, action, attrs);
// console.log(option);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let title = 'option';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let attrs = [
//     { titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     { titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     { titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
// ];

// let option = new Tag(title, action, attrs);
// console.log(option);

////SELECT////

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// let title = 'select';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attrs = [
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     { titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     { titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
// ];

// let select = new Tag(title, action, attrs);
// console.log(select);

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// let title = 'select';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attrs = [
//     { titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     { titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     { titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
// ];

// let select = new Tag(title, action, attrs);
// console.log(select);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

// let car = {
//     model: "TT",
//     manufacturer: "Audi",
//     year: 2027,
//     maxSpeed: 330,
//     engineVolume: 3.5,
//     drive: function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//     info: function () {
//         if(this.driver) {
//             console.log (`
//                 model: ${this.model},
//                 manufacturer: ${this.manufacturer},
//                 year: ${this.year},
//                 maxSpeed: ${this.maxSpeed},
//                 engineVolume: ${this.engineVolume},
//                 driver: ${this.driver.name}
//         `);
//         } else {
//              console.log (`
//                 model: ${this.model},
//                 manufacturer: ${this.manufacturer},
//                 year: ${this.year},
//                 maxSpeed: ${this.maxSpeed},
//                 engineVolume: ${this.engineVolume},
//         `);
//         }
//     },

//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },

//     changeYear: function (newValue) {
//         this.year = newValue;
//     },

//     addDriver: function (driver) {
//         this.driver = driver;
//     }

// };

// let driver = { name: 'Vled', age: 23 };
// car.drive();
// car.changeYear(1965);
// car.increaseMaxSpeed(200);
// car.addDriver(driver);
// car.info();

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model || "TT",
//         this.manufacturer = manufacturer || "Audi",
//         this.year = year || 2027,
//         this.maxSpeed = maxSpeed || 330,
//         this.engineVolume = engineVolume || 3.5,
//         this.drive = function () {
//             console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         },
//         this.info = function () {
//             if (this.driver) {
//                 console.log(`
//                 model: ${this.model},
//                 manufacturer: ${this.manufacturer},
//                 year: ${this.year},
//                 maxSpeed: ${this.maxSpeed},
//                 engineVolume: ${this.engineVolume},
//                 driver: ${this.driver.name}
//         `);
//             } else {
//                 console.log(`
//                 model: ${this.model},
//                 manufacturer: ${this.manufacturer},
//                 year: ${this.year},
//                 maxSpeed: ${this.maxSpeed},
//                 engineVolume: ${this.engineVolume},
//         `);
//             }
//         };

//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };

//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };

//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };

// };
// let car = new Car('YAZ','YAZ-1',1800,340,5.5);
// let driver = { name: 'Vled', age: 23 };
// car.drive();
// car.changeYear(1965);
// car.increaseMaxSpeed(200);
// car.addDriver(driver);
// car.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model || "TT";
//         this.manufacturer = manufacturer || "Audi";
//         this.year = year || 2027;
//         this.maxSpeed = maxSpeed || 330;
//         this.engineVolume = engineVolume || 3.5;
//     }
//     drive() {
//             console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//             };
//     info() {
//         if (this.driver) {
//             console.log(`
//                 model: ${this.model},
//                 manufacturer: ${this.manufacturer},
//                 year: ${this.year},
//                 maxSpeed: ${this.maxSpeed},
//                 engineVolume: ${this.engineVolume},
//                 driver: ${this.driver.name}`);
//         } else {
//             console.log(`
//                 model: ${this.model},
//                 manufacturer: ${this.manufacturer},
//                 year: ${this.year},
//                 maxSpeed: ${this.maxSpeed},
//                 engineVolume: ${this.engineVolume},`);
//         }
//     };

//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };

//     changeYear(newValue) {
//         this.year = newValue;
//     };

//     addDriver(driver) {
//         this.driver = driver;
//     };

// };
// let car = new Car('YAZ','YAZ-1',1800,340,5.5);
// let driver = { name: 'Vled', age: 23 };
// car.drive();
// car.changeYear(1965);
// car.increaseMaxSpeed(200);
// car.addDriver(driver);
// car.info();

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     };
// };

// class Princess extends Person {
//   constructor(name, age, footSize) {
//     super(name, age);
//     this.footSize = footSize;
//     };
// };

// class Prince extends Person {
//   constructor(name, age, shoeSize) {
//     super(name, age);
//     this.shoeSize = shoeSize;
//     };

//     fidnPrincess(arr) {
//         let search = null;
//         for (const item of arr) {
//             if (item.footSize === this.shoeSize) {
//                 search = item;
//             }
//         };
//         if (search) {
//         console.log(`My princess name is ${search.name}`);
//         } else  {
//         console.log(`I didn't find my princess`);
//         };
//     };
// };

// let princess1 = new Princess("Shina", 19, 36);
// let princess2 = new Princess("Lina", 20, 37);
// let princess3 = new Princess("Sakura", 21, 35);
// let princess4 = new Princess("Minami", 22, 41);
// let princess5 = new Princess("Hanako", 23, 36.5);
// let princess6 = new Princess("Haruko", 24, 40);
// let princess7 = new Princess("Yko", 25, 37.5);
// let princess8 = new Princess("Yoko", 26, 39);
// let princess9 = new Princess("Nana", 19, 40.5);
// let princess10 = new Princess("Chihara", 20, 38);

// let arrayPrincess = [
//   princess1,
//   princess2,
//   princess3,
//   princess4,
//   princess5,
//   princess6,
//   princess7,
//   princess8,
//   princess9,
//   princess10,
// ];

// let prince = new Prince('Vled', 13, 42);
// prince.fidnPrincess(arrayPrincess);

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Princess(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
};

function Prince(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;


    this.findPrincess = function (arr) {
        let search = null;
        // for (const item of arr) {
        //     if (item.footSize === this.shoeSize) {
        //         search = item;
        //     }
        // };
        // if (search) {
        //     console.log(`My princess name is ${search.name}`);
        // } else {
        //     console.log(`I didn't find my princess`);
        // };
        search = arr.find(item => item.footSize === this.shoeSize);
        find
          ? console.log(`My princess name is ${search.name}`)
          : console.log(`I didn't find my princess`);
    };
};
let princess1 = new Princess("Shina", 19, 36);
let princess2 = new Princess("Lina", 20, 37);
let princess3 = new Princess("Sakura", 21, 35);
let princess4 = new Princess("Minami", 22, 41);
let princess5 = new Princess("Hanako", 23, 36.5);
let princess6 = new Princess("Haruko", 24, 40);
let princess7 = new Princess("Yko", 25, 37.5);
let princess8 = new Princess("Yoko", 26, 39);
let princess9 = new Princess("Nana", 19, 40.5);
let princess10 = new Princess("Chihara", 20, 38);

let arrayPrincess = [
  princess1,
  princess2,
  princess3,
  princess4,
  princess5,
  princess6,
  princess7,
  princess8,
  princess9,
  princess10,
];

let prince = new Prince("Vled", 13, 36);
prince.findPrincess(arrayPrincess);