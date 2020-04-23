// The string has to be yes or yeah

// var answer = prompt("are we there yet?");

// while(answer!=="yes" && answer!=="yeah"){
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT! :P");

//VERSIN 2
// To check if the string contains yes!

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1){
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT! :P");