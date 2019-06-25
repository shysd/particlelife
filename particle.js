class Particle {
	constructor(type){
		this.type = type;
		this.r = 10;
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(1, 0);
	}

	show(){
		fill(255);

		switch(this.type){			//change colours according to type
			case 1:
				fill(255, 0, 0);
				break;
			case 2:
				fill(0, 0, 255);
				break;
			case 3:
				fill(0, 255, 0);
				break;
			default:
				fill(255, 0, 0);
				break;
		}

		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}

	update(){
		this.pos = p5.Vector.add(this.pos, this.vel);
	}
}