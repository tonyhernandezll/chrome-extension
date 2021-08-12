// function saveLead() {
//   console.log("button clicked from onclick action");
// }
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el"); // 2. Grab the unordered list and store it in a const variable called ulEl
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const tabBtn = document.getElementById("tab-btn");


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
];

tabBtn.addEventListener("click", function() {
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads) );
  render(myLeads);
});


function render(leads) {
  let listItems = "";
  // Render the leads in the unordered list using ulEl.textContent
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `;
    console.log(myLeads[i]);
  }
  
  //  Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;

}


deleteBtn.addEventListener("dblclick", function() {
  console.log("double clicked");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); //one way to add a value from input field and to push it into the empty array
  inputEl.value = ""; // to clear the value inside the input field after each input is saved
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //saving leads to localStorage
  render(myLeads);
  
});


