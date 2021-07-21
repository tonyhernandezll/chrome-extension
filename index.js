// function saveLead() {
//   console.log("button clicked from onclick action");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el"); // 2. Grab the unordered list and store it in a const variable called ulEl


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); //one way to add a value from input field and to push it into the empty array
  renderLeads();
});


function renderLeads() {
  let listItems = "";
  // Render the leads in the unordered list using ulEl.textContent
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li> "; //  Add the item to the listItems variable instead of the ulEl.innerHTML
    console.log(myLeads[i]);
  }
  
  //  Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;

}