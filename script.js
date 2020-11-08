// Here I'm pretty sure I'm gonna need the .attr() to assign classes to the rows so that I can change their colors.
// I'm also gonna need to make a .on("click") that saves the user input to local storage


//I need to figure out how to change the color based on the time. Maybe an if/else statement can work

//Im gonna need if/else statements for the time ex ()

// Also, I'll need localStorage.setItem(keyname, value) to save user inputs to local storage, and localStorage.getItem() to retrieve their inputs after they refresh the page



// Here I am getting the current date through the moment method
var present = moment().format("MMM Do YY");
$("#currentDay").text(present);
console.log(present);


var currentHour = moment().hour();
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


//This function saves the user input after click the save button

$(".saveBtn").click(function (event) {
    event.preventDefault();

    var timeBlock = $(this).attr("id").split("-")[2];
    var userInput = $("#text-event-" + timeBlock).val();

    localStorage.setItem(timeBlock, userInput);
    console.log(timeBlock, userInput);

});
// here we are retrieving the value from local storage
for (let i = 9; i < 18; i++) {
    $(`#text-event-${i}`).val(localStorage.getItem(i));
}

// here we are changing the css depending on the time and date

function setColor() {
    currentTime = moment().hour();

    if ($(".btn").val() == currentTime) {
        $(".description").addClass("present");
    }

    else if ($(".btn").val() <= currentTime) {
        $(".description").addClass("past");
    }
    else if ($(".btn").val() >= currentTime) {
        $(".description").addClass("future");
    }
}












      //Do i need to call the item at the end?

      //Here we'll use the code from moment.js to get the current day


