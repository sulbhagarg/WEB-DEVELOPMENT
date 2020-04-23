//copy the code to console

var obj = {
    name: "Chuck",
    age: 20,
    isCool: true,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x+y;
    }
};

obj;

obj.add(10,5);

var dogSpace = {};
dogSpace.speak = function() {
    return "WOOF!";
}

var catSpace = {};
catSpace.speak = function() {
    return "MEOW!";
}

dogSpace.speak();
catSpace.speak();

// function speak(){
//     return "WOOF!";
// }

// function speak(){
//     return "MEOW!";
// }