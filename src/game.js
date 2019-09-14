
let sphere = {
    x: 5,
    y: 5,
    w: 32,
    h: 32
}

var m = new Date();

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
}

var g = 9.8;

function draw(){
    //m+= 0.06 * deltaTime;
    var s = millis() / 1000;
    background(255)
    fill(color(255,100,100));
    noStroke();
    ellipse(sphere.x+(sphere.w/2), sphere.y+(sphere.h/2), sphere.w, sphere.h);


    var v = 1;
    var t = 1;

    var a = 15;

    if(sphere.y <= 0){ g = 9.8}
    if(sphere.y >= windowHeight - sphere.h){ g = -9.8}
    //if(sphere.y >= windowHeight - sphere.h){ sphere.y = 0;}

    sphere.x += cos(a * Math.PI / 180);
    sphere.y += (g * s) * sin(a * Math.PI / 180);

    console.log(g, sphere.y)

    //sphere.y+= deltaTime * 0.1;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}