function setup(){
	createCanvas(1280, 720);
	particles = new Array(450);
	for(var i = 0; i < particles.length; i++){
		particles[i] = new Particle();
	}
}

function draw(){
	// frameRate(1);
	background(50);
	noStroke();
	for(var i = 0; i < particles.length; i++){
		particles[i].show();
	}


	var criticaldist = 150;
	for(var i = 0; i < particles.length; i++){
		for(var j = 0; j < particles.length; j++){
			if(i != j){
				let dist = particles[i].pos.dist(particles[j].pos);

				if(dist < criticaldist){
					particles[i].update(particles[j]);
				}
			}
		}
	}

	// noLoop();
}