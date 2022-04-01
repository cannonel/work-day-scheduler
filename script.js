var userBlocks = [];
var timeBlocks = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm"
];

var contentContainer = document.querySelector("#container");

//current time variable to correlate with real time
var currentTime = moment().format("HH") + ":00";

//get current time and display in header
window.setInterval(function() {
    $("#currentDay").text(moment().format("ddd MM/DD h:mm a"));
},1000);

//getting main content, time/tasks/save
var showHourBlocks = function() {
    //call in tasks from local storage
    localTasks();
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
        if (userBlocks[i]) {
            taskInput.value = userBlocks[i];
          }
          taskRow.appendChild(taskInput);
        

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

        if (currentTime === timeBlocks[i]) {
            taskInput.classList = "present col-md-9 description p-0"
        }
        if (currentTime > timeBlocks[i]) {
            taskInput.classList = "past col-md-9 description p-0"
        }
        if (currentTime < timeBlocks[i]) {
            taskInput.classList = "future col-md-9 description p-0"
        }
    }

};

showHourBlocks();

//save button
$("button").on("click", function () {
    var newTask = [];
    for (var i = 0; i < timeBlocks.length; i++){
        newTask.push(document.getElementsByTagName("input")[i].value);
    }
    userBlocks = newTask;
    localStorage.setItem("tasks", JSON.stringify(userBlocks));
});

//add function to grab from local storage, if any
function localTasks() {
    if (JSON.parse(localStorage.getItem("tasks"))){
        userBlocks = JSON.parse(localStorage.getItem("tasks"));
    }
}

