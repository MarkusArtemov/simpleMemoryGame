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


function startGame(){
for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = "url(" + shuffledImages[i] + ")";
    cards[i].classList.add("card-overlay");
   setupCards(i);
}
}
startGame();

function setupCards(cardIndex){
      cards[cardIndex].addEventListener("click", function() {
        if(numberOfOpenCards == 2){
            hideCards();
        } 
        openCard(cards[cardIndex]);
    });
}

function openCard(card){
    card.style.filter = "brightness(100%)";
    openCards.push(card);
    numberOfOpenCards++;
}


function hideCards () {
    numberOfOpenCards = 0;
    if(checkSamePictures(openCards)){
        removeSameCards();
        if(firstPlayerTurn){
            firstPlayerPoints++;
        } else{
            secondPlayerPoints++;
        }
    } else {
         for(let i = 0; i < cards.length; i++){
            cards[i].style.filter = "brightness(0%)";
        }
    }
    removeOpenCards();
    changeTurn();
}


function changeTurn(){
    firstPlayerTurn = !firstPlayerTurn;
}


function checkSamePictures(openCards){
    return (openCards[0].style.backgroundImage === openCards[1].style.backgroundImage);
}

function removeOpenCards(){
openCards = [];
}

function removeSameCards() {
  openCards.forEach(card => {
    card.style.visibility = "hidden";
  });
}











