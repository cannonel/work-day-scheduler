var timeBlocks = [
    "09:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "13:00pm",
    "14:00pm",
    "15:00pm",
    "16:00pm",
    "17:00pm"
];

//get current time and display in header
window.setInterval(function() {
    $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
},1000);

