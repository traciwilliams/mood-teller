

function showMood() {
	//alert("Show mood working?");
	//declaring variables for my form and getting the values
	var name = document.getElementById("name").value;
	var mood = document.getElementById("mood").value;
	//an if statement, if no name or mood entered 
	if(!name || !mood) {
		alert("please enter all fields") //alert for user
		return false; //will prevent function from happening
	};

	var face; //declaring a variable

	//if statements to add expressions
	if (mood === "happy") {
		face = ":)";
		
	}
	else if (mood === "sad") {
		face = ":(";
	}
	else {
		face = "-_-";
	}

	//putting all variables together
	var moodString = name + " is " + mood + " today " + face;
	//targeting the holder where variables will be displayed
	var holder = document.getElementById("holder");
	//holder takes the moodString's html and displays it on the page
	holder.innerHTML = moodString;
}

function clearMood() {
	var holder = document.getElementById("holder");
	//holder takes the moodString's html and displays it on the page
	holder.innerHTML = ""; //clears the holder div
	holder.reset; //resets holder
	
}
