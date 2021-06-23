# **Document Object Model (DOM)**

DOM is the data representation of the objects that comprise the structure and content of a document on the web.

---


## **Selecting elements**


### Query Selector

The most versatile of all selectors

`document.querySelector("li")`

- Accesses first element, even if there's more than one

- Can access by element name, .class or #id

`documentQuerySelectorAll("li")`
- returns all elements that matches the selector in a static node list


### By Tag Name

`document.getElementsByTagName("li")`
- Fetches all elements with that tag name

- Returns a live array-like list (HTMLCollection)

- Can manipulate this array and or iterate through like any other array

`document.getElementsByTagName("li")[0]`
- Can access particular elements with []

- Can also use item() method

### By Class Name

`document.getElementsByClassName`
- select element names based on the class

- Returns a live array-like list

- Access elements in array with [] or item()

---

## **DOM Tree and Access Nodes**


- **firstElementChild** - first element of node

- **lastElementchild** - Last element of node

- **parentElementNode** - access parent node of element

- **nextElementSibling** - Element next to the one accessed

- **previousElementSibling** - previous to the one accessed

---

## **Adding Classes and Separation of Concent**



Try to keep separation of elements by adding classes in CSS and then adding them through javascript

`document.querySelector("h1").classList.add("hidden")`

- This adds hidden class

`document.querySelector("h1").classList.remove("hidden")`

- This removes hidden class

`document.querySelector("h1").classList.toggle("hidden")`

- This toggles hidden class on and off

---
## **Manipulating attributes**

`document.querySelector("a").attributes`

- Returns a list of attributes

`document.querySelector("a").getAttribute("href")`

- Gets the value of selected attribute

`document.querySelector("a").setAttribute("href", "https://www.bing.com")`

- Changes the selected attribute

---

## **Creating Elements**

document.createElement("h1")

---

## **Event Listeners**

Event listeners allows us to execute a function when a particular event occurs. We call it using `addEventListener`

- addEventListener takes an event and a callback function:
     - **Event** - What happens
     - **Callback function** - function that executes when the event occurs

`button.addEventListener("click", (e) => {})`

---

## **Appending items**

`document.querySelector("ul").appendChild(newItem)`

