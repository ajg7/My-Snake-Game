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
