var a = 0, b = 0, cr = 0;
var a_sld;
var b_sld;
var cr_sld;

function setup(){
	createCanvas(800, 600);

	// inherent properties of the system
	// alpha
	a_sld = createSlider(10, 180, 100, 1);
	// beta
	b_sld = createSlider(1, 15, 8, 1);
	// neightbour radius
	cr_sld = createSlider(20, 80, 50, 1);

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

	a = a_sld.value();
	b = b_sld.value();
	cr = cr_sld.value();

	for(var i = 0; i < particles.length; i++){
		particles[i].update(particles);
		particles[i].show();
	}

	// noLoop();
}