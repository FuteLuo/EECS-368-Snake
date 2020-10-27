const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const lose = document.querySelector('.Checklose');
lose.style.display = 'none';

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
    this.totalP = 0;
    this.tail = [];
}

function Point(){
    this.a;
    this.b;
    this.body = body;
}

function PointLocation ()
{
this.a = (Math.floor(Math.random() * rows - 1) + 1) * body;
this.b = (Math.floor(Math.random() * cols - 1) + 1) * body;
}


function drawPoint()
{
   ctx.fillStyle = "#00CC00";
   ctx.fillRect(this.a , this.b, body, body); 
}


function drawSnake()
    {
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#FFFFFF";
   
        for(let i = 0; i < this.tail.length; i++)
        {  
            const {x , y} = this.tail[i];
            ctx.fillRect(x, y, body, body);
            ctx.strokeRect(x, y , body , body);
        }
        ctx.fillRect(this.x, this.y, body, body);
        ctx.strokeRect(this.x, this.y, body, body);
    }

function init(){
   Point();
   Snake();
   PointLocation();
}

init();

function Movement()
{
    for(let i = 0; i < this.tail.length - 1; i++)
    {
        this.tail[i] = this.tail[i+1];
    }

    if(this.totalP > 0)
    {
        this.tail[this.totalP - 1] = {x: this.x, y: this.y};
    }
    

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

function eatPoint(Point)
{
    if(this.x === this.a && this.y === this.b )
    {
        this.totalP++;
        return true;
    }
    else
    {
        return false;
    }
}

function checkTouch()
{
    for(let i = 0; i < this.tail.length; i++)
    {
        if(this.x === this.tail[i].x && this.y === this.tail[i].y)
        {
            clearInterval(move);
            lose.style.display = "block";
        }
    }
}


function start()
{
    move = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPoint();
        Movement();
        drawSnake();
            if(eatPoint(Point)) 
            {
                PointLocation();
                //console.log("ATE")
            }

            checkTouch();
    }, 130)
}

start();

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


window.addEventListener('keydown', ((evet) => {
    const direction = evet.key.replace('Arrow', '');
    //console.log('direction', direction);
    changeDirect(direction);
}))

//requestAnimationFrame(start);
