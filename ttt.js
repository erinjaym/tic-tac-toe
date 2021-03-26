


//module attempt
const gameMat = (function () 
{
    let theGameMat = new Array(9);
    const initialize = () => theGameMat.fill("empty", 0, 9);
    const playerSelectLocation = (playersWeapon, matLocation) =>  { 
        if (theGameMat[matLocation] == "X" || theGameMat[matLocation] == "O" )
        {
            alert("That Spot is taken");
            return false; // tell gameController that not succesfull
        }

        else 
        {
            // remove existing element from display?
            const square = document.getElementById(matLocation);
            square.textContent = playersWeapon;
            //testing graphics
            //const theX = document.createElement('div');
            //theX.className = "O";
           // square.appendChild(theX);
            // square.appendChild(); for visual objects later
            // put in array to log fill
            theGameMat[matLocation] = playersWeapon;
            console.log(winnerCheck());
            return true;
        }
    }
//Glitch in display ... if manage to click parent container will crash
   const display = () =>
    {
        let gameMatTracker = 0; // keep track of game mat location may need to alter later
        for(rows = 0; rows <= 2; rows++ )
        {
            
            for (columns = 0; columns <= 2; columns++)
            {
                const square = document.createElement('div');
                square.className = "square";
                square.setAttribute("id", [gameMatTracker]); // sets ID to match location on game mat
                
                //square.textContent = theGameMat[gameMatTracker]; // add text from game mat at location matching
                gameMatTracker += 1; // newRow.setAttribute("id", [bookLocation]);   from bookLibrary?
                const container = document.getElementById("container");
                container.appendChild(square);

            }
        }
    }

    function winnerCheck () 
    {  // can improve performance by adding a quick out in inner loop
        // have winner check stop game if true!!!!! 

        //horizontal check 
       for (let startPoint = 0; startPoint <= 6; startPoint+=3) 
       {
                let SP = startPoint;
                if (theGameMat[SP] != "empty") // rule out empty
                {
                    if (theGameMat[SP] == theGameMat[SP + 1] && theGameMat[SP] == theGameMat[SP + 2])
                     {
                    document.getElementById("winner-notification").style.display = "grid";
                     return true;
                     }
                     else
                     {
                     } 
                }
                else {}
    
       }

       //vertical check 
       for (let vertPoint = 0; vertPoint <= 2; vertPoint += 1) 
       {
            let VSP = vertPoint;
            if (theGameMat[VSP] != "empty") // rule out empty
            {
                //
                if (theGameMat[VSP] == theGameMat[VSP + 3] && theGameMat[VSP] == theGameMat[VSP + 6])
                 {
                document.getElementById("winner-notification").style.display = "grid";
                 return true;
                 }
                else
                 {
                 } 
            }
            else {}

        } 

        //diagnal check
           let spot = 0; 

                if (theGameMat[spot] != "empty" && theGameMat[spot] == theGameMat[spot+4] && theGameMat[spot] == theGameMat[spot+8] )
                {
                    document.getElementById("winner-notification").style.display = "grid";
                    return true;
                }
                else if (theGameMat[spot +2] != "empty" && theGameMat[spot + 2] == theGameMat[spot+4] && theGameMat[spot + 2] == theGameMat[spot+6])
                {
                    document.getElementById("winner-notification").style.display = "grid";
                    return true;
                }
                else 
                {

                }

    }


  return { initialize, display, playerSelectLocation, winnerCheck}; // add gameMat if you want to check array is correct // these Items are public

}) ();



const playerMaker = (name, weapon) => {
    return { name, weapon};
};


gameController();
function gameController ()
{
    gameMat.initialize();  // set up initial emtyGameMat
    gameMat.display();  // set up initial gameboard
    const playerOne = playerMaker("word", "X" );
    const playerTwo = playerMaker("Inu", "O");
    let playerTurn = playerOne;  // initialize first turn 


startGame();
 function startGame () {

    document.getElementById('container').addEventListener("click", function (e)
    {

    let matLocation = e.target.id;
    let playerSelection = gameMat.playerSelectLocation(playerTurn.weapon, matLocation);


            if (playerSelection) // succesfull placement playerSelection is true
                { 
      
                    if(playerTurn == playerOne)
                    {
                        return playerTurn = playerTwo;
                    }

                    else if (playerTurn == playerTwo)
                    {
                        return playerTurn = playerOne;
                    }
                    else {} // basecase

                }
                
            else // gameBoard said nope!
            {

            }

    });

} // start game function

    

}