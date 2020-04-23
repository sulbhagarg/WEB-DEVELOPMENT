//check console
//text
console.log($("h1").text());
console.log($("ul").text());
console.log($("h1").text("New Text"));
console.log($("li").text());
console.log($("li").text("lalalala"));

//html corresponds to innerHtml
$("ul").html("<li>I guess, I hacked your UL! XD</li><li>I guess, I hacked your UL! XD</li>");
$('li').html("<a href='http://www.google.com'>CLICK ME TO GOOGLE!!</a>");
$('li').text("<a href='http://www.google.com'>CLICK ME TO GOOGLE!!</a>");

//attr
//just playing with images :P
$('img').css("width", "300px");
$("img:first-of-type").attr("src","https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg");
$("img").last().attr("src","https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg");
$("img").attr("src","https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg");
// $("input").attr("type", "color");

//val
$("input").val("WOHOOOO!"); //can be used to set the input to some default like an empty string once th work is over!

//something to with manipulating classes!
$("h1").addClass("correct");
$("h1").removeClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").addClass("correct");
$("li").toggleClass("correct");
$("li").first().toggleClass("done");
$("li").toggleClass("done");