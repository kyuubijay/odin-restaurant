import '../dist/index.css'
import 'flowbite'

var menus = ['home', 'menu', 'contact']
var foods = ['chicken-joy', 'spaghetti', 'sundae', 'yumburger', 'burger-steak', 'sisig', 'turon']

function createElement(element) {
    return document.createElement(element);
}

function capitalize(s) {
    var r = ''
    for(var w of s.split('-')) {
        r += w[0].toUpperCase() + w.slice(1) + ' '
    }
    return r.trim();
}

function nav() {
   
    const mainNav = document.createElement('nav');
    const div1 = createElement('div')
    const div2 = createElement('div')
    const div3 = createElement('div')
    const a_logo = createElement('a')
    const logo = createElement('img')
    const logo_text = createElement('span');
    const ul = createElement('ul')

    mainDiv.className += 'container px-40';
    mainNav.className += 'bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900';
    div1.className += 'container flex flex-wrap justify-between items-center mx-auto';
    
    a_logo.className += 'flex items-center'
    a_logo.href = '#'
   
    logo.className += 'mr-3 h-6 sm:h-9'
    logo.src = 'img/logo.png'

    logo_text.className += 'self-center text-xl font-semibold whitespace-nowrap dark:text-white font-jellee text-red-600'
    logo_text.innerHTML = 'Jollijeep'
    
    a_logo.appendChild(logo);
    a_logo.appendChild(logo_text);
    div1.appendChild(a_logo);
    mainNav.appendChild(div1);

    return mainNav;
    
}

function options() {
    const container = createElement('div');
    container.className += 'flex justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700';

    const ul = createElement('ul');
    ul.className += "flex flex-wrap -mb-px";

    for(const i in menus) {
        var menu = menus[i]
        
        var li = createElement('li');
        li.className += 'mr-2';
        li.role = 'presentation';
        var b = createElement('button')
        b.className += 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-red-600 hover:border-red-300 dark:hover:text-red-300'
        b.setAttribute('id', menu + '-tab')
        b.setAttribute('data-tabs-target', '#' + menu)
        b.type = 'button'
        b.role = 'tab'
        b.innerHTML = capitalize(menu)
        b.setAttribute('aria-controls', menu)

        li.appendChild(b)
        ul.appendChild(li)
    }

    container.appendChild(ul);

    return container;
}

function home() {
    const mainDiv = createElement('div')
    mainDiv.className += 'grid grid-cols-2 gap4'
    const div1 = createElement('div')
    const span = createElement('span')
    span.className += 'font-jellee text-red-600 text-7xl'
    span.innerHTML += 'Pabida ang saya!'
    div1.appendChild(span)

    const div2 = createElement('div')
    const img = createElement('img')
    img.className += 'w-full aspect-square'
    img.src = 'img/fried-chicken.jpg'
    div2.appendChild(img)

    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)

    return mainDiv
}

function menu() {
    const mainDiv = createElement('div')
    mainDiv.className += 'grid grid-cols-3 grid-rows-3 hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800'
    mainDiv.setAttribute('id', 'menu')
    mainDiv.setAttribute('role', 'tabpanel')
    mainDiv.setAttribute('aria-labelledby', 'menu-tab')
    for(var food of foods) {
        var div = createElement('div')
        div.className += 'max-w-sm relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'

        var a = createElement('a')
        a.href = '#'
        var img = createElement('img')
        img.className += 'rounded-t-lg'
        img.src = 'img/' + food + '.jpg'
        a.appendChild(img)
        div.appendChild(a)

        var div2 = createElement('div')
        div2.className += 'p-5 absolute bottom-1'
        var a2 = createElement('a')
        a2.href = '#'
        var h5 = createElement('h5')
        h5.className += 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
        h5.innerHTML = capitalize(food)
        a2.appendChild(h5)
        div2.appendChild(a2)

        var a3 = createElement('a')
        a3.href = '#'
        a3.className += 'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
        a3.innerHTML += 'Buy Now'

        div2.appendChild(a3)
        div.appendChild(div2)
        mainDiv.appendChild(div)
    }

    return mainDiv;
}

function contact() {
    const mainDiv = createElement('div')

    const div1 = createElement('div')
    const img = createElement('img')
    img.className += 'w-full aspect-square'
    img.src = 'img/contact.jpg'
    div1.appendChild(img)

    mainDiv.appendChild(div1)

    return mainDiv

}

function content() {
    const mainDiv = createElement('div')
    const div1 = createElement('div')
    div1.className += 'hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800'
    div1.setAttribute('id', 'home')
    div1.setAttribute('role', 'tabpanel')
    div1.setAttribute('aria-labelledby', 'home-tab')
    div1.appendChild(home())

    
    // div2.appendChild()

    

    const div2 = createElement('div')
    div2.className += 'hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800'
    div2.setAttribute('id', 'contact')
    div2.setAttribute('role', 'tabpanel')
    div2.setAttribute('aria-labelledby', 'contact-tab')
    div2.appendChild(contact())

    mainDiv.appendChild(div1)
    mainDiv.appendChild(menu())
    mainDiv.appendChild(div2)

    return mainDiv

}

const mainDiv = createElement('div');
mainDiv.appendChild(nav());
mainDiv.appendChild(options());
mainDiv.appendChild(content());

document.body.appendChild(mainDiv);

const tabElements = [
    {
        id: 'home',
        triggerEl: document.querySelector('#home-tab'),
        targetEl: document.querySelector('#home')
    },
    {
        id: 'menu',
        triggerEl: document.querySelector('#menu-tab'),
        targetEl: document.querySelector('#menu')
    },
    {
        id: 'contact',
        triggerEl: document.querySelector('#contact-tab'),
        targetEl: document.querySelector('#contact')
    }
];



const tableOptions = {
    defaultTabId: 'home',
    activeClasses: 'text-red-600 hover:text-red-600 dark:text-red-500 dark:hover:text-red-400 border-red-600 dark:border-red-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
};


new Tabs(tabElements, tableOptions);