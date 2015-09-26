//Members contributed to file: Barroga, Bautista, Carantes, Hipol
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
var uid = document.registration.userid; 
var passid = document.registration.passid; 
var uname = document.registration.username; 
var lname = document.registration.lusername; 
var uCrandYr = document.registration.CrandYr;
var uWorkplace = document.registration.Workplace;
var uAdviser = document.registration.Adviser;
var uNoofHrsOfToComplete = document.registration.NoofHrsOfToComplete;


		document.getElementById("idError").innerHTML = "";
		document.getElementById("passwordError").innerHTML = "";
		document.getElementById("firstNameError").innerHTML = "";
		document.getElementById("lastNameError").innerHTML = "";
		document.getElementById("courseError").innerHTML = "";
		document.getElementById("workplaceError").innerHTML = "";
		document.getElementById("adviserError").innerHTML = "";
		document.getElementById("hoursError").innerHTML = "";



		
	var test1 = userid_validation(uid, 7, 100);
    var test2 = passid_validation(passid);
    var test3 = allLetter(uname);
    var test4 = allLetters(lname);
    var test5 = CrsandYr(uCrandYr);
    var test6 =Workplaces(uWorkplace);
    var test7 =Advisers(uAdviser);
    NumofHrsOfToComplete(uNoofHrsOfToComplete);

    if(test1 && test2 && test3 && test4 && test5 && test6 && test7){
        Store();
        //var newUrl = ["index.html"];
        //document.location.href = newUrl;
        //update();
        alert("Registration Succesful");
        var newUrl = ["index.html"];
        document.location.href = newUrl;
    }
	
    return false;  
	
}


function userid_validation(uid, mx, my) {  
var uid_len = uid.value.length;  
var numbers = /^[0-9]+$/;
    if (uid_len == 0) {  
		document.getElementById("idError").innerHTML = "*ID No. should not be empty"; 
        //alert("ID No. should not be empty");
        uid.focus();  
        return false;  
    }      
    
    if(uid.value.match(numbers)) {  
        if (uid_len >= my || uid_len < mx) {
            document.getElementById("idError").innerHTML = "*ID No. must be above "+mx+" numbers ";
            //alert("ID No. must be above "+mx+" numbers ");
            uid.focus();  
            return false;  
        }
        return true;  
    } else {  
        document.getElementById("idError").innerHTML = "*ID No. must have numeric characters only";
        //alert("ID No. must have numeric characters only"); 
        uid.focus();  
        return false;  
    }
//return uid; 
}   

function passid_validation(passid) {  
var passid_len = passid.value.length;  
    if (passid_len == 0 ) { 
        document.getElementById("passwordError").innerHTML = "*Password should not be empty";
        //alert("Password should not be empty");  
        passid.focus();  
        return false;  
    }  
    return true;  
}  

function allLetter(uname) {   
var letters = /^[A-Za-z]+$/;  
var uname_len = uname.value.length;
    if (uname_len == 0) {  
        document.getElementById("firstNameError").innerHTML = "*First name should not be empty";
        //alert("First Name should not be empty");  
        uname.focus();  
        return false;  
    }  
    if(uname.value.match(letters)) {  
        return true;  
    } else { 
        document.getElementById("firstNameError").innerHTML = "*First name must have alphabet characters only";
        //alert("First Name must have alphabet characters only");  
        uname.focus();  
        return false;  
    }  
} 

function allLetters(lname) {   
var letterss = /^[A-Za-z]+$/;  
var lname_len = lname.value.length;
    if (lname_len == 0) {
        document.getElementById("lastNameError").innerHTML = "*Last name should not be empty";  
        //alert("Last Name should not be empty");  
        lname.focus();  
        return false;  
    }  
    if(lname.value.match(letterss)) {  
        return true;  
    } else {  
        document.getElementById("lastNameError").innerHTML = "*Last name must have alphabet characters only";
        //alert("Last Name must have alphabet characters only");  
        lname.focus();  
        return false;  
    }  
}

