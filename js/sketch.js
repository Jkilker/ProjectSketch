var mySong, amplitude, play;

function preload(){
mySong = loadSound("assets/massiveAttackAngel.mp3")
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    play = false;
    rectMode(CENTER);
    background(0);

    var button = createButton("Play");
    button.center();
    button.addClass("btn");

    button.mousePressed(function(){
        play = true;
        mySong.play();
        button.hide();
    })

   

    noStroke();

    amplitude = new p5.Amplitude();
}

function draw() {
    if(play == true){
        var level = amplitude.getLevel();
        console.log(level);
    
        var vol = map(level, 0, 1, 0, 1000)
        var col = map(level, 0, 1, 0, 255)
    
        background(col);
    
        if(vol > 200){
            fill(col + 10)
            ellipse(width/2, height/1.2, vol + 100);
        }
    
        //BassDrum
        fill(211, 211, 211);
        ellipse(width/2, height/1.2, vol);
    
        fill(90, 90, 90);
        ellipse(width/2, height/1.2, vol/1.2);

    }

    //Snare
    fill(90, 90, 90);
    ellipse(width/4, height/1.8, vol/2);

    //Tom1
    fill(90, 90, 90);
    ellipse(width/2.5, height/4, vol/2.5);

    //Tom2
    fill(90, 90, 90);
    ellipse(width/1.5, height/4, vol/2.5);

    //Tom3
    fill(90, 90, 90);
    ellipse(width/1.3, height/1.8, vol/2.5);
    
    //Cymbal
    fill(col + 10);
    ellipse(width/15, height/10, vol + 100);

    //HiHat
    fill(col + 10);
    ellipse(width/15, height/2, vol/2);
}