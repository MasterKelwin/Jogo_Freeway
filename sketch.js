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

//variáveis dos carros
let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150]
let wCarro = 60
let hCarro = 40

function preload() {
  ator = loadImage("assets/ator-1.png");
  carro1 = loadImage("assets/carro-1.png");
  carro2 = loadImage("assets/carro-2.png");
  carro3 = loadImage("assets/carro-3.png");
  estrada = loadImage("assets/estrada.png");
  imagemCarros = [carro1, carro2, carro3]
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  movimentaCarro();
  loopCarro();
  verificaColisao();

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

function mostraCarros () {
  for (let i = 0; i < imagemCarros.length; i++)  //i++ = i=i+1
  image(imagemCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
}

function movimentaCarro () {
  xCarros[0] -= 4 //velocidades
  xCarros[1] -= 5
  xCarros[2] -= 3
}

function loopCarro () {
  for (let i = 0; i < imagemCarros.length; i++) 
  if (xCarros[i] < -80) {
    xCarros[i] = 600
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
  colisao = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xAtor, yAtor, 15) 
    if (colisao) {
      colidiu();
    }
  }
}

function colidiu() {
  yAtor = 366
}