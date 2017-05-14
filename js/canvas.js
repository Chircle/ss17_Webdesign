/**
 * Created by Mechu on 27.04.2017.
 *
 *
 * Mechus Reminder:
 * Mit Shift + F10 kann man den html code ausführn
 */
window.onload=function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    //Wiese
    ctx.beginPath();
    ctx.moveTo(0, 800);
    ctx.lineTo(1000, 800);
    ctx.lineTo(1000, 650);
    ctx.lineTo(0, 650);
    ctx.lineTo(0, 800);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#278d23";
    ctx.fillStyle = "#278d23";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Baum links - Stamm
    ctx.beginPath();
    ctx.moveTo(60, 750);
    ctx.lineTo(90, 750);
    ctx.lineTo(90, 450);
    ctx.lineTo(60, 450);
    ctx.lineTo(60, 750);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#5e2e0e";
    ctx.fillStyle = "#5e2e0e";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();


    //Baum links - Krone
    ctx.beginPath();
    ctx.moveTo(20, 450);
    ctx.bezierCurveTo(20, 500, 200, 500, 200, 450);
    ctx.bezierCurveTo(250, 400, 300, 500, 260, 300);
    ctx.bezierCurveTo(250, 275, 160, 200, 140, 200);
    ctx.bezierCurveTo(10, 275, 10, 275, 20, 430);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#278d23";
    ctx.fillStyle = "#278d23";
    ctx.fill();
    ctx.closePath();

	
    //Blume
  //  ctx.beginPath();
  //  ctx.moveTo(120, 720);
  //  ctx.bezierCurveTo(120, 740, 130, 740, 130, 720);
  //  ctx.bezierCurveTo(140, 720, 140, 700, 130, 710);
  //  ctx.bezierCurveTo(110, 710, 110, 720, 120, 720);
  //  ctx.lineWidth = 2;
  //  ctx.strokeStyle = "#ff6666";
  //  ctx.fillStyle = "#ff6666";
  //  ctx.fill();
  //  ctx.closePath();

  //  ctx.beginPath();
  //  ctx.arc(125, 715, 3, 0, 2 * Math.PI);
  //  ctx.fillStyle = '#ffff66';
  //  ctx.fill();
  //  ctx.strokeStyle = '#ffff66';
  //  ctx.stroke();
	
