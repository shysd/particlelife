function setup(){
	createCanvas(windowWidth, windowHeight);

	// inherent properties of the system
	a = 144;		// alpha
	b = 8;			// beta
	cr = 55;		// neightbour radius

	particles = new Array(400);
	for(var i = 0; i < particles.length; i++){
		particles[i] = new Particle();
	}

	// angleMode(DEGREES);
}

function draw(){
	frameRate(20);
	background(64, 0, 64, 128);
	noStroke();
	for(var i = 0; i < particles.length; i++){
		particles[i].update(particles);
		particles[i].show();
	}

	// noLoop();
}