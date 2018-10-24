function greet() {
	window.alert("Hello everyone!");
}

function init() {
	document.getElementById("first").src = "icons/car2.png";

	// DOM Task 2 //
	//document.getElementById("container").getElementsByTagName("img")[1].src = "icons/flower2.png";
	let images = document.getElementById("container").getElementsByTagName("img");
	images[1].src = "icons/flower2.png";

	let flower = images[1].cloneNode();
	let cont = document.getElementById("container");
	cont.appendChild(flower);
	flower = flower.cloneNode();
	flower.src = "icons/flower1.png";
	cont.appendChild(flower);

	// DOM Task 4 //
	let image = document.createElement("img");
 
	image.src = "icons/flower2.png";
	let img = document.getElementById("new_element");
 
	img.appendChild(image);

	// DOM Task 5 //
	let spans = document.getElementById("rainbow").getElementsByTagName('span'); //fill with proper code
	let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

	for(var i = spans.length - 1; i >= 0; i--)
	{
		spans[i].style.color = colors[i];    // fill with proper code
	}

	// DOM Task 6 //
	var changeSrc = function(event) {
  		if (event.target.src) 
  		{
  			//console.log(event.target.src);
  			let path = event.target.src.search(/flower\d\.png$/);
    		if(event.target.src.slice(path) === "flower2.png")
    		{
    			event.target.src = "icons/flower1.png";

    		}
    		else
    		{
    			event.target.src = "icons/flower2.png";
    		}

  		}
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);

}

