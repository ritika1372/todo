Btn = document.querySelector("button"); // Use uppercase for consistency
ul = document.querySelector("ul");
input = document.querySelector("input");

Btn.addEventListener("click", function() {
  // Create the list item element
  let item = document.createElement("li");

  // Ensure input value is not empty before creating list item
  if (input.value !== "") {
    // Set the list item text content
    item.innerText = input.value;

    // Create the delete button element
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";  // Consistent capitalization
    delBtn.classList.add("delete");  // Add the class for styling

    // Append the delete button to the list item
    item.appendChild(delBtn);

    // Append the list item to the unordered list
    ul.appendChild(item);

    // Clear the input field
    input.value = "";
  } else {
    // Handle empty input value (optional)
    console.error("Please enter a value to add to the list.");
  }
});

ul.addEventListener("click", function(event) {
  // Check if the clicked element is the "delete" button using class checking
  if (event.target.classList.contains("delete")) {
    // Get the list item element that contains the delete button
    let listItem = event.target.parentElement;

    // Remove the list item from the unordered list
    listItem.remove();

    console.log("Item deleted");  // Optional feedback
  }
});
