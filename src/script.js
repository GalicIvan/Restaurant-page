import './styles.css';

let header = document.querySelector('.header')
let content = document.querySelector('.content')

let headText = document.createElement('p')
headText.textContent = 'Barrique'
headText.classList.add('head-text')
header.appendChild(headText)


let contentText = document.createElement('div')
contentText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero ducimus temporibus, cupiditate quod quae deserunt, voluptatem omnis debitis minima mollitia porro sit beatae ratione illo! Iusto asperiores rem eius?'
contentText.classList.add('content-text')
contentText.classList.add('head-text')
content.appendChild(contentText)
