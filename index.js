// function saveLead() {
//   console.log("button clicked from onclick action");
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el"); // 2. Grab the unordered list and store it in a const variable called ulEl


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value); //one way to add a value from input field and to push it into the empty array
  inputEl.value = ""; // to clear the value inside the input field after each input is saved
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //saving leads to localStorage
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});


function renderLeads() {
  let listItems = "";
  // Render the leads in the unordered list using ulEl.textContent
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `;
    console.log(myLeads[i]);
  }
  
  //  Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;

}