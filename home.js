const awContent = document.querySelector("#aw-content");
const awardsTitle = document.querySelector("#awards-title");

awardsTitle.addEventListener("click", function(){
  awContent.classList.toggle("active");
})

const edContent = document.querySelector("#ed-content");
const eduTitle = document.querySelector("#edu-title");

eduTitle.addEventListener("click", function(){
  edContent.classList.toggle("active");
})

const acContent = document.querySelector("#ac-content");
const acTitle = document.querySelector("#ac-title");

acTitle.addEventListener("click", function(){
  acContent.classList.toggle("active");
})

const ssTitle = document.querySelector("#ss-title");
const ssContent = document.querySelector("#ss-content");

ssTitle.addEventListener("click", function(){
  ssContent.classList.toggle("active");
})

const cTitle = document.querySelector("#c-title");
const cContent = document.querySelector("#c-content");

cTitle.addEventListener("click", function(){
  cContent.classList.toggle("active");
})