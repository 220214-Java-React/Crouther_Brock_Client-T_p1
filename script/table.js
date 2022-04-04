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
	console.log(arr);
	db = arr;
	addRow(db);
}



/** addRow(arr) Creates a Table Row Entry for each value stored in the (arr)**/
function addRow(arr){
	console.log(arr);
	for (i = 0; i < arr.length; i++){

		let row = document.createElement('tr');
		row.setAttribute('id', i);

		if(i%2 == 0) row.setAttribute('class', "white");

		let r_id = document.createElement('td');
		r_id.textContent = arr[i].REIMB_ID;

		let Amount = document.createElement('td');
		Amount.textContent = arr[i].AMOUNT;

		let Submitted = document.createElement('td');
		Submitted.textContent = arr[i].SUBMITTED;

		let Resolved = document.createElement('td');
		Resolved.textContent = arr[i].RESOLVED;

		let Description = document.createElement('td');
		Description.textContent = arr[i].DESCRIPTION;

		let Recipt = document.createElement('td');
		Recipt.textContent = arr[i].RECEIPT;

		let Payment_ID = document.createElement('td');
		Payment_ID.textContent = arr[i].PAYMENT_ID;

		let Author_ID = document.createElement('td');
		Author_ID.textContent = arr[i].AUTHOR_ID;

		let Resolver_ID = document.createElement('td');
		Resolver_ID.textContent = arr[i].RESOLVER_ID;

		let Status_ID = document.createElement('td');
		Status_ID.textContent = arr[i].STATUS_ID;

		let Type_ID = document.createElement('td');
		Type_ID.textContent = arr[i].TYPE_ID;

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
}

function addSingle(e){

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
	const table = document.getElementById("TAB");
	while (table.lastElementChild) {
		if(document.getElementById("TAB").childElementCount == 1) break;
		else{table.removeChild(table.lastElementChild);}
	}
}




function search(s){

	let value = document.getElementById("RID").value;
	console.log(value);


	for (let i = 0; i < s.length; i++){

		if (s[i].REIMB_ID == value){

			console.log("matched");
			clearTable();
			addRow(s[i]);
		}
	}


}