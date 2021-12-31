let diam;
let size = 600;
let padding =  100;
let points = Array(4);
let closepoint = 0;
let randPoint;
let validRange;
let areas = [];
let distances = [];
let total = 0;
let waitTime = 1;
average = 0;
let pause = true;

function setup(){
    points[0] = createVector(padding, size/2);
    points[1] = createVector(size/2, size - padding);
    points[2] = createVector(size - padding, size/2);
    points[3] = createVector(size/2, padding);
    var cnv = createCanvas(size,size);
    diam = new Diamond(points);
    red = new RedPoint(points);
    circ = new Circ(points);
    pom = new PointOnMouse();
    vr = new MultPoints();
    //ln = new LineDown();

    cnv.center();
}

function draw(){
    randPoint = generateRandPoint();
    total++;
    background(255);
    diam.show();
    index = findClosestPoint();
    red.show(index);
    mouseVec = createVector(mouseX, mouseY);

    circ.show(index, randPoint);
    updateArea(circ.getDiameter());
    
    sleep(waitTime);
} 

function ifValid(){
    randX = mouseX;
    randY = mouseY;
    if(randX > size/2){
        minValidY = mouseX - (size/2) + padding;
        maxValidY = -mouseX + (1.5*size) - padding;
    } else{
        minValidY = -mouseX + (size/2) +  padding;
        maxValidY = mouseX + (size/2)- padding;
    }
    if(randY >= minValidY && randY <= maxValidY){
        document.getElementById("pos").innerHTML = "valid";
    }
    else{
        document.getElementById("pos").innerHTML = "not valid";
    }
    validRange = createVector(minValidY,maxValidY);
}

function updateArea(diameter){
    num = (Math.PI * Math.pow((diameter/2), 2));
    areas.push(num);
    sum = areas.reduce(function(a, b) { return a + b; }, 0);
    average = sum / total;
    sum = distances.reduce(function(a, b) { return a + b; }, 0);
    averageDist = sum / total;
    averageDist = Math.round(averageDist * 100) /100;
    average = Math.round(average * 100) /100;
    num = Math.round(num * 100) /100;
    
    text = "Area = " + num + "\tAverage = " + average + "\tTotal = " + total + "   Average Dist: " + averageDist;
    document.getElementById("area").innerHTML = text;

}

function findClosestPoint(){
    closepoint = 0;
    //mousePos = createVector(mouseX, mouseY);
    distance = randPoint.dist(points[0]);
    for(i = 1; i < points.length; i++){
        newDist = randPoint.dist(points[i]);
        if(newDist < distance){
            closepoint = i;
            distance = newDist;
        }
    }
    distances.push(points[closepoint].dist(randPoint));
    return closepoint;
}

function generateRandPoint(){
    valid = false;
    while(!valid){
        randX = Math.random()*(size - 2*padding) + padding;
        randY = Math.random()*(size - 2*padding) + padding;
        if(randX > size/2){
            minValidY = randX - (size/2) + padding;
            maxValidY = -randX + (1.5*size) - padding;
        } else{
            minValidY = -randX + (size/2) +  padding;
            maxValidY = randX + (size/2)- padding;
        }
        if(randY >= minValidY && randY <= maxValidY){
            valid = true;
        }
        //validRange = createVector(minValidY, maxValidY);
    }
    return createVector(randX, randY);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function stop(){
    waitTime = 99999999999999;
}

function cont(){
    waitTime = 0;
}