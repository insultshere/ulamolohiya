//input all the things
const adobo = new Set(["Pork","Soy sauce","Bay leaf","Vinegar"]);
const bistek = new Set(["Beef","Soy sauce","Calamansi","Onion"]);
const porksteak = new Set(["Pork","Soy sauce", "Calamansi","Onion"]);
const salpicao = new Set(["Beef","Garlic","Soy sauce","Oyster sauce"])

const bulalo = new Set(["Beef","Corn","Cabbage","Peppercorn"]);
const pesa = new Set(["Fish","Pechay","Ginger","Cabbage"]);
const paksiw = new Set(["Fish", "Vinegar", "Ginger","Garlic"]);
const sinigang = new Set(["Pork","Tamarind","Tomato","Gabi"]);
const tinola = new Set(["Chicken","Papaya","Ginger","Malunggay"]);
const nilaga = new Set(["Beef", "Pechay", "Cabbage","Peppercorn"])

const caldereta = new Set(["Beef","Liver spread", "Tomato sauce","Potato"]);
const mechado = new Set(["Beef","Calamansi","Tomato sauce","Potato"]);
const afritada = new Set(["Chicken","Bell pepper","Tomato sauce","Potato"]);
const menudo = new Set(["Pork","Bell pepper", "Tomato sauce","Potato"]);
const asado = new Set(["Pork","Soy sauce","Tomato sauce","Sugar"]);
const sarciado = new Set(["Fish", "Tomato", "Onion","Egg"])
const pochero = new Set(["Beef", "Saba", "Tomato sauce","Cabbage"])

const ginataan = new Set(["Squash","Coconut milk","Green bean","Ginger"]);
const bicolexpress = new Set(["Pork","Coconut milk","Chili","Bagoong"]);
const laing = new Set(["Taro","Coconut milk","Chili","Bagoong"]);
const picadillo = new Set(["Beef", "Tomato", "Potato","Carrot"])
const bopis = new Set(["Pork", "Carrot", "Chili","Vinegar"])
const pinakbet = new Set(["Bagoong", "Green bean", "Squash","Eggplant"])

const dinuguan = new Set(["Pork", "Blood", "Chili","Vinegar"]);
const karekare = new Set(["Pork", "Peanut", "Pechay","Eggplant"])
const kinilaw = new Set(["Fish", "Vinegar", "Calamansi","Ginger"]);
const binagoongan = new Set(["Pork","Bagoong","Tomato","Vinegar"]);
const dinakdakan = new Set(["Pork","Vinegar","Chili","Mayonnaise"]);
const igado = new Set(["Pork","Vinegar","Bell pepper","Green pea"]);

const foods = [
	["adobo",adobo],
	["bistek",bistek],
	["pork steak",porksteak],
	["sinigang",sinigang],
	["tinola",tinola],
	["caldereta",caldereta],
	["mechado",mechado],
	["afritada",afritada],
	["menudo",menudo],
	["asado", asado],
	["bulalo", bulalo],
	["pesa", pesa],
	["ginataan", ginataan],
	["bicol express", bicolexpress],
	["laing", laing],
	["dinuguan", dinuguan],
	["paksiw", paksiw],
	["kinilaw", kinilaw],
	["sarciado", sarciado],
	["kare-kare", karekare],
	["nilaga",nilaga],
	["salpicao",salpicao],
	["binagoongan",binagoongan],
	["pochero", pochero],
	["picadillo", picadillo],
	["bopis",bopis],
	["pinakbet",pinakbet],
	["dinakdakan",dinakdakan],
	["igado",igado]
];
foods.sort()
const trunc = foods.flatMap((x) => (x)[0]);

let number = Math.floor(Math.random() * (foods.length))
let chosenanswer = foods[number][0];
let chosenfood = foods[number][1];
let color = "red";
let curlist = "";
let guess = 7;

