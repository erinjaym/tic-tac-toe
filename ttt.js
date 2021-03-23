


//module attempt
const gameMat = (function () 
{
    //var _privateThings = "private";

    let theGameMat = new Array(9);
    const initialize = () => theGameMat.fill("empty", 0, 9);


  //  const playerSpotX = "X";
   // const playerSpotY = "Y";
   // const emptySpace = "empty";

   const display = () =>
    {
        for(rows = 0; rows <= 3; rows++ )
        {
            const square = document.createElement('div');
            square.className = "square";
            //add marker to array as empty? 
           // make each row;
            //draw shit on screen;

            for (columns = 0; columns <=3; columns++)
            {
                //make each column in each row;
                //draw shit on screen;
            }
        }
    }

  //  function _privateMethod () 
  //  {
  //      console.log("private");
  //  }


 //   return 
  //  { somethingPublic: function ()
  //      {console.log("someshit for the world!");}
  //  }
  return { initialize, display,}; // add gameMat if you want to check array is correct // these Items are public

}) ();



gameMat.initialize(); // makes a blank board on start 
gameMat.display(); // makes initial display on screen







// function factory 
const playerFactory = (selection) => 
{
    let playerSelection = selection;

    const saySayonara = () => console.log("Kiss your ass goodbye");
    return {name, saySayonara};
}