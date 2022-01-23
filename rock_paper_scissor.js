var score = 0;
var opponent = 0;

//const myinterval = setInterval((score)=>{
//    document.getElementById("score").innerHTML = score;
//})

function generate_response (choice) {
    let possibilities = ["Rock","Paper","Scissors"];
    let a = possibilities[Math.floor(Math.random()*3)];
    console.log(a)

    
    
    if (choice=="Rock"){
        if (a == "Rock"){
            document.getElementById("sentence").innerHTML="Rock on Rock <br> It is a tie";
        }
        else if (a == "Paper"){
            document.getElementById("sentence").innerHTML="Paper covers the Rock <br> You loose";
            opponent += 1;
            document.getElementById("score").innerHTML = score + ":" + opponent;
        }
        else{
            document.getElementById("sentence").innerHTML="Rock beats the Scissor <br> You WIN!!";
            score += 1;
            document.getElementById("score").innerHTML = score + ":" + opponent;
        }
    }

    if (choice=="Paper"){
        if (a == "Paper"){
            document.getElementById("sentence").innerHTML="Paper on Paper <br> It is a tie";
        }
        else if (a == "Rock"){
            document.getElementById("sentence").innerHTML="Paper covers the Rock <br> You WIN!!";
            score += 1;
            document.getElementById("score").innerHTML = score + ":" + opponent;
        }
        else{
            document.getElementById("sentence").innerHTML="Scissor cuts the Paper <br> You loose";
            opponent += 1;
            document.getElementById("score").innerHTML = score + ":" + opponent;
        }
    }

    if (choice=="Scissor"){
        if (a == "Scissors"){
            document.getElementById("sentence").innerHTML="Scissor on Scissor <br> It is a tie";
        }
        else if (a == "Paper"){
            document.getElementById("sentence").innerHTML="Scissor cuts the Paper <br> You WIN!!";
            score += 1;
            document.getElementById("score").innerHTML = score + ":" + opponent;
        }
        else{
            document.getElementById("sentence").innerHTML="Rock beats the Scissor <br> You loose";
            opponent += 1;
            document.getElementById("score").innerHTML = score + ":" + opponent;
        }
    }
    




    
}