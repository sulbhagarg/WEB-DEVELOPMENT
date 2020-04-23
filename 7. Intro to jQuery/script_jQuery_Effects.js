//fade out
$("button").on('click', function(){
    // $('div').fadeOut(1000, function(){
    //     // $(this).remove();
    // });
    $('div').fadeToggle(1000);
});

//slideDown
$("button").on('click', function(){
    // $('div').slideDown();
    $('div').slideToggle(1000, function(){
        console.log("SLIDE IS DONE");
        $(this).remove();
    });
});