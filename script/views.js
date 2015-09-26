//Members contributed to file: Barroga, Bautista, Carantes
function showDailyLogs() {
    var other1 = document.getElementById("monthlyTable");
    var other2 = document.getElementById("weeklyTable");
    var self = document.getElementById("dailyTable");
    if(other1.style.display == "block"||other2.style.display == "block"){
      other1.style.display = "none";
      other2.style.display = "none";
      self.style.display = "block";
    }

    if (window.localStorage) {

        var table = document.getElementById("logbookTable");
           table.innerHTML = "";
    table.innerHTML+="<tr><th>Hours Left</th><th>Time in</th><th>Time out</th><th>Hours Used</th><th>Activity</th></tr>";
        var logString = localStorage.getItem("profile");
        var data = JSON.parse(logString);
        var logs= data.logs;

        for(var i = (logs.length-1); i > 0; i--){
          if(logs[i].type == "out"){
             var x = table.insertRow();
              x.insertCell().innerHTML=data.totalHours;
              if(logs[i-1]!= null){
              var tin = new Date(logs[i-1].date);
               x.insertCell().innerHTML= getDayString(tin.getDay())+" "+getMonthString(tin.getMonth())+" "+tin.getDate()+", "+tin.getFullYear()+
                                        " "+tin.getHours()+":"+tin.getMinutes()+":"+tin.getSeconds()+
                                        ":"+tin.getMilliseconds();
              var tout = new Date(logs[i].date);
               x.insertCell().innerHTML= getDayString(tout.getDay())+" "+getMonthString(tout.getMonth())+" "+tout.getDate()+", "+tout.getFullYear()+
                                        " "+tout.getHours()+":"+tin.getMinutes()+":"+tout.getSeconds()+
                                        ":"+tout.getMilliseconds();
                var hourDiff = Math.abs(tout-tin)/36e5;
                x.insertCell().innerHTML=hourDiff;

               x.insertCell().innerHTML=logs[i].summary;
            }
          }
        }
    } else {
          alert("Your Browser does not support LocalStorage.");
    }
   
  }

function getMonthString(num){
  switch(num){
      case 0: return "Jan"; break;
      case 1: return "Feb"; break;
      case 2: return "Mar"; break;
      case 3: return "Apr"; break;
      case 4: return "May"; break;
      case 5: return "Jun"; break;
      case 6: return "Jul"; break;
      case 7: return "Aug"; break;
      case 8: return "Sep"; break;
      case 9: return "Oct"; break;
      case 10: return "Nov"; break;
      case 11: return "Dec"; break;
  }
}


