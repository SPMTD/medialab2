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