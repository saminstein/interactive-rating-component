const ratings = document.querySelectorAll(".btn");
const submit = document.querySelector(".btn-submit");



let choosedRate;

function chooseRating(e) {
 if (choosedRate !== undefined) {
    ratings[choosedRate - 1].classList.remove("focus");
 }
      
    e.target.classList.add("focus");
    choosedRate = Number(e.target.innerText);
}

ratings.forEach(function(elem) {
    elem.addEventListener("click", chooseRating);
})



function submitButton(e) {
  if (choosedRate !== undefined) {    
  document.querySelector(".thank-you").classList.remove("hidden");    document.querySelector(".rating-card").classList.add("hidden"); 
document.getElementById("show-result").innerText = choosedRate;
  }  
}

submit.addEventListener("click", submitButton);