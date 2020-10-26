const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

const body = 35

const rows = canvas.height / body;
const cols = canvas.width / body;

let snake = new Snake();
let point = new Point();

function Snake()
{
    this.x = 0;
    this.y = 0;
    this.body = body;
    this.XS = body * 1;
    this.YS = 0;
    
}

function Point(){
    this.x
    this.y
    this.PointLocation = function()
    {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * body;
    this.y = (Math.floor(Math.random() * cols - 1) + 1) * body;
    }
    this.draw = function() {
        ctx.fillStyle = "#00CC00";
        ctx.fillRect(this.x , this.y, body, body);
    }
}


/*
function drawPoint()
{
    
}
*/

function drawSnake()
    {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y, body, body);
    }

function init(){
   Point();
   Snake();
   drawSnake();
// drawPoint();
}

init();

function Movement()
{
    this.x += this.XS;
    this.y += this.YS;

    if(this.x > canvas.width)
    {
        this.x = 0;
    }
    if(this.y > canvas.height)
    {
        this.y = 0;
    }
    if(this.x < 0)
    {
        this.x = canvas.width;
    }
    if(this.y < 0)
    {
        this.y = canvas.height;
    }
}

function changeDirect(direction){
    switch(direction)
    {
        case 'Up': 
            this.XS = 0;
            this.YS = -body * 1;
        break;
        case 'Down':
            this.XS = 0;
            this.YS = body * 1;
        break;
        case 'Left':
            this.XS = -body * 1;
            this.YS = 0;
        break;
        case 'Right':
            this.XS = body * 1;
            this.YS = 0;
        break;
    }
} 

function start()
{
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Movement();
        drawSnake();
    }, 200)
}

start();



window.addEventListener('keydown', ((evet) => {
    const direction = evet.key.replace('Arrow', '');
    //console.log('direction', direction);
    changeDirect(direction);
}))

//requestAnimationFrame(start);
