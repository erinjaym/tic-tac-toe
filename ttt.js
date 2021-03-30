const gameMat = (function () 
{
    let lastPlayer = "placeholder"
    let theGameMat = new Array(9);
    const initialize = () => theGameMat.fill("empty", 0, 9);
    const playerSelectLocation = (playersName, playersWeapon, matLocation) =>  { 
        if (theGameMat[matLocation] == "X" || theGameMat[matLocation] == "O" )
        {
            alert("That Spot is taken");
            return false; 
        }

        else 
        {
            lastPlayer = playersName;
            const square = document.getElementById(matLocation);
            square.textContent = playersWeapon;
            theGameMat[matLocation] = playersWeapon;
            tieCheck(); // checks for ties and winners
            return true;
        }
    }
    
   const display = () =>
    {
        let gameMatTracker = 0; 
        for(rows = 0; rows <= 2; rows++ )
        {
            
            for (columns = 0; columns <= 2; columns++)
            {
                const square = document.createElement('div');
                square.className = "square";
                square.setAttribute("id", [gameMatTracker]); // sets ID to match location on game mat
                gameMatTracker += 1; 
                const container = document.getElementById("container");
                container.appendChild(square);
            }
        }
    }

        // winner check stops game if true!!!!! 
    function winnerCheck () 
    { 
        if (horizontalCheck() == true)
            {    
                revealWinner();
                return true;
            }
        else if (verticalCheck() == true)
        {
            revealWinner();
            return true;
        }
        else if (diagnalCheck() == true)
        {
            revealWinner();
            return true;
        }
        else 
        {
            return false;
        }

        function horizontalCheck () {
            for (let startPoint = 0; startPoint <= 6; startPoint+=3) 
            {
                let SP = startPoint;
                if (theGameMat[SP] != "empty")
                {
                    if (theGameMat[SP] == theGameMat[SP + 1] && theGameMat[SP] == theGameMat[SP + 2])
                     {
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
                if (theGameMat[VSP] != "empty") 
                {
                    if (theGameMat[VSP] == theGameMat[VSP + 3] && theGameMat[VSP] == theGameMat[VSP + 6])
                    {
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
                    return true;
                }
                else if (theGameMat[spot +2] != "empty" && theGameMat[spot + 2] == theGameMat[spot+4] && theGameMat[spot + 2] == theGameMat[spot+6])
                {
                    return true;
                }
                else 
                {
                    return false;
                }
            }

            function revealWinner ()
            {
                if (lastPlayer == "Inu") // reveal dog pic
                {
                    document.getElementById('winner-pic-crow').remove();    // remove non winners
                    document.getElementById("winner-notification").style.display = "grid"; //show winner popup
                    document.getElementById("replay-button").style.display = "grid"; // show replay button
                }
                else if (lastPlayer == "Karasu") // reveal crow pic
                {
                    document.getElementById('winner-pic-dog').remove();
                    document.getElementById("winner-notification").style.display = "grid";
                    document.getElementById("replay-button").style.display = "grid";
                }
                else 
                {
                }
            }

    } // end of winner check 

    function tieCheck () 
    {
        if (checkForEmpty() == true)    // Rule out empty spots
        {
            return false;
        }
        else if (winnerCheck() == true)  // Rule out winners 
        {
            return false;
        }
        else // theres a tie woot! 
        {
            document.getElementById("replay-button").style.display = "grid"; // show replay button
            document.getElementById('tie-notification').style.display = "grid"; // show tie notification
            return true;
        }

        function checkForEmpty(){
        for (spotCheck = 0; spotCheck <= theGameMat.length -1; spotCheck ++)
            {
                if (theGameMat[spotCheck] == "empty") 
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

        if (winnerCheck() == true) // hide player turns on win 
        {
            document.getElementById("dog").style.display = "none";
            document.getElementById("crow").style.display = "none";
        }
        else if (tieCheck() == true) // hide players if tie
        {
            document.getElementById("dog").style.display = "none";
            document.getElementById("crow").style.display = "none";
        }
        else if (player.name == "Inu") 
        {
            document.getElementById("crow").style.display = "none";
            document.getElementById("dog").style.display = "grid";
        }
        else if (player.name == "Karasu")     
        {
            document.getElementById("dog").style.display = "none";
            document.getElementById("crow").style.display = "grid";
        } 
        else  // spot for future players and basecase
        {

        }
    }
    



  return { initialize, display, playerSelectLocation, winnerCheck, playersTurnDisplay}; 
}) (); // END OF GAMEMAT MODULE



const playerMaker = (name, weapon) => {
return { name, weapon};
};


const gameController = (function ()
{
    gameMat.initialize();  
    gameMat.display();  // setup setup initial gameboard display 
    let playerOne = playerMaker("bob", "X" );
    let playerTwo = playerMaker("bill", "O");
    let playerOneWeapon = "Fists of fury";
    let playerOneName = "Not Selected";

    function createPlayers ()
    {
        if(playerOneName == "Not Selected" || playerOneWeapon == "Fists of fury") // check for selection
        {
            alert('Please choose both a character and a weapon to play.');
        }
        else
        {
        playerOne = playerMaker(playerOneName, playerOneWeapon);
        setPlayerTwo();
        document.getElementById("player-selection-container").style.display = "none"; // hide selection container
        gamePlay().startGame();
        return playerOne;
        }
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

    function setWeapon (weaponInput)
    {

        if (weaponInput == "X" )
        {

            if (document.getElementById("O").className == "player-selected") // O already selected
            {
                document.getElementById("O").className = "player-select"    // return o to unselected state
                document.getElementById("X").className = "player-selected";
                playerOneWeapon = weaponInput;
                return true;
            }
            else
            {
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
                document.getElementById("O").className = "player-selected";
                playerOneWeapon = weaponInput;
                return true;
            }
            else
            {
                document.getElementById("O").className = "player-selected";
                playerOneWeapon = weaponInput;
                return true;
            }
        }
        else 
        {
            return false; // unnsuccesful
        }

    }

    function setPlayer (playerName)
    {
        if (playerName == "Inu")
        {
            if (document.getElementById("Karasu").className = "player-selected") // check if other characters are selected and remove status
            {
                document.getElementById("Karasu").className = "player-select"; 
                document.getElementById("Inu").className = "player-selected";
                playerOneName = playerName;
                return true;
            }
            else
            {
                document.getElementById("Inu").className = "player-selected";
                playerOneName = playerName;
                return true;
            }

        }
        else if (playerName == "Karasu")
        {   
            if(document.getElementById("Inu").className == "player-selected")    //check for other character selections
            {
                document.getElementById("Inu").className = "player-select"; 
                document.getElementById("Karasu").className = "player-selected";
                playerOneName = playerName;
                return true;
            }
            else    // nothing selected
            {
                document.getElementById("Karasu").className = "player-selected";
                playerOneName = playerName;
                return true;
            }

        }
        else 
        {
            return false;
        }

    }

    const gamePlay = (function () 
    {
            let playerTurn = "someones turn";
            let gameBoard = document.getElementById('container'); // create gameBoard for selection

            
            let startGame = function () { 
                playerTurn = playerOne; 
                gameMat.playersTurnDisplay (playerTurn);
                gameBoard.addEventListener("click", playerSelect);
                return true;
            } 
    
        function playerSelect (e)
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
                                else 
                                {
                                } 
                            }
                        else // gameBoard said selection wasnt posible
                        {
                        }
        }

        return {startGame, playerSelect}
    }); // end of gamePlay Module


    function refreshPage ()
    {
        location.reload();
    }



    return {setWeapon, setPlayer, createPlayers, letsBegin, gamePlay, refreshPage};

}) (); // end of gameController Module