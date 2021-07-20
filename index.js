// function saveLead() {
//   console.log("button clicked from onclick action");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); //one way to add a value from input field
  console.log(myLeads);
});