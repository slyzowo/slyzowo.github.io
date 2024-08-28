// grabbing the ids for the canvas, score and reset button
const snakeGameBoard = document.querySelector("#snake-game-board");
const scoreText = document.querySelector("#snake-game-score");
const resetButton =document.querySelector("#snake-reset-button");

// making the game 2d and not 3d
const context = snakeGameBoard.getContext("2d");

// making the game a constistant width and height
const gameWidth = snakeGameBoard.width;
const gameHeight = snakeGameBoard.height;

// Colours :3
//      the background colours
const snakeGameBoardBackground = "#242424";

//      the snake colours
const snakeColour = "#48a7ff";
const snakeBorderColour = "#48a7ff";
//      the food colours
const foodColour = "#ffa0f9";

// game rules
//      Unit Size is how big the squares are
const unitSize = 25;
//      gamingRunning checks to see if the game is running or not
let gameRunning = false;
//      to see how far / how fast the snake goes
let Xvelocity = unitSize;
let Yvelocity = 0;
//      where the food spawns on the board
let Xfood;
let Yfood;
//      the score var default is 0 but goes up whenever you get the food
let score = 0;
//      how big the snake go
let snake = [{x:0, y:0}];

window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();

// causes the game to start
function gameStart(){
    gameRunning = true
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};

// idk something about ticks
function nextTick(){
//      if the game is running it will check these before doing the next tick
    if(gameRunning){
        setTimeout(()=>{
            clearGameBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
//          every game tick takes 100 miliseconds to happen
        },100);
    }
//      if the game is not running it will show the "game over" screen
    else{
        displayGameOver();
    }
}; 

// clears the gameboard
function clearGameBoard(){
    context.fillStyle = snakeGameBoardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
};

// creates food
function createFood(){
//      generates the food coordinates
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    };

    Xfood = randomFood(0, gameWidth - unitSize);
    Yfood = randomFood(gameWidth - unitSize, 0);
};

// puts the food where its supposed to go
function drawFood(){
    context.fillStyle = foodColour
    context.fillRect(Xfood, Yfood, unitSize, unitSize);
};

// move snake
function moveSnake(){
//      the head of the snake is the first square for the *people* who didnt know
    const head = {
        x: snake[0].x + Xvelocity,
        y: snake[0].y + Yvelocity
    };
//      
    snake.unshift(head);
    if(snake[0].x == Xfood && snake[0].y == Yfood){
//      the score goes up one everytime a food was eaten & makes a new food
        score+=1;
        scoreText.textContent = score;
        createFood();
    }
//      kills the last part of the snake
    else{
        snake.pop();
    }
};

// makes new snake
function drawSnake(){
    context.fillStyle = snakeColour;
    context.strokeStyle = snakeBorderColour;

    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
};

// changes the direction of where the snake is moving 
function changeDirection(event){
    const keyPressed = event.keyCode;
    const LEFT = 65;  // A key
    const UP = 87;    // W key
    const RIGHT = 68; // D key
    const DOWN = 83;  // S key

    const goingLeft = (Xvelocity == -unitSize);
    const goingUp = (Yvelocity == -unitSize);
    const goingRight = (Xvelocity == unitSize);
    const goingDown = (Yvelocity == unitSize);

    switch(true){
//      if you're going left that means you cant go right
        case(keyPressed == LEFT && !goingRight):
        Xvelocity = -unitSize;
        Yvelocity = 0;
        break;
//      if you're going right that means you cant go left
        case(keyPressed == RIGHT && !goingLeft):
        Xvelocity = unitSize;
        Yvelocity = 0;
        break;
//      if you're going up that means you cant go down
        case(keyPressed == UP && !goingDown):
        Xvelocity = 0;
        Yvelocity = -unitSize;
        break;
//      if you're going down that means you cant go up
        case(keyPressed == DOWN && !goingUp):
        Xvelocity = 0;
        Yvelocity = unitSize;
        break;
    };
};

// checks to see if the game is over yet 
function checkGameOver(){
    switch(true){
//      makes sure the snake cant go out of the screen and survive
        case(snake[0].x < 0):
        gameRunning = false;
        break

        case(snake[0].x >= gameWidth):
        gameRunning = false;
        break

        case(snake[0].y < 0):
        gameRunning = false;
        break

        case(snake[0].y >= gameHeight):
        gameRunning = false;
        break
    }

    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            gameRunning = false;
        }
    }
};

// if the game is over a "game over" screen will appear, this is the "game over" screen
function displayGameOver(){
    context.font = "100px";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Game Over", gameWidth / 2, gameHeight / 2);
    gameRunning = false
};

// wanna really play again?
function resetGame(){
    score = 0;
    Xvelocity = unitSize;
    Yvelocity = 0;
    snake = [{x:0, y:0}];
    gameStart();
};
