
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // reenderizar
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

let score = 0

let direction = "right"; //movimentação
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}


function createBG() {
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "black"
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}



function drawFood() {
  context.fillStyle = 'red'
  context.fillRect(food.x, food.y, box, box)
}


document.addEventListener('keydown', update);

function update(event) {
  if (event.keyCode == 37 && direction != 'right') direction = 'left'
  if (event.keyCode == 38 && direction != 'down') direction = 'up'
  if (event.keyCode == 39 && direction != 'left') direction = 'right'
  if (event.keyCode == 40 && direction != 'up') direction = 'down'
  
}





function startGame() {
  

  if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
  if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
  if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
  if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box
  
  //i é 1 corpo 
  //i[0] no caso é a head
  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert('game over')
    } 
    
  }

  
  

  createBG();
  createSnake();
  drawFood();

  

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == 'right') snakeX += box;
  if (direction == 'left') snakeX -= box;
  if (direction == 'up') snakeY -= box;
  if (direction == 'down') snakeY += box;


  //caso a pos snakeX seja != da foodX 
  //e pos snakeY seja != de foodY 
  //vai retirar ultimo elemento da nossa cobrinha
  //caso não
  //ela vai continuar aumentando e passar função random da foof 
  if (snakeX != food.x || snakeY != food.y) {
    snake.pop();
  }
  else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }
  
  let newhead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newhead);
  


}

let reset = document.querySelector('button')
    reset.addEventListener('click', ()=>{
      location.reload()
    })


let jogo = setInterval(startGame, 100);



