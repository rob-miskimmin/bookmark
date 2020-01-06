function reset() {
    $(".faq-a").css("display", "none");
    $(".faq-q h3").html("&dArr;");
};

function featureReset() {
    $(".features-tab").hide();
};
$(document).ready(function() {
    $("#simple").click(function() {
        featureReset();
        $(".features-tab1").show();
        $(this).css("border-bottom", "2px solid red");
        $("#speedy").css("border-bottom", "none");
        $("#easy").css("border-bottom", "none");
    });
    $("#speedy").click(function() {
        featureReset();
        $(".features-tab2").show();
        $(this).css("border-bottom", "2px solid red");
        $("#simple").css("border-bottom", "none");
        $("#easy").css("border-bottom", "none");
    });
    $("#easy").click(function() {
        featureReset();
        $(".features-tab3").show();
        $(this).css("border-bottom", "2px solid red");
        $("#simple").css("border-bottom", "none");
        $("#speedy").css("border-bottom", "none");
    });
    $(".q1").click(function() {
        reset();
        $(".q1-answer").css("display", "initial");
        $(".q1 h3").html("&uArr;");
    });
    $(".q2").click(function() {
        reset();
        $(".q2-answer").css("display", "initial");
        $(".q2 h3").html("&uArr;");
    });
    $(".q3").click(function() {
        reset();
        $(".q3-answer").css("display", "initial");
        $(".q3 h3").html("&uArr;");
    });
    $(".q4").click(function() {
        reset();
        $(".q4-answer").css("display", "initial");
        $(".q4 h3").html("&uArr;");
    });
});