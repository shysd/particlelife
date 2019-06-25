class Particle {
	constructor(vel){
		this.type = random([1, 2, 3]);
		this.r = 10;
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(0.5, 0);
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

		if(this.pos.x > width - this.r) this.pos.x = width - this.r;
		if(this.pos.y > height - this.r) this.pos.y = height - this.r;
		if(this.pos.x < this.r) this.pos.x = 0 + this.r;
		if(this.pos.y < this.r) this.pos.y = 0 + this.r;
	}


	update(){
		// this.pos = this.pos.add(p5.Vector.mult(p5.Vector.fromAngle(degrees(random(0, 360))), 5));
	}

	attract(neighbour){
		var velc = p5.Vector.sub(neighbour.pos, this.pos);
		velc.normalize();
		this.pos.add(velc);
	}

	repel(neighbour){
		var velc = p5.Vector.sub(this.pos, neighbour.pos);
		velc.normalize();
		this.pos.add(velc);
	}
}