class LineDown{
    show(mouseX,mouseY,size){
        line(mouseX,mouseY, mouseX, size, padding);
        
        strokeWeight(5);
        stroke('magenta');
        
        if(mouseX > size/2 && mouseX <= size - padding){
            //top right
            point(mouseX, mouseX - (size/2) + padding)
            //bottom right
            point(mouseX, -mouseX + (1.5*size) - padding)
            
        }
        else if(mouseX <= size/2 && mouseX >= padding){
            //top left
            point(mouseX, -mouseX + (size/2) +  padding)
            //bottom left
            point(mouseX, mouseX + (size/2)- padding)
        }

        stroke('black');
        strokeWeight(1)

    }
}