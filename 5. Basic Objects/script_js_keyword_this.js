// copy the code to console

var comments= {};

comments.data = ["Good Job!", "BYE", "LOL!!", "LAMAO.."];

comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}

comments.print();