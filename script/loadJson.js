//Members contributed to file: Barroga, Bautista, Carantes
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