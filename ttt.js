


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
            // square.appendChild(); for visual objects later
            // put in array to log fill
            console.log(theGameMat[matLocation]);
            theGameMat[matLocation] = playersWeapon;
            return true;
        }
    }

   const display = () =>
    {
        let gameMatTracker = 0; // keep track of game mat location may need to alter later
        for(rows = 0; rows <= 2; rows++ )
        {
            
            //add marker to array as empty? 

            for (columns = 0; columns <= 2; columns++)
            {
                const square = document.createElement('div');
                square.className = "square";
                square.setAttribute("id", [gameMatTracker]); // sets ID to match location on game mat
                square.textContent = theGameMat[gameMatTracker]; // add text from game mat at location matching
                gameMatTracker += 1; // newRow.setAttribute("id", [bookLocation]);   from bookLibrary?
                const container = document.getElementById("container");
                container.appendChild(square);

            }
        }
    }

    function winnerCheck () 
    {  // can improve performance by adding a quick out in inner loop
        //horizontal check 
       for (let startPoint = 0; startPoint <= 6; startPoint+=3) 
       {
                let SP = startPoint;
                if (theGameMat[SP] != "empty") // rule out empty
                {
                    if (theGameMat[SP] == theGameMat[SP + 1] && theGameMat[SP] == theGameMat[SP + 2])
                     {
                     return true;
                     }
                     else
                     {
                     } 
                }
                else {}
    
       }

       //vert check 
       for (let vertPoint = 0; vertPoint <= 2; vertPoint += 1) 
       {
            let VSP = vertPoint;
            console.log(VSP);
            if (theGameMat[VSP] != "empty") // rule out empty
            {
                //
                if (theGameMat[VSP] == theGameMat[VSP + 3] && theGameMat[VSP] == theGameMat[VSP + 6])
                 {
                console.log(VSP);
                 return true;
                 }
                else
                 {
                 } 
            }
            else {}

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

    // listen for player gameboard choices
    document.getElementById('container').addEventListener("click", function (e)
    {

    let matLocation = e.target.id;



       if (gameMat.playerSelectLocation(playerTurn.weapon, matLocation)) // succesfull placement
        { 

            console.log(gameMat.winnerCheck()); // check for winner after selection


            if(playerTurn == playerOne)
            {
                if (gameMat.winnerCheck()) // winner check at end of each turn
                {alert ('winner winner chicken dinner!')}
                else {
                    return playerTurn = playerTwo;
                }
            }

            else if (playerTurn == playerTwo)
            {
                if (gameMat.winnerCheck()) // winner check at end of each turn
                {alert ('winner winner chicken dinner!')}
                else{
                return playerTurn = playerOne;
                }
            }
            else {}
        }
        else // gameBoard said nope!
        {

        }
    });





// BELOW FOR GRAPHICAL INTERFACE IDEAS

    /*
// set up prompt to select players // Start Screen? 
    function getPlayerSelection () 
    {
        document.getElementById('player-selection-container').addEventListener("click", function (e){
            let playerSelection = e.target.id;
            return playerSelection;
        });
        
    }

    function getPlayerWeapon ()
    {

        document.getElementById("weapon-selection-form").style.display = "grid";
        document.getElementById('weapon-selection-form').addEventListener("click", function (e)
        {
            let selection = e.target.id;
            if (selection == "X")
            {
                document.getElementById("weapon-selection-form").style.display = "none";
                return selection;
            }
            else
            {
                document.getElementById("weapon-selection-form").style.display = "none";
                return selection;
            }
        });
    }

function playerSelectMouse () {
    document.getElementById('player-selection-container').addEventListener("click", function (e){
    const playerName = e.target.id;;
    console.log(e.target);
        // need to ad unselect one too before finished. 
        document.getElementById(e.target.id).setAttribute("class", "player-selected");
    });
}
*/
    

}