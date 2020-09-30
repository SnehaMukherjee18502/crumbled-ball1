class DustBin {

    constructor(x, y){

        //Assign Properties
        this.x = x;
        this.y = y;
        
		this.trashbinWidth = 200;
		this.trashbinHeight = 100;
		this.wallThickness = 20;
		this.angle = 0;	
        
        var static_object = {isStatic:true}

        //Create bodies
		this.bottomBody = Bodies.rectangle(this.x, this.y, this.trashbinWidth, this.wallThickness, static_object);
		this.leftWallBody=Bodies.rectangle(this.x - this.trashbinWidth/2, this.y-this.trashbinHeight/2, this.wallThickness, this.trashbinHeight, static_object)
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		
		this.rightWallBody=Bodies.rectangle(this.x + this.trashbinWidth/2, this.y-this.trashbinHeight/2, this.wallThickness, this.trashbinHeight, static_object)
        Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);
        
        //Add it to world
		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

    }
    display() {

        //L|R|B
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;
        
        //Trash Bin - Left
        push();

        translate(posLeft.x, posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);

        stroke(87, 179, 133);
        fill(87, 179, 133);

        rotate(this.angle);
        rect(0,0,this.wallThickness, this.trashbinHeight);

        pop();

        //Trash Bin - Right
        push();

        translate(posRight.x, posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);

        stroke(87, 179, 133);
        fill(87, 179, 133);

        rotate(-1 * this.angle);
        rect(0, 0, this.wallThickness, this.trashbinHeight);

        pop();

        //Trash Bin - Bottom
        push();

        translate(posBottom.x, posBottom.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        
        stroke(87, 179, 133);
        fill(87, 179, 133);

        rect(0,0,this.trashbinWidth, this.wallThickness);
        pop();

    }

}