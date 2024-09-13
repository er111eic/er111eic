// References to DOM Elements
document.addEventListener('DOMContentLoaded', () => {

const container = document.querySelector('.container');
const slider = document.getElementById('slider');
const body = document.body;

let startX=0, currentX=0;
let isDragging = false;

const closeBtn = document.querySelector("#close-btn");
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const book = document.querySelector("#book");
const abc = document.querySelector("#abc");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
closeBtn.addEventListener("click", closePage);
rightBtn.addEventListener("click", goNextPage);
leftBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function openBook() {
   book.style.transform = "translateX(-90%)","width(140vw)";
   // body.style.width = '200vw';
   // container.style.transform = 'translateX(0%)';
   // abc.style.transform="translateX(-200vw)";
    leftBtn.style.opacity =1;
   // closeBtn.style.display = "none";
   // nextBtn.style.transform = "translateX(400px)";
}

function closeBook(isAtBeginning) {
   if(isAtBeginning) {
       book.style.transform = "translateX(0%)";
       container.style.transform = 'scale(1) translateX(0%)';
       closeBtn.style.opacity=0;
       leftBtn.style.opacity =0;
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
               leftBtn.style.opacity =1;
               rightBtn.style.opacity = 0;
               // book.style.transform = "translateX(100%)";
               closeBtn.style.opacity=0;
               break;
           case 2:
               paper1.classList.add("flipped");
               // abc.style.transform="translateX(-900px)";
               // body.style.width = '200%';
               book.style.transform = "translateX(10%)";
               closeBtn.style.opacity=1;
               leftBtn.style.opacity =0;
               // prevBtn.style.transform = "translateX(420px)";
               // nextBtn.style.transform = "translateX(770px)";
               // rightBtn.style.opacity = 0;
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

function closePage() {
   if(currentLocation > 1) {
       switch(currentLocation) {
           case 2:
               closeBook(true);
               paper2.classList.remove("flipped2");

               // nextBtn.style.transform = "translateX(0px)";
               // abc.style.transform="translateX(0px)";
               // paper1.style.zIndex = 3;
               rightBtn.style.opacity = 1;
               break;
           case 3:
               paper1.classList.remove("flipped");
               book.style.transform = "translateX(-30%)";
               // prevBtn.style.transform = "translateX(200px)";
               // nextBtn.style.transform = "translateX(400px)";
               // abc.style.transform="translateX(700px)";
               leftBtn.style.opacity = 1;
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
  e.preventDefault();
        startX = e.touches[0].clientX; // 紀錄觸控起始位置
        isDragging = true;
    };
const handleTouchMove = (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX - startX; // 計算拖動距離
        document.querySelector('.container').style.transform = `translateX(${currentX}px)`;
        e.preventDefault();
        };

const handleTouchEnd = (e) => {
        isDragging = false;
        document.querySelector('.container').style.transform = 'translateX(0px)'; // 恢復原位
        e.preventDefault();
      };

        // 綁定觸控事件
const cardElement = document.querySelector('.container');
cardElement.addEventListener('touchstart', handleTouchStart);
cardElement.addEventListener('touchmove', handleTouchMove);
cardElement.addEventListener('touchend', handleTouchEnd);

cardElement.addEventListener('mousedown', (e) => {
            e.preventDefault();
                   startX = e.clientX;
                   isDragging = true;
               });


document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        document.querySelector('.container').style.transform = `translateX(${currentX}px)`;
        e.preventDefault();
       });

document.addEventListener('mouseup', (e) => {
        isDragging = false;
        document.querySelector('.container').style.transform = 'translateX(0px)';
        e.preventDefault();
        });

        slider.addEventListener('input', (e) => {
                const value = e.target.value;
                cardElement.style.transform = `translateX(${value*1.4}px)`;
            });


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
