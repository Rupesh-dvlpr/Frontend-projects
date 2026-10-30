alert("Welcome to The Elvonis Gala VIP  Invitation Portal!");


function buttonEvent(){
   let result =  confirm("You are invited to the Elvonis Gala! \n \n Date: December 25,2026\n Time: 7:00 PM\n\n Click OK to accept the invitation.\n Click Cancel to decline.");

   if(result){
    document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE ROYAL GALA | VIP INVITATION</title>
    <link rel="stylesheet" href="../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
    <style>
        :root{
          --primary-color: #d4a01e;
          --secondary-color: rgb(145, 11, 11);
        }
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        body{
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
        }

        header{
            border-bottom: 1px solid rgb(76, 43, 43);
            padding: 30px;
            line-height: 1.5;
            letter-spacing: 2px;
            font-weight: bold;
        }
        
        header h2{
            font-family: 'Times New Roman', Times, serif;
            font-size: 28px;
            color: var(--primary-color);
        }
        
        header p{
            font-size: 12px;
            color: var(--secondary-color);
            letter-spacing: 3px;
        }
        
        img{
            width: 170px;
            transition: 2s;
        }

        img:hover{
            box-shadow: 0 0 10px rgb(113, 112, 112);
        }
        
        main{
            margin: 50px;
            border: 1px solid rgb(190, 162, 4);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0  8px rgb(159, 149, 11);
            line-height: 1.6;
        }

        h1{
            color: var(--primary-color);
            font-family: 'Times New Roman', Times, serif;
            font-size: 32px;
        }
        hr{
            border: 1px solid #ffe8ae;
            margin: 20px 30px;
           }
        main p{
            color: rgb(163, 152, 129);
            font-size: 14px;
            padding: 30px;
        }

        .top p{
            color: red;
            font-family: 'Times New Roman', Times, serif;
            font-size: 12px;
            letter-spacing: 3px;
        }

        .top i{
            color: red;
        }

        h3{
            color: #d4a01e;
            font-family: 'Times New Roman', Times, serif;
            font-style: italic;
        }

        .line
        {
            width: 100px;
            height: 2px;
            background-color: var(--secondary-color);
            margin: auto;
            margin-bottom: 10px;
        }

        table{
            width: 100%;
            text-align: center;
        }

        table p{
            color: var(--secondary-color);
        }

        table h3{
            color: white;
        }
        
        .foot p{
            color: gray;
        }

        .foot p:first-child{
            color: var(--primary-color);
            font-style: italic;
            font-family: 'Times New Roman', Times, serif;
            font-size: 18px;
        }

        .foot button{
            background-color: var(--secondary-color);
            width: 100%;
            padding: 15px;
            border: 1px solid var(--primary-color);
            color: white;
            font-weight: bold;
            border-radius: 5px;
        }

        footer p{
            text-align: center;
            color: gray;
            font-size: 12px;
            padding: 30px;
        }

    </style>
</head>
<body>
    <main>
        <section class="top">
            <p><i class="bi bi-stars"></i>ELVONIS EVENTS<i class="bi bi-stars"></i></p>
            <h1>INVITATION ACCEPTED</h1>

            <h3>YOU ARE ON THE VIP GUEST LIST!</h3>
        </section>
        <section class="bottom">
           <hr>
            <p>Event: The Elvonis Gala</p>
            <p>Date: December 12, 2026</p>
            <p>Time: 7:00 PM Onwards</p>
            <p>Venue: The Grand Palace</p>
            <p>Thank you for accepting our invitation. We look forward to welcoming you.</p>
        </section>
            <section class="foot">
            <a href="index.html">
                    <button type="button">BACK TO INVITATION<i class="bi bi-arrow-up-right"></i> </button>
            </a>    
            </section>
    </main>

    <footer>
        <p>© 2026 ELVONIS Events | Private Celebration</p>
    </footer>
</body>
</html>`)
   }else{
    document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE ROYAL GALA | VIP INVITATION</title>
    <link rel="stylesheet" href="../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css">
    <style>
        :root{
          --primary-color: #d4a01e;
          --secondary-color: rgb(145, 11, 11);
        }
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        body{
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
        }

        header{
            border-bottom: 1px solid rgb(76, 43, 43);
            padding: 30px;
            line-height: 1.5;
            letter-spacing: 2px;
            font-weight: bold;
        }
        
        header h2{
            font-family: 'Times New Roman', Times, serif;
            font-size: 28px;
            color: var(--primary-color);
        }
        
        header p{
            font-size: 12px;
            color: var(--secondary-color);
            letter-spacing: 3px;
        }
        
        img{
            width: 170px;
            transition: 2s;
        }

        img:hover{
            box-shadow: 0 0 10px rgb(113, 112, 112);
        }
        
        main{
            margin: 50px;
            border: 1px solid rgb(169, 30, 5);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0  8px rgb(236, 5, 1);
            line-height: 1.6;
        }

        h1{
            color: var(--primary-color);
            font-family: 'Times New Roman', Times, serif;
            font-size: 32px;
        }
        hr{
            border: 1px solid #ffe8ae;
            margin: 20px 30px;
           }
        main p{
            color: rgb(163, 152, 129);
            font-size: 14px;
            padding: 30px;
        }

        .top p{
            color: gray;
            font-family: 'Times New Roman', Times, serif;
            font-size: 16px;
        }

        .top i{
            color: red;
        }

        h3{
            color: #d4a01e;
            font-family: 'Times New Roman', Times, serif;
            font-style: italic;
        }


        .foot button{
            background-color: var(--secondary-color);
            width: 100%;
            padding: 15px;
            border: 1px solid var(--primary-color);
            color: white;
            font-weight: bold;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <main>
        <section class="top">
            <p><i class="bi bi-stars"></i>ELVONIS EVENTS<i class="bi bi-stars"></i></p>
            <h1>INVITATION RESPONSE</h1>

            <h3>INVITATION DECLINED</h3>
            <p>You have declined the invitation to The Elvonis Gala.</p>
            <p>Thank you for responding. We hope to welcome you at another event.</p>
            <section class="foot">
                <a href="index.html">
                    <button type="button">BACK TO INVITATION<i class="bi bi-arrow-up-right"></i> </button>
                </a>
                </section>
    </main>

    <footer>
        <p>© 2026 ELVONIS Events | Private Celebration</p>
    </footer>
</body>
</html>`)
   }
}