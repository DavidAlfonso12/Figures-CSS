var figura = document.getElementById("figura");
var tituloFigura = document.getElementById("titulo");
var body = document.querySelector("body");
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var section = document.querySelector('section');


function circulo() {
    figura.classList.toggle("circulo");
    tituloFigura.innerText = "circulo";
}


function rectangulo() {
    figura.classList.toggle("rectangulo");
    titulo.innerText = 'Rectangulo';
}


function rombo(){
    figura.classList.toggle("rombo");
    titulo.innerText = 'Rombo';
}


function imagen(){
    titulo.innerText = 'Imagen';
    figura.classList.toggle("imagen");
}


function gif(){
    titulo.innerText = 'Gif';
    figura.classList.toggle("gif");
}


function triangulo(){
    titulo.innerText = 'Tringulo';
    figura.classList.toggle("triangulo");
}


function hoja(){
    titulo.innerText = 'Hoja';
    figura.classList.toggle("hoja");
}


function pacman(){
    titulo.innerText = 'Pac Man';
    figura.classList.toggle("pacman");
}

function luna(){
    titulo.innerText = 'Luna';
    figura.classList.toggle("luna");
}

function huevo(){
    titulo.innerText = 'Huevo';
    figura.classList.toggle("huevo");
}

function trapecio(){
    titulo.innerText = 'Trapecio';
    figura.classList.toggle("trapecio");
}

function moveTop(){
    titulo.innerText = 'Move Top';
    figura.classList.toggle("moveTop");
}

function moveRight(){
    titulo.innerText = 'Move Right';
    figura.classList.toggle("moveRight");
}

function moveBottom(){
    titulo.innerText = 'Move Bottom';
    figura.classList.toggle("moveBottom");
}

function moveLeft(){
    titulo.innerText = 'Move Left';
    figura.classList.toggle("moveLeft");
}

function panelateral(){
    titulo.innerText = 'Panel lateral';
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
}

function panelSuperior(){
    titulo.innerText = 'Panel superior';
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle('activeSup');
}

function imgfondo(){
    titulo.innerText = 'Cambiar imagen de fondo';
    body.classList.toggle('backBody');
}

function color(){
    titulo.innerText = 'Cambiar color principal';
    left.classList.toggle('color');
    right.classList.toggle('color');
    section.classList.toggle('colorSect');
}

function sorpresa(){
    titulo.innerText = 'Sorpresa';
    
}