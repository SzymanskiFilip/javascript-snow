/** @type {HTMLCanvasElement} */ //canvas intellisense
import Snowflake from "./Snowflake.js";

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
        this.y = 0;
        this.size = 20;
        this.speedY = Math.random() * 2;
        this.speedX = undefined;
    }

    //Ticking changes the position
    tick(){

    }

    //Rendering draws the snowflake on the canvas
    render(){
        //ctx.fillStyle = "pink";
        //ctx.rect(30,20,100,100);
        //ctx.fill();
    }
}