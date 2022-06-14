// crear variables para el juego
var space, rocket, asteroid, star,spaceImg, rocketImg, asteroidImg, starImg, asteroidGroup, starGroup, gameState;
// funcion para cargar una ves los archivos del juego
function preload(){
spaceImg = loadImage("images.jpeg");
rocketImg = loadImage("rocktImage.png");
asteroidImg = loadImage("meteoroidImage.png");
starImg = loadImage("EstelarImage.png");
impactSound = loadSound("mi_explosion_03_hpx.mp3");
colectSound = loadSound("DestelloEstelar.mp3");
}
// funcion para cargar archivos en el juego cada ves que se reinicie
function setup(){
createCanvas(800,800);
space = crateSprite(400,400,400,400);
space.addImage("space",spaceImg);
space.velocityY = 5;
space.scale = 0.5;
impactSound.loop();
colectSound.loop();
rocket = crateSprite(200,200,30,15);
rocket.addImage("rocket",rocketImg);
rocket.velocityX = 3;
rocket.velocityY = 3;
asteroidGroup = new Group();
starGroup = new Group();
score=0;
}
// funcion para que los archivos cargados en el juego funcionen correcta mente y cumplan su funcion como es debido
function draw(){
drawSprites();
background(345);
score=score+2;
if(space.y > 0 ){
space.y = 300;
}
if( gameState === "play"){
if(keyDown("right")){
rocket.X = rocket.x -3;
}
if(keyDown("left")){
rocket.X = rocket.X +3;    
}
if(starGroup.isTouching(rocket) || space.Y > 600){
star.velocityY = 3;
}
if(asteroidGroup.isTouching(rocket)){
space.
gameState = "end"
}
}
if(gameState === "end"){
    stroke("withe");
    fill("withe");
    textSize(30);
    text("Fin del juego", 100,100)
}
}
// funcion para hacer que aparescan los meteritos y cumplan la funcion que deben
function spawnasteroids(){
if (frameCount & 240 === 0){
var asteroid = crateSprite(200,-50);
asteroid.addImage("asteroid",asteroidImg);
asteroid.velocityY = 1;
rocket.detph = asteroid.detph;
asteroid.detph =1;
lifetime=800;
lifetime=800;
lifetime=800;
asteroidGroup.add();
asteroid.debug = true;
}
}