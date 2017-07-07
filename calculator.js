var accumulator = "";

function clear() {
	document.getElementById("screen").innerHTML = "0";
	accumulator == "";
}

function key(element) {
	var keySelected = element;
	accumulator += keySelected.id;

	if (keySelected.id == "CLR") {
		accumulator = "";
		document.getElementById("screenTotal").innerHTML = accumulator;
		alert("merp");
	}
	// console.log(document.getElementById("/").getAttribute('value'));
}