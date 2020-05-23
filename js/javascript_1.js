alert("JS load test");

//Assignment Step 203
function weatherFunction(){
   var weatherOutput;
   var weather=document.getElementById("input").value;
   var weatherString=" is great weather!";
   switch(weather){
       case "Rainy":
           weatherOutput="Rainy"+weatherString;
        break;
        case "Overcast":
            weatherOutput="Overcast"+weatherString;
        break;
        case "Foggy":
            weatherOutput="Foggy"+weatherString;
        break;
        case "Hot":
            weatherOutput="Hot"+weatherString;
        break;
        case "Sunny":
            weatherOutput="Sunny"+weatherString;
        break;
        case "Stormy":
            weatherOutput="Stormy"+weatherString;
        break;
        default:
        weatherOutput="Please enter a choice exactly as it is written on the list.";
    };
    document.getElementById("output").innerHTML=""+weatherOutput;
}
//Assignment Step 212
function alert1Function (){
    var A=document.getElementsByClassName("alert1");
    A[0].innerHTML="Yep, this text changed!";
}
//Assignment Steps 214-215
var sun=new Image();
var moon=new Image();
var earth=new Image();
function init() {
    sun.src="./images/sun.png";
    moon.src="./images/moon.png";
    earth.src="./images/earth.png";
    window.requestAnimationFrame(drawSolar);
};
function drawSolar(){
    var ctx=document.getElementById("canvasSolar").getContext("2d");
    ctx.globalCompositeOperation="destination-over";
    ctx.clearRect(0,0,300,300);
    ctx.fillStyle="rgba(0,0,0,0.4)";
    ctx.strokeStyle="rgba(0,153,255,0.4)";
    ctx.save();
    ctx.translate(150,150);
// Earth
    var time=new Date();
    ctx.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(105,0);
    ctx.fillRect(0,-12,40,24);
    ctx.drawImage(earth,-12,-12);
// Moon
    ctx.save();
    ctx.rotate(((2*Math.PI)/6)*time.getSeconds()+((2*Math.PI)/6000)*time.getMilliseconds());
    ctx.translate(0,28.5);
    ctx.drawImage(moon,-3.5,-3.5);
    ctx.restore();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(150,150,105,0,Math.PI*2,false);
    ctx.stroke();
    ctx.drawImage(sun,0,0,300,300);
    window.requestAnimationFrame(drawSolar);
}
init();
//Challenge Step 216
var canvas=document.getElementById("canvasGradient");
var ctx=canvas.getContext("2d");
var gradient=ctx.createLinearGradient(20,0,220,0);
gradient.addColorStop(0,"green");
gradient.addColorStop(0.5,"cyan");
gradient.addColorStop(1,"green");
ctx.fillStyle=gradient;
ctx.fillRect(20, 20, 200, 100);
