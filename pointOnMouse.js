class PointOnMouse{
    show(mousePos){
        strokeWeight(5);
        stroke('magenta');
        
        point(mousePos.x, mousePos.y);

        stroke('black');
        strokeWeight(1)
    }
}