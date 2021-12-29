/** @type {HTMLCanvasElement} */ //canvas intellisense

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const snowflakesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


//SNOWFLAKE
class Snowflake{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = -100;
        this.size = 10;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = undefined;
    }

    //Ticking changes the position
    update(){
        this.x = this.x;
        this.y += this.speedY;
    }

    //Rendering draws the snowflake on the canvas
    render(){
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.size,this.size);
        ctx.fill();
    }
}

function addSnowflake(){
    snowflakesArray.push(new Snowflake());
}

function initializeSnowflakes(){
    for(let i = 0; i < 20; i++){
        snowflakesArray.push(new Snowflake());
    }
    setInterval(addSnowflake, 300);
}
initializeSnowflakes();


function tick(){
    for(let i = 0; i < snowflakesArray.length; i++){
        snowflakesArray[i].render();
        snowflakesArray[i].update();
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tick();
    requestAnimationFrame(animate);
}
animate();