# week-4-game
jQuery Assignment : Crystals Collector Game: 
# How to play: 
<li> When you start the game by opening index.html file in a web browser, the program will generate a random number between 19 - 120. Also, it generates four hidden random numbers between 1-12 for each crystals ( blue, green, red, yellow).
<li>Now, it's your turn by clicking each crystal to find out its hidden number. It will add the hidden number to your total score to match it to the given random number at the start of the game. For example, clicking on blue crystal will add 3 to your total score it means the hidden blue crystal random number which has been generated at the start of the game is 3.
<li> You win if your total score is equal to the given random number at the start of the game.

# Javascript file:

<li>crystalGame object holds mutiple properties and methods. All properties hold our global variables which been used from the beginning until the end of the game such as "wins" and "losses" that are deleted when you close the browser. 
<li>It includes five random numbers that will be created at the start of the game by createRandomNumber(min,max) method. <li>This method accepts 2 arguments to specify random numbers in the range from "min" to "max" which are positive integer numbers. In our case, 19 - 120 and 1 - 12.
<li> Other methods use jQuery to update value of properties for displaying to the player.
<li>The program uses only "click" event for four crystal buttons to calculate the total score.

