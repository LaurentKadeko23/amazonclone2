const imgs =  document.querySelectorAll(".header-slider ul img");
const prev_btn =  document.querySelector(".control_previous");
const next_btn =  document.querySelector(".control_next");

// we are on the first image
let n = 0;

// hdidng all the images so we can display one image after the other
function changeSlide(){
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display= 'none';
    
  }
  // selecting the first image 
  imgs[n].style.display= 'block';
}

changeSlide()


// whenever I press on the previous button it decress with 1
prev_btn.addEventListener('click', (e) =>{
  if(n > 0) {
    n--;
  }else{
    n = imgs.length -1 ;
  }
  changeSlide()
})

// whenever I press on the next button it increare by 1
next_btn.addEventListener('click', (e) => {
  if(n < imgs.length - 1) {
    n++;
  }else{
    n = 0
  }
  changeSlide()
})

// script for the scroll bar for the Best seller In Sports and Products

const scrollContainer = document.querySelectorAll(".products")

// this code here prevent the default setting of the scrollbar. I should be able to schroll with the mouseschrol.
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY
  })
}
