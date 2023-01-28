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

        if(openCards.length === 1 && openCard[0] === cards[cardIndex]){

        } else{
            openCard(cards[cardIndex]);
        }
        
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
            document.querySelector(".firstplayerScore").textContent = "Spieler 1 : "+firstPlayerPoints+ " Punkte";
        } else{
            secondPlayerPoints++;
            document.querySelector(".secondplayerScore").textContent = "Spieler 2 : "+secondPlayerPoints+ " Punkte";
        }
    } else {
         for(let i = 0; i < cards.length; i++){
            cards[i].style.filter = "brightness(0%)";
        }
    }
    removeOpenCards();
    changeTurn();
    if((firstPlayerPoints+secondPlayerPoints===8)) {gameOverMessage()};
}


function changeTurn(){
    firstPlayerTurn = !firstPlayerTurn;
    if(firstPlayerTurn)document.querySelector("h1").textContent = 'Zug von Spieler 1';
    else document.querySelector("h1").textContent = 'Zug von Spieler 2';
}



function gameOverMessage(){
    if(firstPlayerPoints > secondPlayerPoints) document.querySelector("h1").textContent = 'Spieler 1 hat gewonnen';
    else if(firstPlayerPoints < secondPlayerPoints) document.querySelector("h1").textContent = 'Spieler 2 hat gewonnen';
    else document.querySelector("h1").textContent = 'Unentschieden';;
}




function checkSamePictures(openCards){
    return ((openCards[0].style.backgroundImage === openCards[1].style.backgroundImage) && 
    openCards [0] != openCards[1]);
}

function removeOpenCards(){
openCards = [];
}

function removeSameCards() {
  openCards.forEach(card => {
    card.style.visibility = "hidden";
  });
}











