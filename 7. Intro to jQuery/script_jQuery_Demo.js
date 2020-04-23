//Select h1
$("h1").css({
    background: "pink",
    color: "red",
    border: "2px solid purple"
});

//Select all divs and give them a purple background
$("div").css("background", "purple");

//Select the divs with class highlight
$("div.highlight").css("width", "200px");

// Select the div with id third
$("div#third").css("border", "4px solid orange");

//Select the first div only and change the color
$("div:first-of-type").css("color","pink");