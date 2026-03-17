/*
Name: Crystal Michelle Boswell 
Date: 03/16/2026
File: script.js
Description: Demonstrates jQuery selectors and events.
*/

$(function(){


// CLICK EVENT - Button hides itself
$("#clickBtn").click(function(){
    $(this).text("Button Clicked!").addClass("highlight");
});

// DOUBLE CLICK EVENT - Paragraph changes color
$("#textParagraph").dblclick(function(){
    $(this).css("color","blue");
});

// HOVER EVENT - Box changes background color
$("#hoverBox").hover(
    function(){
        $(this).css("background-color","orange");
    },
    function(){
        $(this).css("background-color","lightgray");
    }
);

// KEYPRESS EVENT - Input updates text dynamically
$("#keyInput").keyup(function(){
    $("#textParagraph").text("You typed: " + $(this).val());
});


});
