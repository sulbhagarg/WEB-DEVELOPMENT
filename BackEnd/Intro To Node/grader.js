function average(scores){
    var total=0;
    for(var i=0;i<scores.length;i++){
        total+=scores[i];
    }
    var average=total/scores.length;
    return Math.round(average);
}

var scores = [90, 98, 100, 100, 86, 94, 89];
console.log(average(scores));