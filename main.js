var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=100;
height=90;

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";

function add() {
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;

    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}


function uploadbackground(){
ctx.drawImage(background_imagetag,0 ,0 ,canvas.width , canvas.height);
}


function uploadrover(){

    ctx.drawImage(rover_imagetag,rover_x ,rover_y ,width , height);

}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
   var key=e.keyCode;
  if(key=='38'){
     up();
   }
 if(key=='40'){
     down();
    }
   
 if(key=='37'){
     left();
        }

 if(key=='39'){
    right();
            }
        }

function up(){
    if(rover_y>=0){
        console.log("up");
        rover_y=rover_y-10;
        uploadbackground(); 
        uploadrover();
    }
}
  

function down(){
    if(rover_y<=500){
        console.log("down");
        rover_y=rover_y+10;
        uploadbackground(); 
        uploadrover();
    }
}

    function left(){
        if(rover_x>=0){
            console.log("left");
            rover_x=rover_x-10;
            uploadbackground(); 
            uploadrover();
    }
}
    function right(){
        if(rover_x<=700){
            console.log("right");
            rover_x=rover_x+10;
            uploadbackground(); 
            uploadrover();
        }
    }
