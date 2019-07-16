var crystalValues = {};
var userTotal= 0;
var random;

function game(){

crystalValues[1] = Math.floor(Math.random()*12+1);              //giving random numb. between 1-12 to the 4 crystals
console.log(crystalValues[1])
crystalValues[2] = Math.floor(Math.random()*12+1);
console.log(crystalValues[2])
crystalValues[3] = Math.floor(Math.random()*12+1);
console.log(crystalValues[3])
crystalValues[4] = Math.floor(Math.random()*12+1);
console.log(crystalValues[4])


random =  Math.floor(Math.random()*(120-19)+19);             // random num. btwn 19-120 to lucky numb.
$("#num").text(random);
console.log(random)


}

var win = 0
var loss = 0
function winner(){
    userTotal=0;
    win++;
    $("#win").text(win);
    $("#score").text(userTotal);
    reset();
   
}

function loser()
{
    userTotal=0; 
    loss++;
    $("#loss").text(loss);
    $("#score").text(userTotal);
    reset();
    
}

function reset(){
    game();
}


game();                                                       //start


function getCrystalHandler(crystalKey) {                       //function for score increment on click
    return function() {
       
     userTotal = userTotal + crystalValues[crystalKey];
     console.log("New userTotal " + userTotal);
     $("#score").text(userTotal);
 
 
     if (userTotal === random) {                         //condition
         winner()
         
     }
 
     else if (userTotal > random) {
         loser()
        
     } 
 }
}


$("#image1").on("click", getCrystalHandler(1));
$("#image2").on("click", getCrystalHandler(2));
$("#image3").on("click", getCrystalHandler(3));
$("#image4").on("click", getCrystalHandler(4));
