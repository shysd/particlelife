function setup(){
	createCanvas(1280, 720);
	particles = new Array(250);
	for(var i = 0; i < particles.length; i++){
		particles[i] = new Particle(random([1, 2, 3]));
	}
}

function draw(){
	background(50);
	stroke(50);
	for(var i = 0; i < particles.length; i++){
		particles[i].show();
		particles[i].update();
	}
}