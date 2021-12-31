class Circ{
    constructor(points){
        this.points = points;
        this.diameter = 0;
    }

    show(index,randPoint){
        fill(204, 101, 192, 15);
        stroke(127, 63, 120);
        strokeWeight(2);
        point(randPoint.x,randPoint.y);
        this.diameter = randPoint.dist(points[index])*2;
        ellipse(randPoint.x,randPoint.y,this.diameter,this.diameter);


        stroke('black');
        strokeWeight(1);
    }

    getDiameter(){
        return this.diameter;
    }
}