//Document Object Model

/*
    *DOM is the data representation of the objects that comprise the structure and content of a document on the web. It contains, but it is not limited to:
        - Document
            - HTML
                - HEAD
                    -title
                - BODY
                    - Nav
                    - Header 
                    - Divs
                    - H1s
*/


//! Creating our very first element.
// let h1Tag = document.createElement("h1");
// h1Tag.style.color = "blue";
// h1Tag.innerText = "Welcome to the Document Object Model";
// document.body.appendChild(h1Tag);

//!Accessing element using getElementByID
let listTitle = document.getElementById("listTitle")
listTitle.innerText = "Hermione's To Do &Grocery List";

//!Accessing elements using querySelector
/*
    - Most versatile of all selectors
        - Accesses first element if there's more than one
        - returns null if no element is found
        - access by element name, .class or #id
*/
// let listItem = document.querySelector("ul li")
let listItem = document.querySelector(".listItem")
console.log(listItem)
listItem.style.textAlign = "center";

//! Accessing multiple elements
/*
    when we access multiple elements a node list is returned.
    
    HTMLCollection
        - Not an array, but works like one
        - Can access different nodes using []
        - Can also access with .item()

    access multiple elements using:
        - getElementsByClassName()
        - getElementsByTafName()
        -querySelectorAll()
*/
let groceries = document.getElementsByClassName("groceryItem")
console.log(groceries[0])
groceries[0].innerText = "Mamdrake"

//Accessing all li tags in our index.html file
let allLists = document.getElementsByTagName("li")
console.log(allLists);

//return all elements that matches the selector in a node list, which is not dynamic like an HTMLCollection
let selectAll = document.querySelectorAll("ul li")
console.log(selectAll)

//!DOM Tree and Access Nodes

//Displays ALL nodes of the body element and returns in a node list, even considers white space and text as nodes. So all can be accessed w index numbers starting a 0
console.log(document.body.childNodes)

console.log(document.body.children)
/*
    - firstElementChild - first element of node
    - lastElementChild - last element of node
    - parentElementNode - access parent node of element
    - nextElementSibling - element next to the one accessed
    - previousElementSibling - previous to the one accessed

*/

let listDiv = document.getElementById("list")
console.log(listDiv.firstChild)


//!Changing multiple tags
for (li of allLists) {
    li.style.color = "blue";
}

document.getElementsByClassName("listItem")[4].innerText = "Yell at Harry"

//!Even Listeners
/*
    Event listener allows us to execute a function when a particular even occurs. we call it using .addEventListener()
        - addEventListener takes an event and a callback function to
        - Event => what happens
        - Callback function => function that executes when the event occurs
*/




let button = document.querySelector("#clickMe");



button.addEventListener("click", (e) => {
//Creating new child element
let newItem = document.createElement("li")

//Grabbing value from the input field
let todoInput = document.querySelector("#listInput").value //! Gotta grab value of input

//Grabbing the parent of the grocery list items
let groceryList = document.querySelector("#groceryList")

//Assigning value of input to the new grocery item
newItem.innerText = todoInput;

//Appending the new item to the parent grocery list
groceryList.appendChild(newItem);
})


                               

