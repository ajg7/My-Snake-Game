Declares a window.onload function, which allows for the data to be executed as soon as loading is done.

Converts the ID "canvas" into a variable called cvs & the 2D context of canvas into the variable ctx


```JavaScript
window.onload = function() {
    let cvs = document.getElementById("canvas");
    let ctx= cvs.getContext("2d");

    let cvsW = cvs.width;
    let cvsH = cvs.height;

    let snakeW = 10;
    let snakeH = 10;

```

Declared score as 4

Used the ctx variable with 3 methods, **fillStyle** (color to the text), font, and **fillText** (draws a text string at the specified coordinates[(text, x, and y)])

```JavaScript
 //score
    let score = 4;

    function drawScore(x) {
        ctx.fillStyle = "yellow";
        ctx.font = "15px Verdana";
        ctx.fillText("score : "+x, 5, cvsH-5);
    }
```

The variable direction is declared as the default

Then we set up a addEventListener(event, f). We can either use "keydown" or "click" for the event. The function we then define as getDirection(e). e is the keycode

We set up conditionals for each keycode the player presses. Doing the && direction != "right" makes sure that players cannot go backwards.

```JavaScript
  //default direction
    let direction = "right";

    //read users directions

    document.addEventListener("keydown",getDirection);

    function getDirection(e) {
        if(e.keyCode == 37 && direction != "right") {
            direction ="left";
        }else if(e.keyCode == 38 && direction != "down") {
            direction ="up";
        }else if(e.keyCode == 39 && direction != "left") {
            direction ="right";
        }else if(e.keyCode == 40 && direction != "up") {
            direction ="down";
        }
    }
```

declaring the function drawSnake().
Inside the function has the variable ctx and methods associated with them. fillStyle = color, gradient, or pattern of shapes in the canvas; 

fillRect defines the rectangle within the canvas; 

strokeRect draws a stroked rectangle whose starting point is at (x, y) and whose size is specified by width and height.

declare a constant called len which is the length of the snake & an empty array

a for loop that pushes "rectangles" to the snake. These are objects. It goes x:3,y:0 , x:2, y:0 , x:1, y:0 , x:0, y:0


```JavaScript
 function drawSnake(x,y) {
        ctx.fillStyle = "blue";
        ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    
        ctx.fillStyle = "#000";
        ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }


    //create our snake object, it will contain 4 cells in default

    const len = 4;
    const snake = [];

    for(let i = len-1; i>=0; i--) {
        snake.push(
            {
               x : i,
               y : 0
            }
        );
    }
```

declaring a food object. Keys are x & y; Values are math methods. Math.round = rounds the result of Math.random times the result of (cvsW/snakeW-1) + 1. This allows the location to be randomly placed.

The food function creates the food


```JavaScript
 //create some food
    food = {
        x : Math.round(Math.random()*(cvsW/snakeW-1)+1),
        y : Math.round(Math.random()*(cvsH/snakeH-1)+1)
    }

    //draw food function
    function drawFood(x,y) {
        ctx.fillStyle = "red";
        ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    
        ctx.fillStyle = "#000";
        ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }
     //draw Food
        drawFood(food.x,food.y);
```
