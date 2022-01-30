let ator;
let carro1;
let carro2;
let carro3;
let estrada;
let somTrilha;
let somColidiu;
let somPontos;

//variáveis do ator
let xAtor = 85
let yAtor = 366
let wAtor = 30
let hAtor = 30
let pontos = 0

//variáveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 263, 320]
let wCarro = 60
let hCarro = 40

function preload() {
  ator = loadImage("assets/ator-1.png");
  carro1 = loadImage("assets/carro-1.png");
  carro2 = loadImage("assets/carro-2.png");
  carro3 = loadImage("assets/carro-3.png");
  estrada = loadImage("assets/estrada.png");
  imagemCarros = [carro1, carro2, carro3, carro2, carro3, carro1]
  somTrilha = loadSound("assets/trilha.mp3")
  somColidiu = loadSound("assets/colidiu.mp3")
  somPontos = loadSound("assets/pontos.wav")
}

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  movimentaCarro();
  loopCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();

}

function mostraAtor () {
  image(ator, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor () {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3
    }
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
  xCarros[3] -= 4
  xCarros[4] -= 6
  xCarros[5] -= 3
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
  colisao = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xAtor, yAtor, 11) 
    if (colisao) {
      colidiu();
      somColidiu.play();
      if (pontos > 0){
        pontos -= 1;
      }
    }
  }
}

function colidiu() {
  yAtor = 366
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 5, 27)
  fill(color(255, 220, 100));
}

function marcaPonto() {
  if (yAtor < 30) {
    pontos += 1;
    yAtor = 366;
    somPontos.play();
  }
}

function podeSeMover() {
  return yAtor < 366;
}

 if(this._collideDebug || calcIntersection){
      var intersectionX = x1 + (uA * (x2-x1));
      var intersectionY = y1 + (uA * (y2-y1));
    }

    if(this._collideDebug){
      this.ellipse(intersectionX,intersectionY,10,10);
    }

    if(calcIntersection){
      intersection = {
        "x":intersectionX,
        "y":intersectionY
      }
      return intersection;
    }else{
      return true;
    }
  }
