//Members contributed to file: Bautista

if(localStorage.getItem("1")==null){
	loadJSON();
}


function loadJSON(){
var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var obj = xhr.responseText;

						localStorage.setItem("1",obj);

				}
			}
			};
		xhr.open("GET", "json/edtr.json", true);
		xhr.send();
}


function formValidation() {
	document.getElementById("idError").innerHTML = "";
	document.getElementById("passwordError").innerHTML = "";

	var uid = document.login.userid;
	var passid = document.login.passid;
	var test1 = userid_validation(uid, 7)
    var test2 = passid_validation(passid)

    if (test1 && test2){
    	window.alert("Trying Credentials");

    	if(localStorage.getItem(1)==null){
			alert("File has not yet been loaded into Local Storage");
		}else{
	    	var s = localStorage.getItem(1);

			var data = JSON.parse(s);
			var ojtStudents = data.trainees;

			var idVal = uid.value;
			var passVal = passid.value;


			for(var i = 0; i < ojtStudents.length; i++){
				if(ojtStudents[i].id==idVal){
					window.alert("Exists");
					var loggedInStudent = ojtStudents[i];
					break;
				}else{
					if(i == ojtStudents.length-1){
						window.alert("Cannot find ID");
					}
				}
			}
			if(loggedInStudent.password==passVal){;
				var obj = JSON.stringify(loggedInStudent);
				localStorage.setItem("profile",obj);
				window.alert("Logged In!");
				var newUrl = ["Timer.html"];
    			document.location.href = newUrl;

			}else{
				document.getElementById("passwordError").innerHTML = "*Password invalid";
        		passid.focus();
			}
    	}

    }else{
    	window.alert("Credentials Invalid!");
    }


    //log()
    return false;
}

function userid_validation(uid, my) {
var uid_len = uid.value.length;
var numbers = /^[0-9]+$/;
    if (uid_len == 0) {
		document.getElementById("idError").innerHTML = "*ID No. should not be empty";
        //alert("ID No. should not be empty");
        uid.focus();
        return false;
    }else{

	    if(uid.value.match(numbers)) {
	        if (!uid_len == my) {
	            document.getElementById("idError").innerHTML = "*ID No. must be 7 numbers ";
	            //alert("ID No. must be above "+mx+" numbers ");
	            uid.focus();
	            return false;
	        }
	    } else {
	        document.getElementById("idError").innerHTML = "*ID No. must have numeric characters only";
	        //alert("ID No. must have numeric characters only");
	        uid.focus();
	        return false;
    	}

    	return true;
    }

    return uid;
}

function passid_validation(passid) {
var passid_len = passid.value.length;
    if (passid_len == 0 ) {
        document.getElementById("passwordError").innerHTML = "*Password should not be empty";
        //alert("Password should not be empty");
        passid.focus();
        return false;
    }
    return passid;
}
