function addToCart(event) {
    event.preventDefault(); // Prevent the default action of the link
    
    // Retrieve relevant product information
    const item = event.target.closest('.category__item'); // Find the closest parent element with class 'category__item'
    const productName = item.querySelector('.category__item-description p').textContent.trim();
    const price = item.querySelector('.category__item-price span').textContent.trim();

    // Example: You can log or display the product details for verification
    console.log(`Adding ${productName} to cart for ${price}`);

    // Example: Implement logic to update the cart (you can store items in an array, localStorage, etc.)
    // For demonstration, let's assume 'cart' is an array storing cart items
    const cartItem = {
        name: productName,
        price: price,
        quantity: 1 // You might want to include quantity or other details
    };

    // Example: Push the cart item into the 'cart' array
    cart.push(cartItem);

    // Example: Show a SweetAlert to notify the user that the item has been added to the cart
    Swal.fire({
        icon: 'success',
        title: 'Đã thêm vào giỏ hàng!',
        text: `${productName} đã được thêm vào giỏ hàng của bạn.`,
        showConfirmButton: false,
        timer: 1500 // Hides after 1.5 seconds
    });

    // You can also redirect the user to the cart page or update a mini cart UI here
}
