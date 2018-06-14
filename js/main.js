$(document).ready(function() {
    $("#beperking-form-extra").hide();

    $("#checkbox-ja").click(function(){
        $("#beperking-form-extra").show();

        $("#form-container").css("height", "2510px");
        $("#tussenscheiding-2").css("margin-top", "300px");
    });

    $("#checkbox-nee").click(function(){
        $("#beperking-form-extra").hide();

        $("#form-container").css("height", "2282px");
        $("#tussenscheiding-2").css("margin-top", "0");
    })
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("bewijsstuk-bestand");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}