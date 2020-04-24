var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
function changebackground() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
css.textContent=body.style.background + ";";}
var button=document.querySelector(".Random");
button.addEventListener("click",function (){
var array1=[0,0,0];
var array2=[0,0,0];	
for(var i=0;i<3;i++)
{
	array1[i]=Math.floor((Math.random() * 255) + 1);
	array1[i]=Math.floor((Math.random() * 255) + 1);
}
color1.value=rgb(array1[0],array1[1],array1[2]);
color2.value=rgb(array1[0],array1[1],array1[2]);
changebackground();
});
changebackground();
function setGradient() {
	changebackground();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);