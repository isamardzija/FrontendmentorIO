const submitButton = document.querySelector("#submit");
const ratingState = document.querySelector("#ratingState");
const thankyouState = document.querySelector("#thankyouState");
const ratingButton = document.querySelectorAll(".ratingButton");
const userRating = document.querySelector("#userRating");

submitButton.addEventListener("click", switchScreens);

ratingButton.forEach((button) => {
  button.addEventListener("click", getRating);
});

function switchScreens() {
  ratingState.classList.add("hide");
  thankyouState.classList.remove("hide");
  userRating.innerHTML = rating;
}

function getRating() {
  rating = this.textContent;
}
