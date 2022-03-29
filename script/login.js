function init(){

	//a boolean to keep track of the windows orientation
	var isMobile = false;
	var user = {name: "", pwd: "", email: "", fname: "", lname: "", role: "pending", action: "register"};
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
	var users = [{
		name: "admin",
		pwd: "admin",
		role: "admin"
	},{
		name: "asdf",
		pwd: "asdf",
		role: "mngr"
	},{
		name: "fdsa",
		pwd: "fdsa",
		role: "pending"
	},{
		name: "shirley",
		pwd: "shirley",
		role: "pending"
	}];

	
	//call the orientation check initially
	toggleCss();
	
	//initialize the users object
	getUsers();
	
	//--------EVENT LISTENERS---------
	window.addEventListener("resize", toggleCss);
	
	document.getElementById("login_button").addEventListener("click", showLogin);
	
	document.getElementById("login_box_login_username").addEventListener("input", valCreds);
	document.getElementById("login_box_login_password").addEventListener("input", valCreds);
	document.getElementById("login_box_register_username").addEventListener("input", valCreds);
	document.getElementById("login_box_register_password").addEventListener("input", valCreds);
	document.getElementById("login_box_register_fname").addEventListener("input", valCreds);
	document.getElementById("login_box_register_lname").addEventListener("input", valCreds);
	
	document.getElementById("login_box_login_submit").addEventListener("click", logIn);
	document.getElementById("login_box_register_submit").addEventListener("click", registerUser);
	
	document.getElementById("login_box_nav_login").addEventListener("click", toggleLoginRegister);
	document.getElementById("login_box_nav_register").addEventListener("click", toggleLoginRegister);


	//temp user data, replace with fetch once we get the .war situation straight
	function getUsers(){
		// fetch("http://localhost:8080/myservlet")
		// .then((response) => response.json())
		// .then((data) => console.log(data));
		
		// let temp = localStorage.getItem("users");
		
		// if(temp){
			// users = JSON.parse(temp);
		// }else{
			
			// users.push(initUsers);
			// console.log(users);
			// localStorage.setItem("users", JSON.stringify(users));
			
		// }
	}
	
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
	
	//show/hide the login or registration forms
	function toggleLoginRegister(e){
		
		let myIds = ["login_box_nav_login", "login_box_nav_register"];
		let myBoxes = ["login_box_login", "login_box_register"];
		let myButton = document.getElementById(e.target.id);
		let otherButton = document.getElementById(myIds[Math.abs(myIds.indexOf(e.target.id)-1)]);
		
		if(!myButton.className.includes("focus")){
			
			myButton.className = "login_box_nav_button_focus";
			otherButton.className = "login_box_nav_button_not";
			
			document.getElementById(myBoxes[myIds.indexOf(e.target.id)]).style.display = "block";
			document.getElementById(myBoxes[Math.abs(myIds.indexOf(e.target.id)-1)]).style.display = "none";
		}
	}
	
	//validate user input before calling the checker
	function logIn(){
		
		user.name = document.getElementById("login_box_login_username").value;
		user.pwd = document.getElementById("login_box_login_password").value;
		
		if(!user.name){
			alert("You must enter a username.");
		}else if(!user.pwd){
			alert("You must enter a password.");
		}else{
			checkUser(user);
		}
	}
	
	//registers a user with the database, sets roleid to zero as a code for a user not yet approved by the admin
	function registerUser(){
		
		let myUsername = document.getElementById("login_box_register_username").value;
		let myPassword = document.getElementById("login_box_register_password").value;
		let myEmail = document.getElementById("login_box_register_email").value;
		let myFname = document.getElementById("login_box_register_fname").value;
		let myLname = document.getElementById("login_box_register_lname").value;
		
		if(myEmail.match(emailPattern)){
			
			user.name = myUsername;
			user.pwd = myPassword;
			user.email = myEmail;
			user.fname = myFname;
			user.lname = myLname;
			
			fetch("http://localhost:8080/myservlet",{
				method: "post",
				body: JSON.stringify(user)
			});
			
		}else{
			
			alert("Invalid email format.");
			myEmail.value = "";
		}
	}
	
	//temporarily checks hardcoded users, replace with a fetch to compare hashed passwords and return something for a switch
	function checkUser(myUser){
		
		// if(Object.keys(users).contains(myUser.name)){
			// if(Object.values(users).contains(myUser.pwd)){
				
			// }
		// }
		
		toggleFader("login_box");
		popUsers();
		toggleFader("admin_box");
	}
	
	//fill out the table of users for the admin to modify
	function popUsers(){
		
		let myLines = `<tr>
						<th>Username:</th>
						<th>Role:</th>
						<th>Modify:</th>
					</tr>`;
		
		console.log(users.length);
		for(let i = 0; i < users.length; i++){
			myLines += `<tr>
			<td>${users[i].name}</td>
			<td><select class="users_roles" id="role_${i}">
			<option value="pending">pending</option>
			<option value="admin">admin</option>
			<option value="mngr">mngr</option>
			<option value="emp">emp</option>
			<option value="delete">delete</option>
			</select></td>
			<td><button type="button" id="submit_${i}">submit</button></td></tr>`;
		}
		
		document.getElementById("admin_box_table").innerHTML = myLines;
		
		let tempOptions = document.getElementsByClassName("users_roles");
		let myUserRoles = Array.from(tempOptions);
		let myRoleIndex = ["pending", "admin", "mngr", "emp"]
		
		for(let i = 0; i < users.length; i++){
			
			myUserRoles[i].selectedIndex = myRoleIndex.indexOf(users[i].role);

		}
	}
}