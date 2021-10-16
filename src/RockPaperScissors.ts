function gameRPS(player1:string, player2:string) {
    if(player1 == "rock" && player2 == "scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock"){
       return "Player one wins";
       }
        if(player2 == "rock" && player1 == "scissors" || player2 == "scissors" && player1 == "paper" || player2 == "paper" && player1 == "rock"){
            return "Player two wins";
        }
        return "Tie";

}
console.log(gameRPS("rock", "scissors"));