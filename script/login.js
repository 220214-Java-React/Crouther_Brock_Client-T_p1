function init(){

	//a boolean to keep track of the windows orientation
	var isMobile = false;
	
	//call the orientation check initially
	toggleCss();
	
	//--------EVENT LISTENERS----------
	window.addEventListener("resize", toggleCss);
	document.getElementById("login_box_username").addEventListener("input", valCreds);
	document.getElementById("login_box_password").addEventListener("input", valCreds);
	document.getElementById("login_button").addEventListener("click", showLogin);
	document.getElementById("login_box_submit").addEventListener("click", logIn);

	//temp user data, replace with cached or individual fetches
	var users = {
		admin: "admin",
		asdf: "asdf",
		fdsa: "fdsa",
		snoopy: "doopy",
		turkey: "jerky"
	};
	
	//checks whether the window is in landscape or portrait format and sets the css sheet and boolean variable
	function toggleCss(){
		
		if(window.innerWidth < window.innerHeight){
			document.getElementById("css").href = "css/login_vrt.css";
			isMobile = true;
			
			document.getElementById("title").innerHTML = 'Reimbursement</br>&nbsp;&nbsp;&nbsp;Application';
		}else{
			document.getElementById("css").href = "css/login_hrz.css";
			isMobile = false;
			
			document.getElementById("title").innerHTML = 'Reimbursement Application';
		}
	}
	
	//forces input of username and password to within a certain criteria using regex
	function valCreds(e){
		
		var temp = document.getElementById(e.target.id).value.replace(/[^a-z0-9_]/gi, "");
		document.getElementById(e.target.id).value = temp;
	}
	
	//this function can be used to hide all child elements of an element
	function hideChildren(myId){
		var children = document.getElementById(myId).children;

		for(let i = 0; i < children.length; i++){
			document.getElementById(children[i].id).style.display = "none";
		}
	}
	
	//switches the class animation to fade in or out and shows or hides the element accordingly
	function toggleFader(myId){
		
		let myElement = document.getElementById(myId);
		
		if(myElement.classList.contains("fadein")){
			
			myElement.className = "fadeout";
			setTimeout(function(){myElement.style.display = "none";}, 450);
		}else{
			
			myElement.style.display = "block";
			myElement.className = "fadein";
		}
		
		//restart the animation
		myElement.style.animation = 'none';
		myElement.offsetHeight;
		myElement.style.animation = null; 
	}
	
	//hide the welcome message and show the login box
	function showLogin(){
		
		let myMessage = document.getElementById("welcome");
		let myLogin = document.getElementById("login_box");
		let myUsername = document.getElementById("login_button");

		if(myUsername.innerText == "login" && window.getComputedStyle(myMessage).display == "block"){
			
			toggleFader(myMessage.id);
			setTimeout(function(){toggleFader(myLogin.id);}, 500);
		}
	}
	
	//check the user input against the users

}