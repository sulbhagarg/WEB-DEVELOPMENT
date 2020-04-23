function myForEach(arr, func){
    //loop through arrau
    for(var i=0;i<arr.length;i++){
        //call func for each item in array
        func(arr[i]);
    }
}

var colors = ["red", "green", "blue"];

myForEach(colors, function(color){
    console.log(color);
});

Array.prototype.myForEach = function(func){
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
}

var friends = ["Monica", "Chandler" ,"Ross", "Rachel", "Joey", "Phoebe"];

friends.myForEach(function(name){
    console.log("I love " + name);
})