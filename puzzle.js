let pictureList = ['./pictures/apple.jpeg', './pictures/banana.jpeg','./pictures/ananas.jpeg',
'./pictures/birne.jpeg','./pictures/erdbeere.jpeg',
'./pictures/kaki.jpeg', './pictures/mango.jpeg', './pictures/zitrone.jpeg','./pictures/apple.jpeg', './pictures/banana.jpeg','./pictures/ananas.jpeg',
'./pictures/birne.jpeg','./pictures/erdbeere.jpeg',
'./pictures/kaki.jpeg', './pictures/mango.jpeg', './pictures/zitrone.jpeg'];

const shuffledImages = _.shuffle(pictureList);
const cards = document.getElementsByClassName('card');
let numberOfOpenCards = 0;


function startGame(){
for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = "url(" + shuffledImages[i] + ")";
    cards[i].classList.add("card-overlay");
   setupCards(i);
}


function setupCards(cardIndex){
      cards[cardIndex].addEventListener("click", function() {
        if(numberOfOpenCards == 2){
           numberOfOpenCards = 0;
            for(let i = 0; i < cards.length; i++){
                cards[i].style.filter = "brightness(0%)"
            }
        }
        this.style.filter = "brightness(100%)";
         numberOfOpenCards++;
    });
}

}
startGame();






