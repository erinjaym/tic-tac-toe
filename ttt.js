


//module attempt
const gameMat = (function () 
{
    let lastPlayer = "ChoMama"
    let theGameMat = new Array(9);
    const initialize = () => theGameMat.fill("empty", 0, 9);
    const playerSelectLocation = (playersName, playersWeapon, matLocation) =>  { 
        if (theGameMat[matLocation] == "X" || theGameMat[matLocation] == "O" )
        {
            alert("That Spot is taken");
            return false; // tell gameController that not succesfull
        }

        else 
        {
            lastPlayer = playersName;
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
            tieCheck();
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
        if (horizontalCheck() == true)
            {
                return true;
            }
        else if (verticalCheck() == true)
        {
            return true;
        }
        else if (diagnalCheck() == true)
        {
            return true;
        }
        else {return false;}

        function horizontalCheck () {
            for (let startPoint = 0; startPoint <= 6; startPoint+=3) 
            {
                let SP = startPoint;
                if (theGameMat[SP] != "empty") // rule out empty
                {
                    if (theGameMat[SP] == theGameMat[SP + 1] && theGameMat[SP] == theGameMat[SP + 2])
                     {
                        let winner = lastPlayer;
                        console.log(winner);
                    // document.getElementById("winner").appendChild();  // when picture is available
                        document.getElementById("winner").textContent = lastPlayer;
                        document.getElementById('players-turn').style.display = "none"; 
                        document.getElementById("winner-notification").style.display = "grid";
                        gameController.endGame();
                        return true;
                     }
                    else
                     {
                     } 
                }
                else 
                {

                }
            }
        }

        function verticalCheck () {
            for (let vertPoint = 0; vertPoint <= 2; vertPoint += 1) 
            {
                let VSP = vertPoint;
                if (theGameMat[VSP] != "empty") // rule out empty
                {
                    if (theGameMat[VSP] == theGameMat[VSP + 3] && theGameMat[VSP] == theGameMat[VSP + 6])
                    {
                        let winner = lastPlayer;
                        console.log(winner);
                        document.getElementById("winner").textContent = lastPlayer;
                        document.getElementById('players-turn').style.display = "none";
                        document.getElementById("winner-notification").style.display = "grid";
                        return true;
                    }
                    else
                    {
                    } 
                }
                else 
                {
                }

            } 
        }

        function diagnalCheck () {
            let spot = 0; 
                if (theGameMat[spot] != "empty" && theGameMat[spot] == theGameMat[spot+4] && theGameMat[spot] == theGameMat[spot+8] )
                {
                    let winner = lastPlayer;
                    console.log(winner);
                    document.getElementById("winner").textContent = lastPlayer;
                    document.getElementById('players-turn').style.display = "none";
                    document.getElementById("winner-notification").style.display = "grid";
                    return true;
                }
                else if (theGameMat[spot +2] != "empty" && theGameMat[spot + 2] == theGameMat[spot+4] && theGameMat[spot + 2] == theGameMat[spot+6])
                {
                    let winner = lastPlayer;
                    console.log(winner);
                    document.getElementById("winner").textContent = lastPlayer;
                    document.getElementById('players-turn').style.display = "none";
                    document.getElementById("winner-notification").style.display = "grid";
                    return true;
                }
                else 
                {
                    return false;
                }
            }

    }

    function tieCheck () 
    {
        console.log("tieCheck");

        if (checkForEmpty() == true)
        {
            return false;
        }
        else if (winnerCheck() == true) 
        {
            return false;
        }
        else // theres a tie woot! 
        {
            document.getElementById('tie-notification').style.display = "grid";
            return true;
        }

        function checkForEmpty(){
        for (spotCheck = 0; spotCheck <= theGameMat.length -1; spotCheck ++)
            {
                if (theGameMat[spotCheck] == "empty") // game not over found empty spot
                {
                    return true; 
                }
                else
                {
                }
            }
        }

      
    }
    


    function playersTurnDisplay (player)
    {

      if (player.name == "Inu") 
      {

        document.getElementById("crow").style.display = "none";// need to fix in the am
        document.getElementById("dog").style.display = "grid";

      }
      else if (player.name == "Karasu")     
      {
        document.getElementById("dog").style.display = "none";
        document.getElementById("crow").style.display = "grid";// need to fix in the am
      } 
      else  // bascase // add more players later
      {
      return "No player to have a turn"
      }
    }
    



  return { initialize, display, playerSelectLocation, winnerCheck, playersTurnDisplay}; // add gameMat if you want to check array is correct // these Items are public

}) ();





const playerMaker = (name, weapon) => {
return { name, weapon};
};







const gameController = (function ()
{
    gameMat.initialize();  // set up initial emtyGameMat
    gameMat.display();  // set up initial gameboard
    let playerOne = playerMaker("bob", "X" );
    let playerTwo = playerMaker("bill", "O");
    let playerOneWeapon = "Fists of fury";
    let playerOneName = "Not Selected";

    function createPlayers ()
    {
        playerOne = playerMaker(playerOneName, playerOneWeapon);
        setPlayerTwo();
        document.getElementById("player-selection-container").style.display = "none";
        startGame(); // may move to later on in 
        return playerOne;
    }

    function letsBegin ()
    {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("player-selection-container").style.display = "grid";
    return true;
    }


    function setPlayerTwo ()
    {
        let playerTwoName = "";
            if (playerOneName == 'Inu')
            {
             playerTwoName = "Karasu";   
            }
            else
            {
                playerTwoName = "Inu";
            }

            let playerTwoWeapon = "";
            if (playerOneWeapon == 'X')
            {
               playerTwoWeapon = "O"; 
            }
            else 
            {
               playerTwoWeapon = "X"; 
            }
        

        playerTwo = playerMaker(playerTwoName, playerTwoWeapon);
        return playerTwo;
    }


    // save variable input as weapon
    // change weapon select class to activate  (disapble hoovering)

    function setWeapon (weaponInput)
    {

        if (weaponInput == "X" )
        {

            if (document.getElementById("O").className == "player-selected") // if O already selected
            {
            document.getElementById("O").className = "player-select"
            console.log("X");
            document.getElementById("X").className = "player-selected";
            playerOneWeapon = weaponInput;
            return true;
            }
            else
            {
                console.log("X");
                document.getElementById("X").className = "player-selected";
                playerOneWeapon = weaponInput;
                return true;
            }
        }
        else if (weaponInput == "O")
        {
            if (document.getElementById("X").className == "player-selected") //x already selected
            {
                document.getElementById("X").className = "player-select"; // return x to unselected state
                console.log("O");
                document.getElementById("O").className = "player-selected";
                playerOneWeapon = weaponInput;
                return true;
            }
            else
            {
                console.log("O");
                document.getElementById("O").className = "player-selected";
                playerOneWeapon = weaponInput;
                return true;
            }

        }
        else 
        {
            return false;
        }

    }

    function setPlayer (playerName)
    {
        if (playerName == "Inu")
        {
            if (document.getElementById("Karasu").className = "player-selected") // check if other characters are selected
            {
                document.getElementById("Karasu").className = "player-select"; // unselect karasu 
                document.getElementById("Inu").className = "player-selected";
                playerOneName = playerName;
                console.log('playername is :' + playerOneName);
                return true;
            }
            else
            {
                document.getElementById("Inu").className = "player-selected";
                playerOneName = playerName;
                console.log('playername is :' + playerOneName);
                return true;
            }

        }
        else if (playerName == "Karasu")
        {   
            if(document.getElementById("Inu").className == "player-selected")    //check for other character selections
            {
                document.getElementById("Inu").className = "player-select"; // de select Inu character
                document.getElementById("Karasu").className = "player-selected";
                playerOneName = playerName;
                console.log('playername is :' + playerOneName);
                return true;
            }
            else    // nothing selected
            {
                document.getElementById("Karasu").className = "player-selected";
                playerOneName = playerName;
                console.log('playername is :' + playerOneName);
                return true;
            }

        }
        else 
        {
            return false; // didnt complete
        }

    }


    
    function startGame () {
        let playerTurn = playerOne; // Initialize starting turn. 
      gameMat.playersTurnDisplay (playerTurn); // Initialize display for first player
  
 

        var select = document.getElementById('container').addEventListener("click", function playerSelect(e)
        {

        let matLocation = e.target.id;


        let playerSelection = gameMat.playerSelectLocation(playerTurn.name, playerTurn.weapon, matLocation);


                if (playerSelection) // succesfull placement playerSelection is true
                    { 
      
                        if(playerTurn == playerOne)
                        {
                        gameMat.playersTurnDisplay(playerTwo); // changes display with player swap
                        return playerTurn = playerTwo;
                        }

                        else if (playerTurn == playerTwo)
                        {
                         gameMat.playersTurnDisplay(playerOne); // changes display with player swap
                         return playerTurn = playerOne;
                        }
                        else {

                        } // basecase

                    }
                
                else // gameBoard said nope!
                {

                }

        });





    } // start game function    


    function endGame ()
    {
        //document.getElementById('container').removeEventListener("click", selectShit, select );
        // remove listeners from game board
        // populate a reset or play again button 
        //

    }

    return {setWeapon, setPlayer, createPlayers, letsBegin, endGame};

}) (); // game Controller module end 