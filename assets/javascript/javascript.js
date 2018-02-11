// creating a game object
var crystalGame={
    userRandomNumber:0,
    blueCrystalNumber:0,
    greenCrystalNumber:0,
    redCrystalNumber:0,
    yellowCrystalNumber:0,
    totalScore:0,
    wins:0,
    losses:0,
    createRandomNumber:function(min,max){
        return Math.floor((Math.random()*(max-min+1))+min);
    },
    restartGame:function(){
        this.userRandomNumber=this.createRandomNumber(1,120);
        this.blueCrystalNumber=this.createRandomNumber(1,12);
        this.greenCrystalNumber=this.createRandomNumber(1,12);
        this.redCrystalNumber=this.createRandomNumber(1,12);
        this.yellowCrystalNumber=this.createRandomNumber(1,12);
        this.totalScore=0;
        console.log("User Random: "+this.userRandomNumber);
        $("#randomnumber").text(this.userRandomNumber);
        $("#score").text(this.totalScore);
    },
    displayWins:function(){
        console.log("wins: "+this.wins)
        $("#winlosetitle").text("You won!!")
        $("#wins").text(this.wins);
    },
    displayLosses:function(){
        console.log("losses: "+this.losses)
        $("#winlosetitle").text("You lost!!")
        $("#losses").text(this.losses);
    },
    ifWon:function(){
        this.wins++;
        this.displayWins();
        this.restartGame(); 
    },
    ifLost:function(){
        this.losses++;
        this.displayLosses();
        this.restartGame();
    }
};

$(document).ready(function(){
        crystalGame.restartGame();
        // lockTitle is for clearing the result title after pressing the first key to re-play
        var lockTitle=false;
    $("#bluecrystal").on("click",function(){
        if(lockTitle){
            $("#winlosetitle").text("");
            lockTitle=false;
        }
        crystalGame.totalScore+=parseInt(crystalGame.blueCrystalNumber);
        $("#score").text(crystalGame.totalScore); 
        if(crystalGame.totalScore===crystalGame.userRandomNumber){
            crystalGame.ifWon();
            lockTitle=true;
        }
        else if(crystalGame.totalScore > crystalGame.userRandomNumber){
            crystalGame.ifLost();
            lockTitle=true;
        }
    }); 
    $("#greencrystal").on("click",function(){
        if(lockTitle){
            $("#winlosetitle").text("");
            lockTitle=false;
        }
        crystalGame.totalScore+=parseInt(crystalGame.greenCrystalNumber);
        $("#score").text(crystalGame.totalScore);
        if(crystalGame.totalScore===crystalGame.userRandomNumber){
            crystalGame.ifWon();
            lockTitle=true;
        }
        else if(crystalGame.totalScore>crystalGame.userRandomNumber){
            crystalGame.ifLost();
            lockTitle=true;
        }
    });   
    $("#redcrystal").on("click",function(){
        if(lockTitle){
            $("#winlosetitle").text("");
            lockTitle=false;
        }
        crystalGame.totalScore+=parseInt(crystalGame.redCrystalNumber);
        $("#score").text(crystalGame.totalScore); 
        if(crystalGame.totalScore===crystalGame.userRandomNumber){
            crystalGame.ifWon();
            lockTitle=true;
        }
        else if(crystalGame.totalScore>crystalGame.userRandomNumber){
            crystalGame.ifLost();
            lockTitle=true;
        }
    });   
    $("#yellowcrystal").on("click",function(){
        if(lockTitle){
            $("#winlosetitle").text("");
            lockTitle=false;
        }
        crystalGame.totalScore+=parseInt(crystalGame.yellowCrystalNumber);
        $("#score").text(crystalGame.totalScore);
        if(crystalGame.totalScore===crystalGame.userRandomNumber){
            crystalGame.ifWon();
            lockTitle=true;
        }
        else if(crystalGame.totalScore>crystalGame.userRandomNumber){
            crystalGame.ifLost();
            lockTitle=true;
        }
    }); 
    console.log("total : "+crystalGame.totalScore)  
});

