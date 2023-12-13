let rating = ""

function oneStar() {
    rating = 1
}
function twoStar() {
    rating = 2
}
function threeStar() {
    rating = 3
}
function fourStar() {
    rating = 4
}
function fiveStar() {
    rating = 5
}





function submitrating(){
    const ratingPage = document.getElementById("rate_mysite")
    const thankYouMessage = document.getElementById("thanks_for_rating")
    thankYouMessage.classList.remove("hidden")
    ratingPage.classList.add("hidden")

    let ratingEl = document.getElementById("your_rating")
    ratingEl.textContent = rating
}