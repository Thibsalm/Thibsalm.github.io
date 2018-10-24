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
	let spans = document.getElementById("rainbow"); //fill with proper code
	let colors = ["red", "orange"];

	for(var i = spans.length - 1; i >= 0; i--)
	{
		if(i <= 3)
		{
			//colors = ["red"]; 
			spans[i].style.color = colors[i];    // fill with proper code
		}
		else
		{
			//colors = ["orange"];
			spans[i].style.color = colors[i];
		}
		
	}

}

