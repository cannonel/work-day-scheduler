var timeBlocks = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00"
];

var contentContainer = document.querySelector("#container");

//current time variable to correlate with real time
var currentTime = moment().format("HH") + ":00";

//get current time and display in header
window.setInterval(function() {
    $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
},1000);

//getting main content, time/tasks/save
var showHourBlocks = function() {
    //create loop to run through timeblocks array
    for (i=0; i < timeBlocks.length; i++){

        //creating row divs
        var taskRow = document.createElement("div");
        taskRow.classList = "row time-block";
        taskRow.id = timeBlocks.indexOf(timeBlocks[i]);

        //creating hour of day slots
        var timeSlot = document.createElement("h4");
        timeSlot.classList = "col-md-2 hour";
        timeSlot.id = timeBlocks.indexOf(timeBlocks[i]);
        timeSlot.textContent = timeBlocks[i];

        //append time to time slot
        taskRow.appendChild(timeSlot)
        
        //create task text input field
        var taskInput = document.createElement("input");
        taskInput.classList = "time-block clearable col-md-9 description p-0";
        taskInput.id = "input" + timeBlocks.indexOf(timeBlocks[i]);

        //check local storage in an 'if' statement

        //appending task text input to correct row
        taskRow.appendChild(taskInput);

        //save button
        var saveBtn = document.createElement("button");
        saveBtn.classList = "saveBtn col-md-1";
        saveBtn.id = "btn" + timeBlocks.indexOf(timeBlocks[i]);
        saveBtn.innerHTML = "<i class='far fa-save fa-lg'></i>";

        //append save button to row
        taskRow.appendChild(saveBtn);

        //appending dynamically created row element to main content container
        contentContainer.appendChild(taskRow);
    }

};

showHourBlocks();