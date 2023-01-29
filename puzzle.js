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
     cards[cardIndex].style.backgroundImage = "url(" + shuffledImages[cardIndex] + ")";
     cards[cardIndex].classList.add("card-overlay");
      cards[cardIndex].addEventListener("click", function() {
            if(numberOfOpenCards == 2){
            hideCards();
        }
         openCard(cards[cardIndex]);
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
        if(firstPlayerTurn){
            firstPlayerPoints++;
            firstPlayerText.textContent = "Spieler1 | "+firstPlayerPoints+" Punkte";
        } else{
            secondPlayerPoints++;
            secondPlayerText.textContent = "Spieler2 | "+secondPlayerPoints+" Punkte";
        }
    } else {
         for(let i = 0; i < cards.length; i++){
            cards[i].classList.add("card-overlay");
        }
        changeTurn();
        
    }
    removeCardsFromArray();
}


function changeTurn(){
    firstPlayerTurn = !firstPlayerTurn;
    if(firstPlayerTurn) {
        firstPlayerText.style.backgroundColor = 'rgb(41, 43, 182)';
        secondPlayerText.style.backgroundColor = 'rgb(125, 125, 125)';
    } else{
        secondPlayerText.style.backgroundColor = 'rgb(41, 43, 182)';
        firstPlayerText.style.backgroundColor = 'rgb(125, 125, 125)';
    }
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