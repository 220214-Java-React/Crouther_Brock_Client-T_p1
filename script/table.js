/** Table.js Web Component
* 	
* 	Author: 	  Myles Crouther
* 
* 	Description:  Companion JavaScript file for a Expense Reinbursement System
*  				  table that displays relevant content for a financial manager.
* 
* 	Dependencies: None. Be Advise... <table id="TAB"> required on html page.
**/



// SAMPLE DATA 
var db = [
	{
		"Reimbursement_ID" : "123",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Food"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Lodging"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Pending",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Denied",
		"Type_ID" : "Travel"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Pending",
		"Type_ID" : "Travel"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	},
	{
		"Reimbursement_ID" : "12345",
		"Amount" : "$100.00",
		"Submitted": "10:37 03/30/2022",
		"Resolved" : "10:38 03/30/2022",
		"Description" : "Something Important...",
		"Recipt" : "ABC Inc.",
		"Payment_ID" : "VISA",
		"Author_ID" : "Myles Crouther",
		"Resolver_ID" : "Revature",
		"Status_ID" : "Approved",
		"Type_ID" : "Other"
	}
];



/** addRow(arr) Creates a Table Row Entry for each value stored in the (arr)**/
function addRow(arr){

	for (i = 0; i < arr.length; i++){

		let row = document.createElement('tr');
		row.setAttribute('id', i);

		if(i%2 == 0) row.setAttribute('class', "white");

		let r_id = document.createElement('td');
		r_id.textContent = arr[i].Reimbursement_ID;

		let Amount = document.createElement('td');
		Amount.textContent = arr[i].Amount;

		let Submitted = document.createElement('td');
		Submitted.textContent = arr[i].Submitted;

		let Resolved = document.createElement('td');
		Resolved.textContent = arr[i].Resolved;

		let Description = document.createElement('td');
		Description.textContent = arr[i].Description;

		let Recipt = document.createElement('td');
		Recipt.textContent = arr[i].Recipt;

		let Payment_ID = document.createElement('td');
		Payment_ID.textContent = arr[i].Payment_ID;

		let Author_ID = document.createElement('td');
		Author_ID.textContent = arr[i].Author_ID;

		let Resolver_ID = document.createElement('td');
		Resolver_ID.textContent = arr[i].Resolver_ID;

		let Status_ID = document.createElement('td');
		Status_ID.textContent = arr[i].Status_ID;

		let Type_ID = document.createElement('td');
		Type_ID.textContent = arr[i].Type_ID;

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




/** sortStatus(arr, str) clears current table and display only reinbursements  
 *  with a status that matches 'str' parameter from the passed array 'arr' **/

function sortStatus(arr, str){
	clearTable();
	let matches = [];

	for (i = 0; i < arr.length; i++){
		if (arr[i].Status_ID == str){matches.push(arr[i]);}
	}

	addRow(matches);
}




/** sortType(arr, str) clears current table and display only reinbursements  
 *  with a type that matches 'str' parameter from the passed array 'arr' **/

function sortType(arr, str){
	clearTable();

	let matches = [];

	for (i = 0; i < arr.length; i++){
		if (arr[i].Type_ID == str){matches.push(arr[i]);}
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