//click
$("h1").click(function(){
    alert("h1 clicked");
});

$("button").click(function(){
    $(this).css("background", "pink");
    var text = $(this).text();
    console.log("You Clicked " + text);
});

//keypress
//keycode of enter is 13
$("input").keypress(function(event){
    if(event.which === 13){
        $(this).val("");
        alert("YOU HIT ENTER!");
    }
    console.log(event);
});

//on
//similar to addEventListener
$("h1").on("click", function(){
    $(this).css("color", "purple");
});

$("input").on("keypress", function(){
    alert("KEY PRESSED!");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
})