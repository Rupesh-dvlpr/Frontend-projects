function buyProduct(name, price){
    let quantity = prompt("Enter the product quantity");
    if(quantity === null){
        alert("Enter valid quantity");
        return;
    }
    quantity = Number(quantity);
    if(isNaN(quantity)){
        alert("Enter valid quantity");
        return;
    }


    let totalPrice =  price * quantity;
    alert(`Product name: ${name}
        Quantity: ${quantity}
        Total_price: ${totalPrice}`);
    let result = confirm("Do you want to confirm???");
    if(result === true){
        let customerName = prompt("Enter your name: ");
        if(customerName === null || customerName === ""){
            alert("Entered invalid name!!!");
            return;
        }
        let summary = document.getElementById("orderSummary");
        summary.innerHTML = `<h1>Order Summary</h1>
                        <p>Customer: ${customerName}</p>

                        <p>Product: ${name}</p>

                        <p>Price: ₹${price}</p>

                        <p>Quantity: ${quantity}</p>

                        <h2>Total: ₹${totalPrice}</h2>

                        <h1>Order Placed Successfully!</h1>

                        <p>Thank You for Shopping!!!</p>` 
    }else{
        let summary = document.getElementById("orderSummary");
        summary.textContent =  `Order Cancelled!!!`
    }
}