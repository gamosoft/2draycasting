
let walls = [];
let ray;
let particle;
// Automatic movement with perlin noise
let xoff = 0;
let yoff = 10000; // if 0 only diagonal movement

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);
        walls.push(new Boundary(x1, y1, x2, y2));
    }

    walls.push(new Boundary(0, 0, width-1, 0));
    walls.push(new Boundary(width-1, 0, width-1, height-1));
    walls.push(new Boundary(width-1, width-1, 0, height-1));
    walls.push(new Boundary(0, height-1, 0, 0));

    //ray = new Ray(100, 200);
    //ray = new Ray(createVector(100, 200), 0);
    particle = new Particle();
}



function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    // particle.update(mouseX, mouseY);
    particle.update(noise(xoff) * width, noise(yoff) * height);
    xoff += 0.01;
    yoff += 0.01;
    particle.show();
    particle.look(walls);
    //ray.lookAt(mouseX, mouseY);
    //ray.show();
    // let pt = ray.cast(wall);
    // // console.log(pt);
    // if (pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8);
    // }
}
