let score = JSON.parse(localStorage.getItem('score')) || {
  Win: 0,
  Loose: 0,
  Tie: 0
}

showScore();

/*
    if (!score) {
      score = {
        Win: 0,
        Loose: 0,
        Tie: 0
      }
    }
    
    const score = {
      Win: 0,
      Loose: 0,
      Tie: 0,

      objectToJson: function () {
        console.log(JSON.stringify(score));
      },

      jsonToObject: function () {
        let jsonString = JSON.stringify(score);
        console.log(JSON.parse(jsonString));

      },

      saveScoreToLocalStorage: function () {
        localStorage.setItem('score', JSON.stringify(score));
      },
    };
    score.objectToJson();
    score.jsonToObject();
    */
function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    }
    if (computerMove === 'Paper') {
      result = 'Loose';
    }
    if (computerMove === 'Scissors') {
      result = 'Win';
    }
  }
  if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'Win';
    }
    if (computerMove === 'Paper') {
      result = 'Tie';
    }
    if (computerMove === 'Scissors') {
      result = 'Loose';
    }
  }
  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'Loose';
    }
    if (computerMove === 'Paper') {
      result = 'Win';
    }
    if (computerMove === 'Scissors') {
      result = 'Tie';
    }
  }
  calculateScore(result);
  showCurrentResult(result);
  discriptionCurrentGame(playerMove, computerMove);
  showScore();
  /*
  console.log(score);
  alert(`You Picked ${playerMove}. Computer picked ${computerMove}. Hence ${result} \n Wins: ${score.Win}, Losses: ${score.Loose}, Ties: ${score.Tie}`);
  */
}

function calculateScore(result) {
  if (result === 'Win') {
    score.Win++;
  }
  if (result === 'Loose') {
    score.Loose++;
  }
  if (result === 'Tie') {
    score.Tie++;
  }
  localStorage.setItem('score', JSON.stringify(score));

}

function pickComputerMove() {

  let computerMove = '';
  const randomNumberforS = Math.random();
  if (0 <= randomNumberforS && randomNumberforS < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (1 / 3 <= randomNumberforS && 2 / 3 > randomNumberforS) {
    computerMove = 'Paper';
  }

  else if (2 / 3 <= randomNumberforS && randomNumberforS < 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}

function showScore() {
  const scoreReport = document.querySelector('.js-score-report');

  scoreReport.innerText = `Wins: ${score.Win}, Losses: ${score.Loose}, Ties: ${score.Tie}`;
  /*
  console.log(`Wins: ${score.Win}, Losses: ${score.Loose}, Ties: ${score.Tie}`);
  */

}

function showCurrentResult(result) {
  const currentResult = document.querySelector('.js-current-result');

  currentResult.innerText = `${result}!`;
}

function discriptionCurrentGame(playerMove, computerMove) {
  const discription = document.querySelector('.js-discription-current-game');
  discription.innerHTML = `You Picked <img src="./images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer Picked`;
}