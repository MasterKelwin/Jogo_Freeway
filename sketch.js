let ator;
let carro1;
let carro2;
let carro3;
let estrada;

//variáveis do ator
let xAtor = 80
let yAtor = 366
let wAtor = 30
let hAtor = 30

//variáveis do carro1
let xCarro1 = 600
let yCarro1 = 40
let wCarro = 60
let hCarro = 40

//variáveis do carro2
let xCarro2 = 600
let yCarro2 = 96

//variaveis do carro3
let xCarro3 = 600
let yCarro3 = 150


function preload() {
  ator = loadImage("assets/ator-1.png");
  carro1 = loadImage("assets/carro-1.png");
  carro2 = loadImage("assets/carro-2.png");
  carro3 = loadImage("assets/carro-3.png");
  estrada = loadImage("assets/estrada.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarro1();
  mostraCarro2();
  mostraCarro3();
  movimentaAtor();
  movimentaCarro();
  loopCarro();

}

function mostraAtor () {
  image(ator, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor () {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)) {
    yAtor += 3
  }
}

function mostraCarro1 () {
  image(carro1, xCarro1, yCarro1, wCarro, hCarro);
}

function mostraCarro2 () {
  image(carro2, xCarro2, yCarro2, wCarro, hCarro);
}

function mostraCarro3 () {
  image(carro3, xCarro3, yCarro3, wCarro, hCarro);
}


function movimentaCarro () {
  xCarro1 -= 4 //velocidades
  xCarro2 -= 5
  xCarro3 -= 3
}

function loopCarro () {
  if (xCarro1 < -80) {
    xCarro1 = 600
  }
    if (xCarro2 < -80) {
    xCarro2 = 600
  }
    if (xCarro3 < -80) {
    xCarro3 = 600
  }
}