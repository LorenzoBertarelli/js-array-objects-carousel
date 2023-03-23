const imagesArray = [
    {
        immagine: "01.webp",
        titolo: "Marvel's Spiderman Miles Morale",
        descrizione: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new power to become his own Spider-Man",
    },
    {
        immagine: "02.webp",
        titolo: "Verdi",
        descrizione: "45",
    },
    {
        immagine: "03.webp",
        titolo: "Gialli",
        descrizione: "15",
    },
    {
        immagine: "04.webp",
        titolo: "Relli",
        descrizione: "27",
    },
    {
        immagine: "05.webp",
        titolo: "Sung",
        descrizione: "12",
    },
]

const arrayImg = imagesArray.map((curImg) => )
console.log(arrayImg);
arrayImg.innerHTML =  <div class="row-items">${curImg.immagine};</div>;

// const arrayImmagine = imagesArray.filter((curImage) => curImage.immagine);
// console.log(arrayImmagine);
// const arrayTitolo = imagesArray.filter((curTitle) => curTitle.titolo);
// console.log(arrayTitolo);
// const arrayDescrizione = imagesArray.filter((curDescr) => curDescr.descrizione);
// console.log(arrayDescrizione);

const itemsContainer = document.querySelector(".row-items")

// let timer;
const timerImage = imagesArray;

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const rowItem =
        `<div class="item">
            <img src="${currentImage}" alt="">
        </div>`;

        itemsContainer.innerHTML += rowItem;

        console.log(rowItem);
}

//stato di partenza
const itemsArray = document.getElementsByClassName("item")
console.log(itemsArray);

//creo active e imposto su prima img
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

//gestisco il click sul bottone next
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


//devo gestire click quindi
nextBtn.addEventListener("click", function () {
    autoPlay();
});

//nascondiamo bottone di default
prevBtn.classList.add("hidden");

//da qui gestisco il click
prevBtn.addEventListener("click", function () {

    nextBtn.classList.remove("hidden");

    //rimuovo active dalla slide prec
    itemsArray[activeItemIndex].classList.remove("active");

    //secrementare activeIndex
    activeItemIndex--;

    //aggiungere active a quello nuovo
    itemsArray[activeItemIndex].classList.add("active");
    if (activeItemIndex === 0) {
        prevBtn.classList.add ("hidden")
    }
})

// FUNZIONE AUTOPLAY

let timer = setInterval (autoPlay, 3000);

function autoPlay() {
    prevBtn.classList.remove("hidden");
    itemsArray[activeItemIndex].classList.remove("active");
    activeItemIndex++;
        // se siamo arrivati all'ultima slide
        if (activeItemIndex === itemsArray.length) {
            // reimposto activeIndex sulla prima slide
            activeItemIndex = 0;
        }
    itemsArray[activeItemIndex].classList.add("active");
        if (activeItemIndex === 0) {
            prevBtn.classList.add("hidden");
        }
        // se siamo all'ultima immagine, nascondo il pulsante next
        if (activeItemIndex === itemsArray.length - 1) {
            nextBtn.classList.add("hidden");
        } else {
            nextBtn.classList.remove("hidden");
        }
}