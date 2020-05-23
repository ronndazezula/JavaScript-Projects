//Challenge Step 176
var str="Hello, World!"
var n=str.length
alert("The number of characters in \"Hello, World!\" is "+n);

function callLoop1(){
    var digit="";
    var X=1;
    while(X<11) {
        digit+="<br>"+X;
    X++;
    }
    document.getElementById("loop1").innerHTML=digit;
}
var instruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var content="";
var Y;
function callLoop2(){
    for (Y=0;Y<instruments.length;Y++){
        content+=instruments[Y]+"<br>";
    }
    document.getElementById("loop2").innerHTML=content;
}
function arrayFunction(){
    var TV_Show=[];
    TV_Show[0]="Ozark";
    TV_Show[1]="Queen of the South";
    TV_Show[2]="Billions";
    TV_Show[3]="The Walking Dead";
    document.getElementById("array").innerHTML="One binge-worthy television series is "+TV_Show[0]+".";
}
function constantFunction(){
    const musicalInstrument={type:"guitar",brand:"Fender",color:"black",price:"$200"};
    musicalInstrument.brand=("Squier Classic Vibe 70s Stratocaster HSS");
    musicalInstrument.color="maple";
    musicalInstrument.price="$400";
    musicalInstrument.push=('brand new')
    document.getElementById("constant").innerHTML="The cost of a "+musicalInstrument.color+" "+musicalInstrument.brand+" is "+musicalInstrument.price+", "+musicalInstrument.push+".";
}
function letKeywordFunction(){
    var A="nope, apples!";
    document.getElementById("letKeyword").innerHTML=A;
}
    let A="bananas?";{
    document.getElementById("letKeyword").innerHTML=("<br>"+A);
}
function returnFunction(){
    return Math.PI;
}
document.getElementById("returnF").innerHTML=returnFunction();

let car={
    make:"Chevy",
    model:"Tahoe",
    year:"1995",
    color:"black",
    description:function(){
        return "The best car in the world is a "+this.color+" "+this.year+" "+this.make+" "+this.model+", her name is Souxie.";
    }
}
document.getElementById("objectPM").innerHTML=car.description();

var text1="";
var i;
for(i=0; i<20; i++){
    if(i===6){break}
    text1="The number is "+i+"<br>";
}
document.getElementById("breakStmt").innerHTML=text1;

var text2="";
var i;
for(i=0; i<20; i++){
    if(i===6){continue;}
    text2="The number is "+i+"<br>";
}
document.getElementById("contStmt").innerHTML=text2;