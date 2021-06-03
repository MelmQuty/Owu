let cars = [
    {
        id: 1,
        model:'4Runner',
        producer:'Toyota',
        tankVolume: 4.5,
        horsePower: 330,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Toyota_4Runner_P4250812.jpg'
    },

    {
        id: 2,
        model:'Alphard',
        producer:'Toyota',
        tankVolume: 4.8,
        horsePower: 290,
        image: 'https://autoreview.ru/images/Article/1699/Article_169960_860_575.jpg'
    },

    {
        id: 3,
        model:'Auris',
        producer:'Toyota',
        tankVolume: 5.0,
        horsePower: 300,
        image: 'http://cm.dlstatic.ru/auto/carmodel/top_gallery/0151/151648.slider.jpeg'
    },

    {
        id: 4,
        model:'Avalon',
        producer:'Toyota',
        tankVolume: 4.3,
        horsePower: 270,
        image: 'https://autoreview.ru/images/Article/1622/Article_162206_860_575.jpg'
    },

    {
        id: 5,
        model:'Camry',
        producer:'Toyota',
        tankVolume: 3.8,
        horsePower: 310,
        image: 'https://cdnimg.rg.ru/img/content/182/10/02/01_d_850.jpg'
    },

    {
        id: 6,
        model:'2 Series Coupé',
        producer:'BMW',
        tankVolume: 5.5,
        horsePower: 100500,
        image: 'https://s.auto.drom.ru/i24209/c/photos/fullsize/bmw/2-series/bmw_2-series_710862.jpg'
    },

    {
        id: 7,
        model:'2 Series Gran Coupé',
        producer:'BMW',
        tankVolume: 6.2,
        horsePower: 410,
        image: 'https://cdn.motor1.com/images/mgl/oeqGp/s1/bmw-2-series-gran-coupe.jpg'
    },

    {
        id: 8,
        model:'3 Series Sedan',
        producer:'BMW',
        tankVolume: 4.5,
        horsePower: 295,
        image: 'https://s.auto.drom.ru/i24226/c/photos/fullsize/bmw/3-series/bmw_3-series_846891.jpg'
    },

    {
        id: 9,
        model:'4 Series Coupé',
        producer:'BMW',
        tankVolume: 4.9,
        horsePower: 325,
        image: 'https://dvizhok.su/i/files2/auto/2020/06/BMW_4_Series_Coupe_2020_action.jpg'
    },

    {
        id: 10,
        model:'4 Series Cabriolet',
        producer:'BMW',
        tankVolume: 3.5,
        horsePower: 305,
        image: 'https://cdn.riastatic.com/photosnewr/auto/newauto_photos/bmw-4-series__799111-620x465x70.jpg'
    },

    {
        id: 11,
        model:'Lexus UX',
        producer:'Lexus',
        tankVolume: 4.7,
        horsePower: 300,
        image: 'https://wroom.ru/i/cars2/lexus_ux_1.jpg'
    },

    {
        id: 12,
        model:'Lexus GX',
        producer:'Lexus',
        tankVolume: 4.5,
        horsePower: 295,
        image: 'https://cdn.motor1.com/images/mgl/eX4KE/s1/2020-lexus-gx.jpg'
    },

    {
        id: 13,
        model:'Lexus',
        producer:'Lexus RC',
        tankVolume: 4.9,
        horsePower: 355,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lexus_RC_350_P4250853.jpg/1200px-Lexus_RC_350_P4250853.jpg'
    },

    {
        id: 14,
        model:'Lexus LC Hybrid',
        producer:'Lexus',
        tankVolume: 4.5,
        horsePower: 295,
        image: 'https://i2.wp.com/itc.ua/wp-content/uploads/2019/11/foto-1-1-4.jpg?fit=770%2C558&quality=100&strip=all&ssl=1'
    },

    {
        id: 15,
        model:'Lexus LS',
        producer:'Lexus',
        tankVolume: 5.4,
        horsePower: 305,
        image: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001608fbdd810000b20331eca1734f7/cattouchret'
    },
];
for (let i = 0; i < cars.length; i++) {
document.write(`
        <div class="cars-item">
            <h2 class="cars-title">${cars[i].producer} - ${cars[i].model}</h2>
            <img src ="${cars[i].image}" alt="${cars[i].model}">
            <h3 class="cars-descr">${cars[i].tankVolume} - ${cars[i].horsePower}</h3>
        </div>
    `);

};