//Blume 1 orange
ctx.beginPath();
ctx.strokeStyle='orange';
ctx.fillStyle='orange';
ctx.arc(125, 715, 8, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='orange';
ctx.fillStyle='orange';
ctx.arc(133, 725, 8, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='orange';
ctx.fillStyle='orange';
ctx.arc(140, 715, 8, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(133, 719, 4, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke(); 

//Blume 2 pink

ctx.beginPath();
ctx.strokeStyle='#be2c54';
ctx.fillStyle='#be2c54';
ctx.arc(200,720,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#be2c54';
ctx.fillStyle='#be2c54';
ctx.arc(208,730,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#be2c54';
ctx.fillStyle='#be2c54';
ctx.arc(215,720,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(208,724,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();

//Blume 3 blau

ctx.beginPath();
ctx.strokeStyle='#0094ff';
ctx.fillStyle='#0094ff';
ctx.arc(100,720,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#0094ff';
ctx.fillStyle='#0094ff';
ctx.arc(104,730,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#0094ff';
ctx.fillStyle='#0094ff';
ctx.arc(107,720,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(104,724,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();

//Blume 4 rot 

ctx.beginPath();
ctx.strokeStyle='#FF0000';
ctx.fillStyle='#FF0000';
ctx.arc(150,720,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='##FF0000';
ctx.fillStyle='#FF0000';
ctx.arc(154,730,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#FF0000';
ctx.fillStyle='#FF0000';
ctx.arc(157,720,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(154,724,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();


//Blume 5 gelb

ctx.beginPath();
ctx.strokeStyle='#e6eb10';
ctx.fillStyle='#e6eb10';
ctx.arc(150,770,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#e6eb10';
ctx.fillStyle='#e6eb10';
ctx.arc(154,780,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#e6eb10';
ctx.fillStyle='#e6eb10';
ctx.arc(157,770,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(154,774,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();

//Blume 6 rosa 

ctx.beginPath();
ctx.strokeStyle='#dda990';
ctx.fillStyle='#dda990';
ctx.arc(150,750,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#dda990';
ctx.fillStyle='#dda990';
ctx.arc(154,760,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#dda990';
ctx.fillStyle='#dda990';
ctx.arc(157,750,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(154,748,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();

//Blume 7 hellblau

ctx.beginPath();
ctx.strokeStyle='#52859f';
ctx.fillStyle='#52859f';
ctx.arc(130,740,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#52859f';
ctx.fillStyle='#52859f';
ctx.arc(134,750,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#52859f';
ctx.fillStyle='#52859f';
ctx.arc(137,740,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(134,744,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();

//Blume 8 orange dunkel

ctx.beginPath();
ctx.strokeStyle='#f0650e';
ctx.fillStyle='#f0650e';
ctx.arc(210,750,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#f0650e';
ctx.fillStyle='#f0650e';
ctx.arc(218,760,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#f0650e';
ctx.fillStyle='#f0650e';
ctx.arc(225,750,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(218,754,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();

//Blume 9 blau

ctx.beginPath();
ctx.strokeStyle='#be2c54';
ctx.fillStyle='#be2c54';
ctx.arc(100,770,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle='#be2c54';
ctx.fillStyle='#be2c54';
ctx.arc(104,780,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='#be2c54';
ctx.fillStyle='#be2c54';
ctx.arc(107,770,8,0,2* Math.PI);
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle='black';
ctx.fillStyle='black';
ctx.arc(104,774,4,0,2* Math.PI);
ctx.fill();
ctx.stroke();



    // Wolke
    ctx.beginPath();
    ctx.moveTo(170, 80);
    ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
    ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
    ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
    ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
    ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
    ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
    ctx.closePath();
    ctx.fillStyle = '#8ED6FF';
    ctx.fill();
    ctx.strokeStyle = '#8ED6FF';
    ctx.stroke();


    // Sonne
    ctx.beginPath();
    ctx.arc(750, 70, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffff66';
    ctx.fill();
    ctx.strokeStyle = '#ffff66';
    ctx.stroke();

    //Haus - front
    ctx.beginPath();
    ctx.moveTo(350, 750);
    ctx.lineTo(650, 750);
    ctx.lineTo(650, 500);
    ctx.lineTo(350, 500);
    ctx.lineTo(350, 750);
    ctx.strokeStyle = "#e9d6be";
    ctx.fillStyle = "#e9d6be";
    ctx.fill();
    ctx.closePath();

    //Haus - Seite
    ctx.beginPath();
    ctx.moveTo(650, 750);
    ctx.lineTo(800, 675);
    ctx.lineTo(800, 425);
    ctx.lineTo(650, 500);
    ctx.lineTo(650, 750);
    ctx.strokeStyle = "#e3caab";
    ctx.fillStyle = "#e3caab";
    ctx.fill();
    ctx.closePath();

    //Dach - front
    ctx.beginPath();
    ctx.moveTo(350, 500);
    ctx.lineTo(650, 500);
    ctx.lineTo(500, 350);
    ctx.lineTo(350, 500);
    ctx.strokeStyle = "#c86d26";
    ctx.fillStyle = "#c86d26";
    ctx.fill();
    ctx.closePath();

    //Dach - Seite
    ctx.beginPath();
    ctx.moveTo(650, 500);
    ctx.lineTo(800, 425);
    ctx.lineTo(650, 275);
    ctx.lineTo(500, 350);
    ctx.lineTo(650, 500);
    ctx.strokeStyle = "#b36122";
    ctx.fillStyle = "#b36122";
    ctx.fill();
    ctx.closePath();

    //Fenster
    ctx.beginPath();
    ctx.moveTo(550, 550);
    ctx.lineTo(600, 550);
    ctx.lineTo(600, 600);
    ctx.lineTo(550, 600);
    ctx.lineTo(550, 550);
    ctx.strokeStyle = "#247aa3";
    ctx.fillStyle = "#247aa3";
    ctx.fill();
    ctx.closePath();

    //Tuer
    ctx.beginPath();
    ctx.moveTo(425, 750);
    ctx.lineTo(475, 750);
    ctx.lineTo(475, 650);
    ctx.lineTo(425, 650);
    ctx.lineTo(425, 750);
    ctx.strokeStyle = "#b36122";
    ctx.fillStyle = "#b36122";
    ctx.fill();
    ctx.closePath();

    //Baum rechts - Stamm
    ctx.beginPath();
    ctx.moveTo(820, 750);
    ctx.lineTo(860, 750);
    ctx.lineTo(850, 450);
    ctx.lineTo(850, 450);
    ctx.lineTo(820, 750);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#5e2e0e";
    ctx.fillStyle = "#5e2e0e";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Baum rechts - Krone
    ctx.beginPath();
    ctx.arc(850,375,140,0 ,2*Math.PI);
    ctx.fillStyle = '#278d23';
    ctx.fill();
    ctx.strokeStyle = '#278d23';
    ctx.stroke();
}
