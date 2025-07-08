let table=document.getElementById('table');
console.log(table)
function deleterow(row){
row.remove();

}
const userName = localStorage.getItem("userName");
const userNameSpan = document.getElementById("user-name");

if (userName) {
    userNameSpan.textContent = userName; 
} else {
    userNameSpan.textContent = "Veera"; 
}
function Addrow(){
let date=document.getElementsByClassName('dateInput')[0].value.trim();
let ammount=document.getElementsByClassName('ammountInput')[0].value.trim();
let transaction=document.getElementsByClassName('transactioType')[0].value.trim();


if(date === '' || ammount === '' || transaction === 'transactioType'){
alert("Enter the all fields To add");
return;
}

let row =document.createElement('tr')

let ammountnew=document.createElement('td');
ammountnew.innerText=ammount;

let transactionnew=document.createElement('td');
transactionnew.innerText=transaction;

let datenew=document.createElement('td');
datenew.innerText=date;

let binnew=document.createElement('td');

let deletebutton=document.createElement('button');
let binimg=document.createElement('img');
binimg.src='delete-removebg-preview.png';
binimg.style.width='30px'
binimg.style.height='30px';
deletebutton.classList.add('delete-btn')
deletebutton.onclick=()=>deleterow(row)
deletebutton.appendChild(binimg);
binnew.appendChild(deletebutton);
row.appendChild(ammountnew);
row.appendChild(transactionnew);
row.appendChild(datenew);
row.appendChild(binnew)
table.appendChild(row)

let totalIncome=document.getElementById('income').innerText;
let totalexpense=document.getElementById('Expense').innerText;
let totalbalance=document.getElementById('balance').innerText;

if(transaction == 'Income'){ 
if(totalIncome== '0'){ 
    document.getElementById('income').innerText = ammount;
}
else{
    document.getElementById('income').innerText=parseInt(totalIncome)+parseInt(ammount);
}
if(totalbalance == '0'){
document.getElementById('balance').innerText=ammount;
}
else{
document.getElementById('balance').innerText=parseInt(balance)+parseInt(ammount)
}
}
else if(transaction == 'Expenses'){
if(totalexpense == '0'){
document.getElementById('Expense').innerText=ammount;
}
else{
document.getElementById('Expense').innerText=parseInt(totalexpense)+parseInt(ammount);
}

if(totalbalance == '0'){
document.getElementById('balance').innerText=ammount;
}
else{
document.getElementById('balance').innerText=parseInt(totalbalance)-parseInt(ammount)
}

}
console.log("Line 100 ",date,ammount,transaction)
}