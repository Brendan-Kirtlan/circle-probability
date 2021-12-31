class Diamond{
    constructor(points){
        this.a = points[0];
        this.b = points[1];
        this.c = points[2];
        this.d = points[3];
    }

    show(){
        stroke(0);
        line(this.a.x,this.a.y,this.b.x,this.b.y);
        line(this.b.x,this.b.y,this.c.x,this.c.y);
        line(this.c.x,this.c.y,this.d.x,this.d.y);
        line(this.a.x,this.a.y,this.d.x,this.d.y);
    }

    geta(){
        return this.a;
    }
}