// JavaScript to handle clicking on the wishlist icon
document.addEventListener('DOMContentLoaded', function() {
    // Get all wishlist icons
    var wishlistIcons = document.querySelectorAll('.wishlist-icon');

    // Loop through each wishlist icon
    wishlistIcons.forEach(function(icon) {
        // Add click event listener to each icon
        icon.addEventListener('click', function() {
            // Toggle the 'active' class when the icon is clicked
            this.classList.toggle('active');
        });
    });
});

// JavaScript to handle "Add to Cart" button click event and toggle button text
document.addEventListener('DOMContentLoaded', function() {
    // Get all "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Loop through each "Add to Cart" button
    addToCartButtons.forEach(function(button) {
        // Add click event listener to each button
        button.addEventListener('click', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Toggle button text between "Product Added" and "Add to Cart"
            if (this.textContent === 'Product Added') {
                this.textContent = 'Add to Cart';
                this.classList.remove('product-added');
            } else {
                this.textContent = 'Product Added';
                this.classList.add('product-added');
            }
        });
    });
});

