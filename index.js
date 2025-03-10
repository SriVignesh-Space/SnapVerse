import {title,content} from './contents.js';
let Title = title();
let Content = content();

const imgArr = ['img0.webp','img1.webp','img2.webp','img3.webp','img4.webp','img5.webp','img6.webp','img7.webp']

const gradient = "linear-gradient(to top left ,rgba(0,0,0,0.7),rgba(0,0,0,0.6))"

function addImage(index){
    let img = document.querySelectorAll('.slider .image img');
    img.forEach((img)=>{
        index = (index + 1) % imgArr.length;   
        img.src = './image/' + imgArr[index];
    })
}
function changeBg(index){
    let i = './image/' + imgArr[index];
    document.body.style.backgroundImage =  `${gradient},url(${i})`;
    let h2 = document.getElementById('caption')
    h2.textContent = Title[index];
    let p = document.getElementById('cap-content');
    p.textContent = Content[index];
}
document.addEventListener('DOMContentLoaded', function(){
    let index = 0;
    changeBg(index);
    addImage(index);
},{once:true});
let index = 0;
function Change(){
    if(index < 0){
        index = imgArr.length - 1;
    }
    if(index > imgArr.length -1){
        index = 0;
    }
    addImage(index);
    changeBg(index);
}
setInterval(()=>{
    addImage(index);
    changeBg(index);
    index = (index + 1) % imgArr.length;
},3000)

function next(){
    console.log("in next");
    index++;
    Change(index);
}
function prev(){
    console.log("in prev");
    index--;
    Change(index);
}
document.getElementById("right-btn").addEventListener("click", next);
document.getElementById("left-btn").addEventListener("click", prev);


let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    let swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
        next();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        prev();
    }
}


