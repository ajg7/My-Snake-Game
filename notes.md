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
