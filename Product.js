// Get elements for product container and search input
var productContainer = document.getElementById("Product-container");
var search = document.getElementById("Search");
var productList = productContainer.querySelectorAll("div");

// Add event listener for search input field
search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); // Get the entered value

    // Loop through each product div and filter based on entered search value
    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h1").textContent; // Get product name from h1

        // If the product name doesn't match the entered search term, hide it
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block"; // Show matching product
        }
    }
});
