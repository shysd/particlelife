class Particle {
	constructor() {
		this.r = 8;
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(0, 0);
		this.speed = 7;
		this.N = 0;	//number of neighbours
	}

	show() {
		if (this.N < 2) fill(0, 200, 0, 200);
		else if (this.N < 3) fill(64, 128, 64, 200);
		else if (this.N < 5) fill(64, 64, 200, 200);
		else fill(250, 64, 64, 200);

		ellipse(this.pos.x, this.pos.y, this.r, this.r);

		if (this.pos.x > width - this.r) this.pos.x = this.r;
		if (this.pos.y > height - this.r) this.pos.y = this.r;
		if (this.pos.x < this.r) this.pos.x = width - this.r;
		if (this.pos.y < this.r) this.pos.y = height - this.r;
	}


	update(surrounding) {
		var neighbours = [];
		for (var particle of surrounding) {
			var distn = dist(particle.pos.x, particle.pos.y, this.pos.x, this.pos.y);
			if (distn < cr) {
				neighbours.push(particle);
			}
		}

		this.N = neighbours.length;
		var Nleft = 0,
			Nright = 0;
		for (var particle of neighbours) {
			if (particle.pos.x < this.pos.x) Nleft++;
			else Nright++;
		}
		var p = this.vel.heading();
		// d(phi)/dt = alpha = beta*N*sign(Nr - Nl)
		p += a + b * this.N * (Nright > Nleft ? 1 : -1);
		this.vel = (p5.Vector.fromAngle(p));
		this.vel.mult(this.speed);
		this.pos.add(this.vel);

	}
}