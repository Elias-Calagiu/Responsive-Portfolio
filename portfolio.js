$(document).ready(function() {
    $("#tankard-button").click(function(event){
        event.preventDefault();
        console.log("clicked")
        var theFullTankardLink = $("<a href target=_blank>").addClass("full-tankard");
        theFullTankardLink.attr("href", "https://seagda.github.io/the-full-tankard/");
        console.log(theFullTankardLink);
    });
    });