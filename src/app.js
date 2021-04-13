
const budamt = document.getElementById("budamt");
const budnamamt = document.getElementById("budnamamt");

const mybudamt = document.getElementById("mybudamt");
const balance = document.getElementById("balance");
const expAmt = document.getElementById("expAmt");
 
function inputbudget(budamt) {
    expAmt.innerHTML = "";
    mybudamt.innerText = budamt;
    balance.innerText = budamt;
    budamt.value = "";
};

budnamamt.addEventListener("submit", (e) => {
e.preventDefault();
inputbudget(budamt.value);
});


const expinput = document.getElementById("expinput");
let type = document.getElementById("type");
let cost = document.getElementById("cost");
let id=0;
let description = [];

function ExpAdd(name, number) {
    const inputExp = {
        id: id,
        name: name,
        number: parseInt(number),
    };
    description.push(inputExp);
    displayExp(description);
    id++;
    type.value = "";
    cost.value = "";
}

expinput.addEventListener("submit", (e) => {
    e.preventDefault();
    ExpAdd(type.value, cost.value);
});

function displayExp(description) {
    expAmt.innerHTML = null;
    for (i = 0; i < description.length; i++) {
        expAmt.innerHTML += `
        <div class="expAmt" id="${description[i].id}">
        <div id="Expense"><p>${description[i].name}</p></div>
        <div id="Amount"><p> <span>$ </span> ${description[i].number}</p></div>
   `;
 }
 calcExp();
 displayExpenses.style.display = "block";
}

function calcExp() {
    let total = 0;
    for (i = 0; i < description.length; i++) {
        total = description[i].number + total;
    }
    balupdate(total);
}

function balupdate(total) {
    balance.innerText =
    parseInt(mybudamt.innerText) - parseInt(total);
}



 























