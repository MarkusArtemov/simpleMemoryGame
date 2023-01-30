const pictureList = ['./pictures/apple.jpeg', './pictures/banana.jpeg','./pictures/ananas.jpeg',
'./pictures/birne.jpeg','./pictures/erdbeere.jpeg',
'./pictures/kaki.jpeg', './pictures/mango.jpeg', './pictures/zitrone.jpeg','./pictures/apple.jpeg', './pictures/banana.jpeg','./pictures/ananas.jpeg',
'./pictures/birne.jpeg','./pictures/erdbeere.jpeg',
'./pictures/kaki.jpeg', './pictures/mango.jpeg', './pictures/zitrone.jpeg'];

let openCards = [];
let firstPlayerTurn = true;

let firstPlayerPoints = 0;
let secondPlayerPoints = 0;

const shuffledImages = _.shuffle(pictureList);
const cards = document.getElementsByClassName('card');
let numberOfOpenCards = 0;

const firstPlayerText = document.querySelector('.firstplayerScore');
const secondPlayerText = document.querySelector('.secondplayerScore');

function startGame(){
for (let i = 0; i < cards.length; i++) {
   setupCards(i);
}
}
startGame();

function setupCards(cardIndex){
  let image = shuffledImages[cardIndex];
  let card = cards[cardIndex];
  card.style.backgroundImage = "url(" + image + ")";
  card.classList.add("card-overlay");
  card.addEventListener("click", function() {
    if (numberOfOpenCards === 2) {
      hideCards();
    }
    openCard(card);
  });
}

function openCard(card){
     if (!card.classList.contains("card-overlay")) return;
    card.classList.remove("card-overlay");
    openCards.push(card);
    numberOfOpenCards++;
}


function hideCards () {
    numberOfOpenCards = 0;
    if(checkSamePictures(openCards)){
        removeSameCards();
        updatePlayerPoints(firstPlayerTurn, targetPlayerText());
    } else {
         for (const card of cards) {
        card.classList.add("card-overlay");
    }
        changeTurn();  
    }
    removeCardsFromArray();
}


function targetPlayerText(){
    return firstPlayerTurn ? firstPlayerText : secondPlayerText;
}


function updatePlayerPoints(firstPlayerTurn, targetPlayerText) {
  let playerPoints = firstPlayerTurn ? ++firstPlayerPoints : ++secondPlayerPoints;
  targetPlayerText.textContent = "Spieler" + (firstPlayerTurn ? 1 : 2) + " | " + playerPoints + " Punkte";
}


function changeTurn(){
    firstPlayerTurn = !firstPlayerTurn;
    const activePlayerText = firstPlayerTurn ? firstPlayerText : secondPlayerText;
    const inactivePlayerText = firstPlayerTurn ? secondPlayerText : firstPlayerText;
    activePlayerText.style.backgroundColor = 'rgb(41, 43, 182)';
    inactivePlayerText.style.backgroundColor = 'rgb(125, 125, 125)';
}

function checkSamePictures(openCards){
    return ((openCards[0].style.backgroundImage === openCards[1].style.backgroundImage) && 
    openCards [0] != openCards[1]);
}

function removeCardsFromArray(){
openCards = [];
}

function removeSameCards() {
  openCards.forEach(card => {
    card.style.visibility = "hidden";
  });
}