function CrsandYr(uCrandYr) {  
var uCryandYr_len = uCrandYr.value.length;  
    if (uCryandYr_len == 0) {  
        document.getElementById("courseError").innerHTML = "*Course and Year should not be empty";
        //alert("Course and Year should not be empty");  
        uCrandYr.focus();  
        return false;  
    } else {
        return true;   
    }
} 

function Workplaces(uWorkplace) {  
var uWorkplace_len = uWorkplace.value.length;  
    if (uWorkplace_len == 0 ) { 
        document.getElementById("workplaceError").innerHTML = "*Workplace should not be empty";
        //alert("Workplace should not be empty");  
        uWorkplace.focus();  
        return false;  
    }  
    return true;  
}

function Advisers(uAdviser) {  
var lettersss = /^[A-Za-z]+$/;  
var uAdviser_len = uAdviser.value.length;
    if (uAdviser_len == 0) {  
        document.getElementById("adviserError").innerHTML = "*Adviser should not be empty";
        //alert("Adviser should not be empty");  
        uAdviser.focus();  
        return false;  
    }  
    if(uAdviser.value.match(lettersss)) {  
        return true;  
    } else {  
        document.getElementById("adviserError").innerHTML = "*Adviser must have alphabet characters only";
        //alert("Adviser must have alphabet characters only");  
        uAdviser.focus();  
        return false;  
    } 
}

function NumofHrsOfToComplete(uNoofHrsOfToComplete) {  
var uNoofHrsOfToComplete_len = uNoofHrsOfToComplete.value.length;  
var numbers = /^[0-9]+$/;
    if (uNoofHrsOfToComplete_len == 0) { 
        document.getElementById("hoursError").innerHTML = "*Number of hours to complete should not be empty"; 
        //alert("Number of hours to complete should not be empty");  
        uNoofHrsOfToComplete.focus();  
        return false;  
    } 
    
    if(uNoofHrsOfToComplete.value.match(numbers)) {  
        return true;  
    } else {  
        document.getElementById("hoursError").innerHTML = "*Number of hours to complete must have numeric characters only";
        //alert("Number of hours to complete must have numeric characters only");  
        uNoofHrsOfToComplete.focus();  
        return false;  
    }  
}


function Store() {

	var Inputuserid = document.getElementById("userid");
	var Inputpassid = document.getElementById("passid");
	var Inputusername = document.getElementById("username");
	var Inputlusername = document.getElementById("lusername");
	var InputCrandYr = document.getElementById("CrandYr");
	var InputWorkplace = document.getElementById("Workplace");
	var InputAdviser = document.getElementById("Adviser");
	var InputNoofHrsOfToComplete = document.getElementById("NoofHrsOfToComplete");

    alert("Store");

    var idS = Inputuserid.value;
    var id = Number(idS);
    //alert(id);
    var pass = Inputpassid.value;
    //alert(pass);
    var uname = Inputusername.value;
    //alert(uname);
    var lname = Inputlusername.value;
    //alert(lname);
    var cr = InputCrandYr.value;
    //alert(cr);
    var wp = InputWorkplace.value;
    //alert(wp);
    var adv = InputAdviser.value;
    //alert(adv);
    var hrS = InputNoofHrsOfToComplete.value;
    var hr = Number(hrS);
    //alert(hr);

    var newb = {"id" : id, "password" : pass, "lastName": lname, "firstName" : uname, "course" : cr, "workPlace" : wp, "adviser" : adv, "totalHours" : hr, "logs" : []};
    //alert (JSON.stringify(newb));
    //alert("yes");
    var json = localStorage.getItem("1");
	var data = JSON.parse(json);
    var trainees = data.trainees;
    trainees[trainees.length] = newb;

    var string = JSON.stringify(trainees);
    localStorage.removeItem("1");
    localStorage.setItem("1", string);
	


}


