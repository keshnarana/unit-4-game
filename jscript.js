var crystal = [];
var userTotal= 0;
var random;

function game(){

crystal[1] = Math.floor(Math.random()*12+1);              //giving random numb. between 1-12 to the 4 crystals
console.log(crystal[1])
crystal[2] = Math.floor(Math.random()*12+1);
console.log(crystal[2])
crystal[3] = Math.floor(Math.random()*12+1);
console.log(crystal[3])
crystal[4] = Math.floor(Math.random()*12+1);
console.log(crystal[4])


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


function getCrst(i) {                       //function for score increment on click
    return function() {
       
     userTotal = userTotal + crystal[i];
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


$("#image1").on("click", getCrst(1));
$("#image2").on("click", getCrst(2));
$("#image3").on("click", getCrst(3));
$("#image4").on("click", getCrst(4));
