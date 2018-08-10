/* nav menu*****************************/

let iMenuNode = document.querySelector('header .nav-top .fa-bars');
let menuNode = document.querySelector('header .nav-top .nav-menu');
iMenuNode.addEventListener('click', () => {
    console.log('soy texto y existo')
    menuNode.classList.toggle('active');
});


/*menu*****************************/
const bebidas = [
    [
        'Cervezas',
        ['Tecate Light', '28'],
        ['XX Lager', '30'],
        ['XX Ambar', '30'],
        ['Indio', '30'],
        ['Bohemia clara', '35'],
        ['Bohemia obscura', '35'],
        ['Bohemia weizen', '35'],
        ['Heineken', '38'],
        ['Cerveza artesanal', '60'],
        ['Michelada 1 Lt.', '75'],
    ],
    [
        'Café',
        ['Café Americano', '35'],
        ['Capuchino', '45'],
        ['Expresso', '35'],
        ['Frapuchino', '55'],
        ' ',
        'Malteadas',
        ['Chocolate', '55'],
        ['Oreo', '60'],
        ['Taro', '60'],
    ],
    [
        'Bebidas',
        ['Refresco coca-cola', '28'],
        ['Agua fresca del día', '28'],
        ['Limonada', '32'],
        ['Naranjada', '32'],
        ['Calimocho', '40'],
        ['Sangría', '40'],
        ['Clericot', '50'],
        ['Tisana Caliente/Fría', '43'],
        ['- Frutos dorados', ''],
        ['- Frutos verdes', ''],
        ['- Frutos rojos', ''],
    ],
    [
        ' ',
        ['Soda Italiana', '43'],
        ['- Maracuyá', ''],
        ['- Manzana verde', ''],
        ['- Mora azul', ''],
        ['Smoothie', '55'],
        ['- Fresa', ''],
        ['- Mango', ''],
        ['- Tamarindo', ''],
        ['Chamoyada', '55'],['- Fresa', ''],
        ['- Mango', ''],
        ['- Tamarindo', ''],
    ],
];
const salads = [
    [
        ['Caravana al grill', '84'],
        'Cama de lechuga con calabaza, champiñones, pimientos y cebolla al grill con vinagreta balsámica.',
        'Extra arrachera al grill (100gr) $120',
        '-',
        ['César', '78'],
        'Lechuga, queso parmesano, crutones y aderezo César.',
        'Extra de pollo (100gr) $110',
        '-',
        ['La Estancia', '86'],
        'Mezcla de lechugas, arúgula, espinacas, jitomate cherry, pera asada crutones y queso de cabra acompañado de la vinagreta del chef.',
    ],
];

function getTableStructure(menuData) {
    let tableStructure = '';
    menuData.forEach((table) => {
        let innerTable = '<table>';
        table.forEach((element) => {
            innerTable += '<tr>';
            if (typeof (element) === 'string') {
                innerTable += `<td colspan="2">${element}</td>`;    
            } else {
                let [product, price] = element;
                if (price) price = `$${price}`; 
                innerTable += `<td>${product}</td><td>${price}</td>` 
            }
            innerTable += '</tr>';
        });
        innerTable += '</table>';
        tableStructure += innerTable;
    });
    return tableStructure;
}
  /*
document.getElementById('menu-bebidas').innerHTML = getTableStructure(bebidas);
document.getElementById('menu-salads').innerHTML = getTableStructure(salads);


const menuSelector = document.getElementsByClassName('menu-selector');
for (i=0; i < menuSelector.length; i++) {
    menuSelector[i].addEventListener('click', function() {
        hideAllMenus();
        const container = this.getAttribute("data-container");
        const divContainer = document.getElementById(container)
        divContainer.classList.remove('hide');
    }, false);
}
function hideAllMenus(from = 0) {
    const menuContainers = document.getElementsByClassName('menu');
    for (i=from; i < menuContainers.length; i++) {
        menuContainers[i].classList.add('hide');
    }
}
hideAllMenus(1);
*/
