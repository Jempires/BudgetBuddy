
const budamt = document.getElementById("budamt");
const budnamamt = document.getElementById("budnamamt");

const mybudamt = document.getElementById("mybudamt");
const balance = document.getElementById("balance");

 
function inputbudget(budamt) {
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
let