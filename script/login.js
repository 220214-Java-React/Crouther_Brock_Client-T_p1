function init(){

	//a boolean to keep track of the windows orientation
	var isMobile = false;
	
	//blank user object, you can use this solo to pass an action to the servlet in addition to sending a completed user 
	//ACTIONS: "registerUser", "getUsers", 
	var user = {username: "", pwd: "", email: "", fname: "", lname: "", roleid: "", action: ""};
	
	//array for the user objects
	var users = [];
	
	//a 2d array of names and roles, used in popUsers
	var usersNameRoleArray = [[],[]];
	
	//regex for the email pattern, not foolproof
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	
	//enum that corresponds to role id, use indexof(parseInt(roleid -1)) to get role or vice versa
	const roles = ["pending", "admin", "mngr", "emp"];
	
	
	//--------EVENT LISTENERS---------
	window.addEventListener("resize", toggleCss);
	
	document.getElementById("login_button").addEventListener("click", loginOut);
	
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


	//-------GET FUNCY--------
	//call the orientation check initially
	toggleCss();
	
	//initialize the users objects
	getUsers();

	//pulls data from the ERS_USERS and checks local storage
	function getUsers(){
		
		let trash = {
			action:"getusers"
		};
		document.getElementById("loadscreen").style.display = "block";
		fetch("http://localhost:8080/myservlet",{
				header:"admin",
				method: "post",
				body: JSON.stringify(trash)
		})
		.then((response) => response.json())
		.then((data) => setUsers(data));
		
	}
	
	//sets the array of user objects with the response data, 
	//also creates an object of name:pwd pairs for login, calls the function to populate the admin table
	function setUsers(myData){
		
		users = myData;
		usersNameRoleArray = [[],[]];

		users.forEach(function(each){

			if(each.is_active == "true"){
				user = each;
			}
			
			if(each.username != "admin"){
				usersNameRoleArray[0].push(each.username);
				usersNameRoleArray[1].push(each.roleid);
			}
		});

		popUsers();
		document.getElementById("loadscreen").style.display = "none";
	}
	
	//fill out the table of users for the admin to modify
	function popUsers(){
		
		let myLines = `<tr>
						<th>Username:</th>
						<th>Role:</th>
						<th>Modify:</th>
					</tr>`;
		
		for(let i = 0; i < usersNameRoleArray[0].length; i++){

			myLines += `<tr>
			<td id="username_${i}">${usersNameRoleArray[0][i]}</td>
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
		
		//set the drop down option to the users role
		let tempOptions = document.getElementsByClassName("users_roles");
		let myUserRoles = Array.from(tempOptions);
		
		for(let i = 0; i < myUserRoles.length; i++){
			
			myUserRoles[i].selectedIndex = parseInt(usersNameRoleArray[1][i])-1;
			document.getElementById(`submit_${i}`).addEventListener("click", modRole);
		}
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
	
	
	//hide the welcome message and show the login box or logout and show welcome message
	function loginOut(e){

		if(e.target.innerText == "login"){
			
			hideChildren("maindiv");
			document.getElementById("login_box").style.display = "block";
		}else{
			user.action = "setactive";
			user.is_active = "false";
			setActive();
			
			user = {username: "", pwd: "", email: "", fname: "", lname: "", roleid: "", action: ""};
			hideChildren("maindiv");
			document.getElementById("login_box").style.display = "block";
			e.target.innerText = "login";
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
		
		let myUsernameElement = document.getElementById("login_box_login_username");
		let myPasswordElement = document.getElementById("login_box_login_password");
		user.username = myUsernameElement.value;
		user.pwd = myPasswordElement.value;
		
		if(!user.username){
			alert("You must enter a username.");
		}else if(!user.pwd){
			alert("You must enter a password.");
		}else{
			user.action = "checkpwd";
			document.getElementById("loadscreen").style.display = "block";
			fetch("http://localhost:8080/myservlet",{
					header:"admin",
					method: "post",
					body: JSON.stringify(user)
			})
			.then((response) => response.text())
			.then((data) => checkUser(data));
			
			myUsernameElement.value = "";
			myPasswordElement.value = "";
		}
	}
	
	//registers a user with the database, sets roleid to zero as a code for a user not yet approved by the admin
	function registerUser(){
		
		let myUsername = document.getElementById("login_box_register_username");
		let myPassword = document.getElementById("login_box_register_password");
		let myEmail = document.getElementById("login_box_register_email");
		let myFname = document.getElementById("login_box_register_fname");
		let myLname = document.getElementById("login_box_register_lname");
		
		if(myEmail.value.match(emailPattern)){
			
			user.username = myUsername.value;
			user.pwd = myPassword.value;
			user.email = myEmail.value;
			user.fname = myFname.value;
			user.lname = myLname.value;
			user.roleid = "1";
			user.action = "register";
			
			myUsername.value = "";
			myPassword.value = "";
			myEmail.value = "";
			myFname.value = "";
			myLname.value = "";
			
			document.getElementById("loadscreen").style.display = "block";
			alert("Registration submitted.\nAwaiting admin approval.");
			
			fetch("http://localhost:8080/myservlet",{
				header:"admin",
				method: "post",
				body: JSON.stringify(user)
			}).then(() => getUsers());
			
		}else{
			
			alert("Invalid email format.");
			myEmail.value = "";
		}
	}
	
	//uses the username and the boolean value returned from logIn, forks to either the admin screen or the finance page
	function checkUser(myData){

		user.pwdBool = myData.trim();
		console.log(user.pwdBool);
		if(usersNameRoleArray[0].includes(user.username) || user.username == "admin"){

			if(user.pwdBool == "true"){
				
				for(let i = 0; i < users.length; i++){
					if(users[i].username == user.username){
						user = users[i];
					}
				}
				
				if(user.username == "admin"){
					hideChildren("maindiv");
					document.getElementById("admin_box").style.display = "block";
					document.getElementById("login_button").innerText = user.username;
					user.is_active = "true";
					setActive();
				}else if(user.roleid == 3){
					document.getElementById("login_button").innerText = user.username;
					user.is_active = "true";
					setActive();
				}else if(user.roleid == 4){
					document.getElementById("login_button").innerText = user.username;
					user.is_active = "true";
					setActive();
				}else{
					alert("The user is pending approval from an admin.");
				}
			}else{
				alert("The credentials do not match our records.");
			}
		}else{
			alert("The credentials do not match our records.");
		}
		document.getElementById("loadscreen").style.display = "none";
	}
	
	//modify the role of the user or delete user
	function modRole(e){
		
		let temp = e.target.id;
		let userIndex = temp.substring(temp.length -1);
		let roleIndex = document.getElementById(`role_${userIndex}`).selectedIndex;

		if(roleIndex != user.roleid && roleIndex > 0){
			
			let myUser = {
				username: document.getElementById(`username_${userIndex}`).innerText,
				roleid: (roleIndex+1).toString()
			}
			
			if(roleIndex != 4){
				myUser.action = "modrole";
			}else{
				myUser.action = "delete";
			}

			document.getElementById("loadscreen").style.display = "block";
			fetch("http://localhost:8080/myservlet",{
				header:"admin",
				method: "post",
				body: JSON.stringify(myUser)
			}).then(() => getUsers());

		}
	}
	
	//set the boolean to record that a user is logged in
	function setActive(){
		
		user.action = "setactive";
		
		fetch("http://localhost:8080/myservlet",{
				header:"admin",
				method: "post",
				body: JSON.stringify(user)
		})
		.then((response) => response.text())
		.then((data) => redirect());
	}
	
	//redirect the user to a page according to their role
	function redirect(){
		
		if(user.roleid == 3){
			window.location = "ERS/finance.html";
		}else if(user.roleid == 4){
			window.location = "ERS/employee.html";
		}
	}
}