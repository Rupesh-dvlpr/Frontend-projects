function generateBill(){
    
    //GET CUSTOMER NAME

    let customerName = prompt("Enter your name");
    if(customerName === null || customerName === ""){
        alert("Customer Name is required!!!");
        return;
    }

    //SELECT FOOD CATEGORY

    let category = +prompt("Select food Category: \n1. Starter\n2.Main Course\n3.Desserts");
    let foodItem;
    let categoryName;
    let price = 0;

    //SELECT A STARTER

    if(category === 1){
        categoryName = "Starters";
        let choice = +prompt("select starter: \n 1. Veg Manchurian - Rs. 120\n2.Paneer Tikka - Rs. 180");
        if(choice === 1){
            foodItem = "Veg Manchurian";
            price = 120;
        }else if(choice === 2){
            foodItem = "Panner Tikka";
            price = 180;
        }else{
            document.write(`
                <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROYAL RESTAURANT</title>
    <link rel="icon" href="images/logo.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
</head>
<body>
    <main>
        <div class="container">
            <div><i class="bi bi-emoji-smile-fill"></i></div>
            <h1>ROYAL RESTAURANT</h1>
            <hr>
            <h1>Invalid Food Item!!!</h1>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
                `);
                return;
        }
    }

    // SELECT A MAIN COURSE

    else if(category === 2){
        categoryName = "Main Course";
        let choice = +prompt("select Main course: \n 1. Veg Biryani - Rs. 200\n 2. Chicken Biryani - Rs. 250");
        if(choice === 1){
            foodItem = "Veg Biryani";
            price = 200;
        }else if(choice === 2){
            foodItem = "Chicken Biryani";
            price = 250;
        }else{
            document.write(` <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROYAL RESTAURANT</title>
    <link rel="icon" href="images/logo.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
</head>
<body>
    <main>
        <div class="container">
            <div><i class="bi bi-emoji-smile-fill"></i></div>
            <h1>ROYAL RESTAURANT</h1>
            <hr>
            <h1>Invalid Food Item!!!</h1>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>`);

        }
    }

    //SELECT A DESSERT

    else if(category === 3){
        categoryName = "Desserts";
        let choice = +prompt("select Desserts: \n 1. Ice Cream - Rs. 80\n 2. Brownie - Rs. 120");
        if(choice === 1){
            foodItem = "Ice Cream";
            price = 80;
        }else if(choice === 2){
            foodItem = "Brownie";
            price = 120;
        }else{
            document.write(` <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROYAL RESTAURANT</title>
    <link rel="icon" href="images/logo.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
</head>
<body>
    <main>
        <div class="container">
            <div><i class="bi bi-emoji-smile-fill"></i></div>
            <h1>ROYAL RESTAURANT</h1>
            <hr>
            <h1>Invalid Food Item!!!</h1>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>`);
          
        }
    }

    //CHECK THE CATEGORY

    else{
        document.write(` <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROYAL RESTAURANT</title>
    <link rel="icon" href="images/logo.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
</head>
<body>
    <main>
        <div class="container">
            <div><i class="bi bi-emoji-smile-fill"></i></div>
            <h1>ROYAL RESTAURANT</h1>
            <hr>
            <h1>Invalid Food Item!!!</h1>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>`);
            
    }

    //GET QUANTITY AND CALCULATE TOTAL

   if(price > 0){
    let quantity = +prompt("Quantity");
    let totalAmount = price * quantity;
    let discount = 0;
    if(totalAmount < 500){
        discount = 0;
    }else if(totalAmount >= 500 && totalAmount < 1000){
        discount = totalAmount * 0.05;
    }else if(totalAmount >= 1000 && totalAmount < 2000){
        discount = totalAmount * 0.1;
    }else if(totalAmount >= 2000){
        discount = totalAmount * 0.15;
    }

    let finalAmount = totalAmount - discount;
    document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROYAL RESTAURANT</title>
    <link rel="icon" href="images/logo.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
</head>
<body>
    <main>
        <div class="container">
            <div><i class="bi bi-emoji-smile-fill"></i></div>
            <h1>ROYAL RESTAURANT</h1>
            <h2>Food Bill / Invoice</h2>
            <hr>
            <h2>Customer Details</h2>
            <p>Customer Name: ${customerName}</p>
            <h2>Order Details</h2>
            <p>Category: ${categoryName}</p>
            <p>Food Item: ${foodItem}</p>
            <p>Item Price: Rs. ${price}</p>
            <p>Quantity: ${quantity}</p>
            <hr>
            <p>Total Amount : Rs. ${totalAmount}</p>
            <p>Discount Amount: Rs. ${discount}</p>
            <h2>Final Payable Amount: Rs. ${finalAmount}</h2>
            <hr>
            <h2>Thank You for Visiting Royal Restaurant!</h2>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>`);
   }else{
    return;
   }

}   

