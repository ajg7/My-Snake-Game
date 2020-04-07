window.onload = function() {
    let cvs = document.getElementById("canvas");
    let ctx= cvs.getContext("2d");

    let cvsW = cvs.width;
    let cvsH = cvs.height;

    let snakeW = 10;
    let snakeH = 10;

    //default direction
    let direction = "right";

    //read users directions

    this.document.addEventListener("keydown",getDirection);

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

    function drawSnake(x,y) {
        ctx.fillStyle = "#EE82EE";
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
    function draw() {
        ctx.clearRect(0,0,cvsW,cvsH);
        for(let i = 0; i < snake.length; i++) {
            let x = snake[i].x;
            let y = snake[i].y;
            drawSnake(x,y);
        }
        //snake head
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        //remove to last entry (the snake tail)
        snake.pop();

        //create a new head, based on the previous head and the direction

        if (direction == "left") {
            snakeX--;
        }else if(direction =="up") {
            snakeY--;
        }else if(direction =="right") {
            snakeX++;
        }else if(direction =="down") {snakeY++;}



        let newHead = {
            x : snakeX,
            y : snakeY
        };

        snake.unshift(newHead);

    }
    
    setInterval(draw,60);
}
