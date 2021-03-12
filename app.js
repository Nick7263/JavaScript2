const cnv = window.document.getElementById("game_1");// canvas
let cnt = cnv.getContext('2d');// context

let meat_boy_width = cnv.width;
let meat_boy_height= cnv.height;

cnt.fillStyle = 'lime';

cnt.fillRect(10,10,cnv.width-20,cnv.height-20);

cnt.font = "30px Arial";

cnt.fillStyle = 'red';

cnt.fillText("My game",20,50);

for(var i = 0;i<100;i++){
    cnt.moveTo(0,i*10);
    cnt.lineTo(cnv.width,i*10);
    cnt.stroke();
    cnt.moveTo(i*10,0);
    cnt.lineTo(i*10,cnv.height);
    cnt.stroke();
}

