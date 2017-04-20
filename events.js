var saywhat = document.getElementById("output-target");

var articleItems = document.getElementsByClassName("article-section");
console.log("aticle-section",articleItems);

for (var i = 0; i < articleItems.length; i++){
	articleItems.item(i).addEventListener("click", handleClick);
}

function handleClick (event){
	console.log(event);
	var elementText = event.target.innerHTML;
	saywhat.innerHTML = "You Clicked on " + elementText;
}
var header = document.getElementById("page-header");

function handleHeaderMouseOver(event){
	saywhat.innerHTML = "You moved your mouse over the header;";
}
function handleHeaderMouseOut(event){
	saywhat.innerHTML = "You left me!";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

var inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event){
	console.log("event", event);
	saywhat.innerHTML = event.target.value;
});

var obiwan = document.getElementById("guinea-pig");

document.getElementById("add-color")
	.addEventListener("click", function(){
		obiwan.classList.toggle("blue");
	});

document.getElementById("make-large")
	.addEventListener("click", function(){
		obiwan.classList.toggle("large");
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		obiwan.classList.toggle("bordered");
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		obiwan.classList.toggle("rounded");
	});	


