/** Table.js Web Component
* 	
* 	Author: 	  Myles Crouther
* 
* 	Description:  Companion JavaScript file for a Expense Reinbursement System
*  				  table that displays relevant content for a financial manager.
* 
* 	Dependencies: None. Be Advise... <table id="TAB"> required on html page.
**/



//SAMPLE DATA
var eDB = []; 
var db = [
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	},
	{
		"REIMB_ID" : "12345",
		"AMOUNT" : "$100.00",
		"SUBMITTED": "10:37 03/30/2022",
		"RESOLVED" : "10:38 03/30/2022",
		"DESCRIPTION" : "Something Important...",
		"RECEIPT" : "ABC Inc.",
		"PAYMENT_ID" : "VISA",
		"AUTHOR_ID" : "Myles Crouther",
		"RESOLVER_ID" : "Revature",
		"STATUS_ID" : "Approved",
		"TYPE_ID" : "Other"
	}
];



function getReimbursements(){
	fetch("http://localhost:8080/crei",{
			method: "get",
	})
	.then((response) => response.json())
	.then((rei) => setDB(rei));	
	
}


function setDB(arr){
	db = arr;
	addRow(db);
	console.log(arr);
}



/** addRow(arr) Creates a Table Row Entry for each value stored in the (arr)**/
function addRow(arr){	
	for (i = 0; i < arr.length; i++){
		addLine(arr[i], i);
	}
}



function addLine(obj, i){
	
	let row = document.createElement('tr');
	row.setAttribute('id', i);

	if(i%2 == 0) row.setAttribute('class', "white");

	let r_id = document.createElement('td');
	r_id.textContent = obj.REIMB_ID;
	console.log(obj.REIMB_ID);

	let Amount = document.createElement('td');
	Amount.textContent = obj.AMOUNT;

	let Submitted = document.createElement('td');
	Submitted.textContent = obj.SUBMITTED;

	let Resolved = document.createElement('td');
	Resolved.textContent = isResolved(obj.RESOLVED);

	let Description = document.createElement('td');
	Description.textContent = obj.DESCRIPTION;

	let Recipt = document.createElement('td');
	Recipt.textContent = obj.RECEIPT;

	let Payment_ID = document.createElement('td');
	Payment_ID.textContent = obj.PAYMENT_ID;

	let Author_ID = document.createElement('td');
	Author_ID.textContent = "#" + obj.AUTHOR_ID;

	let Resolver_ID = document.createElement('td');
	Resolver_ID.textContent = whatResolver(obj.RESOLVER_ID);

	let Status_ID = document.createElement('td');
	Status_ID.textContent = whatStatus(obj.STATUS_ID);

	let Type_ID = document.createElement('td');
	Type_ID.textContent = whatType(obj.TYPE_ID);

	document.getElementById("TAB").appendChild(row);
	document.getElementById(i).appendChild(r_id);
	document.getElementById(i).appendChild(Amount);
	document.getElementById(i).appendChild(Submitted);
	document.getElementById(i).appendChild(Resolved);
	document.getElementById(i).appendChild(Description);
	document.getElementById(i).appendChild(Recipt);
	document.getElementById(i).appendChild(Payment_ID);
	document.getElementById(i).appendChild(Author_ID);
	document.getElementById(i).appendChild(Resolver_ID);
	document.getElementById(i).appendChild(Status_ID);
	document.getElementById(i).appendChild(Type_ID);
}



function whatType(t){
	if (t == 1) return "Lodging";
	if (t == 2) return "Travel";
	if (t == 3) return "Food";
	if (t == 4) return "Other";
	return "Other";
}



function whatStatus(stat){
	if (stat == 1) return "Pending";
	if (stat == 2) return "Approved";
	if (stat == 3) return "Denied";
	return "Pending";
}



function whatResolver(res){
	if (res == 0) return "Revature";
	if (res == 7) return "Admin";
	if (res == 17) return "Financial Manager";
	return res;
}



function isResolved(isR){
	if (isR == null){return "Pending"};
	return isR;
}



/** sortStatus(arr, str) clears current table and display only reinbursements  
 *  with a status that matches 'str' parameter from the passed array 'arr' **/

function sortStatus(arr, str){
	clearTable();
	let matches = [];

	for (i = 0; i < arr.length; i++){
		if (arr[i].STATUS_ID == str){matches.push(arr[i]);}
	}

	addRow(matches);
}



/** sortType(arr, str) clears current table and display only reinbursements  
 *  with a type that matches 'str' parameter from the passed array 'arr' **/

function sortType(arr, str){
	clearTable();

	let matches = [];

	for (i = 0; i < arr.length; i++){
		if (arr[i].TYPE_ID == str){matches.push(arr[i]);}
	}

	addRow(matches);
}



// reset(arr) clears the entire table and displays all reinbursements

function reset(arr){
	clearTable();
	addRow(arr);
}



// clearTable() removes all reinbursements. Keeps table column labels/headers.

function clearTable(){
	console.log("table cleared");
	const table = document.getElementById("TAB");
	while (table.lastElementChild) {
		if(document.getElementById("TAB").childElementCount == 1) break;
		else{table.removeChild(table.lastElementChild);}
	}
}



function search(s){

	clearTable();
	let value = document.getElementById("RID").value;

	console.log(value);


	for (let i = 0; i < s.length; i++){
		if (s[i].REIMB_ID == value){
			console.log("matched");	
			console.log(s[i].REIMB_ID);
			addLine(s[i], i);
		}
	}
}

function employeeREI(eyid){
	fetch("http://localhost:8080/crei",{
			method: "get",
	})
	.then((response) => response.json())
	.then((jsRES) => setEDB(jsRES, eyid));	
}


function setEDB(arr, estb){

	temp = [];

	for(i = 0; i < arr.length; i++){
		if (arr[i].AUTHOR_ID == estb){
			temp.push(arr[i])
		}
	}

	eDB = temp;
	addRow(eDB);
}