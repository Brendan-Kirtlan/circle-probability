class RedPoint{
    constructor(points){
        this.points = points;
    }

    show(i){
        strokeWeight(10);
        stroke('red');
        point(this.points[i].x, this.points[i].y);
        stroke('black');
        strokeWeight(1)
    }
}