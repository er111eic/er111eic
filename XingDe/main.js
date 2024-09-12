// References to DOM Elements
const container = document.querySelector('.container');
const body = document.body;

let startX, currentX;
let isDragging = false;

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
   book.style.transform = "translateX(-90%)","width(140vw)";
   // body.style.width = '200vw';
   // container.style.transform = 'translateX(0%)';
   // abc.style.transform="translateX(-200vw)";

   // prevBtn.style.transform = "translateX(0px)";
   // nextBtn.style.transform = "translateX(400px)";
}

function closeBook(isAtBeginning) {
   if(isAtBeginning) {
       book.style.transform = "translateX(0%)";
       container.style.transform = 'scale(1) translateX(0%)';
       prevBtn.style.opacity=0;
      body.style.width = '100vw';
   } else {
       book.style.transform = "translateX(100%)";
   }

}

function goNextPage() {
   if(currentLocation < maxLocation) {
       switch(currentLocation) {
           case 1:
               openBook();
               paper2.classList.add("flipped2");
               // abc.style.transform="translateX(-500%)";

               // book.style.transform = "translateX(100%)";
               prevBtn.style.opacity=0;
               break;
           case 2:
               paper1.classList.add("flipped");
               // abc.style.transform="translateX(-900px)";
               // body.style.width = '200%';
               book.style.transform = "translateX(10%)";
               prevBtn.style.opacity=1;
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
               paper2.classList.remove("flipped2");
               // nextBtn.style.transform = "translateX(0px)";
               // abc.style.transform="translateX(0px)";
               // paper1.style.zIndex = 3;
               break;
           case 3:
               paper1.classList.remove("flipped");
               book.style.transform = "translateX(-30%)";
               // prevBtn.style.transform = "translateX(200px)";
               // nextBtn.style.transform = "translateX(400px)";
               // abc.style.transform="translateX(700px)";
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

const handleTouchStart = (e) => {
  event.preventDefault();
        startX = e.touches[0].clientX; // 紀錄觸控起始位置
        isDragging = true;
    };
const handleTouchMove = (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX - startX; // 計算拖動距離
        document.querySelector('.container').style.transform = `translateX(${currentX}px)`;
        event.preventDefault();
        };

const handleTouchEnd = () => {
        isDragging = false;
        document.querySelector('.container').style.transform = 'translateX(0px)'; // 恢復原位
        event.preventDefault();
        };

        // 綁定觸控事件
const cardElement = document.querySelector('.container');
            cardElement.addEventListener('touchstart', handleTouchStart);
            cardElement.addEventListener('touchmove', handleTouchMove);
            cardElement.addEventListener('touchend', handleTouchEnd);

            cardElement.addEventListener('mousedown', (e) => {
            event.preventDefault();
                   startX = e.clientX;
                   isDragging = true;
               });


document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        document.querySelector('.container').style.transform = `translateX(${currentX}px)`;
        event.preventDefault();
       });

document.addEventListener('mouseup', () => {
        isDragging = false;
        document.querySelector('.container').style.transform = 'translateX(0px)';
        event.preventDefault();
        });




//
//
//
//
// document.querySelector('.container').addEventListener('mousedown', (e) => {
//         startX = e.clientX;
//         isDragging = true;
//     });
//
// document.addEventListener('mousemove', (e) => {
//         if (!isDragging) return;
//         e.preventDefault(); // 防止選中文本
//         currentX = e.clientX - startX;
// document.querySelector('.container').style.transform = `translateX(${currentX}px)`;
//     });
//
// document.addEventListener('mouseup', () => {
//         isDragging = false;
// document.querySelector('.container').style.transform = 'translateX(0px)';
//     });
