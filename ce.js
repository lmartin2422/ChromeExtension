// VARIABLES
let myLeads = []  // array that stores user input from html
const inputEl = document.getElementById("input-el")  // input entry field
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {  // chrome API language
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))  // allows items to be save despite refreshing the page
        render(myLeads)
    })
})


function render(leads) {  // function to display items of the array in an ul in html
    let listItems = " "
    for(let i = 0; i < leads.length; i++) { 
        listItems += // below is a string literal version of the code right after it
             `<li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]} 
                </a>
            </li>
            `
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"  
        // <a> makes the input a hyperlink if applicable & <li> list the input
        // target='_blank' opens the link in a new tab

    }
    ulEl.innerHTML = listItems  // displays items in html as a unordered list  
}

deletebtn.addEventListener("dblclick", function() {
    localStorage.clear
    myLeads = []
    render(myLeads)
})



// Doing addEventListener instead of onclick -- practice
// What user types in input gets saved here and pushed into an array
inputBtn.addEventListener("click", function() {  // alternative way to do "onclick" ("onclick" not needed in html) 
    myLeads.push(inputEl.value)  // .value saves the value of the input from html
    inputEl.value = " "  // clears the input field
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(myLeads + "-- Button Clicked from addEventListener")

})
