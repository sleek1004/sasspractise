$(document).ready(() => {


    /// all jquery codes goes in here

    //js

    // $('.dormant').html("This is the dormant class");

    //es6
    // $('.dormant').html(`This is the dormant class`);
 
    // //css method
    // $('.dormant').css("color", "green");

    //click method
    // $('.clickMe').click(() => {
    //     //what happens
    //     $('.dormant').css("font-size", "50px");

    // });

    //value method

    // $('#clickMe').click(() => {

    //     let num = $('.num').val();

    //     if(num == 0 || num == "") {
    //         alert("Invalid or empty input");
    //     }
    //     else {
    //         console.log(num**2);
    //     }

    // });

    // hide and show method and double click

    // $('#clickMe').click(() => {
    //     $('.dormant').hide();
    // });

    // $('#clickMe').dblclick(() => {
    //     $('.dormant').show();
    // });

    //append() and prepend()

    // $('#clickMe').click(() => {
    //     $('.dormant').append("This is after").prepend("This is before");

    // });

    // example click(), append(), dblclick(), contextmenu();
    // $('#clickMe').click(() => {
    //     let msg = $('.num').val();

    //     if(msg == "") {

    //     }else {
    //         $('.dormant').append(`<div class="chats me">${msg}</div>`);
    //     }
    // });

    // $('#clickMe').contextmenu(() => {
    //     let msg = $('.num').val();

    //     if(msg == "") {

    //     }else {
    //         $('.dormant').append(`<div class="chats from">${msg}</div>`);
    //     }
    // });

    // fadeIn(), fadeOut(), addClass(), removeClass(), toggleClass(), toggle()


    // $('.message').keypress((e) => {
    //     if(e.keyCode == 13) {
    //         //send your message

    //     }
    //     else if (e.keyCode == 13 && e.keyCode == 16) {
    //         //create a paragraph

    //     }
    // });

    //animation method
    // animate()

     $('#clickMe').click(() => {
     $('#active').animate({"margin-left":"300px", "margin-top":"300px"}, 5000, "linear")
     });








});