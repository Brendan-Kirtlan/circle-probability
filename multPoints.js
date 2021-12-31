class MultPoints{
    show(x, y1, y2){
        strokeWeight(5);
        stroke('red');
        
        point(x, y1);
        point(x, y2);

        stroke('black');
        strokeWeight(1)
    }
}