function getDayString(num){
  switch(num){
      case 0: return "Sun"; break;
      case 1: return "Mon"; break;
      case 2: return "Tues"; break;
      case 3: return "Wed"; break;
      case 4: return "Thu"; break;
      case 5: return "Fri"; break;
      case 6: return "Sat"; break;
  }
}
  function showWeeklyLogs(){
    var other1 = document.getElementById("dailyTable");
    var other2 = document.getElementById("monthlyTable");
    var self = document.getElementById("weeklyTable");
    if(other1.style.display == "block"||other2.style.display == "block"){
      other1.style.display = "none";
      other2.style.display = "none";
      self.style.display = "block";
    }
    var table = document.getElementById("logbookTable");
       table.innerHTML = "";
    table.innerHTML+="<tr><th>Hours Left</th><th>Time in</th><th>Time out</th><th>Hours Used</th><th>Activity</th></tr>";
        var logString = localStorage.getItem("profile");
        var data = JSON.parse(logString);
        var logs= data.logs;

        var currentWeek = getWeekNumber(logs[logs.length-1].date);
           for(var i = (logs.length-1); i > 0; i--){
            var newWeek = getWeekNumber(logs[logs.length-1].date);
            if(currentWeek==newWeek) {
                    if(logs[i].type == "out"){
                       var x = table.insertRow();
                        x.insertCell().innerHTML=data.totalHours;
                        if(logs[i-1]!= null){
                        var tin = new Date(logs[i-1].date);
                         x.insertCell().innerHTML= getDayString(tin.getDay())+" "+getMonthString(tin.getMonth())+" "+tin.getDate()+", "+tin.getFullYear()+
                                                  " "+tin.getHours()+":"+tin.getMinutes()+":"+tin.getSeconds()+
                                                  ":"+tin.getMilliseconds();
                        var tout = new Date(logs[i].date);
                         x.insertCell().innerHTML= getDayString(tout.getDay())+" "+getMonthString(tout.getMonth())+" "+tout.getDate()+", "+tout.getFullYear()+
                                                  " "+tout.getHours()+":"+tin.getMinutes()+":"+tout.getSeconds()+
                                                  ":"+tout.getMilliseconds();
                          var hourDiff = Math.abs(tout-tin)/36e5;
                          x.insertCell().innerHTML=hourDiff;

                         x.insertCell().innerHTML=logs[i].summary;
                      }
                    }
              }else{
                    for(var y = 0; y < 10; y++){
                      x.insertCell();
                    }
                    currentWeek =newWeek;
          if(logs[i].type == "out"){
                       var x = table.insertRow();
                        x.insertCell().innerHTML=data.totalHours;
                        if(logs[i-1]!= null){
                        var tin = new Date(logs[i-1].date);
                         x.insertCell().innerHTML= getMonthString(tin.getMonth())+" "+tin.getDate()+" , "+tin.getFullYear()+
                                                  " "+tin.getHours()+":"+tin.getMinutes()+":"+tin.getSeconds()+
                                                  ":"+tin.getMilliseconds();
                        var tout = new Date(logs[i].date);
                         x.insertCell().innerHTML= getMonthString(tout.getMonth())+" "+tout.getDate()+" , "+tout.getFullYear()+
                                                  " "+tout.getHours()+":"+tin.getMinutes()+":"+tout.getSeconds()+
                                                  ":"+tout.getMilliseconds();
                          var hourDiff = Math.abs(tout-tin)/36e5;
                          x.insertCell().innerHTML=hourDiff;

                         x.insertCell().innerHTML=logs[i].summary;
                       }
                     }

              }                  

                  }

  }

  function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return  weekNo;
}

  function showMonthlyLogs(){
    var other1 = document.getElementById("dailyTable");
    var other2 = document.getElementById("weeklyTable");
    var self = document.getElementById("monthlyTable");
    if(other1.style.display == "block"||other2.style.display == "block"){
      other1.style.display = "none";
      other2.style.display = "none";
      self.style.display = "block";
    }
        var table = document.getElementById("logbookTable");
       table.innerHTML = "";
    table.innerHTML+="<tr><th>Hours Left</th><th>Time in</th><th>Time out</th><th>Hours Used</th><th>Activity</th></tr>";
        var logString = localStorage.getItem("profile");
        var data = JSON.parse(logString);
        var logs= data.logs;

        var currentDate =  new Date(logs[logs.length-1].date);
        var currentMonth =currentDate.getMonth();

  for(var i = (logs.length-1); i > 0; i--){
            var newMonth = new Date(logs[logs.length-1].date).getMonth();
            if(currentMonth==newMonth) {
                    if(logs[i].type == "out"){
                       var x = table.insertRow();
                        x.insertCell().innerHTML=data.totalHours;
                        if(logs[i-1]!= null){
                        var tin = new Date(logs[i-1].date);
                         x.insertCell().innerHTML= getDayString(tin.getDay())+" "+getMonthString(tin.getMonth())+" "+tin.getDate()+", "+tin.getFullYear()+
                                                  " "+tin.getHours()+":"+tin.getMinutes()+":"+tin.getSeconds()+
                                                  ":"+tin.getMilliseconds();
                        var tout = new Date(logs[i].date);
                         x.insertCell().innerHTML= getDayString(tout.getDay())+" "+getMonthString(tout.getMonth())+" "+tout.getDate()+", "+tout.getFullYear()+
                                                  " "+tout.getHours()+":"+tin.getMinutes()+":"+tout.getSeconds()+
                                                  ":"+tout.getMilliseconds();
                          var hourDiff = Math.abs(tout-tin)/36e5;
                          x.insertCell().innerHTML=hourDiff;

                         x.insertCell().innerHTML=logs[i].summary;
                      }
                    }
              }else{
                    for(var y = 0; y < 10; y++){
                      x.insertCell();
                    }
                    currentMonth =newMonth;
          if(logs[i].type == "out"){
                       var x = table.insertRow();
                        x.insertCell().innerHTML=data.totalHours;
                        if(logs[i-1]!= null){
                        var tin = new Date(logs[i-1].date);
                         x.insertCell().innerHTML= getMonthString(tin.getMonth())+" "+tin.getDate()+" , "+tin.getFullYear()+
                                                  " "+tin.getHours()+":"+tin.getMinutes()+":"+tin.getSeconds()+
                                                  ":"+tin.getMilliseconds();
                        var tout = new Date(logs[i].date);
                         x.insertCell().innerHTML= getMonthString(tout.getMonth())+" "+tout.getDate()+" , "+tout.getFullYear()+
                                                  " "+tout.getHours()+":"+tin.getMinutes()+":"+tout.getSeconds()+
                                                  ":"+tout.getMilliseconds();
                          var hourDiff = Math.abs(tout-tin)/36e5;
                          x.insertCell().innerHTML=hourDiff;

                         x.insertCell().innerHTML=logs[i].summary;
                       }
                     }

              }                  

  }
}

function download(){
          var logString = localStorage.getItem("profile");
        var data = JSON.parse(logString);


  var textToWrite = "ID Number: "+data.id+"\r\nName: "+data.lastName+", "+data.firstName+"\r\nCourse: " +data.course+"\r\nWork Place: "+data.workPlace+"\r\nAdviser: "+data.adviser+"\r\nTotal Hours: "+data.totalHours+"\r\n LOGS: \r\n";

  var logs= data.logs;

        for(var i = (logs.length-1); i > 0; i--){
          if(logs[i].type == "out"){
           if(logs[i-1]!= null){
              var tin = new Date(logs[i-1].date);
               textToWrite+= "Time IN: "+getDayString(tin.getDay())+" "+getMonthString(tin.getMonth())+" "+tin.getDate()+", "+tin.getFullYear()+
                                        " "+tin.getHours()+":"+tin.getMinutes()+":"+tin.getSeconds()+
                                        ":"+tin.getMilliseconds()+" ";
              var tout = new Date(logs[i].date);
              textToWrite += "Time OUT: "+getDayString(tout.getDay())+" "+getMonthString(tout.getMonth())+" "+tout.getDate()+", "+tout.getFullYear()+
                                        " "+tout.getHours()+":"+tin.getMinutes()+":"+tout.getSeconds()+
                                        ":"+tout.getMilliseconds()+" ";
                var hourDiff = Math.abs(tout-tin)/36e5;
                textToWrite+= "Hours worked: "+hourDiff+"\r\n";

              textToWrite+= "Activity: "+logs[i].summary+"\r\n\r\n";
            }
          }
        }

  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  var fileNameToSaveAs = "Report";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }else{
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}