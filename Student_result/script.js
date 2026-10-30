alert("Welcome to the Student Result Portal!");

function generateResult(){
    let result = confirm("Do you wan to view your examination result?");
    if(result){
        document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: gray;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container{
            background-color: white;
            width: 500px;
            padding: 20px;
            text-align: center;
            border-radius: 20px;
            box-shadow: 0px 0px 10px gray;
        }

        .result{
            color: rgb(17, 83, 17);
        }


    </style>
</head>
<body>
    <main>
        <div class = "container">
            <h1>STUDENT RESULT REPORT</h1>
            <p>Academic Year: 2026-2027</p>
            <hr>
            <p>Student Name: Bharath kumar Talluri</p>
            <p>Course: Java Full Stack</p>
            <p>Examination: Final Assessment</p>
            <p>Institute: Naresh IT</p>
            <h3 class="result">RESULT: PASS</h3>
            <p>Congratulations! Result announcement completed.</p>
        </div>
    </main>
</body>
</html>`);
    }else{
        document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: gray;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .contianer{
            background-color: white;
            width: 500px;
            padding: 20px;
            text-align: center;
            border-radius: 20px;
            box-shadow: 0px 0px 10px gray;
        }

        .result{
            color: rgb(72, 9, 9);
        }


    </style>
</head>
<body>
    <main>
        <div class = "contianer">
            <h1>STUDENT RESULT REPORT</h1>
            <p>Academic Year: 2026-2027</p>
            <hr>
            <p>Student Name: Bharath kumar Talluri</p>
            <p>Course: Java Full Stack</p>
            <p>Examination: Final Assessment</p>
            <p>Institute: Naresh IT</p>
            <h3 class="result">You cancelled the result request!!!</h3>
            <p>Congratulations! Result announcement completed.</p>
        </div>
    </main>
</body>
</html>`)
    }
}