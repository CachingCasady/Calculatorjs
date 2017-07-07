var accumulator = "";

function clear() {
	document.getElementById("screen").innerHTML = "0";
	accumulator == "";
}

function key(element) {
	var keySelected = element;
	console.log(keySelected.id);
	alert(keySelected.id);
	// console.log(document.getElementById("/").getAttribute('value'));
}