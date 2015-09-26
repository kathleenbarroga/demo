//Members contributed to file: Bautista, Carantes
function timeIn() {
	var json = localStorage.getItem("profile");
	var data = JSON.parse(json);
	var logs = data.logs;
	var tin = false;
	if (logs[logs.length - 1].type == "out") {
		var time = Date.now();
		var logCopy = logs;
		logCopy[logCopy.length] = {
			"type" : "in",
			"date" : time
		};
		var newData = data;
		newData.logs = logCopy;
		localStorage.removeItem("profile");
		var updated = JSON.stringify(newData);
		localStorage.setItem("profile", updated);
		alert("You are now Timed-in");
	} else {
		alert("You are already Timed-in");
	}
}

function timeOut() {
	var form = document.getElementById("summary");

	var json = localStorage.getItem("profile");
	var data = JSON.parse(json);
	var logs = data.logs;
	var tin = false;
	if (logs[logs.length - 1].type == "out") {
		alert("You are not Timed-in!");
	} else {
		form.style.display = "block";
	}

}

function hideSummary() {
	var form = document.getElementById("summary");
	form.style.display = "none";
}

function out() {
	var time = Date.now();
	var date = new Date(time);
	var json = localStorage.getItem("profile");
	var data = JSON.parse(json);

	var logs = data.logs;
	var logCopy = logs;

	summary = document.getElementById("summaryText").value;

	var prevTime = logCopy[logCopy.length - 1].date;
	//alert(prevTime);
	var oldTime = new Date(prevTime);
	//alert(oldTime);
	var timeDiff = Math.abs(date - oldTime) / 36e5;
	//alert(timeDiff);
	var hoursLeft = Math.abs(data.totalHours - timeDiff);

	var newData = data;
	newData.totalHours = hoursLeft;
	newData.logs = logCopy;

	logCopy[logCopy.length] = {
		"type" : "out",
		"date" : time,
		"summary" : summary
	};
	var updated = JSON.stringify(newData);

	localStorage.removeItem("profile");
	localStorage.setItem("profile", updated);
	alert("You are now Timed-out");
	hideSummary();
	update();
}

function logOut() {
	update();
	var newUrl = ["Login.html"];
	document.location.href = newUrl;
}

function update(){
	var json = localStorage.getItem("profile");
	var data = JSON.parse(json);
	var id = data.id;

	json = localStorage.getItem("1");
	var mainData = JSON.parse(json);
	var trainees = mainData.trainees;

	var newJSON = mainData;
	for (var x = 0; x < trainees.length; x++) {
		if (trainees[x].id == id) {
			newJSON.trainees[x] = data;
		}
	}
	var updated = JSON.stringify(newJSON);
	localStorage.removeItem("1");
	localStorage.setItem("1", updated);
}

function clock(){
var time = new Date();
var hr = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var ampm = " PM ";
if (hr < 12){
ampm = " AM ";
}

if (hr == 0){
	hr = 12;
}

if (hr > 12){
hr -= 12;
}

if (hr < 10){
hr = "0" + hr;
}

if (min < 10){
min = "0" + min;
}

if (sec < 10){
sec = "0" + sec;
}

document.getElementById('clock').innerHTML = hr + ":" + min + ":" + sec + ampm;
setTimeout("clock()", 1000);
}
/*function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
	var mid = 'am';
    m = checkTime(m);
    s = checkTime(s);
	
	/*else if (h == 0) {
        h = 12;
    } if (h > 12) {
        h -= 12;	
		//mid='pm';
    } 
    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
	var t = setTimeout(function(){startTime()},500);
}
*/

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function removeUser(){

	var r = confirm("Are you sure you want to delete this account?");
	if (r == true) {
	    
	    var profileJSON = localStorage.getItem("profile");
		var prof = JSON.parse(profileJSON);
		var toRemove = prof.id;

		var allJSON = localStorage.getItem("1");
		var data = JSON.parse(allJSON);
		var trainees = data.trainees;

		var natira = {"trainees" : [] };
		var currentIndex = 0;
		for(var x = 0; x <trainees.length; x++){
			if(trainees[x].id != toRemove){
				natira.trainees[currentIndex] = trainees[x];
				currentIndex++;
			}
		}
		var silaNaLang = JSON.stringify(natira);
		localStorage.removeItem("1");
		localStorage.removeItem("profile");
		localStorage.setItem("1", silaNaLang);
			

		var newUrl = ["Login.html"];
		document.location.href = newUrl;
}
}
