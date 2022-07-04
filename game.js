const cardsArr = [
    {imageName: "img1", imagePath: "img/img1.png"},
    {imageName: "img2", imagePath: "img/img2.png"},
    {imageName: "img3", imagePath: "img/img3.png"},
    {imageName: "img4", imagePath: "img/img4.png"},
    {imageName: "img5", imagePath: "img/img5.png"},
    {imageName: "img6", imagePath: "img/img6.png"},
    {imageName: "img1", imagePath: "img/img1.png"},
    {imageName: "img2", imagePath: "img/img2.png"},
    {imageName: "img3", imagePath: "img/img3.png"},
    {imageName: "img4", imagePath: "img/img4.png"},
    {imageName: "img5", imagePath: "img/img5.png"},
    {imageName: "img6", imagePath: "img/img6.png"},
];

cardsArr.sort( function(){
    return 0.5 - Math.random()
});
console.log(cardsArr);

const span = document.querySelector("#span");
const cardsDiv = document.querySelector("#cardsDiv");
const messageDiv = document.querySelector("#messageDiv");


function createBoard () {
    for(let i = 0; i < cardsArr.length; i++) {
        const imgCard = document.createElement("IMG")
        imgCard.setAttribute("id", String(i));
        imgCard.setAttribute("src","img/gal.png");
        imgCard.addEventListener("click", flipCard);
        cardsDiv.appendChild(imgCard);
    }
}

createBoard();


let cardsChosenArr = [];
let cardsChosenArrId = [];
let nOfOpenedCardsArr = [];

function checkForMatch(){
    const cards = document.querySelectorAll("img");
    const id1 = cardsChosenArrId [0];
    const id2 = cardsChosenArrId [1];

    if (cardsChosenArr[0] === cardsChosenArr[1] && id1 !== id2) {
        massageDiv.innerHTML = "Match found!"
        cards[id1].setAttribute("src", "img/gal.png");
        cards[id2].setAttribute("src", "img/gal.png");

        cards[id1].removeEventListener("click", flipCard);
        cards[id2].removeEventListener("click", flipCard);

        nOfOpenedCardsArr.push(cardsChosenArr);
    }
    else {
        cards[id1].setAttribute("src", "img/gal_blank.png");
        cards[id2].setAttribute("src", "img/gal_blank.png");
        massageDiv.innerHTML = "Chosen the same card or cards do not match, select another!";
    }

    cardsChosenArr = [];
    cardsChosenArrId = [];
    span.textContent = String(nOfOpenedCardsArr.length);

    if (nOfOpenedCardsArr.length === cardsArr.length / 2) {
        messageDiv.innerHTML = "You won!"
    }
    function flipCsrd() {
        let cardId = this.getAttribute("id");

        cardsChosenArr.push(cardsArr[cardId].imageName);
        cardsChosenArrId.push(cardId);

        this.setAttribute("src", cardsArr[cardId].imagePath);

        if (cardsChosenArr.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}