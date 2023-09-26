// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const abc = document.querySelector("#abc");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function openBook() {
   book.style.transform = "translateX(100%)";
   // prevBtn.style.transform = "translateX(0px)";
   // nextBtn.style.transform = "translateX(400px)";
}

function closeBook(isAtBeginning) {
   if(isAtBeginning) {
       book.style.transform = "translateX(0%)";
       prevBtn.style.opacity=0;
   } else {
       book.style.transform = "translateX(100%)";
   }
}

function goNextPage() {
   if(currentLocation < maxLocation) {
       switch(currentLocation) {
           case 1:
               openBook();
               paper1.classList.add("flipped");
               prevBtn.style.opacity=1;
               break;
           case 2:
               paper2.classList.add("flipped2");
               abc.style.transform="translateX(900px)";
               book.style.transform = "translateX(100%)";
               // prevBtn.style.transform = "translateX(420px)";
               // nextBtn.style.transform = "translateX(770px)";
               nextBtn.style.opacity = 0;
               // paper2.style.zIndex = 2;
               break;
           case 3:
               paper3.classList.add("flipped");
               // paper3.style.zIndex = 3;
               closeBook(false);
               break;
           default:
               throw new Error("unkown state");
       }
       currentLocation++;
   }
}

function goPrevPage() {
   if(currentLocation > 1) {
       switch(currentLocation) {
           case 2:
               closeBook(true);
               paper1.classList.remove("flipped");
               // nextBtn.style.transform = "translateX(0px)";
               abc.style.transform="translateX(0px)";
               paper1.style.zIndex = 3;
               break;
           case 3:
               paper2.classList.remove("flipped2");
               book.style.transform = "translateX(100%)";
               // prevBtn.style.transform = "translateX(200px)";
               // nextBtn.style.transform = "translateX(400px)";
               abc.style.transform="translateX(700px)";
               nextBtn.style.opacity = 1;
               // paper2.style.zIndex = 2;
               break;
           case 4:
               openBook();
               paper3.classList.remove("flipped");
               // paper3.style.zIndex = 1;
               break;
           default:
               throw new Error("unkown state");
       }

       currentLocation--;
   }
}
