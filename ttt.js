


//module attempt
const gameMat = (function () 
{

    let theGameMat = new Array(9);
    const initialize = () => theGameMat.fill("empty", 0, 9);
    const playerSelection = (playersWeapon, matLocation) =>  { 
        if (theGameMat[matLocation] == "X" || theGameMat[matLocation] == "O" )
        {
            alert("That Spot is taken");
        }

        else 
        {
            theGameMat[matLocation] = playersWeapon;
        }
    }

    const playerWeapon = (weapon) => player.weapon = weapon; // this to player factory?

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


  return { initialize, display,}; // add gameMat if you want to check array is correct // these Items are public

}) ();

gameMat.initialize(); // makes a blank board on start 
gameMat.display(); // makes initial display on screen



const playerFactory = (selection) => 
{
    //const name = playerName;
  //  const playerWeaponChoice =>    // x or 0 selection 
   // let playerSelection = selection;

    const saySayonara = () => console.log("Kiss your ass goodbye");
    return {saySayonara};
}


document.getElementById('container').addEventListener("click", function (e)
{
let matLocation = e.target.id;
console.log(matLocation);
// send matLocation to a function that adds to the mat  and which player?? ..> playerSelection(matLocation);
});