let curfoodid;
let curingrid;
let index=0;
let redo=false;
function input(ans) {
	document.getElementById("demo").innerHTML = "&nbsp;";
	ans = ans.toLowerCase();
	if(redo){
		number = Math.floor(Math.random() * (foods.length))
		chosenanswer = foods[number][0];
		chosenfood = foods[number][1];
		color = "red";
		curlist = "";
		index=0;
		for (let A=0;A<35;A++){
			curfoodid="food"+A;
			document.getElementById(curfoodid).innerHTML = "&nbsp;<br>";
			document.getElementById(curfoodid).style.backgroundColor = "#FFFFFF";
			document.getElementById(curfoodid).style.outlineColor = "#DDDDDD";
		}
		redo=false;
		guess=7;
	}
	if(trunc.indexOf(ans)==-1) {
		document.getElementById("demo").innerHTML = "<b>Not a real food!</b>";
	}else{
		let curfood = foods[trunc.indexOf(ans)][1];
			
		curfoodid="food"+index;
		index++
		guess--;
		document.getElementById(curfoodid).innerHTML = ans;
		document.getElementById(curfoodid).style.backgroundColor = "#DDDDDD";
		
		curfood.forEach(function(value){
			color = "LightCoral";
			if(chosenfood.has(value)){
				color = "LightGreen";
			}
			curingrid="food"+index;
			index++
			document.getElementById(curingrid).style.backgroundColor = color;
			document.getElementById(curingrid).style.outlineColor = color;
			document.getElementById(curingrid).innerHTML = value;
		})
	}
		if (ans == chosenanswer) {
		document.getElementById("demo").innerHTML = "<span style='color:green'>Stellarific! Let's try again!<br><i>You did it in "+(7-guess)+" tries</span>";
		redo=true;
			} 
		if (!(redo) & (guess == 0)) {
			document.getElementById("demo").innerHTML = "<span style='color:red'>Oh my, you lost... <br><i>It was <b>"+chosenanswer+"</b>.</i>";
			redo=true;
		}
	document.getElementById("answer").value = "";
}

var inputenter = document.getElementById("answer");
inputenter.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("answerbutton").click();
  }
});

function readylist() {
	let curam="";
	trunc.forEach(transcribe);
	function transcribe(value,index){
	  	curam += "("+(index+1)+") "
		curam += value;
		curam += "<br>";
	}
	return curam
}
let c = readylist()
document.getElementById("food").innerHTML = c;

function initlayout() {
	let curam="";
	let curid="";
	let curidingr="";
	let ind=0;
	for (let i = 0; i < 7; i++) {
		curid = "food"+i;
		curam+="<div id='container'>"
		for (let j = 0; j < 5; j++) {
			curidingr= "food"+(ind);
			ind++
			curam+="<div class='foodholder' id=\'"+curidingr+"\'>&nbsp;"
			curam+="</div>"
		}
		curam+="</div></div>"
		
	}
	return curam
}



c = initlayout()
document.getElementById("answerbox").innerHTML = c;

let on=true;

function openinstructions() {
	document.getElementById("instructions").show()
}
function openHelp() {
	document.getElementById("information").show()
}

document.addEventListener("mousedown", function (event) {
	document.getElementById("instructions").close()
	document.getElementById("information").close()
})

let instbutton = document.getElementById("openInstructions");
instbutton.addEventListener("mouseover", function () {
  instbutton.style.backgroundColor = "#EEEEEE";
});

instbutton.addEventListener("mouseout", function () {
  instbutton.style.backgroundColor = "#DDDDDD";
});

const instbutton2 = document.getElementById("openHelp");
instbutton2.addEventListener("mouseover", function () {
  instbutton2.style.backgroundColor = "#EEEEEE";
});

instbutton2.addEventListener("mouseout", function () {
  instbutton2.style.backgroundColor = "#DDDDDD";
});

const instbutton3 = document.getElementById("answerbutton");
instbutton3.addEventListener("mouseover", function () {
  instbutton3.style.backgroundColor = "#D6EAD6";
});

instbutton3.addEventListener("mouseout", function () {
  instbutton3.style.backgroundColor = "#E6FAE6";
});