const welcomeEl = document.getElementById("welcome-el")

// PARAMS WITH STRINGS
function greetUser(name, user) {

    welcomeEl.textContent = "Welcome back: " + name + "  " + user
    console.log(welcomeEl)
}

greetUser("Lead Tracker V1", "!!")

//  PARAMS WITH INTEGERS
function add(num1, num2) {
    console.log(num1 + num2)
    
}

add(3,4)
add(9, 102)

// PARAMS WITH ARRAY PRACTICE
function getFirst(arr) {
    console.log( arr[0])  // get first element in an array
}

getFirst([1,2,3])


// GRABBING TAB ID FOR EVENT LISTENER

const tabs = [
    {url: "https://www.nba.com"}
]


// TEMPLATE STRING/LITERAL PRACTICE
const recipient = "James"
const sender = "Per"
const email = `Hey ${recipient}! 
How are things? 
Cheers ${sender}`

console.log(email)



/* 
// ANOTHER WAY TO DO IT
for(let i = 0; i < myLeads.length; i++) {
    
    // A different way to do it -- textContent practice
    const liEl = document.createElement("li")  // creates an element
    liEl.textContent = myLeads[i]  // set text content
    ulEl.append(liEl)  // append to ul

}
*/

// OPEN THE BOX EXAMPLE
let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want the box open from addEventListener")
})




// INNER HTML PRACTICE
const container = document.getElementById("buy")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"  // renders a button in the div

function buy() {
    container.innerHTML +="<p>Thank you for buying</p>"  // renders in the html
}




/*
// SAVE INPUT
function saveLead() {  // traditional onclick functionality from html
    console.log("Button Clicked! -- traditonal onclick")
}
*/


// localStorage.setItem("myLeads", "www.example.com")  // stores value in localStorage can view in inspect -> applications
// console.log( localStorage.getItem("myLeads") ) // views the value stored in localStorage
// localStorage.clear()  // clears out the localStorage
// let localSSS = localStorage.getItem("myName")
// console.log(localSSS)

/*
// PARSING AN ARRAY INTO A STRING
let myLeads = `["www.arms.com"]`  // turning the array into a string so it can be used in localStorage
myLeads = JSON.parse(myLeads) // converts the string to an array -- see next line
myLeads.push("www.leads.com")  // allows a string to be added to the array
console.log(myLeads)
*/