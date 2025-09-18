let form = document.getElementById("form");
let expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];
if (JSON.parse(window.localStorage.getItem('expenseList')) !== null) {
	initialState = JSON.parse(window.localStorage.getItem('expenseList'))
}

function expense(desc, amt, date) {
  return (expenseObj = {
    description: desc,
    amount: amt,
    date,
  });
}




form.addEventListener("submit", (e) => {
  e.preventDefault();
  let description = e.target.des.value;
  let amount = e.target.amt.value;
  let date = e.target.date.value;
  let newExpense = new expense(description, amount, date);
  expenseList.push(newExpense);
  console.log(expenseList);
  addToLocalStorage(expenseList)
  addExpense();
});

form.addEventListener("reset",(e)=>{
  console.log("clicked Clear");
  expenseList=[]
  addToLocalStorage(expenseList)
  document.getElementById("root").innerHTML="";
})

function addExpense() {
  let div = document.createElement("div");
  let descText = document.createElement("p");
  let amtText = document.createElement("p");
  let dateText = document.createElement("p");
  for (let i = 0; i < expenseList.length; i++) {
    descText.innerText = `Description : ${expenseList[i].description}`;
    amtText.innerText = `Amount : ${expenseList[i].amount}`;
    dateText.innerText = `Date : ${expenseList[i].date}`;
    div.appendChild(descText);
    div.appendChild(amtText);
    div.appendChild(dateText);
    div.className = "expense";
    document.getElementById("root").appendChild(div);
  }
  addToLocalStorage(expenseList)
}

const addToLocalStorage = (expenseList) => {
  localStorage.setItem('expenseList', JSON.stringify(expenseList));
}

const getFromLocalStorage = (expenseList) => {
  expenseList.forEach((expense)=>{
    addExpense();
  })
}

if (localStorage.getItem('expenseList') !== null){
  getFromLocalStorage(expenseList);
}
