const gameBot = ()=> {
  let gameOver=false;
  const number = Math.floor(Math.random() * 100)+1;
      
  while (!gameOver) {
      let answer = +prompt("Я загадал число от 1 до 100 , угадывайте");

      if (Number.isNaN(answer)) {
          alert("Нужны только числа, пробуй еще");
      }
      if (answer === 0) {
          alert("Ну как хотите")
          break;
      }
      if (answer > number) {
          alert("Мое число меньше")
      }
      if (answer < number) {
          alert("Мое число больше")
      }
      if (answer === number) {
          alert("Вы угадали")
          gameOver=true;
      }
  }
}
gameBot();


