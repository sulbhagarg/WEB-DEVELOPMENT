// If number is even or not
function isEven(num){
    return num%2 === 0;
}

var num = prompt("Enter the number!");
var ans = isEven(Number(num));
if(ans)
    alert("The number is Even!");
else
    alert("The number is not Even!");

// Calcultaing the factorial of a number
function factorial(num){
    var res=1;
    for(var i=2;i<=num;i++)
        res*=i;
    return res;
}

var num = prompt("Enter the number!");
var ans = factorial(Number(num));

alert("The factorial of the number is " + ans);

// kebab to snake
function kebabToSnake(str){
    //replace all '-' with "_"'s
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

var str = prompt("Enter the string!");
var ans = kebabToSnake(str);
alert("The new string is " + ans);

//Higher Order Functions
function sing(){
    console.log("Twinklw Twinkle....");
    console.log("How I wonder....");
}

var num = setInterval(sing, 1000);
clearInterval(num);

//anonymous function
setInterval(function(){
    console.log("I am an anonymous function :P");
console.log("THIS IS AWESONE XD!");
}, 2000);