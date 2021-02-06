//     Jeff Bohn   1/29/2021   

"use strict"

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        // bool check if the entries are valid
           let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            email1.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        }
    
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        }
    
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Email addresses must match.";
            isValid = false; 
        }
    
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "First name is required.";
            isValid = false;
        }
        if(!isNaN(parseInt(firstName.value))) {     // added: checking for letters only in name 
            firstName.nextElementSibling.textContent = "Please enter only letters.";
            isValid = false;
           }
         else{
            firstName.nextElementSibling.textContent = "";
         }
        
        if (isValid) {
            $("#email_form").submit();
        } 
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});


/// _______________________slider code___________________________________
/*
$(function () {
    let nextSlide = $("#slides img:first-child");  // nextSlide variable
      
    

    // start slide show
    setInterval( () => {   
        $("#caption").hide(1000);
        $("#slide").slideUp(2000,() => {  // #slide is the first slide in HTML, then uses slideUp() function and timer
            if (nextSlide.next().length == 0) {  // tests if "slides" div has a length of zero
                nextSlide = $("#slides img:first-child");  // #slides holds all the rest of the images, first-child is next in line
            }
            else {
                 nextSlide = nextSlide.next(); //sets nextSlide variable to the first img element in #slides div
            }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).slideDown(2000);                    
                $("#caption").text(nextCaption).show(1000);
        });    // end fadeOut()
    },2000);   // end timer
   
    //Added to hide on mouse over, not required for assignment
   $("#mainAll").mouseover(function(){
        $("#mainAll").hide();
    });
    
    $("#mainAll").mouseout(function(){
         $("#mainAll").show();
     });
});   */