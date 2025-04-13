//your JS code here. If required.
let form=document.querySelector("form");
let btn=document.querySelector("#submit"); 
let table=document.querySelector("table")
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let title=document.querySelector("#title").value;
	let author=document.querySelector("#author").value;
	let isbn=document.querySelector("#isbn").value;	

	let tr=document.createElement("tr");
	let td1=document.createElement("td");
	td1.innerText=title;
	let td2=document.createElement("td");
	td2.innerText=author;
	let td3=document.createElement("td");
	td3.innerText=isbn;
	let td4=document.createElement("td").innerText="X";
	tr.append(td1,td2,td3,td4);
	table.append(tr);
	
})
