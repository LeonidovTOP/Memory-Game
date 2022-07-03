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

const span = document.querySelector(selectors:"#span");
const cardsDiv = document.querySelector(selectors:"#cardsDiv");
const messageDiv = document.querySelector(selectors:"#messageDiv");


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
}