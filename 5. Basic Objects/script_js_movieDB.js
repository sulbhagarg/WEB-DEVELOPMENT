// copy the code in console.

var movies = [
    {
        title: "Now You See Me",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Maska Bun",
        hasWatched: true,
        rating: 3.5
    }
]

movies.forEach(function(movie){
    console.log(buildString(movie));
})

function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched)
        result+="watched ";
    else   
        result+="not seen ";
    result+="\"" + movie.title + "\" - ";
    result+=movie.rating + " stars";
    return result;
}