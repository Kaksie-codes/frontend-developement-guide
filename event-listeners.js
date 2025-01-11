// An event listener is a procedure in JavaScript that waits for an event to occur on a specific element, 
// like a button click, a key press, or a mouse movement. When the event happens, 
// the event listener responds by executing a specific function.



// Event listeners are essential because they allow you to make your web pages interactive. 
// Without them, your webpage would be static, with no response to user actions.



// The Basic Structure of an Event Listener
// element.addEventListener(event, function, useCapture);

// element: The HTML element you want to listen for events on.
// event: The type of event you're listening for (e.g., "click", "mouseover").
// function: The function to be executed when the event occurs.
// useCapture (optional): A Boolean value that specifies whether the event should be captured in the capturing phase or the bubbling phase.


// Common Types of Event Listeners
const button = document.getElementById("myButton");

console.log(button);

// A.) Mouse Events

// 1.) Click: Triggered when an element is clicked.

// const handleClick = () => {
//     alert("Button was clicked!");
// }

// button.addEventListener("click", handleClick);


// button.addEventListener("click", function(){
//     alert("Button was clicked using anonymous callback function!");
// });


// 2.) dblclick: Triggered when an element is double-clicked.
// button.addEventListener("dblclick", function() {
//     alert("Button was double-clicked!");
//   });

// 3.) mouseover: Triggered when the mouse pointer is moved over an element.

// button.addEventListener("mouseover", function() {
//   button.style.backgroundColor = "red";
// });

// 4.) mouseout: Triggered when the mouse pointer is moved out of an element.

// button.addEventListener("mouseout", function() {
//   button.style.backgroundColor = "green";
// });

// B.) Keyboard Events
// 1.) keydown: Triggered when a key is pressed down.
// document.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log("Key pressed: " + event.key);
//     if(event.keyCode === 13){
//         alert('You clicked on Enter')
//     }
//     button.style.backgroundColor = "yellow";
// });

// 2.) keyup: Triggered when a key is released.
// document.addEventListener("keyup", function(event) {
//     const body = document.querySelector("body");
//     body.style.backgroundColor = "pink";
//     console.log("Key released: " + event.key);
//   });

// 3.) keypress: Triggered when a key is pressed (deprecated, use keydown or keyup).
// document.addEventListener("keypress", function(event) {
//     const body = document.querySelector("body");
//     body.style.backgroundColor = "red";
//     console.log("Key pressed: " + event.key);
//   });
  

// C.) Form Events
// 1.) submit: Triggered when a form is submitted.
const form = document.getElementById("myForm");
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevents the form from being submitted
//   alert("Form submitted!");
// });

// 2.) change: Triggered when the value of an input element changes.
// const input = document.getElementById("name");
// console.log(input);
// // console.log("Value: " + input.value);

// input.addEventListener("input", function(e) {
//   console.log(e.target);  
//   console.log("Input value changed: " + e.target.value);  
// });

// 3.) focus: Triggered when an element (like an input) gains focus.
// const input = document.getElementById("myInput");
// input.addEventListener("focus", function() {
//   input.style.backgroundColor = "yellow";
// });

// 4.) blur: Triggered when an element loses focus.
// const input = document.getElementById("myInput");
// input.addEventListener("blur", function() {
//   input.style.backgroundColor = "";
// });


// D.) Window Events
// 1.) load:Triggered when the entire page has loaded.
// window.addEventListener("load", function() {
//     alert("Page has fully loaded!");
//   });

// 2.) resize: Triggered when the browser window is resized.
// window.addEventListener("resize", function() {
//     console.log("Window resized to: " + window.innerWidth + "x" + window.innerHeight);
//   });

// 3.) scroll: Triggered when the user scrolls the page.
// window.addEventListener("scroll", function() {
//     console.log("Page scrolled!");
//   });



// Removing Event Listeners
function handleClick() {
    alert("Button clicked!");
  }
  
  
  button.addEventListener("click", handleClick);
  
  // Later, remove the event listener
  button.removeEventListener("click", handleClick);
  
  

  



  
  



