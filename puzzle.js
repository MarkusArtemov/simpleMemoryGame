let pictureList = ['./pictures/apple.jpeg', './pictures/banana.jpeg','./pictures/ananas.jpeg',
'./pictures/birne.jpeg','./pictures/erdbeere.jpeg',
'./pictures/kaki.jpeg', './pictures/mango.jpeg', './pictures/zitrone.jpeg','./pictures/apple.jpeg', './pictures/banana.jpeg','./pictures/ananas.jpeg',
'./pictures/birne.jpeg','./pictures/erdbeere.jpeg',
'./pictures/kaki.jpeg', './pictures/mango.jpeg', './pictures/zitrone.jpeg'];

const shuffledImages = _.shuffle(pictureList);
const cards = document.getElementsByClassName('card');

function startGame(){
for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = "url(" + shuffledImages[i] + ")";
}
}

startGame();






