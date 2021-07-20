// function saveLead() {
//   console.log("button clicked from onclick action");
// }
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "example.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el"); // 2. Grab the unordered list and store it in a const variable called ulEl


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); //one way to add a value from input field and to push it into the empty array
  console.log(myLeads);
});

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "; // by using innerHTML we can add the <li> elements so we can display our onrdered list
  console.log(myLeads[i]);
}