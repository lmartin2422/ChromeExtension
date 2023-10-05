// Create a function that takes a single parameter, an array
// Log all the items of the array to the console
// Call the function while passing in myCourses as an argument

let myCourses = ["myUno", "myDos", "myTres"]
function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
logItems(myCourses)


//  Save a value to localStorage
//  Delete your code and refresh the page
//  Fetch your value from the localStorage

localStorage.setItem("myCredits", "100")
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)