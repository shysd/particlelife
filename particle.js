class Particle {
	constructor(vel){
		this.type = random([1, 2, 3]);
		this.r = 10;
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(0.5, 0);
		this.nx = random(1, 100);
		this.speed = 0.2;
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
				fill(0, 0, 0);
				break;
		}

		ellipse(this.pos.x, this.pos.y, this.r, this.r);

		if(this.pos.x > width - this.r) this.pos.x = width - this.r;
		if(this.pos.y > height - this.r) this.pos.y = height - this.r;
		if(this.pos.x < this.r) this.pos.x = 0 + this.r;
		if(this.pos.y < this.r) this.pos.y = 0 + this.r;
	}


	update(neighbour){
		// this.nx++;
		// this.pos = this.pos.add(p5.Vector.mult(p5.Vector.fromAngle(degrees(noise(this.nx))), 2));
		if(p5.Vector.dist(this.pos, neighbour.pos) < 2*this.r){
			this.repel(neighbour, 0);
			return;
		}


		switch(neighbour.type){
			case 1:
				switch(this.type){
					case 1:
						this.attract(neighbour, 0.5*this.speed);
					case 2:
						this.repel(neighbour, this.speed);
					case 3:
						this.repel(neighbour, this.speed);
				}

			case 2:
				switch(this.type){
					case 1:
						this.repel(neighbour, this.speed);
					case 2:
						this.attract(neighbour, 0.5*this.speed);
					case 3:
						this.repel(neighbour, this.speed);
				}

			case 3:
				switch(this.type){
					case 1:
						this.repel(neighbour, this.speed);
					case 2:
						this.repel(neighbour, this.speed);
					case 3:
						this.attract(neighbour, 0.5*this.speed);
				}
		}
	}

	attract(neighbour, speed){
		var velc = p5.Vector.sub(neighbour.pos, this.pos);
		velc.normalize();
		velc.mult(speed);
		this.pos.add(velc);
	}

	repel(neighbour, speed){
		var velc = p5.Vector.sub(this.pos, neighbour.pos);
		velc.normalize();
		velc.mult(speed);
		this.pos.add(velc);
	}
}