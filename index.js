// alert("Hello World!");



$(document).ready(function(){
    $("h1").css("color","red");
});



$("h1").addClass("big-title margin-50");



$("h1").text("Good Morning");



$("a").attr("href","https://www.yahoo.com");



$("document").click(function(){
    $("h1").css("color","purple");
});

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({ opacity: .5 });
});

$("button").click(function(){
    $("h1").css("color","purple");
});

$("h1").append("<button></button>");


$("document").click(function(){
    $("h1").css("color","purple");
});




$("h1").innerHTML("<em>big-title</em>");



$("button").text("Never");




document.querySelector("button").style.backgroundColor = "yellow";


document.querySelector("button").style.backgroundColor = "yellow";