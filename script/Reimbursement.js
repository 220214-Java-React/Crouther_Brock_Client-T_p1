class Reimbursement {

	Reimbursement_ID = 0;
	Amount = 0;
	Submitted = "";
	Resolved = "";
	Description = "Details Pending...";
	Receipt = "";
	Payment_ID = "";
	Author_ID = "Employee";
	Resolver_ID = "Revature";
	Status_ID = "Pending";
	Type_ID = "Other";

	constructor(rei_ID, a, s, res, des, rec, P_ID, A_ID, R_ID, S_ID, T_ID){
		this.Reimbursement_ID = rei_ID;
		this.Amount = a;
		this.Submitted = s;
		this.Resolved = res,
		this.Description = des;
		this.Receipt = rec;
		this.Payment_ID = P_ID;
		this.Author_ID = A_ID;
		this.Resolver_ID = R_ID;
		this.Status_ID = S_ID;
		this.Type_ID = T_ID;
	}

	function addReimbursement(rei){
		let row = document.createElement('tr');
		row.setAttribute('id', rei.Reimbursement_ID);

		if(document.getElementById("TAB").childElementCount%2 == 0) row.setAttribute('class', "white");

		let r_id = document.createElement('td');
		r_id.textContent = rei.Reimbursement_ID;

		let Amount = document.createElement('td');
		Amount.textContent = rei.Amount;

		let Submitted = document.createElement('td');
		Submitted.textContent = rei.Submitted;

		let Resolved = document.createElement('td');
		Resolved.textContent = rei.Resolved;

		let Description = document.createElement('td');
		Description.textContent = rei.Description;

		let receipt = document.createElement('td');
		receipt.textContent = rei.Receipt;

		let Payment_ID = document.createElement('td');
		Payment_ID.textContent = rei.Payment_ID;

		let Author_ID = document.createElement('td');
		Author_ID.textContent = rei.Author_ID;

		let Resolver_ID = document.createElement('td');
		Resolver_ID.textContent = rei.Resolver_ID;

		let Status_ID = document.createElement('td');
		Status_ID.textContent = rei.Status_ID;

		let Type_ID = document.createElement('td');
		Type_ID.textContent = rei.Type_ID;

		document.getElementById("TAB").appendChild(row);
		document.getElementById(rei.Reimbursement_ID).appendChild(r_id);
		document.getElementById(rei.Reimbursement_ID).appendChild(Amount);
		document.getElementById(rei.Reimbursement_ID).appendChild(Submitted);
		document.getElementById(rei.Reimbursement_ID).appendChild(Resolved);
		document.getElementById(rei.Reimbursement_ID).appendChild(Description);
		document.getElementById(rei.Reimbursement_ID).appendChild(Receipt);
		document.getElementById(rei.Reimbursement_ID).appendChild(Payment_ID);
		document.getElementById(rei.Reimbursement_ID).appendChild(Author_ID);
		document.getElementById(rei.Reimbursement_ID).appendChild(Resolver_ID);
		document.getElementById(rei.Reimbursement_ID).appendChild(Status_ID);
		document.getElementById(rei.Reimbursement_ID).appendChild(Type_ID);
	}
}