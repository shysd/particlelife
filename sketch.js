function setup(){
	createCanvas(1280, 720);
	particles = new Array(250);
	for(var i = 0; i < particles.length; i++){
		particles[i] = new Particle();
	}
}

function draw(){
	// frameRate(1);
	background(50);
	stroke(50);
	for(var i = 0; i < particles.length; i++){
		particles[i].show();
	}


	var criticaldist = 50;
	for(var i = 0; i < particles.length; i++){
		for(var j = 0; j < particles.length; j++){
			if(i != j){
				let dist = particles[i].pos.dist(particles[j].pos);
				if(particles[i].type == particles[j].type && dist < criticaldist){
					particles[i].attract(particles[j]);
				}
				else if(particles[i].type != particles[j].type && dist < criticaldist){
					particles[i].repel(particles[j]);
				}
			}
		}
	}

	// noLoop();
}