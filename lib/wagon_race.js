// TODO: write your code here
const player1Controls = ['q', 'w', 'e'];
const player2Controls = ['i', 'o', 'p'];

function randomKey(playerControls) {
  return playerControls[Math.floor(Math.random() * playerControls.length)];
}
function keyCharacter(activeKey) {
  return document.querySelector(`.${activeKey}-key`);
}

let player1Key = randomKey(player1Controls);
let player2Key = randomKey(player2Controls);

let i = 3;

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && i > 0) {
    alert(`Press Enter ${i} times to start`);
    i -= 1;
    if (i === 0) {
      player1Key = randomKey(player1Controls);
      keyCharacter(player1Key).style.color = "white";
      player2Key = randomKey(player2Controls);
      document.querySelector(`.${player2Key}-key`).style.color = "white";
    }
  }
  if (i <= 0) {
    if (player1Controls.includes(event.key) && event.key === player1Key) {
      const player1Cell = document.querySelector("#player1-race .active");
      const player1NextCell = player1Cell.nextElementSibling;
      player1Cell.nextElementSibling.classList.add("active");
      player1Cell.classList.remove("active");
      if (player1NextCell.classList.length === 2) {
        document.querySelector(".winner-1").style.display = "block";
        document.querySelector(".button").style.display = "block";
        keyCharacter(player1Key).style.color = "#212529";
        player1Key = null;
        keyCharacter(player2Key).style.color = "#212529";
        player2Key = null;
      } else {
        keyCharacter(player1Key).style.color = "#212529";
        player1Key = randomKey(player1Controls);
        keyCharacter(player1Key).style.color = "white";
      }
    } else if (player1Controls.includes(event.key) && event.key !== player1Key) {
      const player1Cell = document.querySelector("#player1-race .active");
      const player1PreviousCell = player1Cell.previousElementSibling;
      if (player1PreviousCell !== null) {
        player1Cell.previousElementSibling.classList.add("active");
        player1Cell.classList.remove("active");
      }
      keyCharacter(player1Key).style.color = "#212529";
      player1Key = randomKey(player1Controls);
      keyCharacter(player1Key).style.color = "white";
    } else if (player2Controls.includes(event.key) && event.key === player2Key) {
      const player2Cell = document.querySelector("#player2-race .active");
      const player2NextCell = player2Cell.nextElementSibling;
      player2Cell.nextElementSibling.classList.add("active");
      player2Cell.classList.remove("active");
      if (player2NextCell.classList.length === 2) {
        document.querySelector(".winner-2").style.display = "block";
        document.querySelector(".button").style.display = "block";
        keyCharacter(player1Key).style.color = "#212529";
        player1Key = null;
        keyCharacter(player2Key).style.color = "#212529";
        player2Key = null;
      } else {
        keyCharacter(player2Key).style.color = "#212529";
        player2Key = randomKey(player2Controls);
        keyCharacter(player2Key).style.color = "white";
      }
    } else if (player2Controls.includes(event.key) && event.key !== player2Key) {
      keyCharacter(player2Key).style.color = "#212529";
      player2Key = randomKey(player2Controls);
      keyCharacter(player2Key).style.color = "white";
      const player2Cell = document.querySelector("#player2-race .active");
      const player2PreviousCell = player2Cell.previousElementSibling;
      if (player2PreviousCell !== null) {
        player2Cell.classList.remove("active");
        player2Cell.previousElementSibling.classList.add("active");
      }
    }
  }
  console.log(event.key);
});

document.querySelector(".button").addEventListener('click', () => {
  window.location.reload();
});
